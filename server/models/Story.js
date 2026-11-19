
const mongoose = require('mongoose');

const storySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    storyText: {
      type: String,
      required: true,
      minlength: 20,
      maxlength: 1000,
    },
    location: {
      type: String,
      required: true,
      trim: true,
    },
    language: {
      type: String,
      required: true,
      trim: true,
    },
   videoUrl: { type: String, default: '' },
imageUrl: { type: String, default: '' },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Story', storySchema);
