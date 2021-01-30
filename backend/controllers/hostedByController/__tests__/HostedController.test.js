const request = require('supertest');
const app = require('../../../server');

describe('GET /api/hostedby/:propertyIdd', () => {
    test('should return HostedBy object with Host data', async () => {
        const res = await request(app).get('/api/hostedby/1');

        expect(res.body.hostedBy.PropertyId).toBe(1);
        expect(res.body.hostedBy.Host.id).toBe(1);
        expect(res.status).toBe(200);
    });

    test('should include an array of CoHosts', async () => {
        const res = await request(app).get('/api/hostedby/1');

        expect(res.body.hostedBy.CoHosts.length).toBeGreaterThanOrEqual(0);
    });

    test('should include an array of Languages spoken by the host', async () => {
        const res = await request(app).get('/api/hostedby/1');

        expect(
            res.body.hostedBy.Host.HostLanguages.length
        ).toBeGreaterThanOrEqual(0);
    });

    test('should response with status code 404 if no HostedBy instance with an ID is found', async () => {
        const res = await request(app).get('/api/hostedby/1000');

        expect(res.status).toBe(404);
        expect(res.body.message).toBe(
            'Information for this property could not be found'
        );
    });
});
