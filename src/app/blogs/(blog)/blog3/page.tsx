import Link from "next/link";
import React from "react";

export default function SummerFitnessDrinks() {
  return (
    <div>
      <div className="max-w-4xl mx-auto px-4 pt-6">
        <Link href="/blogs" className="text-lime-400 flex items-center gap-2 mb-4">
          <span className="text-2xl flex items-center">←</span>
          <span className="text-lg font-bold hover:underline">Back to Blogs</span>
        </Link>
      </div>
      <div className="max-w-5xl mx-auto px-4 py-10 text-white">
        {/* Banner Image */}
        <div className="rounded-2xl overflow-hidden mb-8 shadow-lg border border-gray-700">
          <img
            src="/card/online.png"
            alt="Summer Fitness Drinks"
            className="w-full h-64 object-cover"
          />
        </div>

        {/* Heading */}
        <h1 className="text-4xl font-bold mb-2">
          ☀️ Top 7 Summer Drinks to Keep You Cool & Fit (Indian Edition)
        </h1>
        <p className="text-xl text-gray-400 mb-8">
          Beat the summer heat with these desi, fitness-friendly drinks that hydrate, energize, and help you stay in shape. Easy recipes included!
        </p>

        {/* Description */}
        <section className="space-y-6">
          <p>
            Summer is here — and so is the scorching heat! 🥵 Staying hydrated is non-negotiable in these months, especially if you're into workouts, running, or even just walking under the sun.
          </p>
          <p>
            But here’s the good news: hydration doesn’t have to be boring. From traditional Indian drinks to modern twists, here are 7 healthy summer coolers that refresh you without added sugar or empty calories.
          </p>

          {/* Drinks Section */}
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            {[
              {
                title: "🥤 1. Nimbu Pani (Lemon Water)",
                points: [
                  "Packed with Vitamin C",
                  "Balances electrolytes with salt & sugar",
                  "Refreshes after workouts",
                ],
                tip: "Add mint, a pinch of black salt, or chia seeds for a twist.",
              },
              {
                title: "🧉 2. Coconut Water",
                points: [
                  "Natural electrolyte powerhouse",
                  "Low in calories",
                  "Great post-workout drink",
                ],
                tip: "Best time to drink: After a run or workout session.",
              },
              {
                title: "🥛 3. Buttermilk (Chaas)",
                points: [
                  "Aids digestion",
                  "Cooling & probiotic-rich",
                  "Zero added sugar",
                ],
                tip: "Quick recipe: Curd + water + roasted cumin + salt + mint",
              },
              {
                title: "🟡 4. Sattu Drink (Protein-Packed)",
                points: [
                  "Natural plant protein",
                  "Keeps you full longer",
                  "Good for energy in hot regions",
                ],
                tip: "How to make: 2 tbsp sattu + cold water + lemon + salt/jeera (for sweet version: add jaggery instead of salt)",
              },
              {
                title: "🍉 5. Watermelon Mint Juice",
                points: [
                  "Rich in water & antioxidants",
                  "Super refreshing",
                  "No need to add sugar",
                ],
                tip: "Recipe tip: Blend watermelon + mint leaves + lemon",
              },
              {
                title: "🌿 6. Cucumber & Mint Detox Water",
                points: [
                  "Anti-inflammatory",
                  "Hydrating and cooling",
                  "No calories!",
                ],
                tip: "How to make: Soak sliced cucumber, lemon, and mint in water overnight",
              },
              {
                title: "🧃 7. Aam Panna (Raw Mango Cooler)",
                points: [
                  "High in Vitamin A & C",
                  "Prevents heat stroke",
                  "Desi classic for summer",
                ],
                tip: "Recipe tip: Boil raw mango, blend with jaggery + mint + cumin + black salt",
              },
            ].map((drink, index) => (
              <div
                key={index}
                className="bg-gray-900 border border-gray-700 rounded-2xl p-5 shadow-md hover:shadow-lg transition duration-300"
              >
                <h3 className="text-xl font-semibold mb-2">{drink.title}</h3>
                <ul className="list-disc pl-6 space-y-1">
                  {drink.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
                <p className="mt-3 text-sm text-gray-300">
                  <strong>Tip:</strong> {drink.tip}
                </p>
              </div>
            ))}
          </div>

          {/* Bonus Section */}
          <div className="mt-10">
            <h3 className="text-2xl font-semibold mb-4">💪 Bonus: Drink These, Skip These</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-900 border border-green-700 rounded-2xl p-5">
                <h4 className="text-lg font-semibold text-green-400 mb-2">✅ Drink More Of:</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Herbal tea (iced)</li>
                  <li>Infused water</li>
                  <li>Fresh fruit juices (unsweetened)</li>
                </ul>
              </div>
              <div className="bg-gray-900 border border-red-700 rounded-2xl p-5">
                <h4 className="text-lg font-semibold text-red-400 mb-2">❌ Avoid:</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Packaged fruit juices</li>
                  <li>Sugary sodas</li>
                  <li>Energy drinks with caffeine & chemicals</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Hydration Tip */}
          <div className="mt-10">
            <h3 className="text-2xl font-semibold mb-2">🧘 Hydration + Fitness Tip</h3>
            <p className="text-gray-300">
              If you're working out in summer, drink 100–150ml of water every 20 mins, and replenish with coconut water or lemon-salt water post-workout. Dehydration = low energy + poor performance.
            </p>
          </div>

          {/* Conclusion */}
          <div className="mt-10">
            <h3 className="text-2xl font-semibold mb-2">🧊 Conclusion</h3>
            <p className="text-gray-300">
              Healthy summer drinks don’t just cool you down — they boost energy, improve digestion, and support your fitness goals. And best of all? You can make them all at home with minimal effort.
            </p>
            <p className="mt-2 text-gray-300">
              Stay cool, stay strong. Your body will thank you!
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
