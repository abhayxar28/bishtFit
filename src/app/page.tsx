import Contact from "@/components/contact/Contact";
import Landing from "@/components/landing/Landing";
import Navbar from "@/components/navbar/Navbar";

export default function Home() {
  return (
    <div className="flex flex-col">
      <div>
        <Navbar />
      </div>
      <div>
        <Landing />
      </div>
      <div>
        <section id="book-session-section">
          <Contact />
        </section>
      </div>
    </div>
  );
}
