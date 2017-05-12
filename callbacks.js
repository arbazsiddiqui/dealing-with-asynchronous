var step1 = function (butter, bread, callback) {
  setTimeout(function () {
    var msg1 = "Thickly "+ butter +" your "+ bread+". ";
    console.log(msg1);
    return callback(msg1)
  }, 2000);

};

var step2 = function (msg, cream, callback) {
  setTimeout(function () {
    temp = "Thinly spread on your salad " + cream+". ";
    var msg2 = msg + temp;
    console.log(temp);
    return callback(msg2)
  }, 2000);
};

var step3 = function (msg, tomato, callback) {
  setTimeout(function () {
    temp = "Slice your " + tomato + " very thinly and spread evenly over one slice of bread. ";
    var msg3 = msg + temp;
    console.log(temp);
    return callback(msg3)
  }, 2000);
};

var step4 = function (msg, cheese, callback) {
  setTimeout(function () {
    temp = "Slice each " + cheese+ " thinly.";
    var msg4 = msg + temp;
    console.log(temp);
    return callback(msg4)
  }, 2000);
};

var step5 = function (msg, tomato, cheese, callback) {
  setTimeout(function () {
    temp = "On top of the " + tomato + ", put a slice of one "+ cheese+". ";
    var msg5 = msg + temp;
    console.log(temp);
    return callback(msg5)
  }, 2000);
};

var step6 = function (msg, tomato, cheese, callback) {
  setTimeout(function () {
    temp = "Carefully lay the second slice of bread onto the one with "+ cheese + " and " + tomato + ". ";
    var msg6 = msg + temp;
    console.log(temp);
    return callback(msg6)
  }, 2000);
};

var step7 = function (msg) {
  setTimeout(function () {
    temp = "Cut into small triangles.";
    msg7 = msg + temp;
    console.log(temp);
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
