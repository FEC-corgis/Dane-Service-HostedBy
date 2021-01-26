const router = require('express').Router();
const responses = require('../../constants/routeResponses');
const HostedBy = require('../../models/HostedBy');
const Host = require('../../models/Host');
const CoHost = require('../../models/Cohost');
const Language = require('../../models/Language');
const HostLanguage = require('../../models/HostLanguage');

router.get('/:id', async (req, res) => {
    try {
        const hostedBy = await HostedBy.findByPk(+req.params.id, {
            include: [
                { model: Host },
                {
                    model: CoHost,
                    where: { HostedById: +req.params.id },
                    include: [{ model: Host }],
                    required: false,
                },
            ],
        });

        if (!hostedBy)
            return res.status(404).json({ message: responses.notFound });

        const languagesSpoken = await HostLanguage.findAll({
            where: { HostId: hostedBy.HostId },
            include: [
                {
                    model: Language,
                    attributes: ['name'],
                },
            ],
        });

        return res.status(200).json({ hostedBy, languagesSpoken });
    } catch (error) {
        return res.status(500).json({ message: responses.serverError });
    }
});

module.exports = router;
