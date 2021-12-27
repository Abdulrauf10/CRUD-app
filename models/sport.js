import mongoose from "mongoose";

const dataSport = mongoose.Schema({
  title: String,
  content: String,
  createdAt: {
    type: Date,
    default: new Date()
  }
});

const postSportArticle = mongoose.model("postSportArticle", dataSport);

export default postSportArticle;