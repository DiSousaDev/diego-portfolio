export function Projects() {
    const projects = [
        {
            title: "TechPag",
            description:
                "Plataforma para eventos com QR Code, pagamentos e gestão de operação em campo.",
            accent: "Pagamentos, QR Code e operação",
        },
        {
            title: "Credit Analysis",
            description:
                "Microsserviços resilientes com Kafka, arquitetura hexagonal e desenho orientado a domínio.",
            accent: "Arquitetura e resiliência",
        },
        {
            title: "Scheduling Platform",
            description:
                "Sistema online de agendamento com Spring Boot e Angular, focado em fluxo e confiabilidade.",
            accent: "Produto e integração",
        },
    ];

    return (
        <section
            id="projects"
            className="mx-auto max-w-6xl px-6 py-24"
        >
            <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <div>
                    <span className="text-sm uppercase tracking-[0.24em] text-[#f59e0b]">Portfólio</span>
                    <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-5xl">
                        Projetos pensados para entregar operação e clareza técnica.
                    </h2>
                </div>

                <p className="max-w-xl text-sm leading-7 text-zinc-400 md:text-base">
                    Casos que mostram como tecnologia, arquitetura e experiência de uso podem
                    caminhar juntas.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
                {projects.map((project) => (
                    <div
                        key={project.title}
                        className="group rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.03))] p-6 transition duration-300 hover:border-white/20 hover:translate-y-[-2px]"
                    >
                        <p className="text-xs uppercase tracking-[0.22em] text-zinc-500">
                            {project.accent}
                        </p>

                        <h3 className="mt-5 text-2xl font-semibold text-white">
                            {project.title}
                        </h3>

                        <p className="mt-4 leading-8 text-zinc-300">
                            {project.description}
                        </p>
                    </div>
                ))}

            </div>
        </section>
    );
}
