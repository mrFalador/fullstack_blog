const exprress = require("express");
const router = require("./routes/index");
const errorMiddleware = require("./middlewares/errors-middleware");

require("dotenv").config();
const app = exprress();
app.use(exprress.json());
app.use("/api", router);
app.use(errorMiddleware);

const start = async () => {
    try{
        app.listen(process.env.API_PORT || 5000, () => 
            console.log(`Server started on PORT ${process.env.API_PORT}`))
    } catch(e) {
        console.log(e)
    }
};

start();