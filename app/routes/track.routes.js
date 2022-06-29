const controller = require("../controllers/track.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/search", controller.searchTrack);
  app.get("/api/album", controller.album);
  app.get("/api/artist", controller.getArtist);
  app.get("/api/getTracks", controller.getTracks);
};
