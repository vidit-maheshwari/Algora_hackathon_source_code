# Algora - Financial Investment Advisory Platform 🚀

Algora is an intelligent financial advisory platform that helps users make informed investment decisions through personalized recommendations, financial literacy assessments, and AI-powered insights.

## Features ✨

- **Personalized Investment Profiling**

  - Risk assessment questionnaire
  - Multi-language support (English/Hindi)
  - Custom portfolio recommendations
  - Four investor profiles: Defensive, Income, Growth, and Aggressive

- **Financial Education**

  - Interactive learning modules
  - Financial literacy assessment
  - Progress tracking
  - Personalized learning paths

- **AI-Powered Tools**

  - Gemini AI for financial advice
  - YouTube video recommendations
  - Real-time market insights
  - Investment strategy guidance

- **User Dashboard**
  - Portfolio overview
  - Learning progress tracking
  - Investment recommendations
  - Performance analytics

## Tech Stack 🛠️

### Frontend

- React.js + Vite
- Tailwind CSS + DaisyUI
- Chart.js
- Clerk Authentication

### Backend

- Node.js + Express
- MongoDB
- Flask (Python)
- Google Gemini AI
- YouTube Data API

## Getting Started 🏁

### Prerequisites

- Docker and Docker Compose
- Node.js 18+
- Python 3.9+

### Installation

1. **Clone the repository**

```bash
git clone <repository-url>
cd algora
```

2. **Environment Setup**

```bash
# Copy example environment file
cp .env.example .env

# Edit .env with your credentials
# Required variables:
# - MONGODB_URI
# - CLERK_API_KEY
# - GEMINI_API_KEY
```

3. **Start with Docker**

```bash
docker-compose up --build
```

The application will be available at:

- Frontend: http://localhost:3000
- Backend API: http://localhost:5000
- Gemini AI Service: http://localhost:5001
- YouTube Service: http://localhost:5002

### Manual Setup

#### Frontend

```bash
cd Client
npm install
npm run dev
```

#### Backend

```bash
cd Server
npm install
npm start
```

#### Flask Services

```bash
cd Server/Flask\ Backend
pip install -r requirements.txt
python app.py    # Gemini service
python app1.py   # YouTube service
```

## Project Structure 📁

```
algora/
├── Client/                  # React frontend
│   ├── src/
│   │   ├── Components/     # React components
│   │   │   ├── About/
│   │   │   ├── Dashboard/
│   │   │   ├── Home/
│   │   │   └── ...
│   │   ├── assets/        # Static assets
│   │   └── App.jsx        # Main app component
│   └── package.json
├── Server/                 # Node.js backend
│   ├── Flask Backend/     # Python microservices
│   │   ├── app.py        # Gemini AI service
│   │   └── app1.py       # YouTube service
│   ├── controllers/      # API controllers
│   ├── models/          # Database models
│   ├── routes/          # API routes
│   └── index.js         # Main server file
└── docker-compose.yaml   # Docker composition
```

## API Documentation 📚

### Main Backend APIs

#### Quiz Results

- `POST /quizResults/save`

  - Save user's quiz results and get investment profile
  - Body: `{ userId, score, responses }`

- `GET /quizResults/:userId`
  - Get user's quiz history and profile

#### User Literacy

- `GET /user-literacy/:userid`
  - Get user's financial literacy score and course type

### Flask Services

#### Gemini AI Service

- `POST /output`
  - Get AI-powered financial advice
  - Body: `{ prompt: string }`

#### YouTube Service

- `POST /youtube`
  - Get personalized video recommendations
  - Body: `{ keywords: string }`

## Development 👨‍💻

### Docker Services

- `client`: React frontend
- `nodejs-server`: Main backend
- `flask-gemini`: AI service
- `flask-youtube`: Video recommendations
- `mongodb`: Database

### Environment Variables

```env
# MongoDB
MONGODB_URI=mongodb://mongodb:27017/algora

# Clerk
CLERK_API_KEY=your_clerk_api_key

# Gemini
GEMINI_API_KEY=your_gemini_api_key
```

## Contributing 🤝

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License 📄

This project is licensed under the MIT License - see the LICENSE file for details.

## Support 💬

For support:

- Email: investing.algora@gmail.com
- Create an issue in the repository

## Team 👥

- **Vidit Maheshwari** - Founder and Lead Developer

---

Made with ❤️ 
