export function About() {
    return (
        <section
            id="about"
            className="mx-auto max-w-6xl px-6 py-24"
        >
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
                <div className="space-y-4">
                    <span className="text-sm uppercase tracking-[0.24em] text-[#7dd3fc]">Sobre</span>
                    <h2 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
                        Backend para ambientes que não toleram improviso.
                    </h2>
                </div>

                <div className="grid gap-6">
                    <p className="text-lg leading-9 text-zinc-300">
                        Sou desenvolvedor backend com foco em Java e arquiteturas orientadas a
                        resiliência. Minha experiência passa por integrações de alta disponibilidade,
                        APIs críticas e ecossistemas de microsserviços em produção.
                    </p>

                    <div className="grid gap-4 md:grid-cols-3">
                        <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                            <p className="text-sm text-zinc-400">Segmento</p>
                            <p className="mt-3 text-lg text-white">Mercado financeiro</p>
                        </div>
                        <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                            <p className="text-sm text-zinc-400">Especialidade</p>
                            <p className="mt-3 text-lg text-white">Java e Spring Boot</p>
                        </div>
                        <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                            <p className="text-sm text-zinc-400">Base técnica</p>
                            <p className="mt-3 text-lg text-white">Cloud e observabilidade</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
