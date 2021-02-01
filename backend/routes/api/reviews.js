const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();
const { Review, User, SushiBar } = require('../../db/models');


router.get('/:id', asyncHandler(async (req, res) => {
    const posts = await Review.findAll({
        where: {bar_id: Number(req.params.id)},
        include: [User, SushiBar],
    })
    console.log(await Review.findByPk(1))
    res.json(posts);
})
);

router.post("/bars/create", asyncHandler(async (req, res, next) => {
    const { rating, review } = req.body;
    const newReview = db.Review.build({
        rating,
        review
    });


    await newReview.save();
    if (newReview) {
        console.log('Success!')
    } else {
        console.log(req.errors)
        res.render({
            rating,
            review
        });
    }

}) )

module.exports = router;
