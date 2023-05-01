const express = require("express");
const router = express.Router();

const ctrl = require("../../controllers/contacts");
const { validateBody, authenticate } = require("../../middlewares");
const schemas = require("../../schemas/contacts");

router.get("/", authenticate, ctrl.getAll);

router.get("/:contactId", authenticate, ctrl.getById);

router.post("/", authenticate, validateBody(schemas.addSchema), ctrl.add);

router.delete("/:contactId", authenticate, ctrl.remove);

router.put("/:contactId", authenticate, validateBody(schemas.addSchema), ctrl.update);

router.patch("/:contactId/favorite", authenticate, validateBody(schemas.updateFavoriteSchema), ctrl.updateStatusContact);

module.exports = router;
