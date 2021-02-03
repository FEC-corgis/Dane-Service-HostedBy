const router = require('express').Router();
const responses = require('../../constants/routeResponses');
const Host = require('../../models/Host');

router.get('/entire-house/:hostId', async (req, res) => {
    try {
        const host = await Host.findByPk(+req.params.hostId);

        if (!host)
            return res.status(404).json({ message: responses.hostNotFound });

        const { name, avatar, isSuperhost } = host;
        return res.status(200).json({ name, avatar, isSuperhost });
    } catch (error) {
        return res.status(500).json({ message: responses.serverError });
    }
});

module.exports = router;
