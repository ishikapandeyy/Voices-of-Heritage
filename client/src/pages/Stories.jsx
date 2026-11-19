import { useEffect, useState } from 'react';

function Stories() {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/api/stories')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to load stories');
        }
        return response.json();
      })
      .then((data) => {
        setStories(data);
        setLoading(false);
      })
      .catch(() => {
        setError('Could not load stories. Please try again.');
        setLoading(false);
      });
  }, []);

  return (
    <div className="stories-container">
      <header className="stories-header">
        <h1>Explore Stories</h1>
        <p>Discover the traditions, culture, and stories of our heritage.</p>
      </header>

      {loading && <p className="stories-message">Loading stories...</p>}
      {error && <p className="stories-message">{error}</p>}

      {!loading && !error && stories.length === 0 && (
        <p className="stories-message">No stories have been shared yet.</p>
      )}

      {!loading && !error && stories.length > 0 && (
        <div className="stories-grid">
          {stories.map((story) => (
            <article className="story-card" key={story._id}>
              <h2>{story.title}</h2>
              

{story.videoUrl ? (
  <video
    controls
    preload="metadata"
    style={{
      width: '100%',
      maxHeight: '300px',
      borderRadius: '10px',
      marginBottom: '16px',
      backgroundColor: '#000',
    }}
  >
    <source src={story.videoUrl} type="video/mp4" />
    Your browser does not support video playback.
  </video>
) : story.imageUrl ? (
  <img
    src={story.imageUrl}
    alt={story.title}
    style={{
      width: '100%',
      maxHeight: '300px',
      objectFit: 'cover',
      borderRadius: '10px',
      marginBottom: '16px',
    }}
  />
) : null}

              <p className="story-text">{story.storyText}</p>

              <div className="story-details">
                <p><strong>Contributor:</strong> {story.name}</p>
                <p><strong>Location:</strong> {story.location}</p>
                <p><strong>Language:</strong> {story.language}</p>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}

export default Stories;