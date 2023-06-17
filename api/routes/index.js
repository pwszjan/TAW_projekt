const movieRoutes = require("./movie-route")
const router = require("express").Router();
const reviewRoutes =require("./review-route")
const express = require("express");
const controllers = require("../controllers");

// routes
router
  .route("/movies")
  .post(controllers.createMovie)
  .get(controllers.listMovies);

router
  .route("/movies/:id")
  .get(controllers.getOne)
  .delete(controllers.deleteMovie)
  .put(controllers.updateMovie);


  router
  .route("/movies/:id/review")                            
  .post(controllers.createMovieReview) // .post(authConroller.authenticate, controllers.createMovieReview )
  .get(controllers.listMovieReview);

router
  .route("/movies/:id/review/:id")
  .delete(controllers.deleteMovieReview)
  .put(controllers.updateMovieReview);




  module.exports = router