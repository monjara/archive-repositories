package server

import (
	"github.com/gin-gonic/gin"
	"github.com/monjara/gin-crud/src/handler"
)

// DefineRoutes returns handler
func DefineRoutes(r *gin.Engine) {
	v1 := r.Group("/")
	{
		v1.POST("/user", handler.CreateUser)
		v1.GET("/users", handler.GetUsers)
		v1.GET("/user/:id", handler.GetSingleUser)
		v1.PUT("/user/:id", handler.UpdateUser)
		v1.DELETE("/user/:id", handler.DeleteUser)
	}
}
