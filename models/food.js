import mongoose from "mongoose";

const dataFood = mongoose.Schema({
  title: String,
  content: String,
  createdAt: {
    type: Date,
    default: new Date()
  }
});

const postFoodArticle = mongoose.model("postFoodArticle", dataFood);

export default postFoodArticle;