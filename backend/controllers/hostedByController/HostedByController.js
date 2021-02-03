const router = require('express').Router();
const responses = require('../../constants/routeResponses');
const Host = require('../../models/Host');
const Response = require('../../constants/Response');
const ServiceRepository = require('../../repositories/ServiceRepository');

router.get('/:propertyId', async (req, res) => {
    const { propertyId } = req.params;
    const repo = new ServiceRepository(propertyId);
    try {
        const hostedBy = await repo.getData();
        if (!repo.dataLoaded)
            return res.status(404).json(new Response(responses.notFound));

        return res.status(200).json(hostedBy);
    } catch (error) {
        return res.status(500).json({ message: responses.serverError });
    }
});

router.get('/superhost/:id', async (req, res) => {
    try {
        const host = await Host.findByPk(req.params.id);

        if (!host)
            return res.status(404).json({ message: responses.hostNotFound });

        return res.status(200).send(host.isSuperhost);
    } catch (error) {
        return res.status(500).json({ message: responses.serverError });
    }
});

module.exports = router;
