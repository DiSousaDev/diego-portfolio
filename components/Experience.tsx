import { experiences } from "@/data/experience";

export function Experience() {
    return (
        <section
            id="experience"
            className="mx-auto max-w-6xl px-6 py-24"
        >
            <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <div>
                    <span className="text-sm uppercase tracking-[0.24em] text-[#7dd3fc]">Trajetória</span>
                    <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-5xl">
                        Experiência em operações com alto nível de exigência.
                    </h2>
                </div>

                <p className="max-w-xl text-sm leading-7 text-zinc-400 md:text-base">
                    Passagem por bancos e plataformas em que disponibilidade, rastreabilidade e
                    consistência fazem parte do produto.
                </p>
            </div>

            <div className="space-y-6">

                {experiences.map((exp) => (
                    <div
                        key={exp.company}
                        className="
              grid
              gap-4
              rounded-[1.75rem]
              border
              border-white/10
              bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.03))]
              p-6
              md:grid-cols-[180px_1fr]
            "
                    >
                        <div>
                            <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
                                {exp.period}
                            </p>
                        </div>

                        <div>
                            <h3 className="text-2xl font-semibold text-white">
                                {exp.company}
                            </h3>

                            <p className="mt-3 text-zinc-300">
                                {exp.description}
                            </p>
                        </div>
                    </div>
                ))}

            </div>
        </section>
    );
}
