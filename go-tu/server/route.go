package server

import (
	"github.com/gin-gonic/gin"
	"github.com/monjara/go-tu/controller/folder"
	"github.com/monjara/go-tu/controller/task"
)

func GetRoute() {
	router := gin.Default()
	folders := router.Group("/folders")
	{
		folders.GET("/list", folder.Index)
		folders.POST("/create", folder.New)

		folders.GET("/:folderId/tasks", task.Index)
		folders.GET("/:folderId/tasks/create", task.New)
		folders.POST("/:folderId/tasks/create", task.New)
		folders.GET("/:folderId/tasks/:taskId/edit", task.Edit)
		folders.POST("/:folderId/tasks/:taskId/edit", task.Edit)
	}
}