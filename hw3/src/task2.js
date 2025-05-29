import { writeFile, readFile } from 'node:fs/promises';

async function main() {
    try {
        await writeFile('info.txt', 'Node.js is awesome!');
        console.log('Файл "info.txt" успешно создан и записан.');

        const data = await readFile('info.txt', 'utf8');
        console.log('Содержимое файла "info.txt":');
        console.log(data);
    } catch (err) {
        console.error('Произошла ошибка:', err);
    }
}

main();
