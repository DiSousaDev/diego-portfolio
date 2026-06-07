import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { ContactForm } from "@/components/ContactForm";

export default function Home() {
    return (
        <main
            className="
        relative
        min-h-screen
        bg-[#07111f]
        text-white
        overflow-hidden
      "
        >
            <div
                className="
          absolute
          inset-x-0
          top-0
          h-[32rem]
          bg-[radial-gradient(circle_at_top,rgba(125,211,252,0.18),transparent_58%)]
          pointer-events-none
        "
            />

            <div
                className="
          absolute
          right-[-8rem]
          top-[18rem]
          h-[24rem]
          w-[24rem]
          rounded-full
          bg-[#f59e0b]/10
          blur-3xl
          pointer-events-none
        "
            />

            <div
                className="
          absolute
          inset-0
          bg-[linear-gradient(180deg,rgba(7,17,31,0.25),rgba(7,17,31,0.96)),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)]
          bg-[size:auto,72px_72px,72px_72px]
          [mask-image:linear-gradient(180deg,black,black,transparent)]
          pointer-events-none
        "
            />

            <Navbar/>

            <Hero/>

            <About/>

            <Skills/>

            <Experience/>

            <Projects/>

            <ContactForm/>
        </main>
    );
}
