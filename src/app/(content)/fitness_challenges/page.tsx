import NavbarWrapper from "@/components/navbar/NavbarWrapper";
import Link from "next/link";

export default function FitnessChallenges() {
  return (
    <div className="flex flex-col">
      <NavbarWrapper />

      <div className="text-center text-6xl font-extrabold font-mono text-[#cef522]">
        Fitness Challenges
      </div>

      <div className="flex justify-center items-center mt-8 px-[20%] h-full">
        <img
          src="/card/fitnessChallange.png"
          alt="fitness challenges"
          className="rounded-2xl w-full h-full"
        />
      </div>

      <div className="px-6 md:px-[20%] py-10 text-white space-y-10">
        <h2 className="text-3xl font-bold text-[#cef522]">Push your limits</h2>
        <p className="text-lg">
          Stay motivated with fun, high-energy challenges that build consistency and healthy habits.
        </p>
        <ul className="list-disc list-inside mt-4 space-y-2 text-lg">
          <li><strong>Weekly & Monthly Goals</strong> – Stay focused with structured challenges.</li>
          <li><strong>Community Vibes</strong> – Compete and collaborate with others.</li>
          <li><strong>Incentives</strong> – Earn rewards for staying consistent.</li>
          <li><strong>Self-Improvement</strong> – Challenge yourself and track your progress.</li>
        </ul>
      </div>

      {/* Other Sessions */}
      <div className="bg-white py-16 px-6 md:px-16 rounded-t-3xl">
        <h2 className="text-3xl font-extrabold text-center text-black mb-10">
          Other Sessions
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Stress Management",
              desc: "Improve mental well-being with guided relaxation, breathwork, and mindfulness techniques.",
              image: "/card/stressManagement.png",
              link: "/stress_management",
            },
            {
              title: "Online Coaching",
              desc: "Train virtually with expert coaches who keep you on track anytime, anywhere.",
              image: "/card/online.png",
              link: "/online_coaching",
            },
            {
              title: "Prenatal Fitness",
              desc: "Stay healthy during pregnancy with low-impact exercises and mindful movement.",
              image: "/card/prenatalFitness.png",
              link: "/prenatal_fitness",
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
              <img
                src={cls.image}
                alt={cls.title}
                className="rounded-2xl w-full h-40 object-cover"
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
