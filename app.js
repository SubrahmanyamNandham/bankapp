const express = require("express");
const path = require("path");
const sqlite3 = require("sqlite3");
const { open } = require("sqlite");

const jwt = require("jsonwebtoken");
const cors = require("cors");

const dbPath = path.join(__dirname, "bank.db");

const app = express();
const PORT = process.env.PORT || 8000;
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname + "/public")));

let db = null;

// Initialization
const initializeDbAndServer = async () => {
  try {
    db = await open({
      filename: dbPath,
      driver: sqlite3.Database,
    });
    app.listen(PORT, () => {
      console.log(`Server Running at http://localhost:${PORT}`);
    });
  } catch (e) {
    console.log(`DBError: ${e.message}`);
  }
};

initializeDbAndServer();

app.get("/", (req, res) => {
  res.json({ msg: "YOUR EXPRESS BACKEND IS CONNECTED TO REACT" });
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const bankerDetails = `
  SELECT
    *
  FROM
    banker
`;

  try {
    const result = await db.get(bankerDetails);

    if (result === undefined) {
      res.status(400);
      res.send("Invalid User Credentials");
    } else {
      res.status(200);
      res.send(result);
    }
  } catch (e) {
    //  console.log(e);
    res.send(e);
  }
});

app.get("/accounts/", async (request, response) => {
  const getBooksQuery = `
    SELECT
      *
    FROM
      acounts
    `;
  const booksArray = await db.all(getBooksQuery);
  response.send(booksArray);
});

app.post("/user/login/", async (req, res) => {
  const { username, email, password } = req.body;

  const getUser = `
  SELECT
    *
  FROM
    user
    `;

  try {
    const result = await db.all(getUser);
    // console.log(result);
    if (result === undefined) {
      res.status(400);
      res.send("Invalid User Credentials");
    } else {
      const token = jwt.sign({ id: result.ID }, "secret", { expiresIn: "1h" });
      // console.log(token);
      res.json({ result: result, jwt_token: token });
    }
  } catch (e) {
    // console.log(e);
    res.send(e);
  }
});
