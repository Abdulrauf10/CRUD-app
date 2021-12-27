import mongoose from "mongoose";

const dataHobby = mongoose.Schema({
  title: String,
  content: String,
  createdAt: {
    type: Date,
    default: new Date()
  }
});

const postHobbyArticle = mongoose.model("postHobbyArticle", dataHobby);

export default postHobbyArticle;