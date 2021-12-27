import mongoose from "mongoose";
import Comment from "../models/comment.js";

export const getComment = async (req, res) => {
  try {
    const comment = await Comment.find();

    res.status(200).json(comment);
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
};

export const createComment = async (req, res) => {
  const create = req.body;

  const newComment = new Comment(create);

  try {
    await newComment.save();

    res.status(201).json(newComment)
  } catch (error) {
    res.status(409).json({ message: error.message })
  }
}

export const updateComment = async (req, res) => {
    const { id: _id } = req.params;
    const update = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send(`there is no comment with id: ${_id}`);

    const updatedComment = await Comment.findByIdAndUpdate(_id, { ...update, _id }, { new: true });

    res.json(updatedComment);
}

export const deleteComment = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`there is no comment with id: ${id}`);

    await Comment.findByIdAndRemove(id);

    res.json({ message: "Comment deleted successfully." });
}