var async = require("async");

var step1 = function (butter, bread, callback) {
  setTimeout(function () {
    var msg1 = "Thickly "+ butter +" your "+ bread+". ";
    console.log(msg1);
    callback(null, msg1)
  }, 2000);
};

var step2 = function (cream, msg, callback) {
  setTimeout(function () {
    temp = "Thinly spread on your salad " + cream+". ";
    var msg2 = msg + temp;
    console.log(temp);
    callback(null, msg2)
  }, 2000);
};

var step3 = function (tomato, msg, callback) {
  setTimeout(function () {
    temp = "Slice your " + tomato + " very thinly and spread evenly over one slice of bread. ";
    var msg3 = msg + temp;
    console.log(temp);
    callback(null, msg3)
  }, 2000);
};

var step4 = function (cheese, msg, callback) {
  setTimeout(function () {
    temp = "Slice each " + cheese+ " thinly.";
    var msg4 = msg + temp;
    console.log(temp);
    callback(null, msg4)
  }, 2000);
};

var step5 = function (tomato, cheese, msg, callback) {
  setTimeout(function () {
    temp = "On top of the " + tomato + ", put a slice of one "+ cheese+". ";
    var msg5 = msg + temp;
    console.log(temp);
    callback(null, msg5)
  }, 2000);
};

var step6 = function (tomato, cheese, msg, callback) {
  setTimeout(function () {
    temp = "Carefully lay the second slice of bread onto the one with "+ cheese + " and " + tomato + ". ";
    var msg6 = msg + temp;
    console.log(temp);
    callback(null, msg6)
  }, 2000);
};

var step7 = function (msg, callback) {
  setTimeout(function () {
    temp = "Cut into small triangles.";
    msg7 = msg + temp;
    console.log(temp);
    callback(null, msg7)
  }, 2000);
};

//start running a waterfall series on the steps
//msg returned from previous step will be passed as the last argument of the next step
async.waterfall([
  async.apply(step1, "bread", "butter"),
  async.apply(step2, "cream"),
  async.apply(step3, "tomato"),
  async.apply(step4, "cheese"),
  async.apply(step5, "tomato", "cheese"),
  async.apply(step6, "tomato", "cheese"),
  step7
], function (err, result) {
  console.log(result)
});