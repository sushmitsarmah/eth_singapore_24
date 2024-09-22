package main

import (
	"substreams/modules"

	"github.com/gofiber/fiber/v2"
)

func main() {
	go modules.Substream()

	app := fiber.New()

	app.Get("/", func(c *fiber.Ctx) error {
		return c.SendString("Hello, World!")
	})

	go func() {
		app.Listen(":8080")
	}()

	select {} // Block forever
}
