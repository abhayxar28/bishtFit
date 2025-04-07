import Link from "next/link";
import React from "react";

export default function Blog1() {
  return (
    <div>
      <div className="max-w-4xl mx-auto px-4 pt-6">
        <Link href="/blogs" className="text-lime-400 flex items-center gap-2 mb-4">
          <span className="text-2xl flex items-center">←</span>
          <span className="text-lg font-bold hover:underline">Back to Blogs</span>
        </Link>
      </div>
      <div className="max-w-4xl mx-auto px-4 py-10 text-white">
        <div className="mb-8">
          <img
            src="/card/personalTraining.png"
            alt="Healthy Indian Meal"
            className="rounded-2xl shadow-xl w-full object-cover"
          />
        </div>

        <h1 className="text-4xl font-bold mb-2">
          🥗 What’s a Proper Meal?
        </h1>
        <h2 className="text-xl text-gray-400 mb-6">
          A Guide for Indians Who Want to Eat Clean and Train Hard
        </h2>

        <section className="space-y-6">
          <p>
            You hit the gym, lift smart, maybe even run a few kilometers — but
            results are still slow. Why? It almost always comes down to food.
          </p>
          <p>
            A proper meal fuels your performance, helps with recovery, and
            supports your overall goals — whether you're bulking, cutting, or
            staying fit.
          </p>
          <p>
            And no — you don’t need to ditch Indian food or eat bland grilled
            chicken all day. Let’s break it down.
          </p>

          <h3 className="text-2xl font-semibold mt-8">🍛 What is a "Proper" Meal?</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Protein</strong> – Builds muscle, repairs tissue</li>
            <li><strong>Carbs</strong> – Provides energy</li>
            <li><strong>Fats</strong> – Supports hormones and brain function</li>
            <li><strong>Micronutrients</strong> – From fruits and veggies</li>
          </ul>

          <h3 className="text-2xl font-semibold mt-8">💡 Ideal Macronutrient Ratio</h3>
          <p className="bg-gray-800 p-4 rounded-xl border border-gray-700">
            🧾 <strong>40%</strong> Carbs | <strong>30%</strong> Protein | <strong>30%</strong> Healthy Fats
          </p>

          <h3 className="text-2xl font-semibold mt-8">
            🇮🇳 How Indians Can Build Proper Meals
          </h3>
          <p>You don’t need to westernize your plate — just optimize it.</p>

          <h4 className="text-xl font-semibold mt-4">🍽️ Meal Blueprint:</h4>
          <table className="w-full mt-2 border border-gray-700">
            <thead className="bg-gray-800">
              <tr>
                <th className="text-left p-2 border border-gray-700">Type</th>
                <th className="text-left p-2 border border-gray-700">Indian Foods You Can Use</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 border border-gray-700">🥚 Protein</td>
                <td className="p-2 border border-gray-700">Paneer, tofu, lentils, curd, eggs, chicken, fish, whey</td>
              </tr>
              <tr>
                <td className="p-2 border border-gray-700">🍚 Carbs</td>
                <td className="p-2 border border-gray-700">Brown rice, roti (2 max), sweet potato, oats, millets</td>
              </tr>
              <tr>
                <td className="p-2 border border-gray-700">🥑 Fats</td>
                <td className="p-2 border border-gray-700">Ghee, almonds, walnuts, flax/chia seeds, coconut</td>
              </tr>
              <tr>
                <td className="p-2 border border-gray-700">🥬 Veggies</td>
                <td className="p-2 border border-gray-700">Palak, broccoli, capsicum, cucumber, carrots</td>
              </tr>
            </tbody>
          </table>

          <h3 className="text-2xl font-semibold mt-8">🥗 Sample Meals</h3>
          <div className="space-y-4">
            <div>
              <h4 className="text-xl font-semibold">✅ Breakfast</h4>
              <ul className="list-disc pl-6">
                <li>3 egg omelet or paneer bhurji</li>
                <li>2 multigrain rotis</li>
                <li>Handful of dry fruits</li>
                <li>Banana + black coffee or green tea</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold">✅ Lunch</h4>
              <ul className="list-disc pl-6">
                <li>Grilled chicken or chana masala</li>
                <li>Brown rice or 2 rotis</li>
                <li>Mixed sabzi</li>
                <li>Salad + curd</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold">✅ Dinner</h4>
              <ul className="list-disc pl-6">
                <li>Palak paneer or fish curry</li>
                <li>Quinoa or 1 roti</li>
                <li>Steamed/roasted vegetables</li>
                <li>Herbal tea or buttermilk</li>
              </ul>
            </div>
          </div>

          <h3 className="text-2xl font-semibold mt-8">🔥 Bonus Tips for Consistency</h3>
          <ul className="list-disc pl-6">
            <li>Prep on Sundays: eggs, chicken, veggies</li>
            <li>Use olive oil/ghee sparingly</li>
            <li>Spices are healthy: turmeric, cumin, etc.</li>
            <li>Drink 2.5–3L of water daily</li>
            <li>Don't skip meals — spread them evenly</li>
          </ul>

          <h3 className="text-2xl font-semibold mt-8">❌ What to Avoid</h3>
          <ul className="list-disc pl-6">
            <li>Fried pakoras, samosas, puris</li>
            <li>Heavy cream-based dishes</li>
            <li>Sugary drinks like lassi or soda</li>
            <li>Late-night heavy meals</li>
          </ul>

          <h3 className="text-2xl font-semibold mt-8">✅ Conclusion</h3>
          <p>
            A proper meal doesn’t mean fancy, foreign, or flavorless. It’s about
            using what’s already in your kitchen — with purpose. Combine the
            power of Indian ingredients with clean eating habits, and you’re
            unstoppable.
          </p>
        </section>
      </div>
    </div>
  );
}
