import { mockData } from './mockData';
import { rest } from 'msw';

export const handlers = [
    rest.get('http://localhost:5001/api/hostedby/85', (_req, res, ctx) => {
        return res(ctx.json(mockData[0]));
    }),
    rest.get('http://localhost:5001/api/hostedby/14', (_req, res, ctx) => {
        return res(ctx.json(mockData[1]));
    }),
];
