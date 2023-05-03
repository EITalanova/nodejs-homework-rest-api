const mongoose = require("mongoose");
const request = require("supertest");
const bcrypt = require("bcryptjs");

const login = require("../controllers/auth");

const app = require("../app");

const { User } = require("../models/user");

const { DB_HOST } = process.env;

describe("test routes", () => {
  let server = null;
  beforeAll(async () => {
    server = app.listen(3000);
    await mongoose.connect(DB_HOST);
  });
  afterAll(async () => {
    server.close();
    await mongoose.connection.close();
  });

  afterEach(async () => {
    await User.deleteMany({});
  });
    
    test("test register route with correct data", async()=> {
        const registerData = {
            email: "rrtalanova@gmail.com",
            password: "123456"
        };

        const res = await request(app).post("/api/auth/users/register").send(registerData);
        expect(res.statusCode).toBe(201);
        // expect(res.body.name).toBe(registerData.name);
        expect(res.body.email).toBe(registerData.email);

        // const user = await User.findOne({email: registerData.email});
        // expect(user.name).toBe(registerData.name);
    })
    
    test("test login route", async () => {
        const password = await bcrypt.hash("123456", 10);

        const newUser = {
            email: "rrtalanova@gmail.com",
            password: password,
        };
        const user = await User.create(newUser);

        const loginUser = {
            email: "rrtalanova@gmail.com",
            password: "123456",
        };

        const res = await request(app).post("/api/auth/users/login").send(loginUser);
        expect(res.statusCode).toBe(200);
        expect(res.body.token).toBeTruthy();
        const { token } = await User.findById(user._id);
        expect(res.body.token).toBe(token);
    });
    

    
});


// const req = {
//   body: {
//     email: 'talanova@gmail.com',
//     password: '123456'
//   }
// };
// const res = {
//   json: jest.fn(),
// //   status: jest.fn().mockReturnThis()
// };
// describe('login', () => {
//   it('should respond with status code 200 and a success message on successful login', async () => {
//     const result = await login(req, res);
//     expect(res.status).toHaveBeenCalledWith(200);
//     // expect(res.json).toHaveBeenCalledWith({ message: 'Login successful' });
//   });

//   it('should respond with status code 401 and an error message if email is incorrect', async () => {
//     req.body.email = 'eertgtitalanova@gmail.com';
//     const result = await login(req, res);
//     expect(res.status).toHaveBeenCalledWith(401);
//     // expect(res.json).toHaveBeenCalledWith({ error: 'Incorrect email or password' });
//   });
// // it('should respond with status code 401 and an error message if password is incorrect', async () => {
// //     req.body.password = '123456';
// //     const result = await login(req, res);
// //     expect(res.status).toHaveBeenCalledWith(401);
// //     // expect(res.json).toHaveBeenCalledWith({ error: 'Incorrect email or password' });
// //   });
// });