const request = require('supertest');
const app = require('../app'); // Використовуємо додаток

describe('Тестування авторизації', () => {
    let server;

    beforeAll(() => {
        server = app.listen(8080);
    });

    afterAll(() => {
        server.close();
    });

    test('Перевірка успішного входу', async () => {
        const response = await request(server)
            .post('/login')
            .send({ username: 'umserg', password: '!Serg2806' });

        // Очікуємо статус 302 (перенаправлення)
        expect(response.status).toBe(302);

        // Переконуємося, що користувач перенаправляється на /dashboard
        expect(response.headers.location).toBe('/');
    });
});
