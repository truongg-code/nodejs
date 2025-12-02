app.get("/products/:productId", (req, res) => {
  console.log(req.params); // Output: { productId: '123' }

  const id = req.params.productId;
  res.send(`id product: ${id}`);
});

app.get("/products", (req, res) => {
  console.log(req.query);
  // URL: /products?keyword=shirt&maxPrice=500
  // Output: { keyword: 'shirt', maxPrice: '500' }

  const { keyword, maxPrice } = req.query;
  res.send(`Send: ${keyword} below ${maxPrice}`);
});

app.post("/products", (req, res) => {
  console.log(req.body);
  // Output: { name: 'iPhone 15', price: 1000, quantity: 50 }

  const { name, price } = req.body;

  if (!name || !price) {
    return res.status(400).send("Missing product information");
  }

  res.status(201).json({
    message: "Product created successfully",
    data: req.body,
  });
});

const Joi = require("joi");

const productValidation = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
    price: Joi.number().min(0).required(),
  });

  const { error } = schema.validate(req.body);

  if (error) {
    // detail error message
    const errors = error.details.map((err) => err.message);
    return res.status(400).json({
      status: "error",
      errors: errors,
    });
  }

  // if not exist error, next to controller
  next();
};

module.exports = { productValidation };

const express = require("express");
const router = express.Router();
const productController = require("../controllers/product.controller");
const { productValidation } = require("../middlewares/validate.middleware");

router.post("/", productValidation, productController.createProduct);

module.exports = router;
