const express = require('express');
const asyncHandler = require('express-async-handler');

const { Review, User, SushiBar } = require('../../db/models');

const router = express.Router();

router.get('/:id', asyncHandler(async (req, res) => {
    const posts = await Review.findAll({
        where: {bar_id: req.params.id},
        include: [User, SushiBar],
    })
    console.log(await Review.findByPk(1))
    res.json(posts);
})
);

module.exports = router;
