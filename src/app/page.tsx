import HomePage from "@/components/pages/home-page";
import EventPage from "@/components/pages/event-page";
import FooterPage from "@/components/pages/footer-page";


export default function Home() {
  return (
    <div className="w-full h-full min-h-screen overflow-x-hidden flex flex-col gap-0 font-[family-name:var(--font-geist-sans)]">
      <HomePage />
      <EventPage />
      <FooterPage />
    </div>
  );
}
