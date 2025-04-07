import Contact from "@/components/contact/Contact";
import Landing from "@/components/landing/Landing";

export default function Home() {
  return (
    <div className="flex flex-col">
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
