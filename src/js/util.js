const Utils = {
  appendHeadElement: appendHeadElement,
  clearFunction: clearFunction,
  removeHeadElement: removeHeadElement,
  generateCallbackFunction: generateCallbackFunction
};

function appendHeadElement(serviceParams, optionArgs) {
  let jsonpScript = document.createElement("script");
  jsonpScript.setAttribute("src", serviceParams.serviceURL);
  if (optionArgs.charset) {
    jsonpScript.setAttribute("charset", optionArgs.charset);
  }
  jsonpScript.id = serviceParams.scriptURLGen;
  document.getElementsByTagName("head")[0].appendChild(jsonpScript);

  return jsonpScript;
}

function clearFunction(functionName) {
  try {
    delete window[functionName];
  } catch (e) {
    window[functionName] = undefined;
  }
}

function removeHeadElement(scriptURLGen) {
  let script = document.getElementById(scriptURLGen);
  if (script) {
    document.getElementsByTagName("head")[0].removeChild(script);
  }
}

function generateCallbackFunction() {
  return "jsonp_" + Date.now() + "_" + Math.ceil(Math.random() * 100000);
}

export default Utils;
