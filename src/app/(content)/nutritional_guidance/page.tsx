import Navbar from "@/components/navbar/Navbar";
import Link from "next/link";

export default function NutritionalGuidance() {
  return (
    <div className="flex flex-col">
      <Navbar />

      <div className="text-center text-6xl font-extrabold font-mono text-[#cef522]">
        Nutritional Guidance
      </div>

      <div className="flex justify-center items-center mt-8 px-[20%] h-full">
        <img
          src="/card/nutrition.png"
          alt="nutritional guidance"
          className="rounded-2xl w-full h-full"
        />
      </div>

      <div className="px-6 md:px-[20%] py-10 text-white space-y-10">
        <h2 className="text-3xl font-bold text-[#cef522]">Fuel your body right</h2>
        <p className="text-lg">
          Discover how personalized nutrition plans can enhance your fitness journey. Learn how to eat smarter, feel better, and perform at your peak.
        </p>
        <ul className="list-disc list-inside mt-4 space-y-2 text-lg">
          <li><strong>Meal Planning</strong> – Customized meal plans to match your training intensity and goals.</li>
          <li><strong>Balanced Diet</strong> – Understand the right nutrients your body needs.</li>
          <li><strong>Expert Advice</strong> – Work with certified professionals for the best results.</li>
          <li><strong>Long-Term Health</strong> – Build sustainable habits for lifelong wellness.</li>
        </ul>
      </div>

      {/* Other Sessions */}
      <div className="bg-white py-16 px-6 md:px-16 rounded-t-3xl">
        <h2 className="text-3xl font-extrabold text-center text-black mb-10">Other Sessions</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Online Coaching",
              desc: "Train from the comfort of your home with expert virtual sessions tailored to your needs.",
              image: "/card/online.png",
              link: "/online_coaching",
            },
            {
              title: "Stress Management",
              desc: "Enhance your wellness through guided meditation and breathwork.",
              image: "/card/stressManagement.png",
              link: "/stress_management",
            },
            {
              title: "Fitness Challenges",
              desc: "Stay motivated with exciting weekly and monthly challenges.",
              image: "/card/fitnessChallange.png",
              link: "/fitness_challenges",
            },
          ].map((cls, i) => (
            <Link
              key={i}
              href={cls.link}
              className="bg-[#f3fef4] p-6 rounded-3xl flex flex-col justify-between hover:scale-[1.02] transition-all"
            >
              <div>
                <h3 className="text-xl font-bold text-black mb-2">{cls.title}</h3>
                <p className="text-black mb-4">{cls.desc}</p>
              </div>
              <div className="relative">
                <img src={cls.image} alt={cls.title} className="rounded-2xl w-full h-40 object-cover" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
