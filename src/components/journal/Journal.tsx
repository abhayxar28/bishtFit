"use client";
import { useState } from "react";

const posts = [
  {
    id: 1,
    username: "bist.fit",
    text: "Remember this: Face pull setups offer different angles to target muscles uniquely. For better posture and restoration, do face pulls every day, cycling through different variations. To achieve the best results for shoulder health and performance, mix up the angle of pull, the equipment used, and the rep ranges.",
    date: "April 15",
    hashtags: ["#FacePulls", "#ShoulderHealth"],
    likes: 1247,
    comments: 42,
    color: "bg-yellow-400",
    video: "video/video1.mp4",
  },
  {
    id: 2,
    username: "bist.fit",
    text: "Are you wasting your time training your external obliques with weights in both hands? It might be time for a change. Instead of swinging like a pendulum, try this: hold a weight in one hand and bend laterally. This targeted approach can effectively train your obliques for better results. Say goodbye to wasted efforts and hello to a smarter workout routine!",
    date: "April 9",
    hashtags: ["#CoreTraining", "#ObliqueWorkout"],
    likes: 3156,
    comments: 129,
    color: "bg-purple-400",
    video: "video/video2.mp4",
  },
  {
    id: 3,
    username: "bist.fit",
    text: "Trying triceps extensions with support like this could really shake up your routine. It made a huge difference for me, I used to feel my shoulders getting tired before my triceps did. Just make sure the cable is set slightly above or behind your shoulder for the best angle.",
    date: "April 3",
    hashtags: ["#TricepsWorkout", "#beginers"],
    likes: 2704,
    comments: 98,
    color: "bg-pink-400",
    video: "video/video3.mp4",
  },
];

export default function Journal() {
  const [expanded, setExpanded] = useState<{ [key: number]: boolean }>({});

  const toggleReadMore = (id: number) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "...";
  };

  return (
    <div className="w-full max-w-screen-xl mx-auto px-4 py-10 bg-[#000000] text-white">
      <h1 className="text-center text-5xl font-bold mb-2 font-mono text-[#cef522]">
        My Fitness Journal 🏋️
      </h1>
      <div className="text-center text-2xl font-mono mb-8">Daily workouts, nutrition tips & progress</div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {posts.map((post) => {
          const igUrl = `https://www.instagram.com/${post.username}/`;
          const isExpanded = expanded[post.id];

          return (
            <div
              key={post.id}
              className="relative bg-black rounded-xl shadow-lg w-full max-w-sm overflow-hidden aspect-[9/16] flex items-center justify-center"
            >
              <video
                src={post.video}
                className="absolute top-0 left-0 w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              />

              <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/90 to-transparent px-4 pb-4 pt-10 z-10 text-white flex flex-col justify-end">
                <span className="font-semibold text-sm">@{post.username}</span>

                <p className="text-sm mt-1">
                  {isExpanded ? post.text : truncateText(post.text, 100)}{" "}
                  {post.text.length > 100 && (
                    <button
                      onClick={() => toggleReadMore(post.id)}
                      className="text-[#cef522] font-semibold focus:outline-none"
                    >
                      {isExpanded ? "Read less" : "Read more"}
                    </button>
                  )}
                </p>

                <div className="flex flex-wrap gap-1 text-xs mt-1 text-gray-300">
                  {post.hashtags.map((tag, i) => (
                    <span key={i}>{tag}</span>
                  ))}
                </div>
              </div>

              {/* Floating actions */}
              <div className="absolute right-2 bottom-20 flex flex-col items-center space-y-4 text-white z-10">
                <a
                  href={igUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center hover:scale-110 transition"
                >
                  <span className="text-xl">❤️</span>
                  <span className="text-xs">{post.likes}</span>
                </a>
                <a
                  href={igUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center hover:scale-110 transition"
                >
                  <span className="text-xl">💬</span>
                  <span className="text-xs">{post.comments}</span>
                </a>
                <a
                  href={igUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl hover:scale-110 transition"
                >
                  🔖
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
