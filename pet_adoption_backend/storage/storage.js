const multer = require("multer");

module.exports.upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "uploads/"); // Set the destination folder for uploaded files
    },
    filename: function (req, file, cb) {
      const fileName =
        "pet-img-" + Date.now() + "." + file.originalname.split(".")[1];
      req.fileName = fileName;
      cb(null, fileName);
    },
  }),
});
