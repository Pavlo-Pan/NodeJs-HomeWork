import { log } from 'node:console';
import EventEmitter from 'node:events';
class Chat extends EventEmitter {
    sendMessage(username, message) {
        this.emit('message', username, message);
    }
}
const chat = new Chat();

chat.on('message', (username, message) => {
    log(`${username}: ${message}`)
})

chat.sendMessage('Alice', 'Halli-Hallo');
chat.sendMessage('Marlin', 'Ola')