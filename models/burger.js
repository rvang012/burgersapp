const orm = require("../config/orm");

var burgers = {
    selectAll: function (cb) {
        orm.selectAll("burgers", cols, vals, function (res){
            cb(res);
        });
    },
    updateOne: function (objColVals, condition, cb) {
        orm.update("burgers", objColVals, condition, function (res){
            cb(res);
        });
    },
};

module.exports = burgers;