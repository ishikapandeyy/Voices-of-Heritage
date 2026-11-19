
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Contribute() {
  const [name, setName] = useState('');
  const [storyTitle, setStoryTitle] = useState('');
  const [storyText, setStoryText] = useState('');
  const [location, setLocation] = useState('');
  const [language, setLanguage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [videoFile, setVideoFile] = useState(null);
const [videoUrl, setVideoUrl] = useState('');
const [imageFile, setImageFile] = useState(null);
const [imageUrl, setImageUrl] = useState('');

  const handleClear = () => {
    const confirmClear = window.confirm(
      'Are you sure you want to clear the form?'
    );

    if (confirmClear) {
      setName('');
      setStoryTitle('');
      setStoryText('');
      setLocation('');
      setLanguage('');
      setSubmitted(false);
    }
  };

 
const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    let uploadedVideoUrl = '';
    let uploadedImageUrl = '';

    // Upload video if selected
    if (videoFile) {
      const formData = new FormData();
      formData.append('file', videoFile);
      formData.append('upload_preset', 'heritage_videos');

      const uploadResponse = await fetch(
        'https://api.cloudinary.com/v1_1/ohmaz5ue/video/upload',
        {
          method: 'POST',
          body: formData,
        }
      );

      const uploadData = await uploadResponse.json();

      if (!uploadResponse.ok) {
        throw new Error(
          uploadData.error?.message || 'Video upload failed'
        );
      }

      uploadedVideoUrl = uploadData.secure_url || '';
    }

    // Upload image if selected
    if (imageFile) {
      const formData = new FormData();
      formData.append('file', imageFile);
      formData.append('upload_preset', 'heritage_videos');

      const uploadResponse = await fetch(
        'https://api.cloudinary.com/v1_1/ohmaz5ue/image/upload',
        {
          method: 'POST',
          body: formData,
        }
      );

      const uploadData = await uploadResponse.json();

      if (!uploadResponse.ok) {
        throw new Error(
          uploadData.error?.message || 'Image upload failed'
        );
      }

      uploadedImageUrl = uploadData.secure_url || '';
    }

    // Save story in MongoDB through the backend
    const response = await fetch(
      '`${import.meta.env.VITE_API_URL}/api/stories`,',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          title: storyTitle,
          storyText,
          location,
          language,
          videoUrl: uploadedVideoUrl,
          imageUrl: uploadedImageUrl,
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Failed to submit story');
    }

    setVideoUrl(uploadedVideoUrl);
    setImageUrl(uploadedImageUrl);
    setSubmitted(true);
    window.scrollTo(0, 0);
  } catch (error) {
    alert(error.message || 'Could not connect to the server.');
  }
};


  return (
    <div className="auth-container">
      <h1>Share Your Story</h1>
      <p>Help preserve your culture and traditions.</p>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            setSubmitted(false);
          }}
          required
        />

        <input
          type="text"
          placeholder="Story Title"
          value={storyTitle}
          onChange={(e) => {
            setStoryTitle(e.target.value);
            setSubmitted(false);
          }}
          required
        />

        <textarea
          placeholder="Write your story here..."
          rows="6"
          minLength={20}
          maxLength={1000}
          value={storyText}
          onChange={(e) => {
            setStoryText(e.target.value);
            setSubmitted(false);
          }}
          required
        />

        {storyText.length > 0 && storyText.length < 20 && (
          <p style={{ color: 'red', fontSize: '13px' }}>
            Please write at least 20 characters.
          </p>
        )}

        <p
          className="character-count"
          style={{
            color: storyText.length >= 900 ? 'red' : '#777'
          }}
        >
          {1000 - storyText.length} characters remaining
        </p>

        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => {
            setLocation(e.target.value);
            setSubmitted(false);
          }}
          required
        />

        <input
          type="text"
          placeholder="Language"
          value={language}
          onChange={(e) => {
            setLanguage(e.target.value);
            setSubmitted(false);
          }}
          required
        />

        <label htmlFor="story-video">Upload Story Video (optional)</label>
<input
  id="story-video"
  type="file"
  accept="video/*"
  onChange={(e) => {
    setVideoFile(e.target.files[0] || null);
    setVideoUrl('');
    setSubmitted(false);
  }}
/>
{videoFile && (
  <p>Selected video: {videoFile.name}</p>
)}


<label htmlFor="story-image">Upload Story Image (optional)</label>
<input
  id="story-image"
  type="file"
  accept="image/*"
  onChange={(e) => {
    setImageFile(e.target.files[0] || null);
    setImageUrl('');
    setSubmitted(false);
  }}
/>

{imageFile && (
  <p>Selected image: {imageFile.name}</p>
)}


        <button type="submit">Submit Story</button>

        <button type="button" onClick={handleClear}>
          Clear Form
        </button>
      </form>

      {submitted && (
        <p className="success-message">
          Your story has been submitted successfully!
        </p>
      )}

      {(name || storyTitle || storyText || location || language) && (
        <div className="story-preview">
          <h2>Story Preview</h2>
          <p>
            <strong>Contributor:</strong> {name}
          </p>
          <h3>{storyTitle}</h3>
          <p>{storyText}</p>
          <p>📍 {location}</p>
          <p>🗣️ {language}</p>
        </div>
      )}

      <p>
        <Link to="/">← Back to Home</Link>
      </p>
    </div>
  );
}

export default Contribute;
