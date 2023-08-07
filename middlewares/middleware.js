const fs = require("fs");
const os = require("os");

function log(req, res, next) {
  console.log("app level");
  //   res.send("i am stopping you from further request");
  next();
}

function RoutesLevelLog(req, rea, next) {
  console.log("routes level");
  next();
}

function RouteLevelLog(req, rea, next) {
  console.log("route level");
  next();
}

function LogRouteUrl(req, rea, next) {
  let fullUrl = req.protocol + "://" + req.get("host") + req.originalUrl;
  fs.writeFile(
    "../express/logs/logrequest.log",
    `${fullUrl}${os.EOL}`,
    (err, data) => {
      if (err) {
        console.log(err);
      }
      next();
    }
  );
  console.log(fullUrl);
  next();
}

module.exports = { log, RouteLevelLog, RoutesLevelLog, LogRouteUrl };
