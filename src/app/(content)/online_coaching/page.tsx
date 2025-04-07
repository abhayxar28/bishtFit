import Navbar from "@/components/navbar/Navbar";
import Link from "next/link";

export default function OnlineCoaching() {
  return (
    <div className="flex flex-col">
      <Navbar />

      <div className="text-center text-6xl font-extrabold font-mono text-[#cef522]">
        Online Coaching
      </div>

      <div className="flex justify-center items-center mt-8 px-[20%] h-full">
        <img
          src="/card/online.png"
          alt="online coaching"
          className="rounded-2xl w-full h-full"
        />
      </div>

      <div className="px-6 md:px-[20%] py-10 text-white space-y-10">
        <h2 className="text-3xl font-bold text-[#cef522]">Train from anywhere</h2>
        <p className="text-lg">
          Get fit with expert-led virtual sessions tailored to your schedule. Perfect for busy lifestyles and remote learners.
        </p>
        <ul className="list-disc list-inside mt-4 space-y-2 text-lg">
          <li><strong>Flexible Scheduling</strong> – Train whenever it suits you.</li>
          <li><strong>Real-Time Coaching</strong> – Get feedback and guidance instantly via video.</li>
          <li><strong>Home-Friendly Workouts</strong> – No equipment? No problem!</li>
          <li><strong>Stay Consistent</strong> – Keep up your progress, wherever you are.</li>
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
              desc: "Improve mental well-being with guided meditation, breathwork, and stretching.",
              image: "/card/stressManagement.png",
              link: "/stress_management",
            },
            {
              title: "Personal Training",
              desc: "Get customized workout plans and professional coaching to hit your fitness goals.",
              image: "/card/personalTraining.png",
              link: "/personal_training",
            },
            {
              title: "Prenatal Fitness",
              desc: "Stay strong and active during pregnancy with low-impact, expert-led exercises.",
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
