import mongoose from "mongoose";
import express from "express";

import Product from "../models/product.js";

const router = express.Router();

router.get("/", (req, res, next) => {
  Product.find()
    .exec()
    .then((docs) => {
      res.status(200).json(docs);
    })
    .catch((err) => res.status(500).json({ error: err }));
});

router.get("/:productId", (req, res, next) => {
  const id = req.params.productId;
  Product.findById(id)
    .exec()
    .then((doc) => {
      if (doc) {
        res.status(200).json(doc);
      } else {
        res.status(404).json({ error: "No Valid Entry Found" });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

router.post("/", (req, res, next) => {
  const product = new Product({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    price: req.body.price,
  });
  product
    .save()
    .then((result) => {
      console.log(result);
      res.status(201).json({
        message: "handling requests producs post",
        createProduct: result,
      });
    })
    .catch((err) => {
      console.log(error);
      res.status(500).json({ error: err });
    });
});

router.get("/:productId", (req, res, next) => {
  const id = req.params.productId;
  if (id === "special") {
    res.status(200).json({
      message: " you got special id",
      id: id,
    });
  } else {
    res.status(200).json({
      message: "you passed ID",
    });
  }
});

router.patch("/:productId", (req, res, next) => {
  res.status(200).json({
    message: "Updated Product",
  });
});

router.delete("/:productId", (req, res, next) => {
  const id = req.params.productId;
  Product.deleteOne({ _id: id })
    .exec()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

export default router;
