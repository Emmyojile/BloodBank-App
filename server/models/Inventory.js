import mongoose from "mongoose";

const inventorySchema = new mongoose.Schema(
  {
    inventoryType: {
      type: String,
      required: true,
      enum: ["in", "out"],
    },
    bloodGroup: {
      type: String,
      required: true,
      enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
    },
    quantity: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    organization: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "organization",
      required: true,
    },

    // if inventoryType is 'out' then hospital will be set
    hospital: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users",
        required: function () {
            return this.inventoryType === "out";
        },
    },
    // if inventoryType is 'in' then donor will be set
    donor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
      required: function () {
        return this.inventoryType === "in";
      },
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("inventories", inventorySchema);
