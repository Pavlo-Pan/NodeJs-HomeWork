import * as fs from 'fs';
import dotenv from 'dotenv';

dotenv.config();

const filename = process.env.FILENAME;
const text = 'Привет из ES-модуля и dotenv!';

fs.writeFileSync(filename, text, 'utf8');

const content = fs.readFileSync(filename, 'utf8');
console.log('Содержимое файла:', content);
