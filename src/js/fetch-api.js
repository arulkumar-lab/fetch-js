import Utils from "./util";

(function(global, factory) {
  if (!(typeof define === "function" && define.amd)) {
    if (typeof exports !== "undefined" && typeof module !== "undefined") {
      factory(exports, module);
    } else {
      let moduleVar = {
        exports: {}
      };
      factory(moduleVar.exports, moduleVar);
      global.fetchAMDService = moduleVar.exports;
    }
  } else {
    define(["export", "module"], factory);
  }
})(window, function(exports, module) {
  "use strict";

  let defaultArguments = {
    timeout: 5000,
    jsonpCallback: "callback",
    jsonpCallbackFunction: null
  };

  function fetchAMDService(URL) {
    let optionArgs =
      arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
    let timeout = optionArgs.timeout || defaultArguments.timeout;
    let jsonpCallback =
      optionArgs.jsonpCallback || defaultArguments.jsonpCallback;

    let timeoutID = undefined;

    return new Promise(function(resolve, reject) {
      let callbackFunction =
        optionArgs.jsonpCallbackFunction || Utils.generateCallbackFunction();
      let serviceParams = {
        serviceURL:
          URL.indexOf("?") === -1
            ? URL + "?"
            : URL + "&" + jsonpCallback + "=" + callbackFunction,
        scriptURLGen: jsonpCallback + "_" + callbackFunction
      };

      window[callbackFunction] = function(response) {
        resolve({
          ok: true,
          json: function json() {
            return Promise.resolve(response);
          }
        });

        if (timeoutID) Utils.clearFunction(timeoutID);
        Utils.removeHeadElement(serviceParams.scriptURLGen);
        Utils.clearFunction(callbackFunction);
      };

      let jsonpScriptTag = Utils.appendHeadElement(serviceParams, optionArgs);

      timeoutID = setTimeout(function() {
        reject(new Error("JSONP request to " + URL + "timed out"));

        Utils.clearFunction(callbackFunction);
        Utils.removeHeadElement(serviceParams.scriptURLGen);
        window[callbackFunction] = function() {
          Utils.clearFunction(callbackFunction);
        };
      }, timeout);

      jsonpScriptTag.onerror = function() {
        reject(new Error("JSONP request to " + URL + "failed"));
        Utils.clearFunction(callbackFunction);
        Utils.removeHeadElement(serviceParams.scriptURLGen);
        if (timeoutID) Utils.clearFunction(timeoutID);
      };
    });
  }
  module.exports = fetchAMDService;
});
