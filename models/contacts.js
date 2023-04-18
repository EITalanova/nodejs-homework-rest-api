const { model } = require("mongoose");
// const { nanoid } = require("nanoid");
const contactSchema = require("../schemas/contacts");

const Contact = model("contact", contactSchema);

// const fs = require("fs").promises;
// const path = require("path");

// const contactsPath = path.join(__dirname, "contacts.json");

// const listContacts = async () => {
//   const data = await fs.readFile(contactsPath);
//   return JSON.parse(data);
// };

// const getContactById = async (contactId) => {
//   const contacts = await listContacts();
//   const contactById = contacts.filter((el) => el.id === contactId);
//   return contactById;
// };

// const removeContact = async (contactId) => {
//   const contacts = await listContacts();

//   const itemIndex = contacts.findIndex((el) => el.id === contactId);
//   if (itemIndex === -1) {
//     return null;
//   }
//   const [result] = contacts.splice(itemIndex, 1);
//   await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
//   return contacts;
// };

// const addContact = async (body) => {
//   const contacts = await listContacts();
//   const newContact = { ...body };

//   fs.writeFile(
//     contactsPath,
//     JSON.stringify([...contacts, newContact], null, 2)
//   );
//   return newContact;
// };

// const updateContact = async (contactId, body) => {
//   const contacts = await listContacts();
//   const index = contacts.findIndex((el) => el.id === contactId);
//   if (index === -1) {
//     return null;
//   } else {
//     contacts[index] = { id: contactId, ...body };
//   }

//   await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
//   return contacts[index];
// };

module.exports = {
  Contact,
  // listContacts,
  // getContactById,
  // removeContact,
  // addContact,
  // updateContact,
};
