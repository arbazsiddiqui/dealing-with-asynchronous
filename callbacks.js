var step1 = function (butter, bread, callback) {
  setTimeout(function () {
    console.log("Thickly "+ butter +" your "+ bread);
    return callback()
  }, 2000);

};

var step2 = function (cream, callback) {
  setTimeout(function () {
    console.log("Thinly spread on your salad " + cream);
    return callback()
  }, 2000);
};

var step3 = function (tomato, callback) {
  setTimeout(function () {
    console.log("Slice your " + tomato + " very thinly and spread evenly over one slice of bread.");
    return callback()
  }, 2000);
};

var step4 = function (cheese, callback) {
  setTimeout(function () {
    console.log("Slice each " + cheese+ " thinly.");
    return callback()
  }, 2000);
};

var step5 = function (tomato, cheese, callback) {
  setTimeout(function () {
    console.log("On top of the " + tomato + ", put a slice of one "+ cheese+".");
    return callback()
  }, 2000);
};

var step6 = function (tomato, cheese, callback) {
  setTimeout(function () {
    console.log("Carefully lay the second slice of bread onto the one with "+ cheese + " and " + tomato);
    return callback()
  }, 2000);
};

var step7 = function () {
  setTimeout(function () {
    console.log("Cut into small triangles.");
  }, 2000);
};


//Start making sandwich step by step
//Enter into callback hell
step1("butter", "bread", function () {
  step2("cream", function () {
    step3("tomato", function () {
      step4("cheese", function () {
        step5("tomato", "cheese", function () {
          step6("tomato", "cheese", function () {
            step7()
          })
        })
      })
    })
  });
});
