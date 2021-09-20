package main

import (
	"fmt"
	"math"
	"math/rand"
	"time"
)

func main() {
	rand.Seed(time.Now().Unix())

	var times int = 10
	var length float64 = 8

	min := math.Pow(10, (length - 1))
	max := math.Pow(10, length) - 1

	for i := 0; i < times; {
		x := rand.Intn(int(max-min)) - int(min)
		if x > int(min) && x < int(max) {
			fmt.Println(x)
			fmt.Println("")
			i++
		}
	}
}
