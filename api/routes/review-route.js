const router = require("express").Router();
const controllers = require("../controllers")

router
  .route("")                          
  .post(controllers.createMovieReview) // .post(authConroller.authenticate, controllers.createMovieReview )
  .get(controllers.listMovieReview);

router
  .route("movies/:reviewId")
  .delete(controllers.deleteMovieReview)
  .put(controllers.updateMovieReview);