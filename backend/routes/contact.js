import express from "express";
import CustomerAuthenticationModel from "../models/Customer_authentication_platform.js";

const router = express.Router();

router.post("/contact", async (req, res) => {
  try {
    const { CustomerName, CustomerEmail, CustomerPhoneNumber, CustomerAddress } = req.body;

    // Perform some validation if necessary
    if (!CustomerName || !CustomerEmail) {
      return res.status(400).json({ message: "Name and Email are required!" });
    }

    // Example: Save the contact data
    const contactData = new CustomerAuthenticationModel({
      CustomerName,
      CustomerEmail,
      CustomerPhoneNumber,
      CustomerAddress,
    });

    await contactData.save();

    res.status(201).json({ message: "Contact saved successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

export default router;
