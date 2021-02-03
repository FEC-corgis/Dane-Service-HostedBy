const router = require('express').Router();
const Host = require('../../models/Host');

router.get('/more-places/:hostId', async (req, res) => {
    const { hostId } = req.params;
    try {
        const { isSuperhost } = await Host.findByPk(hostId);
        return res.status(200).json({ isSuperhost });
    } catch (error) {}
});

module.exports = router;
