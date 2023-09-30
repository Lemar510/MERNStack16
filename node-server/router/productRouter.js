let express = require("express");
let productRoute = express.Router();
const productDataModel = require("../data-model/productDataModel");

productRoute.post("/api/add", (req, res)=>{
    let product = req.body;
    let newProduct = new productDataModel(product);

    newProduct.save().then((savedProduct)=> {
        console.log("Product has been added successfully", savedProduct);
        res.send(savedProduct);
    }).catch((err) => {
        console.log("Error while adding product", err);
        res.status(500).send("Error while adding product");
    });
});

productRoute.get("/api/getproducts", (req, res)=>{
    productDataModel.find()
        .then((allProducts)=>{
            res.send(allProducts);
        })
        .catch((err)=>{
            console.log("Error while fetching products", err);
            res.status(500).send("Error while fetching products");
        });
});

module.exports = productRoute;