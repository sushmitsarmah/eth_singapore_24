WITH data AS (
    SELECT
        1 AS change_type,
        '9f8f72aa9304c8b593d555f12ef6589cc3a579a2' AS contract,
        '23f18be92b860fba3e762ae1f7f06fc15bbee09c' AS owner,
        30000000000000000000::NUMERIC AS amount,
        '2f0403a378f8693a6020cc51fdf9c408ff0fb3a358b9553c1549d0c2d9245eca' AS transaction_id,
        30000000000000000000::NUMERIC AS new_balance,
        20800387 AS block_num,
        1726939019 AS timestamp,
        0::NUMERIC AS old_balance
)

INSERT INTO {{ ref('balance_changes') }}
SELECT * FROM data;