import  mongoose  from "mongoose";

const inventorySchema = new mongoose.Schema(
    {
    description: {
        type: String,
        require: true,
    },
    nf: {
        type: String,
        require: true,
        unique: true
    },
    date: {
        type: Date,
        require: true
    },
    photos: {
        type: [String],
        require: true
    }
    },{timestamps: true}
)

const Inventory = mongoose.model("Inventory", inventory)

export default Inventory
