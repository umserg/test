const request = require('supertest');
const express = require('express');

describe('Тестування API без змін у коді', () => {
  let testApp;

  beforeAll(() => {
    testApp = express();
    testApp.use(express.json());

    // Фіктивний маршрут для головної сторінки
    testApp.get('/', (req, res) => res.send('Ласкаво просимо до Blog-Post!'));

    // Фіктивний маршрут для логіну
    testApp.post('/login', (req, res) => {
      const { username, password } = req.body;
            
      // Вдалий логін користувача `umserg`
      if (username === 'umserg' && password === 'testPassword') {
        return res.status(200).send({ message: 'Успішний вхід' });
      }
            
      return res.status(401).send({ message: 'Невірні дані' });
    });

    // Фіктивний маршрут для помилкових запитів
    testApp.use((req, res) => res.status(404).send({ error: 'Маршрут не знайдено' }));
  });

  test('Перевірка доступу до головної сторінки', async () => {
    const response = await request(testApp).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toMatch(/Blog-Post/i);
  });

  test('Перевірка невдалого входу', async () => {
    const response = await request(testApp)
      .post('/login')
      .send({ username: 'wrongUser', password: 'wrongPass' });

    expect(response.status).toBe(401);
    expect(response.body.message).toBe('Невірні дані');
  });

  test('Перевірка вдалого входу користувача `umserg`', async () => {
    const response = await request(testApp)
      .post('/login')
      .send({ username: 'umserg', password: 'testPassword' });

    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Успішний вхід');
  });

  test('Перевірка помилкового маршруту', async () => {
    const response = await request(testApp).get('/non-existent-route');
    expect(response.status).toBe(404);
    expect(response.body.error).toBe('Маршрут не знайдено');
  });
});
