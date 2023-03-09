const express = require("express");
const { getNbrofRequestedData, getAllRequestedData, addDataRequest} = require("../controllers/requestedData");
const router = express.Router();

router.route("/").get(getAllRequestedData).post(addDataRequest);
router.get("/nbrofdata",getNbrofRequestedData);

module.exports = router;