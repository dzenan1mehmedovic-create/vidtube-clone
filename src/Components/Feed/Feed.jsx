import React from "react";
import { Link } from "react-router-dom";
import "./Feed.css";

const Feed = ({ category }) => {
  const videos = [
    {
      id: 1,
      category: 20,
      image:
        "https://images.unsplash.com/photo-1542751110-97427bbecf20?q=80&w=1200&auto=format&fit=crop",
      title: "Best YouTube Channel To Learn Web Development",
      channel: "GreatStack",
      views: "199K Views",
      time: "2 days ago",
    },
    {
      id: 2,
      category: 10,
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
      title: "Top 10 React Project Ideas For Beginners",
      channel: "Code Master",
      views: "85K Views",
      time: "5 days ago",
    },
    {
      id: 3,
      category: 17,
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
      title: "How To Build A Full Website Using React JS",
      channel: "Dev Studio",
      views: "312K Views",
      time: "1 week ago",
    },
    {
      id: 4,
      category: 28,
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",
      title: "JavaScript Crash Course 2026",
      channel: "Tech World",
      views: "540K Views",
      time: "3 weeks ago",
    },
    {
      id: 5,
      category: 2,
      image:
        "https://images.unsplash.com/photo-1489824904134-891ab64532f1?q=80&w=1200&auto=format&fit=crop",
      title: "Best Cars Coming This Year",
      channel: "Auto Zone",
      views: "110K Views",
      time: "6 days ago",
    },
    {
      id: 6,
      category: 25,
      image:
        "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1200&auto=format&fit=crop",
      title: "Latest World News Update Today",
      channel: "News Daily",
      views: "450K Views",
      time: "1 day ago",
    },
  ];

  const filteredVideos =
    category === 0 ? videos : videos.filter((video) => video.category === category);

  return (
    <div className="feed">
      {filteredVideos.map((video) => (
        <Link
          to={`/video/${video.category}/${video.id}`}
          className="card"
          key={video.id}
        >
          <img src={video.image} alt="" />
          <h2>{video.title}</h2>
          <h3>{video.channel}</h3>
          <p>
            {video.views} • {video.time}
          </p>
        </Link>
      ))}
    </div>
  );
};

export default Feed;