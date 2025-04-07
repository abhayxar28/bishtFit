// BlogCard.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';

const cards = [
  {
    id: 1,
    title: "What’s a Proper Meal? A Guide for Indians Who Want to Eat Clean and Train Hard",
    description:
      "Discover what makes a “proper” meal, and how you can build one using Indian staples — no fad diets, just clean eating with real food.",
    image: "/card/personalTraining.png",
    link: "/blogs/blog1",
  },
  {
    id: 2,
    title: "Fitness Roadmap: Simple Exercises to Start Your Journey (Beginner Friendly)",
    description:
      "Want to get fit but don’t know where to start? Here’s a simple beginner-friendly roadmap to ease into exercise and build a solid fitness habit — no equipment needed.",
    image: "/card/nutrition.png",
    link: "/blogs/blog2",
  },
  {
    id: 3,
    title: "Top 7 Summer Drinks to Keep You Cool & Fit (Indian Edition)",
    description:
      "Beat the summer heat with these desi, fitness-friendly drinks that hydrate, energize, and help you stay in shape. Easy recipes included!",
    image: "/card/online.png",
    link: "/blogs/blog3",
  },
  {
    id: 4,
    title: "Top Gym Exercises Every Beginner Should Master",
    description:
      "New to the gym? Here’s a beginner-friendly list of the best gym exercises to start your fitness journey right. Build strength, burn fat, and stay consistent!",
    image: "/card/stressManagement.png",
    link: "/blogs/blog4",
  },
  {
    id: 5,
    title: "Leg Day Done Right: The Ultimate Lower Body Workout Guide for All Levels",
    description:
      "Skip leg day? Never again. Discover the best leg exercises, why training legs matters, and how to build strong, powerful lower body strength.",
    image: "/card/fitnessChallange.png",
    link: "/blogs/blog5",
  },
  {
    id: 6,
    title: "Safe & Strong: Best Exercises for a Healthy Pregnancy in Every Trimester",
    description:
      "Discover the safest and most effective exercises for pregnant women. Learn what to do, what to avoid, and how to stay active through all trimesters—designed especially for Indian moms-to-be.",
    image: "/card/prenatalFitness.png",
    link: "/blogs/blog6",
  },
];

export default function BlogCard({ limit }: { limit?: number }) {
  const blogsToShow = limit ? cards.slice(0, limit) : cards;

  return (
    <div className="bg-black text-white px-6 pt-12 pb-16">
      <div className="text-center text-lime-400 text-4xl md:text-5xl font-bold font-mono mb-8">
        <h1>Fitness Blogs</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {blogsToShow.map((card) => (
          <div
            key={card.id}
            className="bg-zinc-900 rounded-xl overflow-hidden shadow-lg hover:shadow-lime-400/30 transition duration-300"
          >
            <div className="relative w-full h-52">
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-5">
              <h2 className="text-lime-400 font-bold text-lg mb-2">
                {card.title}
              </h2>
              <p className="text-gray-300 text-sm mb-4">{card.description}</p>
              <Link href={card.link}>
                <span className="text-lime-400 hover:underline cursor-pointer text-sm font-medium">
                  Learn More
                </span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

