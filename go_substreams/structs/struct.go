package structs

type BalanceChange struct {
	ChangeType    string
	Contract      string
	Owner         string
	Amount        string
	TransactionID string
	NewBalance    string
	BlockNum      string
	Timestamp     string
	OldBalance    string
}
