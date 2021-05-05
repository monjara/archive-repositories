package main

import (
	"log"

	"github.com/gin-gonic/gin"
	"github.com/monjara/gin-crud/src/config"
	"github.com/monjara/gin-crud/src/model"
	"github.com/monjara/gin-crud/src/server"

	_ "github.com/jinzhu/gorm/dialects/mysql"
	"github.com/joho/godotenv"
)

func main() {
	router := gin.Default()

	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env file")
	}

	db := config.GormConnect()
	db.LogMode(true)
	defer db.Close()
	db.AutoMigrate(&model.User{})
	router.Use(func(c *gin.Context) {
		c.Set("db", db)
	})
	server.DefineRoutes(router)

	router.Run(":8080")
}
