CREATE TABLE users (
    user_id INT AUTO_INCREMENT NOT NULL,
    name VARCHAR(30) NOT NULL,
    email VARCHAR(50),
    mobile INT(10),
    pw VARCHAR(50) NOT NULL,
    ic VARCHAR(15) NOT NULL,
    PRIMARY KEY (user_id)
);

CREATE TABLE accounts (
    acct_no INT AUTO_INCREMENT NOT NULL,
    type VARCHAR(15) NOT NULL,
    balance DECIMAL(20,2) NOT NULL,
    max_limit DECIMAL(20,2),
    date_created DATE NOT NULL,
    user_id INT,
    PRIMARY KEY (acct_no),
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

CREATE TABLE transactions (
    transaction_id INT AUTO_INCREMENT NOT NULL,
    date DATE NOT NULL,
    type VARCHAR(15) NOT NULL,
    acct_no INT,
    amount DECIMAL(20,2) NOT NULL,
    PRIMARY KEY (transaction_id),
    FOREIGN KEY (acct_no) REFERENCES accounts(acct_no)
);


  --Add entries
INSERT INTO users(user_id,name,email,mobile,pw,ic)
VALUES
(1,'Kenneth Cheong','kennethc@gmail.com',92345678,'blahblah','S8888888Z');

select * from users;