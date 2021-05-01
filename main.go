package main

import (
	"fmt"
	"log"
	"os"
	"time"

	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/mysql"
	"github.com/joho/godotenv"
)

// User is who access this servise
type User struct {
	gorm.Model
	Name     string    `json:"name"`
	Age      int       `json:"age"`
	Birthday time.Time `json:"birthday"`
}

func main() {
	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env file")
	}

	db := gormConnect()

	db.Set("gorm:table_options", "ENGINE=InnoDB")
	db.AutoMigrate(&User{})

	defer db.Close()
	db.LogMode(true)
}

func gormConnect() *gorm.DB {
	DBMS := os.Getenv("DBMS")
	DBCONN := os.Getenv("DATABASE_CONNECTION")
	db, err := gorm.Open(DBMS, DBCONN)

	if err != nil {
		panic(err.Error())
	}

	fmt.Println("connected database: ", &db)
	return db
}
