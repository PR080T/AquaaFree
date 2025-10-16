# Aquaafree Distribution Services 🌊

A modern Next.js application for water distribution and brand promotion services, combining corporate social responsibility with effective marketing. Founded by Amogh Jain, we focus on community harmony and sustainable practices.

## 🌟 Features

- 📊 Interactive quotation system with INR/USD support
- 📱 Modern responsive design with Tailwind CSS
- 🔒 Rate-limited API endpoints with Redis support
- 💾 Prisma-powered database (PostgreSQL/SQLite)
- 📧 Email notifications via SendGrid
- 🚀 Fast and SEO-friendly Next.js architecture
- 💻 Admin dashboard for quote management
- 🤝 Community-focused business model

## 🛠 Tech Stack

- **Frontend**: Next.js, React, Tailwind CSS, Framer Motion
- **Backend**: Node.js, Next.js API Routes
- **Database**: PostgreSQL/SQLite with Prisma ORM
- **Email**: SendGrid integration
- **Rate Limiting**: Redis (with in-memory fallback)
- **Testing**: Jest, React Testing Library
- **Styling**: Tailwind CSS, @tailwindcss/forms

## 📋 Prerequisites

- Node.js 18.x or higher
- npm/yarn
- Redis (optional, for production rate limiting)
- PostgreSQL (optional, SQLite used by default)

## 🚀 Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/aquaafree.git
   cd aquaafree
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env
   ```

4. Configure your database:
   - For SQLite (default, great for development):
     ```bash
     # No additional setup required
     ```
   - For PostgreSQL:
     1. Create a database named 'aquaafree'
     2. Update DATABASE_URL in .env

5. Run database migrations:
   ```bash
   npx prisma migrate dev
   ```

6. Start the development server:
   ```bash
   npm run dev
   ```

7. Open [http://localhost:3000](http://localhost:3000)

## 🔧 Environment Variables

Create a \`.env\` file with these variables:

\`\`\`env
# Database Configuration
DATABASE_URL="postgresql://user:password@localhost:5432/aquaafree"
# For SQLite: DATABASE_URL="file:./dev.db"

# Redis Configuration (Optional)
REDIS_URL="redis://localhost:6379"

# SendGrid Configuration
SENDGRID_API_KEY="your_sendgrid_api_key"
FROM_EMAIL="notifications@yourdomain.com"
TO_EMAIL="admin@yourdomain.com"

# Rate Limiting
RATE_LIMIT_WINDOW=60000  # Time window in milliseconds
RATE_LIMIT_MAX_REQUESTS=10  # Max requests per window
\`\`\`

## 📝 API Documentation

### Quote Endpoints

#### POST /api/quote
Create a new quote request.

Request:
\`\`\`json
{
  "fullName": "string",
  "email": "string",
  "phone": "string",
  "city": "string",
  "companyName": "string",
  "businessType": "string",
  "advertisementType": "string",
  "quantity": "number",
  "budget": "number"  // In INR
}
\`\`\`

Response (200):
\`\`\`json
{
  "message": "Quote request submitted successfully"
}
\`\`\`

#### GET /api/quotes (Admin Only)
Retrieve all quote requests.

Response:
\`\`\`json
{
  "quotes": [
    {
      "id": "number",
      "fullName": "string",
      "status": "PENDING | APPROVED | REJECTED",
      "createdAt": "date"
      // ... other fields
    }
  ]
}
\`\`\`

### Contact Endpoints

#### POST /api/contact
Submit a contact form message.

Request:
\`\`\`json
{
  "name": "string",
  "email": "string",
  "message": "string"
}
\`\`\`

Response (200):
\`\`\`json
{
  "message": "Message sent successfully"
}
\`\`\`

## 🚀 Deployment

### Vercel Deployment (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Configure environment variables in Vercel dashboard
4. Deploy

### Manual Deployment

1. Build the application:
   ```bash
   npm run build
   ```

2. Start in production:
   ```bash
   npm start
   ```

### Database Deployment

1. For PostgreSQL:
   - Set up a database (Supabase, Railway, etc.)
   - Update DATABASE_URL in environment variables

2. Run migrations:
   ```bash
   npx prisma migrate deploy
   ```

## 🧪 Testing

Run the test suite:
```bash
npm test
```

Watch mode for development:
```bash
npm run test:watch
```

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create your feature branch:
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add amazing feature"
   ```
4. Push to your branch:
   ```bash
   git push origin feature/amazing-feature
   ```
5. Open a Pull Request

### Contribution Guidelines

- Follow existing code style and conventions
- Write clear commit messages
- Update documentation as needed
- Add tests for new features
- Ensure all tests pass
- Keep PRs focused and specific

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Founder & CEO: Amogh Jain
- Our amazing community
- All contributors and supporters

## 📞 Support

Need help? 
- 📧 Email: support@aquaafree.example
- 💬 Create an issue in the repository
- 📱 Contact: See website for phone numbers

## 🔄 Project Status

Status: _In active development_

## 🗺 Roadmap

- [ ] Enhanced admin dashboard
- [ ] PDF quote generation
- [ ] Advanced analytics
- [ ] Mobile app integration
- [ ] Multi-language support
- [ ] Community engagement features

