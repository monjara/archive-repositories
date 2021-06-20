package main

import (
	"log"

	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
)

func main() {
	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env file")
	}
	router := gin.Default()
	router.GET("/", func(c *gin.Context) {
		c.JSON(200, gin.H {
			"message": "pong",
		})
	})
	router.Run(":8088")
}