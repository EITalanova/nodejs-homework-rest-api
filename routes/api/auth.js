const express = require("express");

const ctrl = require("../../controllers/auth");

const { validateBody } = require("../../middlewares");

const schemas = require("../../schemas/user");

const router = express.Router();

router.post("/users/register", validateBody(schemas.registerSchema), ctrl.register);

module.exports = router;