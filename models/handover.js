import { Schema, model, models } from "mongoose";

const HandoverSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  handover: {
    type: String,
    required: [true, "Handover is required"],
  },
  tag: {
    type: String,
    required: [true, "Tag is required!"],
  },
});

const Handover = models.Handover || model("Handover", HandoverSchema);

export default Handover;
