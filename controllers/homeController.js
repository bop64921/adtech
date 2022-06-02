const { nanoid } = require('nanoid');
const Url =require ('../models/Url');

const leerUrls = async(req,res)=>{
    try{
        const urls = await Url.find().lean()
        res.render('home', {urls:urls});
    }catch(error){
        console.log(error)
        res.send('error algo falló')
    }
};
const agregarUrl = async(req,res)=>{
    const {origin} = req.body;
 try{
const url = new Url({origin: origin, shortURL:nanoid(8)});
await url.save();
console.log(url);
res.redirect('/');
 }catch(error){
     console.log(error)
     res.send('error algo falló')
 }
};
const eliminarUrl = async(req,res)=>{
 const {id} = req.params;
    try{
        await Url.findByIdAndDelete(id);
        res.redirect('/');
 }catch(error){
     console.log(error);
     res.send('error algo falló');
 }
};

const editarUrlForm = async (req,res) =>{
    const{id} = req.params;
        try {
        const url = await Url.findById(id).lean();
        console.log(url);
        res.render("home", { url });
    } catch (error) {
        console.log(error);
        res.send("Algo falló");
    }
};

const editarUrl = async (req,res) =>{
    const{id} = req.params;
    const {origin} = req.body;
        try {
        await Url.findByIdAndUpdate(id,{origin:origin}).lean();
        res.redirect('/');
    } catch (error) {
        console.log(error);
        res.send("Algo falló");
    }
};

const redirec = async (req,res) =>{
    const{shortURL} = req.params;
    try{
        const urlDB = await Url.findOne({shortURL:shortURL})
        res.redirec(urlDB.origin);
    }catch (error){

    }
};

module.exports ={
    leerUrls,
    agregarUrl,
    eliminarUrl,
    editarUrl,
    editarUrlForm,
    redirec,
};