import mongoose from "mongoose";
import Sport from "../models/sport.js";

export const getSportArticle = async (req, res) => {
  try {
    const articles = await Sport.find();

    res.status(200).json(articles);
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
};

export const createSportArticle = async (req, res) => {
  const create = req.body;

  const newArticle = new Sport(create);

  try {
    await newArticle.save();

    res.status(201).json(newArticle)
  } catch (error) {
    res.status(409).json({ message: error.message })
  }
}

export const updateSportArticle = async (req, res) => {
    const { id: _id } = req.params;
    const update = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send(`No article with id: ${_id}`);

    const updatedArticle = await Sport.findByIdAndUpdate(_id, { ...update, _id }, { new: true });

    res.json(updatedArticle);
}

export const deleteSportArticle = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No article with id: ${id}`);

    await Sport.findByIdAndRemove(id);

    res.json({ message: "Article deleted successfully." });
}