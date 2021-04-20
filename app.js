const ex=require("express");
const app=ex();
app.set("view engine","ejs");
const port=process.env.PORT || 3000;
app.listen(port,console.log(`listening......on ${port}`));

app.get("/",(req,res)=>{
    res.render("index.ejs");
});
