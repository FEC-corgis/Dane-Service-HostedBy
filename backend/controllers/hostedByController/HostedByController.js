const router = require('express').Router();
const responses = require('../../constants/routeResponses');
const HostedBy = require('../../models/HostedBy');
const Host = require('../../models/Host');
const CoHost = require('../../models/Cohost');
const Language = require('../../models/Language');
const HostLanguage = require('../../models/HostLanguage');

router.get('/:propertyId', async (req, res) => {
    try {
        const hostedBy = await HostedBy.findOne({
            where: { PropertyId: +req.params.propertyId },
            include: [
                {
                    model: Host,
                    include: [
                        {
                            model: HostLanguage,
                            attributes: ['LanguageId'],
                            include: [
                                {
                                    model: Language,
                                    attributes: ['name'],
                                },
                            ],
                        },
                    ],
                },
                {
                    model: CoHost,
                    include: [
                        {
                            model: Host,
                            attributes: ['name', 'avatar'],
                        },
                    ],
                },
            ],
        });

        if (!hostedBy)
            return res.status(404).json({ message: responses.notFound });

        return res.status(200).json({ hostedBy });
    } catch (error) {
        return res.status(500).json({ message: responses.serverError });
    }
});

module.exports = router;
