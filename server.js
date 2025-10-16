// server.js
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

const mongoose = require('mongoose');

// Load environment variables from .env
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// ---------------- CORS ----------------
// Enable CORS for all origins (development)
app.use(cors());

// Or restrict to your frontend only:
// app.use(cors({ origin: 'http://localhost:3000' }));

// Middleware to parse JSON
app.use(express.json());

// ---------------- MongoDB Connection ----------------
mongoose.connect(process.env.MONGO_URI, {
  // useNewUrlParser and useUnifiedTopology are not needed in Mongoose 6+
})
  .then(() => console.log('MongoDB connected successfully'))
  .catch((err) => {
    console.error('MongoDB connection error:', err);
    process.exit(1); // Exit if DB connection fails
  });

// ---------------- Mongoose Schema ----------------
const quotationSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  city: { type: String, required: true },
  companyName: { type: String, required: true },
  businessType: { type: String, required: true },
  advertiseContent: { type: String, required: true },
  quantity: { type: Number, required: true },
  budget: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now }
});

// Create model
const Quotation = mongoose.model('Quotation', quotationSchema);

// ---------------- Routes ----------------
app.get('/', (req, res) => {
  res.send('Aquaafree backend is running');
});

// Submit quotation
app.post('/submit-quote', async (req, res) => {
  try {
    const newQuote = new Quotation(req.body);
    await newQuote.save();
    res.status(201).json({ message: 'Quotation submitted successfully' });
  } catch (err) {
    console.error('Error saving quotation:', err);
    res.status(500).json({ message: 'Server error. Please try again later.' });
  }
});

// ---------------- Start Server ----------------
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
