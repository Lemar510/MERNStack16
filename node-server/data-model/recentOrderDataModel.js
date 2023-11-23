let mongooseObj = require("mongoose"),
schemaObj = mongooseObj.Schema;

mongooseObj.connect("mongodb://127.0.0.1/mernstack16");

let RecentOrderSchema = new schemaObj({
    userid: { type: String, required: true },
    order: Object,
    dateTime: { type: Date, default: Date.now } 
}, 
{
    versionKey: false
});

let RecentOrderModel = mongooseObj.model("recentOrder", RecentOrderSchema);
module.exports = RecentOrderModel;
