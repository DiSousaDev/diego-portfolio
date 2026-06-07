export function Navbar() {
    return (
        <header
            className="
        fixed
        top-0
        w-full
        backdrop-blur-md
        bg-black/40
        border-b
        border-zinc-800
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
        "
            >
                <h1 className="font-bold">
                    diego.dev.br
                </h1>

                <div className="flex gap-6">
                    <a href="#about">Sobre</a>
                    <a href="#skills">Skills</a>
                    <a href="#experience">Experiência</a>
                    <a href="#projects">Projetos</a>
                </div>
            </nav>
        </header>
    );
}