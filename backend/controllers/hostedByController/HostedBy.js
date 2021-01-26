const router = require('express').Router();
const {
    HostedBy,
    Host,
    CoHost,
    Language,
    HostLanguage,
} = require('../../models');

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
        return res.status(500).json({ message: ' Internal server error' });
    }
});

module.exports = router;
