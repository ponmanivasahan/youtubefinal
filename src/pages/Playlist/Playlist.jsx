import React from "react";
import "./Playlist.css";
import { RiArrowGoBackLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

function Playlist() {
  const navigate=useNavigate()
  
 const videos = [
  { video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4", title: "Food", channel: "Tasty Bites", views: "2.3M", days: 3 },
  { video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4", title: "Nature", channel: "Nature Vibes", views: "1.8M", days: 3 },
  { video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4", title: "Mountains", channel: "Adventure Life", views: "3.5M", days: 2 },
  { video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4", title: "Flowers", channel: "Floral World", views: "940K", days: 7 },
  { video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4", title: "Education", channel: "Smart Learn", views: "4.2M", days: 5 },
  { video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4", title: "Beach", channel: "Ocean Stories", views: "1.1M", days: 4 },
  { video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4", title: "Books", channel: "Book Haven", views: "2.9M", days: 8 },
  { video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4", title: "City", channel: "Urban Lens", views: "5.3M", days: 1 },
  { video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4", title: "Forest", channel: "Green Planet", views: "2.5M", days: 9 },
  { video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4", title: "Animals", channel: "Wild Wonders", views: "6.8M", days: 2 },
  { video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4", title: "People", channel: "Daily Faces", views: "3.1M", days: 5 },
   { video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4", title: "Animals", channel: "Wild Wonders", views: "6.8M", days: 2 },
  { video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4", title: "People", channel: "Daily Faces", views: "3.1M", days: 5 },
 { video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4", title: "Beach", channel: "Ocean Stories", views: "1.1M", days: 4 },
  { video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4", title: "Architecture", channel: "Design Vision", views: "1.4M", days: 10 },
  { video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerWonders.mp4", title: "Art", channel: "Creative Minds", views: "2.0M", days: 6 },
 ]

 

  return (
    <div className="subscriptions-page">
      <div className="sub-grid">
        {videos.map((v, i) => (
          <div className="sub-card" key={i}>
            <video src={v.video} controls />
            <div className="sub-info">
              <h3>{v.title}</h3>
              <p>{v.channel}</p>
              <p className="views">{v.views} • {v.days}</p>
            </div>
          </div>
        ))}
      </div>
          <footer className="footer">
        <button className="back-btn" onClick={() => navigate(-1)}>
          <RiArrowGoBackLine size={24} />
        </button>
      </footer>
    </div>
  );
}

export default Playlist;
