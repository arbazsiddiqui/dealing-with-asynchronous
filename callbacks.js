var step1 = function (butter, bread, callback) {
  setTimeout(function () {
    var msg1 = "Thickly "+ butter +" your "+ bread+". ";
    console.log("Step1 completed");
    return callback(msg1)
  }, 2000);

};

var step2 = function (msg, cream, callback) {
  setTimeout(function () {
    var msg2 = msg + "Thinly spread on your salad " + cream+". ";
    console.log("Step2 completed");
    return callback(msg2)
  }, 2000);
};

var step3 = function (msg, tomato, callback) {
  setTimeout(function () {
    var msg3 = msg + "Slice your " + tomato + " very thinly and spread evenly over one slice of bread. ";
    console.log("Step3 completed");
    return callback(msg3)
  }, 2000);
};

var step4 = function (msg, cheese, callback) {
  setTimeout(function () {
    var msg4 = msg + "Slice each " + cheese+ " thinly.";
    console.log("Step4 completed");
    return callback(msg4)
  }, 2000);
};

var step5 = function (msg, tomato, cheese, callback) {
  setTimeout(function () {
    var msg5 = msg + "On top of the " + tomato + ", put a slice of one "+ cheese+". ";
    console.log("Step5 completed");
    return callback(msg5)
  }, 2000);
};

var step6 = function (msg, tomato, cheese, callback) {
  setTimeout(function () {
    var msg6 = msg + "Carefully lay the second slice of bread onto the one with "+ cheese + " and " + tomato + ". ";
    console.log("Step6 completed");
    return callback(msg6)
  }, 2000);
};

var step7 = function (msg) {
  setTimeout(function () {
    msg7 = msg + "Cut into small triangles.";
    console.log("Step7 completed");
    console.log(msg7)
  }, 2000);
};


//Start making sandwich step by step
//Enter into callback hell
step1("butter", "bread", function (msg1) {
  step2(msg1, "cream", function (msg2) {
    step3(msg2, "tomato", function (msg3) {
      step4(msg3, "cheese", function (msg4) {
        step5(msg4, "tomato", "cheese", function (msg5) {
          step6(msg5, "tomato", "cheese", function (msg6) {
            step7(msg6)
          })
        })
      })
    })
  });
});
