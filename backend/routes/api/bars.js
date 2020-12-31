const express = require('express');
const asyncHandler = require('express-async-handler');


// const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { SushiBar } = require('../../db/models');

const router = express.Router();

router.get("/", asyncHandler(async(req, res) => {
    const bars = await SushiBar.findAll();
    res.json(bars);
}))

module.exports = router;
