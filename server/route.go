package server

import "github.com/gin-gonic/gin"

func GetRoute() {
	router := gin.Default()
	folders := router.Group("/folders")
	{
		folders.GET("/create", controller.CreateTaskHandler)
		folders.POST("/create", controller.CreateTaskHandler)

		folders.GET("/:folderId/tasks", controller.TasksHandler)
		folders.GET("/:folderId/tasks/create", controller.CreateTaskHandler)
		folders.POST("/:folderId/tasks/create", controller.CreateTaskHandler)
		folders.GET("/:folderId/tasks/:taskId/edit", controller.updateTaskHandler)
		folders.POST("/:folderId/tasks/:taskId/edit", controller.updateTaskHandler)
	}
}