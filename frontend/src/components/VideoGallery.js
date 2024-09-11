import React from "react";
import styled from "styled-components";

const VideoGalleryWrapper = styled.div`
  padding: 30px;
  background-color: #f8f9fa;

  h1 {
    text-align: center;
    color: #2c3e50;
    margin-bottom: 30px;
  }

  .video-gallery-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-gap: 15px;
  }

  .video-item {
    position: relative;
    overflow: hidden;
    border-radius: 15px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  }

  .video-item iframe {
    width: 100%;
    height: 250px; /* Fixed height for the video */
    border-radius: 15px; /* Ensures the video also has rounded corners */
  }
`;

function VideoGallery() {
  const videos = [
    {
      url: "https://fb.watch/uwVZnO698N/",
      title: "Facebook Video 1",
    },
    {
      url: "https://fb.watch/uwUKH8byxo/",
      title: "Facebook Video 1",
    },
    {
      url: "https://fb.watch/uwVSWgPKOJ/",
      title: "Facebook Video 1",
    },
    {
      url: "https://fb.watch/uwUKH8byxo/",
      title: "Facebook Video 1",
    },
    // Add more video links later
  ];

  return (
    <VideoGalleryWrapper>
      <h1>Video Gallery</h1>
      <div className="video-gallery-grid">
        {videos.map((video, index) => (
          <div className="video-item" key={index}>
            <div
              className="fb-video"
              data-href={video.url}
              data-width="500"
              data-show-text="false"
            >
              <iframe
                src={`https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(
                  video.url
                )}&show_text=false&width=500`}
                title={video.title}
                allowFullScreen={true}
                frameBorder="0"
              ></iframe>
            </div>
          </div>
        ))}
      </div>
    </VideoGalleryWrapper>
  );
}

export default VideoGallery;
