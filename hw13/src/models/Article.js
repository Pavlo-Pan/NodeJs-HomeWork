import mongoose from "mongoose";    
import { ref } from "yup";
const articleSchema = new mongoose.Schema({
    title: String,
    content: String,
    tags: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Tag"
    }], 
})
const Article = mongoose.model("Article", articleSchema);
export default Article;