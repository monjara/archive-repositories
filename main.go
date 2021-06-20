package main

import (
	"net/http"

	"github.com/gin-gonic/contrib/static"
	"github.com/gin-gonic/gin"
)

func main() {
	router := gin.Default()
	router.Use(static.Serve("/", static.LocalFile("./views", true)))

	api := router.GET("/api")
	{
		api.GET("/jokes", JokesHandler)
		api.GET("/jokes/like/:jokeId", LikeJokeHandler)
	}

	router.Run(":3000")
}

func JokesHandler(c *gin.Context) {
	c.Header("Content-Type", "application/json")
	c.JSON(http.StatusOK, gin.H {
		"message" : "JokesHandler not implements yet", 
	})
}

func LikeJokeHandler(c *gin.Context) {
	c.Header("Content-Type", "application/json")
	c.JSON(http.StatusOK, gin.H {
		"message" : "LikeJokeHandler not implements yet", 
	})
}