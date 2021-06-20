import { PrismaClient } from '@prisma/client'
import express from 'express';
import { protect } from '../middleware/authentication';

const prisma = new PrismaClient()

function getUserRoutes() {
	const router = express.Router();
	router.get("/liked-videos", protect, getLikedVideos);
	return router;
}