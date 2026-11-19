import Login from './pages/Login.jsx';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import './App.css';
import Stories from './pages/Stories.jsx';
import Register from './pages/Register.jsx';
import Contribute from './pages/Contribute.jsx';

function App() {
  const location = useLocation();

  return (
    <div>
      <Navbar />

      {location.pathname === '/stories' ? (
        <Stories />
      ) : location.pathname === '/login' ? (
        <Login />
      ) : location.pathname === '/register' ? (
        <Register />
      ) : location.pathname === '/contribute' ? (
        <Contribute />
      ) : (
        <>
          <main>
            <section className="hero" id="about">
              <div className="hero-content">
                <span className="hero-eyebrow">
                  VOICES • CULTURE • LEGACY
                </span>

                <h1>
                  Every story holds
                  <br />
                  a piece of <em>our heritage.</em>
                </h1>

                <p>
                  Discover the memories, traditions, and voices
                  that connect generations. Together, we can preserve
                  the stories that deserve to live forever.
                </p>

                <div className="hero-actions">
                  <button
                    onClick={() => (window.location.href = '/stories')}
                  >
                    Explore Stories <span aria-hidden="true">↗</span>
                  </button>

                  <a href="#featured">Discover our heritage ↓</a>
                </div>
              </div>

              <div className="hero-image">
                <img
                  src="https://images.stockcake.com/public/7/3/5/735c8939-8666-4d2e-8b25-9aef6961ad87_large/diverse-cultural-tapestry-stockcake.jpg"
                  alt=" cultural heritage"
                />

                <div className="hero-image-caption">
                  <span>OUR HERITAGE, OUR HISTORY</span>
                  <span>01 — PRESERVE</span>
                </div>
              </div>

              <div className="hero-bottom">
                <span>ROOTED IN THE PAST</span>
                <span>KEPT ALIVE FOR TOMORROW</span>
              </div>
            </section>

            <section className="stories featured-section" id="featured">
              <div className="section-heading">
                <div>
                  <span className="section-eyebrow">A LIVING ARCHIVE</span>
                  <h2>Stories worth remembering.</h2>
                </div>

                <p>
                  Behind every tradition is a memory.
                  Behind every memory, a voice waiting to be heard.
                </p>
              </div>

              <div className="story-list">
                <article className="story-card">
                  <div className="story-image">
                    <img
                      src="https://indiawonderland.com/wp-content/uploads/2026/02/rajasthan-culture-and-adventure-travel-experience.webp"
                      alt="An ancient tree surrounded by forest"
                    />
                    <span className="story-number">01</span>
                  </div>
                  <div className="story-card-content">
                    <span className="story-category">Rajasthan Tribal & Folk Arts </span>
                    <h3>Kathputli is a centuries-old art</h3>
                    <p>
                     Rajasthan tribal and folk arts luxury tour provides a detailed 
                     and uninterrupted cultural journey.
                    </p>
                    <span className="story-location">⌖ Central India · Hindi</span>
                  </div>
                </article>

                <article className="story-card">
                  <div className="story-image">
                    <img
                      src="https://tailormadejourney.com/wp-content/uploads/2021/01/Aarti-Ceremony-Varanasi-India.jpg"
                      alt="A traditional musical performance"
                    />
                    <span className="story-number">02</span>
                  </div>
                  <div className="story-card-content">
                    <span className="story-category">Ganga Aarti</span>
                    <h3>The world famous Ganga Aarti</h3>
                    <p>Varanasi’s name is derived from the confluence of two rivers, 
                      the Varuna and the Assi, which flow into the Ganges.
                    </p>
                    <span className="story-location">⌖ Chhattisgarh · Chhattisgarhi</span>
                  </div>
                </article>

                <article className="story-card">
                  <div className="story-image">
                    <img
                      src="https://www.alphonsostories.com/AlphonSoStoriesImages/BlogImage/bharatnatyam-chennai-india.jpg"
                      alt="Bharatnatyam Performance"
                    />
                    <span className="story-number">03</span>
                  </div>
                  <div className="story-card-content">
                    <span className="story-category">Bharatnatyam Performance</span>
                    <h3>Cultural Treasures of Chennai</h3>
                    <p>
                      A traditional Bharatnatyam dance performance in the vibrant city of Chennai.
                    </p>
                    <span className="story-location">⌖ Tamil Nadu · Tamil</span>
                  </div>
                </article>
              </div>

              <div className="featured-footer">
                <p>Every voice matters. Every memory belongs.</p>
                <button
                  className="text-button"
                  onClick={() => (window.location.href = '/stories')}
                >
                  Explore all stories <span aria-hidden="true">→</span>
                </button>
              </div>
            </section>

            <section className="share-section" id="share">
              <div>
                <span className="section-eyebrow">YOUR STORY MATTERS</span>
                <h2>
                  The past lives on
                  <br />
                  through <em>your voice.</em>
                </h2>
                <p>
                  Share a memory, a tradition, or a story from your
                  community. Help future generations discover where
                  they come from.
                </p>
              </div>

              <button
                onClick={() => (window.location.href = '/contribute')}
              >
                Share Your Story <span aria-hidden="true">↗</span>
              </button>
            </section>
          </main>

          <footer className="footer">
            <p>© 2026 Voices of Heritage</p>
            <p>Preserving our stories, culture, and traditions.</p>
          </footer>
        </>
      )}
    </div>
  );
}

export default App;