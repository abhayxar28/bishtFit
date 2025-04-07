import Link from "next/link";
import BlogCard from "../blogs/BlogCard";
import ContentCard from "../content/ContentCard";
import Journal from "../journal/Journal";

export default function Landing() {
  return (
    <div className="flex flex-col mt-[60px]">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center px-4 sm:px-6 md:px-20 py-10 gap-10">
        {/* Text */}
        <div className="flex flex-col gap-6 w-full md:w-1/2 text-center md:text-left">
          <div className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-mono text-[#cef522] font-extrabold leading-tight">
            <div>Unleash Your</div>
            <div>Inner Strength</div>
          </div>

          <div className="text-sm sm:text-base md:text-[20px] lg:text-[22px] text-white font-mono">
            Transform your body and mind with{" "}
            <span className="bg-[#7a7a7a] px-1 rounded">
              personalized workout
            </span>{" "}
            plans tailored to your goals. Reach new heights in your fitness journey with tailored training sessions.
          </div>

          <div>
            <button className="border-[#cef522] text-[#cef522] font-semibold border rounded-lg py-3 px-6 sm:py-4 sm:px-8 hover:bg-[#cef522] hover:text-black transition duration-200">
              Get Started
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <img
            src="logo.png"
            alt="Fitness Logo"
            className="w-40 sm:w-56 md:w-[300px] lg:w-[350px] object-contain"
          />
        </div>
      </div>

      {/* Section: Services */}
      <div className="border-2 h-auto py-4 mt-10 flex flex-wrap justify-evenly gap-6 font-mono text-black bg-[#cef522] px-4 sm:px-10 lg:px-20 font-bold text-lg sm:text-xl lg:text-2xl">
        <span>Muscles</span>
        <span>Nutrition</span>
        <span>Fat Loss</span>
        <span>Workout Plans</span>
      </div>

      {/* Content Cards */}
      <div>
        <ContentCard />
      </div>

      {/* About Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 px-6 sm:px-10 md:px-20 py-16">
        {/* Image */}
        <div className="flex justify-center">
          <img
            src="profile.png"
            alt=""
            className="rounded-xl w-full max-w-[500px] h-auto"
          />
        </div>

        {/* Text */}
        <div className="flex flex-col gap-4 mt-2">
          <div className="flex flex-col gap-2 font-mono">
            <div className="text-xl sm:text-2xl font-bold text-[#cef522]">Who I Am</div>
            <div className="text-[#cef522] font-bold text-3xl sm:text-4xl md:text-5xl">
              Experienced personal trainer
            </div>
          </div>

          <div className="my-2 font-mono text-white text-sm sm:text-base">
            My approach combines science-backed training techniques with personalized workout plans designed specifically for your goals—building muscle, losing weight, or improving overall health.
          </div>

          <div className="mb-6">
            <Link href='/about'>
              <button className="p-4 border-[#cef522] border rounded-lg font-semibold text-md hover:bg-[#cef522] hover:text-black cursor-pointer">
                Get to know me
              </button>    
            </Link>
          </div>

          <div className="font-mono text-[#cef522] text-2xl sm:text-3xl font-bold">
            Certifications
          </div>

          <div className="font-mono flex flex-col gap-3">
            {[
              "Certified personal trainer",
              "Nutrition specialist",
              "Strength and conditioning coach",
            ].map((text, idx) => (
              <div key={idx} className="flex items-center gap-2 text-white">
                <img src="certificate.svg" alt="" className="w-7 h-7 sm:w-8 sm:h-8" />
                {text}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <Journal />
      </div>
      <div>
        <BlogCard limit={3}/>
      </div>
    </div>
  );
}
