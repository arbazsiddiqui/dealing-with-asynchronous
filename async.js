var async = require("async");

var step1 = function (butter, bread, callback) {
  setTimeout(function () {
    var msg1 = "Thickly "+ butter +" your "+ bread+". ";
    console.log("Step1 completed");
    callback(null, msg1)
  }, 2000);
};

var step2 = function (cream, msg, callback) {
  setTimeout(function () {
    var msg2 = msg + "Thinly spread on your salad " + cream+". ";
    console.log("Step2 completed");
    callback(null, msg2)
  }, 2000);
};

var step3 = function (tomato, msg, callback) {
  setTimeout(function () {
    var msg3 = msg + "Slice your " + tomato + " very thinly and spread evenly over one slice of bread. ";
    console.log("Step3 completed");
    callback(null, msg3)
  }, 2000);
};

var step4 = function (cheese, msg, callback) {
  setTimeout(function () {
    var msg4 = msg + "Slice each " + cheese+ " thinly.";
    console.log("Step4 completed");
    callback(null, msg4)
  }, 2000);
};

var step5 = function (tomato, cheese, msg, callback) {
  setTimeout(function () {
    var msg5 = msg + "On top of the " + tomato + ", put a slice of one "+ cheese+". ";
    console.log("Step5 completed");
    callback(null, msg5)
  }, 2000);
};

var step6 = function (tomato, cheese, msg, callback) {
  setTimeout(function () {
    var msg6 = msg + "Carefully lay the second slice of bread onto the one with "+ cheese + " and " + tomato + ". ";
    console.log("Step6 completed");
    callback(null, msg6)
  }, 2000);
};

var step7 = function (msg, callback) {
  setTimeout(function () {
    msg7 = msg + "Cut into small triangles.";
    console.log("Step7 completed");
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