const axios = require("axios").default;

exports.searchTrack = (req, res) => {
  axios
    .get(`https://api.deezer.com/search?q=${req.body.searchTerm}`)
    .then(function (response) {
      let data = response.data.data;
      res.status(200).send(data);
    })
    .catch(function (error) {
      res.status(500).send({ message: error });
    });
};

exports.album = (req, res) => {
  axios
    .get(`https://api.deezer.com/search?q=${req.body.artist}`)
    .then(function (response) {
      let data = response.data.data;
      res.status(200).send(data);
    })
    .catch(function (error) {
      res.status(500).send({ message: error });
    });
};

exports.getArtist = (req, res) => {
  try {
    axios
      .get(`https://api.deezer.com/artist/${req.body.artistid}`)
      .then(function (response) {
        res.status(200).send(response);
      })
      .catch(function (error) {
        res.status(500).send(error);
      });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getTracks = (req, res) => {
  axios
    .get(`https://api.deezer.com/artist/${req.body.artistid}/top?limit=5`)
    .then(function (response) {
      let data = response.data;
      res.status(200).send(data);
    })
    .catch(function (error) {
      res.status(500).send({ message: error });
    });
};
