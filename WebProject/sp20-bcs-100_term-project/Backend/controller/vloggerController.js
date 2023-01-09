const ErrorHandler = require("../utilis/errorHandling");
const CatchErrors = require("../middleware/catchAsyncError");
const Vlogger = require("../database/models/vloggerModel");

exports.getAllVlogger = CatchErrors(async (req, res, next) => {
  const vlogger = await Vlogger.find();

  if (!vlogger) {
    return next(new ErrorHandler("Not found Here!", 404));
  }

  res.status(200).json({
    status: "success",
    results: vlogger.length,
    vlogger,
  });
});

exports.postVlogger = CatchErrors(async (req, res, next) => {
  const vlogger = await Vlogger.create(req.body);

  if (!vlogger) {
    return next(new ErrorHandler("Cannot add vlogger!", 404));
  }

  res.status(201).json({
    success: true,
    vlogger,
  });
});

exports.updateVlogger = CatchErrors(async (req, res, next) => {
  const vlogger = await Vlogger.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });
  if (!vlogger) {
    return next(new ErrorHandler("Vlogger not found and update", 404));
  }
  res.status(200).json({
    success: true,
    vlogger,
  });
});

exports.deleteVlogger = CatchErrors(async (req, res, next) => {
  const vlogger = await Vlogger.findByIdAndDelete(req.params.id);

  if (!vlogger) {
    return next(new ErrorHandler("Vlogger not found and delete", 404));
  }

  res.status(200).json({
    success: true,
    vlogger,
  });
});

exports.getSingleVlogger = CatchErrors(async (req, res, next) => {
  const vlogger = await Vlogger.findById(req.params.id);

  if (!vlogger) {
    return next(new ErrorHandler("Vlogger not found", 404));
  }

  res.status(200).json({
    success: true,
    vlogger,
  });
});

exports.createVloggerReview = CatchErrors(async (req, res, next) => {
  const { rating, comment, vloggerId } = req.body;

  const review = {
    user: req.user._id,
    name: req.user.name,
    rating: Number(rating),
    comment,
  };

  const vlogger = await Vlogger.findById(vloggerId);

  const isReviewed = vlogger.reviews.find(
    (r) => r.user.toString() === req.user._id.toString()
  );

  if (isReviewed) {
    vlogger.reviews.forEach((review) => {
      if (review.user.toString() === req.user._id.toString()) {
        review.comment = comment;
        review.rating = rating;
      }
    });
  } else {
    vlogger.reviews.push(review);
    vlogger.numOfReviews = vlogger.reviews.length;
  }

  vlogger.ratings =
    vlogger.reviews.reduce((acc, item) => item.rating + acc, 0) /
    vlogger.reviews.length;

  await vlogger.save({ validateBeforeSave: false });

  res.status(200).json({
    success: true,
  });
});

exports.getVloggerReviews = CatchErrors(async (req, res, next) => {
  const vlogger = await Vlogger.findById(req.params.id);

  res.status(200).json({
    success: true,
    reviews: vlogger.reviews,
  });
});

exports.deleteReview = CatchErrors(async (req, res, next) => {
  const vlogger = await Vlogger.findById(req.params.id);

  const reviews = vlogger.reviews.filter(
    (review) => review._id.toString() !== req.query.id.toString()
  );

  const numOfReviews = reviews.length;

  const ratings =
    vlogger.reviews.reduce((acc, item) => item.rating + acc, 0) /
    reviews.length;

  await Vlogger.findByIdAndUpdate(
    req.params.id,
    {
      reviews,
      ratings,
      numOfReviews,
    },
    {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    }
  );

  res.status(200).json({
    success: true,
  });
});
