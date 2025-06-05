# ♟️ Real-Time Chess Game

A real-time multiplayer chess game built using **JavaScript**, **Node.js**, **Express.js**, **EJS**, and **Socket.io**. Two players can play against each other with drag-and-drop functionality, while others can join as **spectators** and watch the match live.

![Chess Game Screenshot](./chess.png)

## 🚀 Features

- ♟️ Real-time multiplayer chess game
- 👥 Two players can play (one white, one black)
- 👁️‍🗨️ Unlimited spectators allowed
- 🔀 Automatic role assignment (white/black/spectator)
- 📦 Built using WebSockets with **Socket.io**
- 🎨 Intuitive drag-and-drop interface for making moves
- ❌ Invalid move handling and error feedback
- 🔄 Live board synchronization across all clients

## 🧰 Tech Stack

- **Frontend**: Vanilla JavaScript, HTML, CSS, EJS Templates
- **Backend**: Node.js, Express.js
- **WebSockets**: Socket.io
- **Chess Engine**: [chess.js](https://github.com/jhlywa/chess.js)


## 🧪 Setup Instructions

1. **Clone the repository**  
   ```bash
   git clone https://github.com/yourusername/chess-game.git
   cd chess-game
   
2. **Install dependencies**
   ``` npm install ```
3. **Start the server**
   ``` node app.js ```
4. **Open in browser**
   ``` Go to http://localhost:3000 ```

**🙋 Roles Logic**
 - First visitor becomes White
 - Second visitor becomes Black
 - All others become Spectators
 - Board auto-flips for Black player

**❗Known Limitations**
 - No support for multiple games/lobbies yet
 - No matchmaking or persistent storage
 - No user authentication or chat
   
**🛠️ Future Improvements**
 - ✅ User login system
 - ✅ Lobby-based game rooms
 - ✅ Chat between players
 - ✅ Move history & timer
 - ✅ Spectator switching

**🤝 Contributing**
Pull requests are welcome. For major changes, open an issue first to discuss what you would like to change.

**👨‍💻 Developed By**
Vipin Chandra Sao

**🌐 Connect With Me**
[![LinkedIn](https://img.shields.io/badge/LinkedIn-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/vipinsao/)
[![GitHub](https://img.shields.io/badge/GitHub-%2312100E.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/vipinsao)
[![X (Twitter)](https://img.shields.io/badge/X-%231DA1F2.svg?style=for-the-badge&logo=twitter&logoColor=white)](https://x.com/vipinSao1)

