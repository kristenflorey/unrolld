const express = require('express');
const asyncHandler = require('express-async-handler');
const { db } = require('../../config');
const { SushiRoll } = require('../../db/models');
const { SushiBar } = require('../../db/models');
// const db = require("../db/models");
const router = express.Router();

router.post("/search", csrfProtection, asyncHandler(async (req, res) => {
    let { searchStr } = req.body;
    searchStr = searchStr.replace(/[^\w\s]/ig, "").replace(/\s+/ig, " ").trim();

    const bars = await SushiBar.findAll({
        where: {
            name: {
                [Op.iLike]: `%${searchStr}%`
            }
        },
        include: db.SushiRoll
    });

    if (bars) {
      bars = bars.map(bar => bar.toJSON()).filter(bar => {
        return (bar.SushiRolls.length > 0);
      });
    };

    if (!bars) {
      bars = false;
    };

    let rolls = await db.SushiRoll.findAll({
      where: {
        name: {
          [Op.iLike]: `%${searchStr}%`
        }
      }
    });

    if (rolls) {
      rolls = rolls.map(roll => roll.toJSON());
    } else {
      rolls = false;
    };

    if (rolls.length === 1) {
      res.redirect(`/rolls/${rolls[0].id}`);
    } else {
      const user = req.session.auth
      res.render('search', { title: `Search for "${searchStr}":`, token: req.csrfToken(), bars, rolls, user });
    };

  }));

router.get("/search/bar/:id(\\d+)", asyncHandler(async (req, res) => {
  const barId = parseInt(req.params.id);
  let bar = await db.bar.findOne({
    where: {id: barId},
    include: [db.SushiRoll]
  });

  bar = bar.toJSON();
  let rolls = false;

  if (bar.Rolls.length) rolls = bar.Rolls;

  const user = req.session.auth;
  res.render('search',{title:`Search by bar: ${bar.name}`,token: req.csrfToken(), rolls, user})
}));

module.exports = router;
