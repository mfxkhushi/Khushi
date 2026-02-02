import React, { useState } from 'react';
import './Videos.css';
import Video from '../../assets/video/Khushi.mp4'

function Videos() {
  const [zoomedVideo, setZoomedVideo] = useState(null);

  const videos = [
    {
      id: 1,
      src: Video,
      title: 'Sample Video 1'
    }
    // Add more videos as needed
  ];

  const handleVideoClick = (video) => {
    setZoomedVideo(video);
    document.body.style.overflow = 'hidden';
  };

  const closeZoom = () => {
    setZoomedVideo(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="videos-gallery-container">
      <h2>Videos</h2>
      <div className="video-grid">
        {videos.map((video) => (
          <video
            key={video.id}
            className="video-thumb"
            src={video.src}
            controls
            onClick={() => handleVideoClick(video)}
          />
        ))}
      </div>

      {zoomedVideo && (
        <div className="video-zoom-overlay" onClick={closeZoom}>
          <div className="zoomed-video-wrapper" onClick={(e) => e.stopPropagation()}>
            <button className="close-video-btn" onClick={closeZoom}>✕</button>
            <video
              className="zoomed-video"
              src={zoomedVideo.src}
              controls
              autoPlay
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Videos;
