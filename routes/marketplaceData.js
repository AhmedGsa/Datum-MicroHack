const express = require("express");
const { getNbrofMarketplaceData, getSortedMarketplaceData, addMarketplaceData } = require("../controllers/marketplaceData");
const router = express.Router();
const upload = require("../middlewares/upload");

router.route("/").get(getSortedMarketplaceData).post(upload.single("file"),addMarketplaceData);
router.get("/nbrofdata",getNbrofMarketplaceData);

module.exports = router;