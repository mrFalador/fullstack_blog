const exprress = require("express");
const cors = require("cors");
const router = require("./routes/index");
const errorMiddleware = require("./middlewares/errors-middleware");

require("dotenv").config();
const app = exprress();
app.use(exprress.json());
app.use(
  cors({
    credentials: true,
    origin: process.env.CLIENT_URL,
  })
);
app.use("/api", router);
app.use(errorMiddleware);

const start = async () => {
  try {
    app.listen(process.env.API_PORT || 5000, () =>
      console.log(`Server started on PORT ${process.env.API_PORT}`)
    );
  } catch (e) {
    console.log(e);
  }
};

start();
