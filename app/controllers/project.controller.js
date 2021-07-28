const miio = require("miio");
require('dotenv').config();

exports.discover = (req, res) => {
  const devices = miio.devices({
    cacheTime: 300, // 5 minutes. Default is 1800 seconds (30 minutes)
  });

  devices.on("available", reg => {
    if (!reg.token) {
      return res.status(404).json({
        message:
          "This device is either missing a token or hides its token", reg
      });
    }

    const device = reg.device;

    if (!device) {
      return res.status(404).json({
        message:
          "This device could not be connected to", reg
      });
    } else {
      device
        .togglePower()
        .then((on) => {
          return res.json({ message: "power is", on });
        })
        .catch((err) => {
          return res.status(500).json({
            message: err,
          });
        });
    }

  });

  
  devices.on('unavailable', reg => {
    if (!reg.token) {
      return res.status(404).json({
        message:
          "This device is either missing a token or hides its token", reg
      });
    }

    const device = reg.device;

    if (!device) {
      return res.status(404).json({
        message:
          "This device could not be connected to", reg
      });
    } else {
      device
        .togglePower()
        .then((on) => {
          return res.json({ message: "power is", on });
        })
        .catch((err) => {
          return res.status(500).json({
            message: err,
          });
        });
    }

  });
};


/*
 * @function fan this function connects to the home fan on ip address 192.168.43.15
 * @param req http request
 * @param res http response
 */


exports.fan = (req, res) => {
  miio
    .device({ address: String(process.env.FAN_ADDRESS) })
    .then((device) => {
      device
        .togglePower()
        .then((on) => {
          return res.json({ message: "power is", on });
        })
        .catch((err) => {
          return res.status(500).json({
            message: err,
          });
        });
      return res.json({ message: "connected to", device });
    })
    .catch((err) => {
      return res.status(500).json({
        message: err.message,
      });
    });
};



exports.television = (req, res) => {
  miio
    .device({ address: String(process.env.TELEVISION_ADDRESS) })
    .then((device) => {
      return res.send({ "connected to": device });
    })
    .catch((err) => {
      return res.status(500).send({
        message: err.message,
      });
    });
};



exports.freezer = (req, res) => {
  miio
    .device({ address: String(process.env.FREEZER_ADDRESS) })
    .then((device) => {
      return res.send({ "connected to": device });
    })
    .catch((err) => {
      return res.status(500).send({
        message: err.message,
      });
    });
};



exports.bulb = (req, res) => {
  miio
    .device({ address: String(process.env.BULB_ADDRESS) })
    .then((device) => {
      return res.send({ "connected to": device });
    })
    .catch((err) => {
      return res.status(500).send({
        message: err.message,
      });
    });
};



exports.healthCheck = (req, res) => {
  res.send({ message: "Hello World!" });
};