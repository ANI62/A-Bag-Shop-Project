const express = require("express");
const app = express();
const cookieParser = require("cookie-Parser");
const path = require("path");
const db = require("./config/mongoose-connection");
const ownerRouter = require("./routes/ownerRouter");
const userRouter = require("./routes/usersRouter");
const productRouter = require("./routes/productsRouter");

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/owner", ownerRouter);
app.use("/user", userRouter);
app.use("/products", productRouter);

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.send("hello bro");
});

app.listen(3000, console.log("Server chal raha hai bhai dekh le ab tu apna"));
