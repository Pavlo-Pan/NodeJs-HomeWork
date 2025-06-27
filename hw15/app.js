import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);

// Получаем __dirname (в ES-модулях)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Статика
app.use(express.static(path.join(__dirname, 'public')));

// Socket.io обработчики
io.on('connection', (socket) => {
  console.log('🔌 Новый пользователь подключился');

  socket.on('chat message', (msg) => {
    console.log('📨 Получено сообщение:', msg);
    socket.emit('message received', `Сервер получил: "${msg}"`);
  });

  socket.on('disconnect', () => {
    console.log('❌ Пользователь отключился');
  });
});

// Запуск сервера
const PORT = process.env.PORT || 3000;
httpServer.listen(PORT, () => {
  console.log(`🚀 Сервер работает на http://localhost:${PORT}`);
});
