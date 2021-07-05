USE b11_group1;

CREATE TABLE users (
    user_id INT AUTO_INCREMENT NOT NULL,
    name VARCHAR(30) NOT NULL,
    email VARCHAR(50),
    mobile VARCHAR(20),
    pw VARCHAR(15) NOT NULL,
    PRIMARY KEY (user_id)
);

CREATE TABLE goals (
    goal_id INT AUTO_INCREMENT NOT NULL,
    description  VARCHAR(100) NOT NULL,
    balance DECIMAL(20,2) NOT NULL,
    date_created DATE NOT NULL,
    user_id INT,
    PRIMARY KEY (goal_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

CREATE TABLE transactions (
    transaction_id INT AUTO_INCREMENT NOT NULL,
    date DATE NOT NULL,
    goal_id INT,
    amount DECIMAL(20,2) NOT NULL,
    PRIMARY KEY (transaction_id),
    FOREIGN KEY (goal_id) REFERENCES goals(goal_id)
);

select goal_id, count(amount), SUM(amount) from transactions group by goal_id;

--   --Add entries
-- INSERT INTO users(user_id,name,email,mobile,pw,ic)
-- VALUES
-- (1,'Kenneth Cheong','kennethc@gmail.com',92345678,'blahblah','S8888888Z');

--   -- Generice Commands
-- SELECT * FROM users;

-- ALTER TABLE users MODIFY COLUMN pw VARCHAR(15);
