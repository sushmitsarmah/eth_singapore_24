package modules

import (
	"database/sql"
	"fmt"

	pbchanges "github.com/streamingfast/substreams-sink-database-changes/pb/sf/substreams/sink/database/v1"
)

func ConnectToDb() *sql.DB {
	// Connect to the PostgreSQL database
	connStr := "user=sushmitmacair dbname=substreams sslmode=disable"
	db, err := sql.Open("postgres", connStr)
	if err != nil {
		fmt.Errorf("unable to connect to database: %w", err)
	}
	return db
}

func SaveToDb(changes *pbchanges.DatabaseChanges) {
	// Connect to the PostgreSQL database
	db := ConnectToDb()
	defer db.Close()

	for _, value := range changes.TableChanges {
		// Extract the fields from the value
		var changeType, contract, owner, transactionID string
		var amount, newBalance, oldBalance string
		var blockNum string
		var timestamp string

		for _, field := range value.Fields {
			switch field.Name {
			case "change_type":
				changeType = field.NewValue
			case "contract":
				contract = field.NewValue
			case "owner":
				owner = field.NewValue
			case "amount":
				amount = field.NewValue
			case "transaction_id":
				transactionID = field.NewValue
			case "new_balance":
				newBalance = field.NewValue
			case "block_num":
				blockNum = field.NewValue
			case "timestamp":
				timestamp = field.NewValue
			case "old_balance":
				oldBalance = field.NewValue
			}
		}

		// Insert the data into the PostgreSQL table
		_, err := db.Exec(`
			INSERT INTO balance_changes (change_type, contract, owner, amount, transaction_id, new_balance, block_num, timestamp, old_balance)
			VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)`,
			changeType, contract, owner, amount, transactionID, newBalance, blockNum, timestamp, oldBalance)
		if err != nil {
			fmt.Errorf("unable to insert data into database: %w", err)
		}
	}
}
