import  mongoose  from "mongoose";

const userSchema = new mongoose.Schema(
    {
        fullname:{
            type: String,
            require: true,
            unique: true
        },
        profilePicture:{
            type: String,
            default: ""
        },
        password:{
            type: String,
            require: true,
            minlength: 6
        },
        gender:{
            type: String,
            require: true,
            enum: ["Man", "Woman", "No-binary"]
        },
        inventory: [
            {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Inventory",
            }
        ]
    }, {timestamps: true} // CreatedAt e UpdatadAt
);


const User = mongoose.model('User', userSchema)

export default User;