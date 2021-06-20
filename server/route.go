package server

import "github.com/gin-gonic/gin"

func GetRoute() {
	router := gin.Default()
	folders := router.Group("/folders")
	{
		folders.GET("/create", controller.CreateFolderController)
		folders.POST("/create", controller.CreateFolderController)

		folders.GET("/:folderId/tasks", controller.TasksController)
		folders.GET("/:folderId/tasks/create", controller.CreateTaskController)
		folders.POST("/:folderId/tasks/create", controller.CreateTaskController)
		folders.GET("/:folderId/tasks/:taskId/edit", controller.updateTaskController)
		folders.POST("/:folderId/tasks/:taskId/edit", controller.updateTaskController)
	}
}