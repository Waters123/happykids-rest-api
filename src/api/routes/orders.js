import express from "express";
const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).json({
    messages: "orders were fetched",
  });
});

router.post("/", (req, res, next) => {
  const order = {
    productId: req.body.productId,
    quantity: req.body.quantity,
  };
  res.status(201).json({
    messages: "orders were posted",
    createOrder: order,
  });
});

router.patch("/:orderID", (req, res, next) => {
  res.status(200).json({
    messages: "order details",
    orderID: req.params.orderID,
  });
});

router.delete("/:orderID", (req, res, next) => {
  res.status(200).json({
    messages: "order deleted",
    orderID: req.params.orderID,
  });
});

export default router;
