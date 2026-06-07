
export function Hero() {
    return (
        <section
            className="
        min-h-screen
        flex
        flex-col
        justify-center
        items-center
        text-center
        px-6
      "
        >
      <span
          className="
          border
          border-blue-500/30
          bg-blue-500/10
          px-4
          py-2
          rounded-full
          text-sm
        "
      >
        Java Backend Engineer
      </span>

            <h1
                className="
          text-6xl
          md:text-8xl
          font-bold
          mt-6
        "
            >
                Diego Sousa
            </h1>

            <p
                className="
          mt-6
          text-xl
          text-zinc-400
          max-w-2xl
        "
            >
                Especialista em Java, Microsserviços,
                Arquitetura Hexagonal e Cloud.
            </p>

            <div className="flex gap-4 mt-10">
                <a
                    href="https://linkedin.com/in/disousadev"
                    target="_blank"
                    className="
            bg-blue-600
            px-6
            py-3
            rounded-lg
            hover:bg-blue-500
          "
                >
                    LinkedIn
                </a>

                <a
                    href="mailto:me@diego.dev.br"
                    className="
            border
            px-6
            py-3
            rounded-lg
          "
                >
                    Contato
                </a>
            </div>
        </section>
    );
}