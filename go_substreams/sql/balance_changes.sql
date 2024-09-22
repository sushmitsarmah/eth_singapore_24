CREATE TABLE balance_changes (
    change_type INTEGER,
    contract TEXT,
    owner TEXT,
    amount TEXT,
    transaction_id TEXT,
    new_balance TEXT,
    block_num TEXT,
    timestamp TEXT,
    old_balance TEXT
);