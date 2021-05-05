package main

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
)

// Response はjsonによって構成される
type Response struct {
	ID     string `json:"id"`
	Joke   string `json:"joke"`
	Status int    `json:"status"`
}

func main() {
	fmt.Println("API呼び出し開始")

	client := &http.Client{}
	req, err := http.NewRequest("GET", "https://icanhazdadjoke.com/", nil)
	if err != nil {
		fmt.Println(err.Error())
	}
	req.Header.Add("Accept", "application/json")
	req.Header.Add("Content-Type", "application/json")
	resp, err := client.Do(req)
	if err != nil {
		fmt.Println(err.Error())
	}

	defer resp.Body.Close()
	bodyBytes, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		fmt.Println(err.Error())
	}

	var responseObject Response
	json.Unmarshal(bodyBytes, &responseObject)
	fmt.Printf("API Response: %+v\n", responseObject)
}
