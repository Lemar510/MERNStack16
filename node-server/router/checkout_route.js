let express = require("express");
let router = express.Router({});
let CheckoutDataModel = require("../data-model/checkoutDataModel");
let RecentOrderModel = require("../data-model/recentOrderDataModel"); 

router.post("/api/processCheckout", async (req, res) => {
    console.log(req.body);
    if (!req.body.userid || !req.body.cartItems) {
        return res.status(400).json({ success: false, message: 'Missing userid or cartItems' });
    }

    try {

        const checkout = new CheckoutDataModel({
            userid: req.body.userid,
            cartItems: req.body.cartItems
        });

        const checkoutData = await checkout.save();

        const recentOrder = new RecentOrderModel({
            userid: req.body.userid,
            order: req.body.cartItems,
            dateTime: new Date()
        });

        await recentOrder.save();

        res.json({ success: true, order: checkoutData });

    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
});

router.post("/api/getUserCheckout", (req, res) => {
    CheckoutDataModel.find({ userid: req.body.userid })
        .then((checkoutHistory) => {
            res.json(checkoutHistory);
        })
        .catch((err) => {
            res.status(500).json({ success: false, message: err.message });
        });
});

module.exports = router;


/*let express = require("express");
let router = express.Router({});
let CheckoutDataModel = require("../data-model/checkoutDataModel");

router.post("/api/processCheckout", (req, res) => {
    console.log(req.body);
    if (!req.body.userid || !req.body.cartItems) {
        return res.status(400).json({ success: false, message: 'Missing userid or cartItems' });
    }

    let checkout = new CheckoutDataModel({
        userid: req.body.userid,
        cartItems: req.body.cartItems
    });

    checkout.save()
        .then((data) => {
            res.json({ success: true, order: data });
        })
        .catch((err) => {
            res.status(500).json({ success: false, message: err.message });
        });
});

router.post("/api/getUserCheckout", (req, res) => {
    CheckoutDataModel.find({userid: req.body.userid})
        .then((checkoutHistory) => {
            res.json(checkoutHistory);
        })
        .catch((err) => {
            res.status(500).json({ success: false, message: err.message });
        });
});

module.exports = router;
 */