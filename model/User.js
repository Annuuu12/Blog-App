import mongoose from "mongoose";


const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    blogs: [{
        type: mongoose.Types.ObjectId,
        ref: "Blog",
        required: true
    }]
}, {
    timestamps: true // added to automatically manage `createdAt` and `updatedAt` fields
});
export default mongoose.model("User", userSchema);
// users





