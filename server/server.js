const Story = require('./models/Story');
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB connected successfully!');
  })
  .catch((error) => {
    console.error('MongoDB connection failed:', error.message);
  });

app.get('/', (req, res) => {
  res.send('Voices of Heritage Backend is running!');
});


app.post('/api/stories', async (req, res) => {
  try {
    const {
      name,
      title,
      storyText,
      location,
      language,
      videoUrl,
      imageUrl,
    } = req.body;

    console.log('Received video URL:', videoUrl);
    console.log('Received image URL:', imageUrl);

    const newStory = new Story({
      name,
      title,
      storyText,
      location,
      language,
      videoUrl,
      imageUrl,
    });

    const savedStory = await newStory.save();

    res.status(201).json({
      message: 'Story saved successfully!',
      story: savedStory,
    });
  } catch (error) {
    res.status(400).json({
      message: 'Failed to save story.',
      error: error.message,
    });
  }
});




app.get('/api/stories', async (req, res) => {
  console.log("MY UPDATED SERVER.JS IS RUNNING");
  try {
    const stories = await Story.find().sort({ createdAt: -1 });
    res.json(stories);
  
} catch (error) {
  console.error('Fetch stories error:', error);

  res.status(500).json({
    message: 'Failed to fetch stories',
    error: error.message,
  });
 }
});


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

