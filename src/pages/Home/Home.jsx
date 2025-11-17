import React, { useState } from 'react';
import './Home.css';
import { MdHome, MdSubscriptions, MdOutlineLibraryAddCheck, MdAddCircleOutline } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { FaDesktop, FaCloudArrowDown } from "react-icons/fa6";
import { HiArrowLeftStartOnRectangle } from "react-icons/hi2";
import { BiSolidUserAccount } from "react-icons/bi";
import Search from '../Search/Search';
import { FaYoutube } from "react-icons/fa";
import { useNavigate, useLocation } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  const location = useLocation();

  const username = location.state?.username || "User";
  const firstLetter = username.charAt(0).toUpperCase();

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
    { video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4", title: "Food", channel: "Tasty Bites", views: "2.3M", days: 3 },
    { video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4", title: "Nature", channel: "Nature Vibes", views: "1.8M", days: 3 },
    { video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4", title: "Mountains", channel: "Adventure Life", views: "3.5M", days: 2 },
    { video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4", title: "Flowers", channel: "Floral World", views: "940K", days: 7 },
    { video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4", title: "Workshop", channel: "DIY Garage", views: "930K", days: 9 }
  ];

  const [subscribed, setSubscribed] = useState(Array(videos.length).fill(false));

  const Subscribe = (index) => {
    const updated = [...subscribed];
    updated[index] = !updated[index];
    setSubscribed(updated);
  };

  return (
    <div>
      <div className='Youtube'><p><FaYoutube />Youtube <sup>IN</sup></p></div>
      <div className="sidebar">
        <p><MdHome /> Home</p>
        <p onClick={() => navigate("/Shorts")}><SiYoutubeshorts /> Shorts</p>
        <p onClick={() =>navigate("/Subscription")}><MdSubscriptions /> Subscriptions</p>
        <p onClick={()=>navigate("/library")}><FaDesktop /> History</p>
        <p onClick={() =>navigate("/playlist")}><FaCloudArrowDown /> Playlists</p>
        <p onClick={() =>navigate("/newreels  ")}><MdAddCircleOutline /> New</p>
        <p onClick={()=>navigate("/Logouts")}><HiArrowLeftStartOnRectangle /> Log Out</p>
        <p onClick={()=>navigate("/account")}><BiSolidUserAccount /> Account</p>
      </div>

      <div className="content">
        <Search />
        <div className="user-circle" onClick={() =>navigate('/account')}>{firstLetter}</div>

        <div className="image-grid">
          {videos.map((item, index) => (
            <div key={index} className="image-card">
              <video
                src={item.video}
                controls
                autoPlay
                preload="metadata"
                style={{ borderRadius: "12px", width: "100%" }}
              />
              <p className="title">{item.title}</p>
              <p className="channel">{item.channel}</p>
              <p className="meta">{item.views} views @ {item.days} days ago</p>
              <button
                className={`subscribe-btn ${subscribed[index] ? 'subscribed' : ''}`}
                onClick={() => Subscribe(index)}
              >
                {subscribed[index] ? 'Unsubscribe' : 'Subscribe'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
