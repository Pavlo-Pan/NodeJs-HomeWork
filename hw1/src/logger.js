import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const logMessage = (message) => {
    const timestamp = new Date().toISOString();
    const fullMessage = `[${timestamp}] ${message}\n`;

    fs.appendFile(path.join(__dirname, 'log.txt'), fullMessage, (err) => {
        if (err) {
            console.error('Ошибка при записи в лог:', err);
        }
    });
}

export default logMessage