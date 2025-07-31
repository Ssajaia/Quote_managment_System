const app = require("./app")

const port = process.env.port || 4040

app.listen(port,(req,res)=>{
    console.log(`Server is running on localhost:${port}`)
})
