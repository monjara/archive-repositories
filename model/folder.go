package model

import "time"

type Folder struct {
	id uint `json:"id"`
	title string `json:"string"`
	createdAt time.Time `json:"createdAt"`
	updatedAt time.Time `json:"updatedAt"`
}