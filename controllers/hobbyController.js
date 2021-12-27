import mongoose from "mongoose";
import Hobby from "../models/hobby.js";

export const getHobbyArticle = async (req, res) => {
  try {
    const articles = await Hobby.find();

    res.status(200).json(articles);
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
};

export const createHobbyArticle = async (req, res) => {
  const create = req.body;

  const newArticle = new Hobby(create);

  try {
    await newArticle.save();

    res.status(201).json(newArticle)
  } catch (error) {
    res.status(409).json({ message: error.message })
  }
}

export const updateHobbyArticle = async (req, res) => {
    const { id: _id } = req.params;
    const update = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send(`No article with id: ${_id}`);

    const updatedArticle = await Hobby.findByIdAndUpdate(_id, { ...update, _id }, { new: true });

    res.json(updatedArticle);
}

export const deleteHobbyArticle = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No article with id: ${id}`);

    await Hobby.findByIdAndRemove(id);

    res.json({ message: "Article deleted successfully." });
}