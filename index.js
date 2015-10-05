var buttons = require('sdk/ui/button/action');
var tabs = require("sdk/tabs");

var button = buttons.ActionButton({
  id: "firefoxmania-enlace",
  label: "Visitar firefoxmania",
  icon: {
    "16": "./favicon.png"
  },
  onClick: handleClick
});

function handleClick(state) {
  tabs.open("http://firefoxmania.uci.cu/");
}