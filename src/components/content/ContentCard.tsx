"use client";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link"; 

const cards = [
  {
    id: 1,
    title: "Personal training",
    description:
      "Get one-on-one coaching with customized workout plans designed to meet your specific fitness goal.",
    image: "/card/personalTraining.png",
    link: "/personal_training",
  },
  {
    id: 2,
    title: "Nutritional guidance",
    description:
      "Receive expert advice on meal planning and nutrition to complement your trainer.",
    image: "/card/nutrition.png",
    link: "/nutritional_guidance",
  },
  {
    id: 3,
    title: "Online Coaching",
    description:
      "Achieve your fitness goals from the comfort of your home with virtual training sessions.",
    image: "/card/online.png",
    link: "/online_coaching",
  },
  {
    id: 4,
    title: "Stress Management",
    description:
      "Blend fitness with mindfulness through meditation, deep breathing, and stretching to reduce stress and enhance overall well-being.",
    image: "/card/stressManagement.png",
    link: "/stress_management",
  },
  {
    id: 5,
    title: "Fitness Challenges",
    description:
      "Take on fun fitness challenges designed to push your limits and build lasting habits.",
    image: "/card/fitnessChallange.png",
    link: "/fitness_challenges",
  },
  {
    id: 6,
    title: "Prenatal Fitness",
    description:
      "Safe and gentle workouts tailored for expecting mothers to stay active and healthy throughout pregnancy.",
    image: "/card/prenatalFitness.png",
    link: "/prenatal_fitness",
  },
];

export default function ContentCard() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (direction: "left" | "right") => {
    const container = scrollRef.current;
    if (container) {
      const scrollAmount = 420;
      const maxScrollLeft = container.scrollWidth - container.clientWidth;

      if (direction === "right") {
        if (Math.ceil(container.scrollLeft + 1) >= maxScrollLeft) {
          container.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          container.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
      } else {
        container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      }
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto p-4 mt-10">
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-extrabold text-4xl font-sans">What’s your fitness dream?</h2>
        <div className="flex gap-2">
          <button
            onClick={() => scrollByCard("left")}
            className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 text-black cursor-pointer"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={() => scrollByCard("right")}
            className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 text-black cursor-pointer"
          >
            <ChevronRight />
          </button>
        </div>
      </div>

      <div ref={scrollRef} className="overflow-x-auto scroll-smooth">
        <div className="flex gap-6 px-5 my-10">
          {cards.map((card) => (
            <Link key={card.id} href={card.link}>
              <div className="shrink-0 w-[400px] h-[550px] group transition-transform relative cursor-pointer">
                <div className="bg-[#eff2e9] shadow-md rounded-xl overflow-hidden flex flex-col h-full w-full transform group-hover:scale-100 group-hover:z-0 hover:scale-105 hover:z-10 transition-transform duration-300">
                  <div className="p-6 font-mono">
                    <h3 className="text-xl font-bold text-black mb-3">
                      {card.title}
                    </h3>
                    <p className="text-[#143634] text-base">{card.description}</p>
                  </div>
                  <div className="h-full w-full">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
