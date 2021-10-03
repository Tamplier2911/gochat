package main

import (
	"fmt"
	"time"
)

func main() {
	fmt.Println("booting...")
	sec, min, hour := 0, 0, 0
	for {
		time.Sleep(time.Second * 1)
		fmt.Print("\033[H\033[2J")

		fmt.Printf("S:%d M:%d H:%d \n", sec, min, hour)
		sec += 1
		switch {
		case hour == 23 && min == 59 && sec == 60:
			hour = 0
		case min == 59 && sec == 60:
			min = 0
			hour += 1
		case sec == 60:
			sec = 0
			min += 1
		}
	}
}

/*
	// get port env
	port := fmt.Sprintf(":%s", os.Getenv("PORT"))
	if port == ":" {
		port = ":8080"
	}

	// define router
	router := http.NewServeMux()

	// define db connection
	dsn := fmt.Sprintf(
		"%s:%s@tcp(%s)/%s?charset=utf8mb4&parseTime=True&loc=Local",
		"root", "", "db:3306", "db",
	)
	db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{
		PrepareStmt: true,
	})
	if err != nil {
		log.Fatalf("failed to connect to mysql: %s \n", err)
	}
	fmt.Printf("DB: %+v", db)

	// serve api
	router.HandleFunc("/api/v1/hello", func(w http.ResponseWriter, r *http.Request) {
		switch r.Method {
		case http.MethodGet:
			w.WriteHeader(http.StatusOK)
			w.Write([]byte("Hello, Chat!"))
		default:
			w.WriteHeader(http.StatusNotFound)
		}
	})

	// define http server
	server := &http.Server{
		Addr:           port,
		Handler:        router,
		ReadTimeout:    10 * time.Second,
		WriteTimeout:   10 * time.Second,
		MaxHeaderBytes: 1 << 20,
	}

	// start http server
	log.Printf("starting default http server on port %s \n", server.Addr)
	err = server.ListenAndServe()
	if err != nil {
		log.Fatalf("failed to run http server: %s \n", err)
	}

*/
