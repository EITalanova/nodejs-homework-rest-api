const express = require("express");

const ctrl = require("../../controllers/auth");

const { validateBody, authenticate, upload } = require("../../middlewares");

const schemas = require("../../schemas/user");

const router = express.Router();

router.post("/users/register", validateBody(schemas.registerSchema), ctrl.register);

router.post("/users/login", validateBody(schemas.loginSchema), ctrl.login);

router.get("/users/current", authenticate, ctrl.getCurrent);

router.post("/users/logout", authenticate, ctrl.logout);

router.patch("/users/subscription", authenticate, validateBody(schemas.updateSubscription), ctrl.newSubscription);

router.patch("/users/avatars", authenticate, upload.single("avatar"), ctrl.updateAvatar);

module.exports = router;