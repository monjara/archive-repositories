package main

import (
	"log"

	"github.com/monjara/gin-crud/src/config"
	"github.com/monjara/gin-crud/src/model"

	_ "github.com/jinzhu/gorm/dialects/mysql"
	"github.com/joho/godotenv"
)

func main() {
	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env file")
	}

	db := config.GormConnect()
	defer db.Close()
	db.AutoMigrate(&model.User{})
}
