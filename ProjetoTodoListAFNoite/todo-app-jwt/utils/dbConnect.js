import mongoose from "mongoose";

const DATABASE_URL = process.env.DATABASE_URL;

if(!DATABASE_URL) {
    throw new Error(
        "Por favor, defina a variavel DATABASE_URL no arquivo .env.local"
    );
    
}

const connectMongo = async()=>{
    mongoose.connect(DATABASE_URL)
    .then("Conectado com o Mongo")
    .catch(err => console.error(err));
};

export default connectMongo;