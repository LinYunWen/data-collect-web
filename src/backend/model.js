const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const favoriteSchema = new Schema(
    {
        url: String,
        image: String,
        title: String,
        subtitle: String,
        description: String
    },
    { timestamps: true }
);

// export the new Schema so we could modify it using Node.js
module.exports = {
    favorite: mongoose.model("favorite", favoriteSchema)
};