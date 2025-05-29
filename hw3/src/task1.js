import * as fs from 'node:fs/promises';

const folder = 'myFolder';

async function recreateFolder() {
    try {

        await fs.access(folder);
        console.log(`Каталог "${folder}" уже существует. Удаляем...`);
        await fs.rm(folder, { recursive: true, force: true });
        console.log(`Каталог "${folder}" успешно удалён.`);
    } catch {

    }

    try {
        await fs.mkdir(folder);
        console.log(`Каталог "${folder}" успешно создан.`);
    } catch (err) {
        console.error('Ошибка при создании каталога:', err);
    }
}

recreateFolder();
