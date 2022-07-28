import mongoose, { Schema, SchemaTypes } from "mongoose";

const PostSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Gönderinin bir başlığı olmalı'],
        unique: true
    },
    content: {
        type: String,
        required: [true, 'Gönderinin içeriği olmalı']
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
    isTemplate: {
        type: Boolean,
        default: false
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
})

const Post = mongoose.models.Post || mongoose.model('Post', PostSchema)
export default Post