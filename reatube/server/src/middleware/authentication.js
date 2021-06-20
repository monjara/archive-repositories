import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

export async function protect(req, res, next) {
	if (!req.cookies.token) {
		return next({
			message: "ログインする必要があります。",
			statusCode: 401,
		});
	}

	try {
		const token = req.cookies.token;
		const decoded = jwt.verify(token, process.env.JWT_SECRET);

		const user = await prisma.user.findUnique({
			where: {
				id: decoded.id,
			},
			include: {
				videos: true,
			},
		});

		req.user = user;
		next();

	} catch (error) {
		next({
			message: "ログインする必要があります。",
			statusCode: 401,
		});
	}
}