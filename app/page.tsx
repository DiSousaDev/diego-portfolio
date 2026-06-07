import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";

export default function Home() {
    return (
        <main
            className="
        relative
        min-h-screen
        bg-black
        text-white
        overflow-hidden
      "
        >
            <div
                className="
          absolute
          top-0
          left-1/2
          -translate-x-1/2
          h-[500px]
          w-[500px]
          rounded-full
          bg-blue-600/20
          blur-3xl
        "
            />

            <Navbar/>

            <Hero/>

            <About/>

            <Skills/>

            <Experience/>

            <Projects/>
        </main>
    );
}