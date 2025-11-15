import React from "react";
import "./Library.css";
import { useNavigate, useLocation } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";


function History() {
  const navigate = useNavigate();
  const location = useLocation();

  const username = location.state?.username || "User";
  const firstLetter = username.charAt(0).toUpperCase();

  const historyVideos = [
    {
      video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      title: "Big Buck Bunny",
      channel: "Bunny Studio",
      views: "12M",
      days: 1,
    },
    {
      video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      title: "Elephant's Dream",
      channel: "Dream Animations",
      views: "4.5M",
      days: 3,
    },
    {
      video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
      title: "Sintel",
      channel: "Open Movies",
      views: "7.8M",
      days: 5,
    },
  ];

  return (
    <div className="history-main">
      <div className="history-header">
        <BiArrowBack
          className="back-btn"
          onClick={() => navigate("/home")}
        />
        <h2>Watch History</h2>
        <div className="history-user-icon" onClick={() =>navigate('/account')}>{firstLetter}</div>
      </div>
      <div className="history-section-title">Recently Watched</div>
      <div className="history-grid">
        {historyVideos.map((item, index) => (
          <div key={index} className="history-card">
            <video
              src={item.video}
              controls
              preload="metadata"
              className="history-thumbnail"
            ></video>
            <div className="history-info">
              <p className="history-title-text">{item.title}</p>
              <p className="history-channel">{item.channel}</p>
              <p className="history-meta">{item.views} views • {item.days} days ago</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default History;
