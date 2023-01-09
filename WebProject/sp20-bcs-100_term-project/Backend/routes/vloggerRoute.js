const express = require("express");

const vlogger = require("../controller/vloggerController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/Auth");

const router = express.Router();

router.route("/vloggers").get(vlogger.getAllVlogger);
router
  .route("/vlogger/new")
  .post(isAuthenticatedUser, authorizeRoles("admin"), vlogger.postVlogger);
router
  .route("/vlogger/:id")
  .put(isAuthenticatedUser, authorizeRoles("admin"), vlogger.updateVlogger)
  .delete(isAuthenticatedUser, authorizeRoles("admin"), vlogger.deleteVlogger)
  .get(vlogger.getSingleVlogger);

router
  .route("/vlogger/review")
  .put(isAuthenticatedUser, vlogger.createVloggerReview);
router
  .route("/vlogger/reviews")
  .get(vlogger.getAllReviews)
  .delete(isAuthenticatedUser, vlogger.deleteReview);

module.exports = router;
