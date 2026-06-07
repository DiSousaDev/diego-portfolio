export function Hero() {
    return (
        <section
            id="home"
            className="
        min-h-screen
        flex
        flex-col
        justify-center
        items-start
        px-6
        pt-28
      "
        >
            <div className="mx-auto grid w-full max-w-6xl items-end gap-16 lg:grid-cols-[1.1fr_0.9fr]">
                <div>
                    <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.24em] text-zinc-300">
                        Java Backend Engineer
                    </span>

                    <h1 className="mt-8 max-w-4xl text-6xl font-semibold leading-[0.92] tracking-tight text-white md:text-8xl">
                        Engenharia backend com cara de produto bem feito.
                    </h1>

                    <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-300 md:text-xl">
                        Especialista em Java, microsserviços, arquitetura hexagonal e cloud,
                        com experiência em ambientes financeiros, APIs críticas e plataformas
                        que exigem resiliência real.
                    </p>

                    <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                        <a
                            href="#projects"
                            className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:translate-y-[-1px] hover:bg-[#f6f6f6]"
                        >
                            Ver projetos
                        </a>

                        <a
                            href="#contact"
                            className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm text-white transition hover:border-white/30 hover:bg-white/10"
                        >
                            Ir para contato
                        </a>
                    </div>
                </div>

                <div className="grid gap-4">
                    <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.1),rgba(255,255,255,0.03))] p-7 shadow-[0_30px_120px_-60px_rgba(0,0,0,0.95)] backdrop-blur">
                        <p className="text-sm uppercase tracking-[0.24em] text-zinc-400">Foco atual</p>
                        <p className="mt-4 text-2xl leading-9 text-white">
                            Microsserviços, observabilidade e arquitetura para times que precisam
                            crescer sem perder confiabilidade.
                        </p>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-3">
                        <div className="rounded-[1.5rem] border border-white/10 bg-[#0d1a2b]/85 p-5">
                            <p className="text-3xl text-white">6+</p>
                            <p className="mt-2 text-sm text-zinc-400">anos entregando backend</p>
                        </div>
                        <div className="rounded-[1.5rem] border border-white/10 bg-[#0d1a2b]/85 p-5">
                            <p className="text-3xl text-white">3</p>
                            <p className="mt-2 text-sm text-zinc-400">bancos no histórico</p>
                        </div>
                        <div className="rounded-[1.5rem] border border-white/10 bg-[#0d1a2b]/85 p-5">
                            <p className="text-3xl text-white">Cloud</p>
                            <p className="mt-2 text-sm text-zinc-400">AWS, Azure e OpenShift</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
