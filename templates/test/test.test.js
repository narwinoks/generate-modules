const app = require('../app');
const request = require('supertest');

describe('GET /user', () => {
    test('responds with status 200 and JSON', async () => {
        const response = await request(app).get('/user');
        expect(response.status).toBe(200);
        expect(response.header['content-type']).toContain('application/json');
        // expect(response.body).toEqual(expect.any(Array));
    });
});