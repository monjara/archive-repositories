package handler

import (
	"net/http"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/jinzhu/gorm"
	"github.com/monjara/gin-crud/src/model"
)

// CreateUser returns http status
func CreateUser(c *gin.Context) {
	user := model.User{}
	now := time.Now()
	user.CreatedAt = now
	user.UpdatedAt = now

	err := c.BindJSON(&user)
	if err != nil {
		c.String(http.StatusBadRequest, "Request is failed: "+err.Error())
	}

	db := c.MustGet("db").(*gorm.DB)
	db.Create(&user)

	if db.NewRecord(user) == false {
		c.JSON(http.StatusOK, user)
	}
}
