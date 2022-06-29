const controller = require("../controllers/track.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post("/api/search", controller.searchTrack);
  app.post("/api/album", controller.album);
  app.post("/api/artist", controller.getArtist);
  app.post("/api/getTracks", controller.getTracks);
};
