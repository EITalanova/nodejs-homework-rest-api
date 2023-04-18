// const contacts = require("../models/contacts");
const {Contact} = require("../models/contacts");
const { HttpError } = require("../helpers");
const { ctrlWrapper } = require("../helpers");

const getAll = async (req, res) => {
  const result = await Contact.find({});
  res.json(result);
};

const getById = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findById(contactId);
  if (!result) {
    throw HttpError(404, "Not found");
  } else {
    res.json(result);
  }
};

const add = async (req, res) => {
  const newContact = req.body;
  if (error) {
    throw HttpError(400, error.message);
  }
  const result = await Contact.create(newContact, {new: true});
  res.status(201).json(result);
};

const remove = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndDelete(contactId);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json({
    message: "Contact deleted!",
  });
};

const update = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndUpdate(contactId, req.body, {new: true});

  if (!result) {
    throw HttpError(404, "Not found");
  } else {
    res.json(result);
  }
};

const updateStatusContact = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndUpdate(contactId, req.body, {new: true});

  if (!result) {
    throw HttpError(404, "Not found");
  } else {
    res.status(201).json(result);
  }
};

module.exports = {
  getAll: ctrlWrapper(getAll),
  getById: ctrlWrapper(getById),
  add: ctrlWrapper(add),
  remove: ctrlWrapper(remove),
  update: ctrlWrapper(update),
  updateStatusContact: ctrlWrapper(updateStatusContact),
};
