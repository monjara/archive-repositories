package config

import (
	"fmt"
	"os"

	"github.com/jinzhu/gorm"
)

// GormConnect returns the pointer of database
func GormConnect() *gorm.DB {
	DBMS := os.Getenv("DBMS")
	DBCONN := os.Getenv("DATABASE_CONNECTION")
	db, err := gorm.Open(DBMS, DBCONN)

	if err != nil {
		panic(err.Error())
	}

	fmt.Println("connected database: ", &db)

	db.Set("gorm:table_options", "ENGINE=InnoDB")

	return db
}
