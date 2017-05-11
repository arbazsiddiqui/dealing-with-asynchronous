var step1 = function (bread, butter) {
  return new Promise(
    function (resolve, reject) {
      setTimeout(function () {
        var msg = "Thickly " + butter + " your " + bread;
        console.log("Step1 complete");
        resolve(msg)
      }, 2000);
    }
  );
};

var step2 = function (cream, msg) {
  return new Promise(
    function (resolve, reject) {
      setTimeout(function () {
        var msg2 = msg + ". Thinly spread on your salad " + cream + ". ";
        console.log("Step2 complete");
        resolve(msg2)
      }, 2000);
    }
  );
};

var step3 = function (tomato, msg) {
  return new Promise(
    function (resolve, reject) {
      setTimeout(function () {
        var msg3 = msg + "Slice your " + tomato + " very thinly and spread evenly over one slice of bread. ";
        console.log("Step3 complete");
        resolve(msg3)
      }, 2000);
    }
  );
};

var step4 = function (cheese, msg) {
  return new Promise(
    function (resolve, reject) {
      setTimeout(function () {
        var msg4 = msg + "Slice each " + cheese + " thinly.";
        console.log("Step4 complete");
        resolve(msg4)
      }, 2000);
    }
  );
};

var step5 = function (tomato, cheese, msg) {
  return new Promise(
    function (resolve, reject) {
      setTimeout(function () {
        var msg5 = msg + "On top of the " + tomato + ", put a slice of one " + cheese + ". ";
        console.log("Step5 complete");
        resolve(msg5)
      }, 2000);
    }
  );
};

var step6 = function (tomato, cheese, msg) {
  return new Promise(
    function (resolve, reject) {
      setTimeout(function () {
        var msg6 = msg + "Carefully lay the second slice of bread onto the one with " + cheese + " and " + tomato + ". ";
        console.log("Step6 complete");
        resolve(msg6)
      }, 2000);
    }
  );
};

var step7 = function (msg) {
  setTimeout(function () {
    msg7 = msg + "Cut into small triangles.";
    console.log("Step7 complete");
    console.log(msg7)
  }, 2000);
};

//Start the process
//Consume the resolve of the previous promise to chain the messages.
step1("bread", "butter")
  .then(step2.bind(null, "cream"))
  .then(step3.bind(null, "tomato"))
  .then(step4.bind(null, "cheese"))
  .then(step5.bind(null, "tomato", "cheese"))
  .then(step6.bind(null, "tomato", "cheese"))
  .then(step7)
;