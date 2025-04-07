import NavbarWrapper from "@/components/navbar/NavbarWrapper";
import Link from "next/link";

export default function PersonalTraining() {
  return (
    <div className="flex flex-col">
      <div>
        <NavbarWrapper />
      </div>

      <div className="text-center text-6xl font-extrabold font-mono text-[#cef522]">
        Personal Training
      </div>

      <div className="flex justify-center items-center mt-8 px-[20%] h-full">
        <img
          src="/card/personalTraining.png"
          alt="personal training"
          className="rounded-2xl w-full h-full"
        />
      </div>

      <div className="px-6 md:px-[20%] py-10 text-white space-y-10">
        <div>
          <h2 className="text-3xl font-bold text-[#cef522]">
            Discover the power of personal training
          </h2>
          <p className="mt-4 text-lg">
            Unlock your full potential with personalized personal training. With
            tailored workouts and professional guidance, you'll achieve faster
            results, build confidence, and stay motivated.
          </p>
          <p className="mt-4 text-lg">
            It's perfect for anyone looking to improve fitness, strength, or
            overall health efficiently and effectively. This journey is all
            about you—your goals, your pace, and your success!
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-[#cef522]">Why choose nutrition coaching?</h2>
          <ul className="list-disc list-inside mt-4 space-y-2 text-lg">
            <li><strong>Tailored Approach</strong> – Get workouts that align with your unique goals and abilities.</li>
            <li><strong>Efficient Results</strong> – Maximize your time with goal-specific training.</li>
            <li><strong>Injury Prevention</strong> – Train safely with professional supervision.</li>
            <li><strong>Accountability</strong> – Stay consistent and committed with regular sessions.</li>
            <li><strong>Boosted Confidence</strong> – Feel stronger, healthier, and more empowered.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-[#cef522]">What to expect</h2>
          <ul className="list-disc list-inside mt-4 space-y-2 text-lg">
            <li><strong>Initial Consultation</strong> – Discuss your fitness goals, lifestyle, and current abilities.</li>
            <li><strong>Customized Workouts</strong> – Programs designed to match your needs and progress.</li>
            <li><strong>Expert Guidance</strong> – Learn proper form, techniques, and injury prevention.</li>
            <li><strong>Support & Motivation</strong> – Stay focused with consistent encouragement.</li>
            <li><strong>Progress Tracking</strong> – See measurable results and celebrate achievements.</li>
          </ul>
        </div>
      </div>

      {/* Other Classes Section */}
      <div className="bg-white py-16 px-6 md:px-16 rounded-t-3xl">
        <h2 className="text-3xl font-extrabold text-center text-black mb-10">
          Other Sessions
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Nutritional Guidance",
              desc: "Receive expert advice on meal planning and nutrition to complement your trainer.",
              image: "/card/nutrition.png",
              link: "/nutritional_guidance",
            },
            {
              title: "Online Coaching",
              desc: "Achieve your fitness goals from the comfort of your home with virtual training sessions.",
              image: "/card/online.png",
              link: "/online_coaching",
            },
            {
              title: "Stress Management",
              desc: "Reduce stress with focused mindfulness and guided breathing exercises.",
              image: "/card/stressManagement.png",
              link: "/stress_management",
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
                <img
                  src={cls.image}
                  alt={cls.title}
                  className="rounded-2xl w-full h-40 object-cover"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
