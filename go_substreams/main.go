package main

import (
	"html/template"
	"log"
	"substreams/modules"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/template/html/v2"
)

func indexHandler(c *fiber.Ctx) error {
	context := fiber.Map{}
	return c.Render("index", context)
}

func fetchDataHandler(c *fiber.Ctx) error {
	data, err := modules.ReadFromDb(100)
	if err != nil {
		return c.Status(fiber.StatusInternalServerError).SendString(err.Error())
	}

	tmpl := template.Must(template.New("table").Parse(`
        <table border="1">
            <tr>
                <th>Change Type</th>
                <th>Contract</th>
                <th>Owner</th>
                <th>Amount</th>
                <th>Transaction ID</th>
                <th>New Balance</th>
                <th>Block Number</th>
                <th>Timestamp</th>
                <th>Old Balance</th>
            </tr>
            {{range .}}
            <tr>
                <td>{{.ChangeType}}</td>
                <td>{{.Contract}}</td>
                <td>{{.Owner}}</td>
                <td>{{.Amount}}</td>
                <td>{{.TransactionID}}</td>
                <td>{{.NewBalance}}</td>
                <td>{{.BlockNum}}</td>
                <td>{{.Timestamp}}</td>
                <td>{{.OldBalance}}</td>
            </tr>
            {{end}}
        </table>
    `))
	return tmpl.Execute(c.Response().BodyWriter(), data)
}

func main() {
	go modules.Substream()

	// Create views engine
	viewsEngine := html.New("./views", ".html")

	// Start new fiber instance
	app := fiber.New(fiber.Config{
		Views: viewsEngine,
	})

	app.Get("/", indexHandler)
	app.Get("/fetch-data", fetchDataHandler)

	go func() {
		log.Fatal(app.Listen(":8080"))
	}()

	select {} // Block forever
}
