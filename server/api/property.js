const router = require("express").Router();
module.exports = router;
const { useSelector } = require('react-redux');

const {
  models: { Property, Landlord, User, Unit},
} = require("../db");

router.get("/", async (req, res, next) => {
  try {
    const properties = await Property.findAll();
    res.json(properties);
  } catch (err) {
    next(err);
    console.log(`Error on Property`, err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const property = await Property.findOne({ where: { id: req.params.id } });
    res.json(property);
  } catch (err) {
    next(err);
    console.log(`Error on Property`, err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const property = await Property.create(req.body);
    res.json(property);
  } catch (err) {
    next(err);
    console.log(`Error on Property`, err);
  }
});


router.put("/:id", async (req, res, next) => {
    try {
        const { propertyName, address, landlordId } = req.body;
      const property = await Property.create({
        propertyName,
        address,
        landlordId,
      },
      );
      res.json(property);
    } catch (err) {
      next(err);
      console.log(`Error in Property Server`, err);
    }
  });



router.delete("/:id", async (req, res, next) => {
  try {
    const property = await Property.destroy({ where: { id: req.params.id } });
    res.json(property);
  } catch (err) {
    next(err);
    console.log(`Error on property`, err);
  }
});
