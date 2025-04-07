import Navbar from "@/components/navbar/Navbar";
import Link from "next/link";

export default function StressManagement() {
  return (
    <div className="flex flex-col">
      <Navbar />

      <div className="text-center text-6xl font-extrabold font-mono text-[#cef522]">
        Stress Management
      </div>

      <div className="flex justify-center items-center mt-8 px-[20%] h-full">
        <img src="/card/stressManagement.png" alt="stress management" className="rounded-2xl w-full h-full" />
      </div>

      <div className="px-6 md:px-[20%] py-10 text-white space-y-10">
        <h2 className="text-3xl font-bold text-[#cef522]">Balance your mind and body</h2>
        <p className="text-lg">
          Learn techniques to calm the mind, reduce stress, and improve emotional well-being.
        </p>
        <ul className="list-disc list-inside mt-4 space-y-2 text-lg">
          <li><strong>Mindfulness Practices</strong> – Guided meditation and relaxation sessions.</li>
          <li><strong>Breathwork</strong> – Breathing techniques to reduce anxiety and tension.</li>
          <li><strong>Stretching & Mobility</strong> – Light movements to support mental clarity.</li>
          <li><strong>Daily Habits</strong> – Create a calming daily routine for long-term benefits.</li>
        </ul>
      </div>

      <div className="bg-white py-16 px-6 md:px-16 rounded-t-3xl">
        <h2 className="text-3xl font-extrabold text-center text-black mb-10">
          Other Sessions
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Prenatal Fitness",
              desc: "Gentle movements and strength-building routines for expecting moms.",
              image: "/card/prenatalFitness.png",
              link: "/prenatal_fitness",
            },
            {
              title: "Nutritional Guidance",
              desc: "Learn how proper nutrition helps manage stress and boost wellness.",
              image: "/card/nutrition.png",
              link: "/nutritional_guidance",
            },
            {
              title: "Fitness Challenges",
              desc: "Keep moving and stay consistent with exciting fitness missions.",
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
              <img src={cls.image} alt={cls.title} className="rounded-2xl w-full h-40 object-cover" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
