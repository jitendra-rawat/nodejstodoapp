import express from "express";

import {  getMyProfile, signup, login,logout } from "../controllers/user.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post( "/new", signup )

router.post( "/login", login )

 router.post( "/logout", logout )



 
 router.get("/me" ,isAuthenticated, getMyProfile)
 
 
 

 
 


export default router;