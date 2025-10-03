import mongoose from "mongoose";

const Schema = mongoose.Schema;
const ObjeectId = mongoose.Types.ObjectId;

const deckSchema = new Schema({
    title: String,
});

export default mongoose.model("Deck", deckSchema);