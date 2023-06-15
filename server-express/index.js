import express from 'express'
import mongoose from "mongoose";
import fileUpload from 'express-fileupload'
import router from './Router.js'


const app = express();

const PORT = process.env.PORT | 4444;
const password = `velichvelich23102004`;

app.use(express.json())
app.use(express.static('static'))
app.use(fileUpload({}))
app.use('/api', router)

const start = async () =>{
    try{
        await mongoose.connect(`mongodb+srv://zashitacontact:${password}@cluster0.cyulioc.mongodb.net/?retryWrites=true&w=majority`)
        app.listen(PORT, ()=>{
            console.log(`Server startd on port ${PORT}`)
        })
    } catch (e) {
        console.log(e)
    }
}

start()
