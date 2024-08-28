import { Schema, model } from 'mongoose';




const CarSchema = new Schema({
    make: { type: String, require: true },
    model: { type: String, require: true },
    year: { type: String, require: true },
    color: { type: String, require: true },
    userId: { type: Schema.Types.ObjectId, ref: "users" },
    created_at: { type: Date, default: Date.now() },

});


export default model("cars", CarSchema);