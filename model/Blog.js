import mongoose from "mongoose";

const Schema = mongoose.Schema;

const blogSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    image: {
        type: String,
        required: true,
        trim: true
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: true,
    }
}, {
    timestamps: true // added to automatically manage `createdAt` and `updatedAt` fields
});

export default mongoose.model("Blog", blogSchema);