const exprress = require("express");
const router = require("./routes/index");

require("dotenv").config();
const app = exprress();
app.use(exprress.json())
app.use("/api", router)

const start = async () => {
    try{
        app.listen(process.env.API_PORT || 5000, () => 
            console.log(`Server started on PORT ${process.env.API_PORT}`))
    } catch(e) {
        console.log(e)
    }
};

start();