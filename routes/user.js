import express from "express";
import {User} from '../models/user.js'
import { getAllUser, getUserId, register } from "../controllers/user.js";

const router = express.Router();


router.get( "/all", getAllUser)
 
 router.get("/userid/:id" , getUserId)
 
 
 
router.post( "/new", register )
 
 


export default router;