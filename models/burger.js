const orm = require("../config/orm");

var burger = {
    all: function (cb) {
        orm.all("burger", function (res){
            cb(res);
        });
    },
    insertOne: function(cols, vals, cb) {
        orm.insertOne("burger", cols, vals, function(res){
            cb(res);
        });
    },
    updateOne: function (objColVals, condition, cb) {
        orm.update("burger", objColVals, condition, function (res){
            cb(res);
        });
    },
};

module.exports = burger;