var step1 = function (bread, butter) {
  return new Promise(
    function (resolve, reject) {
      setTimeout(function () {
        var msg1 = "Thickly " + butter + " your " + bread;
        console.log(msg1);
        resolve(msg1)
      }, 2000);
    }
  );
};

var step2 = function (cream, msg) {
  return new Promise(
    function (resolve, reject) {
      setTimeout(function () {
        temp = "Thinly spread on your salad " + cream+". ";
        var msg2 = msg + temp;
        console.log(temp);
        resolve(msg2)
      }, 2000);
    }
  );
};

var step3 = function (tomato, msg) {
  return new Promise(
    function (resolve, reject) {
      setTimeout(function () {
        temp = "Slice your " + tomato + " very thinly and spread evenly over one slice of bread. ";
        var msg3 = msg + temp;
        console.log(temp);
        resolve(msg3)
      }, 2000);
    }
  );
};

var step4 = function (cheese, msg) {
  return new Promise(
    function (resolve, reject) {
      setTimeout(function () {
        temp = "Slice each " + cheese+ " thinly.";
        var msg4 = msg + temp;
        console.log(temp);
        resolve(msg4)
      }, 2000);
    }
  );
};

var step5 = function (tomato, cheese, msg) {
  return new Promise(
    function (resolve, reject) {
      setTimeout(function () {
        temp = "On top of the " + tomato + ", put a slice of one "+ cheese+". ";
        var msg5 = msg + temp;
        console.log(temp);
        resolve(msg5)
      }, 2000);
    }
  );
};

var step6 = function (tomato, cheese, msg) {
  return new Promise(
    function (resolve, reject) {
      setTimeout(function () {
        temp = "Carefully lay the second slice of bread onto the one with "+ cheese + " and " + tomato + ". ";
        var msg6 = msg + temp;
        console.log(temp);
        resolve(msg6)
      }, 2000);
    }
  );
};

var step7 = function (msg) {
  setTimeout(function () {
    temp = "Cut into small triangles.";
    msg7 = msg + temp;
    console.log(temp);
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