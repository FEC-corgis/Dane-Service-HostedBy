const request = require('supertest');
const app = require('../../../server');

describe('GET /api/hostedby/:id', () => {
    test('should return HostedBy object with Host data', async () => {
        const res = await request(app).get('/api/hostedby/1');

        expect(res.body.hostedBy.id).toBe(1);
        expect(res.body.hostedBy.Host.id).toBe(1);
    });

    test('should include an array of CoHosts', async () => {
        const res = await request(app).get('/api/hostedby/1');

        expect(res.body.hostedBy.CoHosts.length).toBeGreaterThanOrEqual(0);
    });

    test('should include an array of Languages spoken by the host', async () => {
        const res = await request(app).get('/api/hostedby/1');

        expect(res.body.languagesSpoken.length).toBeGreaterThanOrEqual(0);
    });
});
