package handler

import (
	"net/http"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/jinzhu/gorm"
	"github.com/monjara/gin-crud/src/model"
)

// CreateUser regist user and returns http status
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

// GetUsers read all users returns http status
func GetUsers(c *gin.Context) {
	users := []model.User{}
	db := c.MustGet("db").(*gorm.DB)
	db.Find(&users)
	c.JSON(http.StatusOK, users)
}

// GetSingleUser read a user and returns http response
func GetSingleUser(c *gin.Context) {
	user := model.User{}
	id := c.Param("id")
	db := c.MustGet("db").(*gorm.DB)
	db.Where("ID = ?", id).First(&user)
	c.JSON(http.StatusOK, user)
}

// UpdateUser upadates a user and returns http response
func UpdateUser(c *gin.Context) {
	user := new(model.User)
	id := c.Param("id")

	data := new(model.User)
	if err := c.BindJSON(&data); err != nil {
		c.String(http.StatusBadRequest, "Request is failed: "+err.Error())
	}
	db := c.MustGet("db").(*gorm.DB)
	db.Where("ID = ?", id).First(&user).Updates(&data)

}

// DeleteUser deletes a user and returns http response
func DeleteUser(c *gin.Context) {
	user := new(model.User)
	id := c.Param("id")
	db := c.MustGet("db").(*gorm.DB)
	db.Where("ID = ?", id).Delete(&user)
}
