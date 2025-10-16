import { prisma } from '../../lib/prisma'
import { RateLimiter } from '../../lib/rate-limiter'

const limiter = RateLimiter()

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  try {
    // Rate limiting check
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress
    await limiter.check(res, 10, ip)

    const {
      fullName,
      email,
      phone,
      city,
      companyName,
      businessType,
      advertisementType,
      quantity,
      budget
    } = req.body

    // Validation object to track field errors
    const validationErrors = {};
    
    // Basic validation with specific field errors
    if (!fullName?.trim()) validationErrors.fullName = 'Full name is required';
    if (!email?.trim()) validationErrors.email = 'Email is required';
    if (!phone?.trim()) validationErrors.phone = 'Phone number is required';
    if (!city?.trim()) validationErrors.city = 'City is required';
    if (!companyName?.trim()) validationErrors.companyName = 'Company name is required';
    if (!businessType?.trim()) validationErrors.businessType = 'Business type is required';
    if (!advertisementType?.trim()) validationErrors.advertisementType = 'Please describe what you want to advertise';
    if (!quantity?.toString().trim()) validationErrors.quantity = 'Quantity is required';
    if (!budget?.toString().trim()) validationErrors.budget = 'Budget is required';

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (email && !emailRegex.test(email)) {
      validationErrors.email = 'Please enter a valid email address';
    }

    // Phone validation
    const phoneRegex = /^[\d\s()-]+$/
    if (phone && !phoneRegex.test(phone)) {
      validationErrors.phone = 'Please enter a valid phone number (digits, spaces, and - only)';
    }

    // Quantity validation
    const parsedQuantity = parseInt(quantity);
    if (!isNaN(parsedQuantity) && parsedQuantity <= 0) {
      validationErrors.quantity = 'Quantity must be greater than 0';
    }

    // Budget validation (in Rupees)
    const parsedBudget = parseFloat(budget.replace(/[^0-9.]/g, ''));
    if (!isNaN(parsedBudget) && parsedBudget <= 0) {
      validationErrors.budget = 'Budget must be greater than ₹0';
    }
    if (parsedBudget > 999999999) {
      validationErrors.budget = 'Budget amount is too large';
    }

    // Return all validation errors if any exist
    if (Object.keys(validationErrors).length > 0) {
      return res.status(400).json({ 
        message: 'Please correct the form errors',
        fields: validationErrors 
      });
    }

    // Budget validation already handled in validation section above

    // Store in database
    await prisma.quote.create({
      data: {
        fullName,
        email,
        phone,
        city,
        companyName,
        businessType,
        advertisementType,
        quantity: parseInt(quantity),
        budget: parsedBudget, // Using the already parsed budget value
        status: 'PENDING',
        createdAt: new Date(),
      }
    })

    // Send confirmation email (can be implemented later)
    
    return res.status(200).json({ message: 'Quote request submitted successfully' })
  } catch (error) {
    console.error('Quote submission error:', error)
    return res.status(500).json({ message: 'Internal server error' })
  }
}