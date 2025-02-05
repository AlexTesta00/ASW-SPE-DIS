// test.js
const request = require('supertest');
const { expect } = require('chai');
const app = require('./server'); // Importa l'app dal server.js

describe('API Tests', () => {
    it('should get all items', async () => {
        const res = await request(app).get('/api/items');
        expect(res.status).to.equal(200);
        expect(res.body).to.be.an('array');
    });

    it('should add a new item', async () => {
        const newItem = { id: 1, name: 'Test Item' };
        const res = await request(app)
            .post('/api/items')
            .send(newItem);
        expect(res.status).to.equal(201);
        expect(res.body).to.deep.equal(newItem);
    });

    it('should get a specific item by id', async () => {
        const res = await request(app).get('/api/items/1');
        expect(res.status).to.equal(200);
        expect(res.body).to.deep.equal({ id: 1, name: 'Test Item' });
    });

    it('should delete a specific item by id', async () => {
        const res = await request(app).delete('/api/items/1');
        expect(res.status).to.equal(204);
    });

    it('should return 404 for a non-existent item', async () => {
        const res = await request(app).get('/api/items/999');
        expect(res.status).to.equal(404);
    });
});