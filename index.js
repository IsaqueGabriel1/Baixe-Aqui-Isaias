const express = require("express");
const res = require("express/lib/response");
const { getVideoID } = require("ytdl-core");
const app = express();
const ytdl = require("ytdl-core");
const port = process.env.PORT || 3000;

app.use(express.static('./public'));
app.set('view engine', 'ejs');
app.set('views','./views');

app.get("/query", (req, res) => {
    let url = req.query["teste"]
    if(url){
        res.header("Content-Disposition", '"attachmentt; filename="video.mp4"')
        ytdl(url).pipe(res);
        console.log(ytdl.getInfo(getVideoID))
    }else{
        res.send("Nenhuma url foi passada")
    }
})

app.get('/', (req, res) => {
    res.render("index")
})


app.listen((port), () => {console.log("Tudo certo")})
