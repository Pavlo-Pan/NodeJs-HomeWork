import mongoose from "mongoose";    
const tagSchema = new mongoose.Schema({
    name: String,
    article: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Article"
    }]
})
const Tag = mongoose.model("Tag", tagSchema);
export default Tag;