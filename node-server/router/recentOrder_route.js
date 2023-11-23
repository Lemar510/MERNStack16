const express = require('express');
const router = express.Router();
const RecentOrderModel = require('../data-model/recentOrderDataModel'); 


const checkCancellationWindow = (orderDate) => {
  const now = new Date();
  return (now.getTime() - new Date(orderDate).getTime()) < 2 * 24 * 60 * 60 * 1000; 
};

router.post("/api/saveRecentOrder", (req, res) => {
  console.log('request body:', req.body);
  
  const newOrder = new RecentOrderModel({
    userid: req.body.userid,
    order: req.body.cartItems,
    dateTime: new Date() 
  });

  newOrder.save()
  .then((data) => {
    console.log('response data:', data); 
    res.json({ success: true, order: data });
  })
  .catch((err) => {
    console.log('error:', err.message); 
    res.status(500).json({ error: err.message });
  });
});


router.get("/api/getRecentOrders/:userid", (req, res) => {
  RecentOrderModel.find({ userid: req.params.userid })
    .then(orders => res.json(orders))
    .catch(err => res.status(500).json({ error: err.message }));
});


router.post("/api/cancelOrder", (req, res) => {
  const orderId = req.body.orderId;

  RecentOrderModel.findById(orderId)
    .then(order => {
      if (!order) {
        return res.status(404).json({ error: "Order not found" });
      }

      if (checkCancellationWindow(order.dateTime)) {

        order.status = "Cancelled";
        order.save()
          .then(updatedOrder => res.json(updatedOrder))
          .catch(saveErr => res.status(500).json({ error: saveErr.message }));
      } else {
        res.status(400).json({ error: "Cancellation window has passed :(" });
      }
    })
    .catch(err => res.status(500).json({ error: err.message }));
});

module.exports = router;
