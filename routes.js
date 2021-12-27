import express from "express";
import { getComment, createComment, updateComment, deleteComment } from "./controllers/commentController.js";
import { getFoodArticle, createFoodArticle, updateFoodArticle, deleteFoodArticle } from "./controllers/foodController.js";
import { getHobbyArticle, createHobbyArticle, updateHobbyArticle, deleteHobbyArticle } from "./controllers/hobbyController.js";
import { getSportArticle, createSportArticle, updateSportArticle, deleteSportArticle } from "./controllers/sportController.js";

const router = express.Router();

router.get('/food', getFoodArticle);
router.post('/foodpost', createFoodArticle);
router.patch('/updateupdate/:id', updateFoodArticle);
router.delete('/fooddelete/:id', deleteFoodArticle);

router.get('/hobby', getHobbyArticle);
router.post('/hobbypost', createHobbyArticle);
router.patch('/hobbyupdate/:id', updateHobbyArticle);
router.delete('/hobbydelete/:id', deleteHobbyArticle);

router.get('/sport', getSportArticle);
router.post('/sportpost', createSportArticle);
router.patch('/sportupdate/:id', updateSportArticle);
router.delete('/sportdelete/:id', deleteSportArticle);

router.get('/comment', getComment);
router.post('/commentpost', createComment);
router.patch('/commentupdate/:id', updateComment);
router.delete('/comentdelete/:id', deleteComment);

export default router;