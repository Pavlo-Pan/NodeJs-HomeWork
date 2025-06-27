import mongoose from "mongoose";
const magazineSchema = new mongoose.Schema({
    title: String,
    issueNumbe: Number,
    publisher: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Publisher",
    }
})
const Magazine = mongoose.model("Magazine", magazineSchema);
export default Magazine;