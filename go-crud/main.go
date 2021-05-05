package main

import (
	"fmt"
	"os"
	"time"

	"github.com/gin-gonic/gin"
	_ "github.com/go-sql-driver/mysql"
	"github.com/jinzhu/gorm"
	"github.com/joho/godotenv"
)

func main() {
	err := godotenv.Load(".env")
	if err != nil {
		panic("Error loading .env file")
	}

	db := sqlConnect()
	defer db.Close()

	router := gin.Default()
	router.LoadHTMLGlob("templates/*.html")

	router.GET("/", func(ctx *gin.Context) {
		ctx.HTML(200, "index.html", gin.H{})
	})

	router.Run()
}

func sqlConnect() (database *gorm.DB) {
	DBMS := os.Getenv("DATABASE")

	CONNECT := os.Getenv("DB_CONNECT")

	fmt.Println("DB_CONNECT: " + CONNECT)
	count := 0
	db, err := gorm.Open(DBMS, CONNECT)
	if err != nil {
		for {
			if err == nil {
				fmt.Println("")
				break
			}
			fmt.Println(".")
			time.Sleep(time.Second)
			count++
			if count > 180 {
				fmt.Println("DB接続失敗")
				panic(err)
			}
			db, err = gorm.Open(DBMS, CONNECT)
		}
	}
	fmt.Println("succeeded DB connection")

	return db
}
