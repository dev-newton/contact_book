const express = require("express");
const router = express.Router();
const Contact = require("../../models/Contact");

// Route to get all contacts
router.get("/", (req, res) => {
  Contact.find()
    .sort({ created_at: -1 })
    .then(contacts => res.json(contacts))
    .catch(err => res.json({ success: false, message: err.message }));
});

router.get("/:id", (req, res) => {
  Contact.findById(req.params.id)
    .then(contact => res.json(contact))
    .catch(err => res.json({ success: false, message: err.message }));
});

//Route to create a contact
router.post("/add", (req, res) => {
  const newContact = new Contact({
    full_name: req.body.full_name,
    email: req.body.email,
    phone_number: req.body.phone_number,
    address: req.body.address
  });
  newContact
    .save()
    .then(contact => res.json({ success: true, contact }))
    .catch(err =>
      res.json({ success: false, message: err.message, status: 400 })
    );
});

//Route to update a contact
router.put("/update/:id", (req, res) => {
  Contact.findById(req.params.id)
    .then(contact =>
      contact
        .update({
          $set: {
            full_name: req.body.full_name
              ? req.body.full_name
              : contact.full_name,
            email: req.body.email ? req.body.email : contact.email,
            phone_number: req.body.phone_number
              ? req.body.phone_number
              : contact.phone_number,
            address: req.body.address ? req.body.address : contact.address,
            updated_at: Date.now()
          }
        })
        .then(contact => res.json({ success: true, contact: contact }))
        .catch(err => res.json({ success: false, message: err.message }))
    )
    .catch(err =>
      res.json({ success: false, message: "No contact with this ID was found" })
    );
});

//Route to delete a contact
router.delete("/delete/:id", (req, res) => {
  Contact.findById(req.params.id)
    .then(contact =>
      contact
        .remove()
        .then(contact => res.json({ success: true, contact }))
        .catch(err => res.json({ success: false, message: err.message }))
    )
    .catch(err =>
      res.json({ success: false, message: "No contact with this ID was found" })
    );
});
module.exports = router;
