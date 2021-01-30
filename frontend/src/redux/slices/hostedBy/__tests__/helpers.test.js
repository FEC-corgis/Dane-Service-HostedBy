import { getHostedByData } from '../helpers';

test('should get hostedBy data by propertyId', async () => {
    const data = await getHostedByData(85);

    expect(data.hostedBy.id).toBe(85);
    expect(data.hostedBy.Host.name).toBe('Avery');
    expect(data.hostedBy.CoHosts).toHaveLength(1);
});
