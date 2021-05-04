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
	}
}
