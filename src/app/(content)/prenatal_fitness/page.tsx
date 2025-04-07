import Navbar from "@/components/navbar/Navbar";
import Link from "next/link";

export default function PrenatalFitness() {
  return (
    <div className="flex flex-col">
      <Navbar />

      <div className="text-center text-6xl font-extrabold font-mono text-[#cef522]">
        Prenatal Fitness
      </div>

      <div className="flex justify-center items-center mt-8 px-[20%] h-full">
        <img src="/card/prenatalFitness.png" alt="prenatal fitness" className="rounded-2xl w-full h-full" />
      </div>

      <div className="px-6 md:px-[20%] py-10 text-white space-y-10">
        <h2 className="text-3xl font-bold text-[#cef522]">Stay strong during pregnancy</h2>
        <p className="text-lg">
          Engage in safe, low-impact workouts designed to support your body during pregnancy.
        </p>
        <ul className="list-disc list-inside mt-4 space-y-2 text-lg">
          <li><strong>Expert Supervision</strong> – Guided by certified prenatal fitness specialists.</li>
          <li><strong>Low-Impact Workouts</strong> – Safe and effective routines for every trimester.</li>
          <li><strong>Flexibility & Strength</strong> – Stay agile and prepared for birth and recovery.</li>
          <li><strong>Community Support</strong> – Connect with other expecting moms.</li>
        </ul>
      </div>

      <div className="bg-white py-16 px-6 md:px-16 rounded-t-3xl">
        <h2 className="text-3xl font-extrabold text-center text-black mb-10">
          Other Sessions
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Online Coaching",
              desc: "Train from home with live virtual coaching for all fitness levels.",
              image: "/card/online.png",
              link: "/online_coaching",
            },
            {
              title: "Stress Management",
              desc: "Relax with mindfulness and meditation practices tailored to your lifestyle.",
              image: "/card/stressManagement.png",
              link: "/stress_management",
            },
            {
              title: "Fitness Challenges",
              desc: "Keep active and motivated with fun fitness competitions.",
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
