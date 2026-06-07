export function Navbar() {
    return (
        <header
            className="
        fixed
        top-0
        w-full
        border-b
        border-white/10
        bg-[#07111f]/70
        backdrop-blur-xl
        z-50
      "
        >
            <nav
                className="
          max-w-6xl
          mx-auto
          flex
          justify-between
          items-center
          px-6
          py-4
          gap-6
        "
            >
                <a className="text-sm uppercase tracking-[0.3em] text-zinc-200" href="#home">
                    Diego Sousa
                </a>

                <div className="hidden gap-6 text-sm text-zinc-300 md:flex">
                    <a className="transition hover:text-white" href="#about">Sobre</a>
                    <a className="transition hover:text-white" href="#skills">Skills</a>
                    <a className="transition hover:text-white" href="#experience">Experiência</a>
                    <a className="transition hover:text-white" href="#projects">Projetos</a>
                    <a className="transition hover:text-white" href="#contact">Contato</a>
                </div>

                <a
                    className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-white transition hover:border-white/30 hover:bg-white/15"
                    href="#contact"
                >
                    Falar comigo
                </a>
            </nav>
        </header>
    );
}
