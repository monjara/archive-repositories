package model

import "time"

type Task struct {
	id          uint         `json:"id" gorm:"primaryKey"`
	folderId    uint         `json:"folderId"`
	title       string       `json:"title"`
	status      int          `json:"status"`
	dueDate     time.Time    `json:"dueDate"`
	createdAt   time.Time    `json:"createdAt"`
	updatedAt   time.Time    `json:"updatedAt"`
}