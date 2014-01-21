// the actual web worker

var worker = require("../lib/worker").Worker;
 
worker.onmessage = function (msg) {
  worker.postMessage({
    hello: "mother"
  });
};
