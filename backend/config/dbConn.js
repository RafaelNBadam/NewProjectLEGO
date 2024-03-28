import  mongoose from "mongoose";

const dbConn = async () =>{
    try{
        await mongoose.connect(process.env.MONGO_DB_URI)
    } catch(err){
        console.log("Error in MongoDB: ", err)
    }
};

export default dbConn;