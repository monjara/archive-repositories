package websocket

import (
	"fmt"
	"io"
	"log"
	"net/http"

	"github.com/gorilla/websocket"
)

var upgrader = websocket.Upgrader{
	ReadBufferSize:  1024,
	WriteBufferSize: 1024,

	CheckOrigin: func(r *http.Request) bool { return true },
}

// Upgrade returns *websocket.conn or error
func Upgrade(w http.ResponseWriter, r *http.Request) (*websocket.Conn, error) {
	ws, err := upgrader.Upgrade(w, r, nil)
	if err != nil {
		log.Println(err)
		return ws, err
	}
	return ws, nil
}

// Reader returns if err exists
func Reader(conn *websocket.Conn) {
	for {
		messageType, p, err := conn.ReadMessage()
		if err != nil {
			log.Println(err)
			return
		}

		if err := conn.WriteMessage(messageType, p); err != nil {
			log.Println(err)
			return
		}
	}
}

// Writer returns if err exists
func Writer(conn *websocket.Conn) {
	for {
		fmt.Println("Sending...")
		messageType, r, err := conn.NextReader()
		if err != nil {
			fmt.Println(err)
			return
		}

		w, err := conn.NextWriter(messageType)
		if err != nil {
			fmt.Println(err)
			return
		}

		if _, err := io.Copy(w, r); err != nil {
			fmt.Println(err)
			return
		}

		if err := w.Close(); err != nil {
			fmt.Println(err)
			return
		}
	}
}
