var UpnpControlPoint = require("./lib/upnp-controlpoint").UpnpControlPoint
  , wemo = require("./lib/wemo");

var cp = new UpnpControlPoint();
cp.search();

exports.cp = cp;