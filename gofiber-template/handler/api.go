package handler

import "github.com/gofiber/fiber/v2"

// SayHello handle api status
func SayHello(c *fiber.Ctx) error {
	return c.JSON(fiber.Map{"status": "success", "message": "Hi I'm ok"})
}
