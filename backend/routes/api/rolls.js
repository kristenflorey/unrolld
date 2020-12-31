const express = require('express');
const asyncHandler = require('express-async-handler');


// const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { SushiRoll } = require('../../db/models');
const { SushiBar } = require('../../db/models');

const router = express.Router();

router.get("/", asyncHandler(async(req, res) => {
    const rolls = await SushiRoll.findAll({ include: [SushiBar] });
    res.json(rolls);
}))

module.exports = router;
