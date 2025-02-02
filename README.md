# AI Chatbot Integration Platform

A seamless platform for businesses to create, train, and integrate AI-powered chatbots into their websites using web scraping technology.

## 🌟 Features

### User Registration & Authentication
- Email and password-based registration
- Google OAuth integration
- Email verification system for enhanced security

### Organization Setup
- Company profile creation
- Automated website meta-description fetching
- Real-time website scraping status monitoring
- Detailed view of scraped data chunks per webpage

### Chatbot Training & Integration
- Automated training using scraped website data
- Real-time training status monitoring
- Interactive testing environment
- Multiple integration options:
  - Direct code snippet integration
  - Developer email instructions
- Integration verification system

### Testing & Validation
- Live chatbot preview
- Feedback collection system
- Integration status monitoring
- Success celebration UI with confetti
- Social media sharing capabilities

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- Redis (for queue management)
- Google OAuth credentials

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/chatbot-integration-platform.git
cd chatbot-integration-platform
```

2. Install dependencies
```bash
npm install
```

3. Configure environment variables
```bash
cp .env.example .env
# Edit .env with your configuration
```

4. Start the development server
```bash
npm run dev
```

## 💻 Tech Stack

- **Frontend**: React.js, Next.js
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Authentication**: JWT, Google OAuth
- **Queue Management**: Redis
- **Web Scraping**: Cheerio/Puppeteer
- **Real-time Updates**: Socket.io
- **UI Components**: Tailwind CSS, Shadcn/UI

## 🏗️ Project Structure

```
├── client/                 # Frontend React application
│   ├── components/         # Reusable UI components
│   ├── pages/             # Next.js pages
│   └── styles/            # Global styles
├── server/                 # Backend Node.js application
│   ├── controllers/       # Route controllers
│   ├── models/           # Database models
│   ├── services/         # Business logic
│   └── utils/            # Helper functions
└── scripts/               # Utility scripts
```

## 🔑 Configuration

Key configuration options in `.env`:

```env
NODE_ENV=development
PORT=3000
MONGODB_URI=mongodb://localhost:27017/chatbot-platform
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
JWT_SECRET=your_jwt_secret
```

## 🛠️ Development

### Running Tests
```bash
npm run test
```

### Linting
```bash
npm run lint
```

### Building for Production
```bash
npm run build
```

## 📝 API Documentation

API documentation is available at `/api/docs` when running the development server.

Key endpoints:
- `/api/auth/*` - Authentication endpoints
- `/api/organization/*` - Organization management
- `/api/scraper/*` - Web scraping endpoints
- `/api/chatbot/*` - Chatbot management

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## 👥 Maintainers

- Your Name - [@yourgithub](https://github.com/yourgithub)

## 🙏 Acknowledgments

- Thanks to all contributors
- Inspired by modern chatbot integration solutions
- Built with open-source software

## 📞 Support

For support, email support@yourplatform.com or join our Slack community.

---
Made with ❤️ by [Your Name/Company]
