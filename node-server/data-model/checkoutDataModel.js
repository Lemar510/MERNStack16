let mongooseObj = require("mongoose"), 
schemaObj = mongooseObj.Schema; 

mongooseObj.connect("mongodb://127.0.0.1/mernstack16");

let CheckoutSchema = new schemaObj({
    userid: { type: String, required: true },
    cartItems: [{ 
        _id: String,
        name: String,
        price: Number,
        desc: String,
        image: String,
        qty: Number
    }]
},
{
    versionKey: false 
});

let CheckoutModel = mongooseObj.model("checkout", CheckoutSchema);
module.exports = CheckoutModel; 

/*let mongooseObj = require("mongoose"), 
schemaObj = mongooseObj.Schema; 

mongooseObj.connect("mongodb://127.0.0.1/mernstack16");

let CheckoutSchema = new schemaObj({
    userid: { type: String, required: true },
    cartItems: Object
},
{
    // versionKey: false
});

let CheckoutModel = mongooseObj.model("checkout", CheckoutSchema);
module.exports = CheckoutModel; */