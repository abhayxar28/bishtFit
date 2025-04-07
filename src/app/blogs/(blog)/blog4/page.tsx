import Link from "next/link";
import React from "react";

export default function Blog3() {
  return (
    <div>
      <div className="max-w-4xl mx-auto px-4 pt-6">
        <Link href="/blogs" className="text-lime-400 flex items-center gap-2 mb-4">
          <span className="text-2xl flex items-center">←</span>
          <span className="text-lg font-bold hover:underline">Back to Blogs</span>
        </Link>
      </div>
      <div className="max-w-4xl mx-auto px-4 py-10 text-white">
        {/* Header Image */}
        <div className="mb-8">
          <img
            src="/card/stressManagement.png"
            alt="Top Gym Exercises"
            className="rounded-2xl shadow-xl w-full object-cover"
          />
        </div>

        {/* Title & Subtitle */}
        <h1 className="text-4xl font-bold mb-2">
          💪 Top Gym Exercises Every Beginner Should Master (Indian Fitness Guide)
        </h1>
        <h2 className="text-xl text-gray-400 mb-6">
          New to the gym? Here’s a beginner-friendly list of the best gym exercises to start your fitness journey right. Build strength, burn fat, and stay consistent!
        </h2>

        {/* Introduction */}
        <section className="space-y-5">
          <p>
            Walking into a gym for the first time can be overwhelming—so many machines, weights, and workout styles! 😵‍💫
          </p>
          <p>
            But here’s the truth: you don’t need fancy routines to get strong and fit. Just a solid foundation of basic exercises can take you a long way.
          </p>
          <p>
            In this blog, we’ve listed the top gym exercises that are perfect for beginners. These movements train multiple muscles, improve posture, and help you gain confidence with every rep.
          </p>
        </section>

        {/* Exercise Cards */}
        <section className="mt-10 space-y-6">
          {[
            {
              icon: "🔥",
              name: "Squats",
              muscles: "Legs, glutes, core",
              why: "Builds lower body strength and improves posture.",
              how: "Start with bodyweight or smith machine.",
              tip: "Keep your back straight, and push through your heels.",
            },
            {
              icon: "🏋️",
              name: "Bench Press",
              muscles: "Chest, shoulders, triceps",
              why: "A great upper-body strength builder.",
              how: "Use barbell or dumbbells on a flat bench.",
              tip: "Keep feet flat on the ground and don’t let the bar bounce off your chest.",
            },
            {
              icon: "🧍",
              name: "Lat Pulldown",
              muscles: "Back (lats), biceps",
              why: "Improves posture and upper back strength.",
              how: "Ideal for people who can’t do pull-ups (yet!).",
              tip: "Don’t pull behind your neck. Keep it in front, down to your collarbone.",
            },
            {
              icon: "🧠",
              name: "Plank",
              muscles: "Core",
              why: "Builds stability, improves posture, and tones abs.",
              how: "Hold for 30 seconds and build up.",
              tip: "Keep your hips level—don’t let them drop or spike.",
            },
            {
              icon: "🏃‍♂️",
              name: "Treadmill Walking/Running",
              muscles: "Cardio",
              why: "Warm-up, fat burn, and stamina building.",
              how: "Start with 10-15 mins of incline walking or slow jogging.",
              tip: "Gets your heart rate up and boosts endurance.",
            },
            {
              icon: "🧘",
              name: "Seated Row (Machine)",
              muscles: "Upper & mid-back",
              why: "Helps counter poor posture and builds back strength.",
              how: "Use machine with controlled movement.",
              tip: "Keep your back upright and squeeze shoulder blades at the end.",
            },
            {
              icon: "🦵",
              name: "Leg Press",
              muscles: "Quads, hamstrings, glutes",
              why: "Safely builds lower body power, especially if squats feel hard at first.",
              how: "Use the leg press machine with moderate weight.",
              tip: "Don’t fully lock your knees at the top.",
            },
            {
              icon: "🏋️‍♂️",
              name: "Shoulder Press",
              muscles: "Shoulders, triceps",
              why: "Great for upper-body strength and muscle balance.",
              how: "Use dumbbells or shoulder press machine.",
              tip: "Avoid arching your back; engage your core.",
            },
          ].map((ex, i) => (
            <div key={i} className="bg-[#1c1c1c] border border-gray-800 p-5 rounded-2xl shadow-inner space-y-2">
              <h3 className="text-xl font-bold">
                {ex.icon} {ex.name}
              </h3>
              <p><strong>Muscles Worked:</strong> {ex.muscles}</p>
              <p><strong>Why do it:</strong> {ex.why}</p>
              <p><strong>Start With:</strong> {ex.how}</p>
              <p>💡 <em>Tip: {ex.tip}</em></p>
            </div>
          ))}
        </section>

        {/* Weekly Routine */}
        <section className="mt-10">
          <h3 className="text-2xl font-semibold mb-4">🔁 Weekly Gym Routine Example (Beginner)</h3>
          <table className="w-full border border-gray-700 text-sm">
            <thead className="bg-gray-800 text-gray-200">
              <tr>
                <th className="p-2 border border-gray-700">Day</th>
                <th className="p-2 border border-gray-700">Focus</th>
                <th className="p-2 border border-gray-700">Sample</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Monday", "Full Body", "Squats, Lat Pulldown, Plank"],
                ["Tuesday", "Cardio + Core", "Treadmill, Bicycle Crunch"],
                ["Wednesday", "Upper Body", "Bench Press, Seated Row"],
                ["Thursday", "Rest or Yoga", "Stretch + Hydrate"],
                ["Friday", "Lower Body", "Leg Press, Lunges"],
                ["Saturday", "Conditioning", "Battle Ropes, Jump Rope"],
                ["Sunday", "Rest", "Light walk or complete break"],
              ].map(([day, focus, sample], idx) => (
                <tr key={idx} className="border border-gray-700">
                  <td className="p-2 border border-gray-700">{day}</td>
                  <td className="p-2 border border-gray-700">{focus}</td>
                  <td className="p-2 border border-gray-700">{sample}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* Pro Tips */}
        <section className="mt-10 bg-[#1c1c1c] border border-gray-800 p-5 rounded-2xl shadow-inner">
          <h3 className="text-2xl font-semibold mb-3">🧠 Pro Tips for Beginners</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>✅ Start with light weights and focus on form</li>
            <li>✅ Always warm up before lifting</li>
            <li>✅ Hydrate (especially in Indian summers!)</li>
            <li>✅ Consistency &gt; Perfection</li>
            <li>✅ Don’t skip rest days — muscles need recovery too</li>
          </ul>
        </section>

        {/* Conclusion */}
        <section className="mt-10">
          <h3 className="text-2xl font-semibold">🙌 Conclusion</h3>
          <p className="mt-2">
            You don’t need 50 different exercises to see results. These top gym moves are all you need to build a solid foundation, burn fat, and grow stronger—physically and mentally.
          </p>
          <p className="mt-2">
            Your gym journey is just getting started. Start simple, train smart, and level up every week. You've got this 💯
          </p>
        </section>
      </div>
    </div>
  );
}
