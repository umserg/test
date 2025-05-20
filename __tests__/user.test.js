const User = require('../models/user');
const app = require('../app');
const mongoose = require('mongoose');

let server;

describe('Тестування моделі User', () => {
    beforeAll(() => {
        server = app.listen(8080); // Запускаємо сервер перед тестами
    });

    afterAll(async () => {
        if (server) {
            server.close(); // Коректне завершення сервера
        }
        await mongoose.connection.close(); // Закриття підключення до MongoDB
    });

    test('Перевірка створення користувача', () => {
        const user = new User({ username: 'testUser', passwordHash: 'hashedPass' });

        // Перевірка правильного регістру і типу даних
        expect(user.username.toLowerCase()).toBe('testuser');
        expect(user.passwordHash).toBeDefined();
        expect(typeof user.passwordHash).toBe('string');
        expect(user._id).toBeDefined();
    });
});
