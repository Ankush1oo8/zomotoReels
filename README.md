# ZomatoReels - Food Discovery Platform 🍽️📱

A full-stack MERN application that combines social media "reels" with food browsing and management. Discover delicious food items through an engaging, vertically scrolling video feed similar to popular social media platforms.

## 🚀 Features

### For Normal Users
- **Reels-Style Food Discovery**: Browse food items through vertical video scrolling
- **Like & Save**: Interact with food reels and bookmark favorites
- **Food Partner Stores**: Visit food partner profiles to see their complete menu
- **Mobile-First Design**: Optimized for mobile experience with responsive design

### For Food Partners
- **Food Item Management**: Upload and manage food items with videos
- **Business Profile**: Showcase business details, address, and total meals
- **Analytics Dashboard**: Track likes and saves on uploaded content

## 🛠️ Tech Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - Object Data Modeling (ODM)
- **JWT** - Authentication and authorization
- **Bcrypt.js** - Password hashing
- **Multer** - File upload handling
- **ImageKit** - Cloud storage for videos
- **UUID** - Unique identifier generation

### Frontend
- **React.js** - Frontend library
- **React Router DOM** - Client-side routing
- **Axios** - HTTP client for API calls
- **CSS Variables** - Theme management (light/dark mode support)

### Development Tools
- **Nodemon** - Development server auto-restart
- **Postman** - API testing
- **CORS** - Cross-origin resource sharing
- **Cookie-parser** - Cookie handling

## 📁 Project Structure

```
zomatoReels/
├── backend/
│   ├── controllers/          # Request handlers
│   ├── models/              # Database schemas
│   │   ├── User.model.js
│   │   ├── Food.model.js
│   │   ├── Likes.model.js
│   │   └── Save.model.js
│   ├── routes/              # API routes
│   ├── middlewares/         # Custom middleware
│   ├── services/            # Business logic
│   ├── db/                  # Database connection
│   ├── app.js              # Express app setup
│   └── server.js           # Server startup
├── frontend/
│   ├── src/
│   │   ├── components/      # Reusable components
│   │   ├── pages/          # Route components
│   │   └── App.js
│   └── public/
└── README.md
```

## ⚙️ Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (Local or Atlas)
- ImageKit account for cloud storage

### Backend Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/Ankush1oo8/zomotoReels.git
   cd zomotoReels/backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Variables**
   Create a `.env` file in the backend directory:
   ```env
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/zomatoreels
   JWT_SECRET=your_jwt_secret_key
   
   # ImageKit Configuration
   IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
   IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
   IMAGEKIT_URL_ENDPOINT=your_imagekit_url_endpoint
   ```

4. **Start the development server**
   ```bash
   npx nodemon server.js
   ```

### Frontend Setup

1. **Navigate to frontend directory**
   ```bash
   cd ../frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

The application will be available at:
- Backend: `http://localhost:3000`
- Frontend: `http://localhost:5173` (or your configured port)

## 🔐 Authentication Flow

### User Registration & Login
- **Normal Users**: Can view, like, and save food reels
- **Food Partners**: Can upload and manage food items + all normal user features

### Security Features
- JWT tokens stored in HTTP-only cookies
- Bcrypt password hashing
- Role-based access control
- CORS configured for secure cross-origin requests

## 📱 API Endpoints

### Authentication
```
POST /api/auth/register      # User registration
POST /api/auth/login         # User login
POST /api/auth/logout        # User logout
```

### Food Management
```
GET  /api/foods              # Get all food items
POST /api/foods              # Create new food item (Food Partners only)
PUT  /api/foods/:id          # Update food item
DELETE /api/foods/:id        # Delete food item
```

### Interactions
```
POST /api/foods/:id/like     # Like/unlike food item
POST /api/foods/:id/save     # Save/unsave food item
GET  /api/users/saved        # Get user's saved items
```

## 🎨 UI/UX Features

- **Mobile-First Approach**: Optimized for mobile devices
- **Reels-Style Interface**: Full-screen video snapping on scroll
- **Metadata Preloading**: Optimized bandwidth and loading speed
- **Theme Support**: CSS variables for easy light/dark mode implementation
- **Responsive Design**: Scales seamlessly across different screen sizes

## 🔄 Data Models

### User Model
```javascript
{
  fullName: String,
  email: String (unique),
  password: String (hashed),
  role: String (user/foodPartner),
  timestamps: true
}
```

### Food Model
```javascript
{
  name: String,
  video: String (URL),
  description: String,
  foodPartner: ObjectId,
  likeCount: Number,
  saveCount: Number,
  timestamps: true
}
```

## 🚀 Performance Optimizations

- **Separate Like/Save Collections**: Scalable data structure for billions of interactions
- **Count Caching**: Direct count fields in Food model for quick retrieval
- **Metadata Preloading**: Optimized video loading for smooth scrolling
- **Production-Level Architecture**: Modular folder structure for maintainability

## 🔮 Future Enhancements

- **Comments System**: User comments on food reels
- **Queue System**: For handling high-scale operations
- **DAO Pattern**: Data Access Object implementation
- **Input Validation**: Express Validator integration
- **Advanced Analytics**: Detailed insights for food partners
- **Push Notifications**: Real-time engagement updates

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


## 👨‍💻 Developer

**Ankush Chudiwal**
- Portfolio: [ankushchudiwal.netlify.app](https://ankushchudiwal.netlify.app/)
- GitHub: [@Ankush1oo8](https://github.com/Ankush1oo8)
- Email: ankushchudiwalwit@gmail.com

## 🙏 Acknowledgments

- Inspired by popular social media platforms
- Built with modern MERN stack technologies
- Designed for scalability and user engagement

---

⭐ If you found this project helpful, please give it a star!
