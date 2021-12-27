import mongoose from "mongoose";

const dataComments = mongoose.Schema({
  comment: String,
  createdAt: {
    type: Date,
    default: new Date()
  }
});

const postComment = mongoose.model("postComment", dataComments);

export default postComment;