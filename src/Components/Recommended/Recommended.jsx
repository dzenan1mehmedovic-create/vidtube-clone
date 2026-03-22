import React from "react";
import { Link } from "react-router-dom";
import "./Recommended.css";

const Recommended = () => {
  const recommendedVideos = [
    {
      id: 11,
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
      title: "Best channel to learn coding that helps you grow fast",
      channel: "GreatStack",
      views: "199K Views",
    },
    {
      id: 12,
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
      title: "React full course for complete beginners",
      channel: "Code Studio",
      views: "88K Views",
    },
    {
      id: 13,
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",
      title: "JavaScript roadmap and what to learn first",
      channel: "Dev World",
      views: "54K Views",
    },
    {
      id: 14,
      image:
        "https://images.unsplash.com/photo-1542751110-97427bbecf20?q=80&w=1200&auto=format&fit=crop",
      title: "Build projects that make your portfolio stronger",
      channel: "Frontend Lab",
      views: "320K Views",
    },
    {
      id: 15,
      image:
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1200&auto=format&fit=crop",
      title: "Learn frontend development with real-world examples",
      channel: "Tech Learn",
      views: "121K Views",
    },
    {
      id: 16,
      image:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200&auto=format&fit=crop",
      title: "How to become better at React by building projects",
      channel: "React Master",
      views: "267K Views",
    },
  ];

  return (
    <div className="recommended">
      {recommendedVideos.map((video) => (
        <Link to={`/video/20/${video.id}`} className="side-video-list" key={video.id}>
          <img src={video.image} alt="" />

          <div className="vid-info">
            <h4>{video.title}</h4>
            <p>{video.channel}</p>
            <p>{video.views}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Recommended;