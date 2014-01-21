# node-worker - 0.0.1

node-worker is an implementation of the WebWorker API for node.js.
http://www.whatwg.org/specs/web-workers/current-work/

## Example

    var Worker = require("../lib/worker").Worker;

    var worker = new Worker("worker.js");

    worker.postMessage({
      hello: "world"
    });

    worker.onmessage = function (msg) {
      sys.puts(msg.hello);
    };

    worker.addListener("message", function (msg) {
      sys.puts(msg.hello);
      worker.terminate();
    });

    // Optional, if you want to be notified when a worker child exits
    worker.addListener('close', function(code) {
	  sys.puts('Worker exited with exit code ' + code);
    });

## Example Worker File

    var worker = require("worker").worker;

    worker.onmessage = function (msg) {
      worker.postMessage({
        hello: "mother"
      });
    };

  



