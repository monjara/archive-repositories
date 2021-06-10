import { PrismaClient } from '@prisma/client'
import express from 'express';

const prisma = new PrismaClient()

function getVideoRoutes() {
	const router = express.Router();
	router.get("/", getRecommendedVideos);
	router.get("/trending", getTrendingVideos);
	return router;
}

export async function getVideoViews(videos) {
	for (const video of videos) {
		const views = await prisma.view.count({
			where: {
				videoId: {
					equals: video.id,
				},
			},
		});
		video.views = views;
	}
	return videos;
}

async function getRecommendedVideos(req, res) {
	let videos = await prisma.video.findMany({
		include: {
			user: true,
		},
		orderBy: {
			createdAt: "desc",
		},
	});

	if (!videos.length) {
		return res.status(200).json({ videos });
	}

	videos = await getVideoViews(videos);
	videos.sort((a, b) => b.views - a.views);
	res.status(200).json({ videos });
}