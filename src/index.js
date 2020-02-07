import "./js/fetch-api";
import banner from "./banner";
(function(fn) {
  let d = document;
  d.readyState === "loading"
    ? d.addEventListener("DOMContentLoaded", fn)
    : fn();
})(function() {
  banner.init();
  let result = fetchAMDService(
    "http://www.flickr.com/services/feeds/photos_public.gne?format=json",
    {
      jsonpCallback: "jsoncallback",
      timeout: 3000,
      mode: "cors",
      headers: {
        "Access-Control-Allow-Origin": "*"
      }
    }
  );
  result
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      let divSec = document.createElement("div");
      for (let i = 0; i < json.items.length; i++) {
        let spann = document.createElement("p");
        spann.append(
          "Title: " +
            json.items[i].title +
            "Author: " +
            json.items[i].author +
            "Tags" +
            json.items[i].tags
        );
        divSec.appendChild(spann);
      }
      document.getElementById("list-details").append(divSec);
    })
    ["catch"](function(ex) {
      document.body.innerHTML = "failed:" + ex;
    });
});
