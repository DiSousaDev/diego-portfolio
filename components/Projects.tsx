export function Projects() {
    return (
        <section
            id="projects"
            className="max-w-6xl mx-auto py-24 px-6"
        >
            <h2 className="text-4xl font-bold mb-12">
                Projetos
            </h2>

            <div className="grid md:grid-cols-3 gap-6">

                <div className="border border-zinc-800 rounded-2xl p-6">
                    <h3 className="text-xl font-semibold mb-3">
                        TechPag
                    </h3>

                    <p className="text-zinc-400">
                        Plataforma para eventos com QR Code,
                        pagamentos e gestão de barracas.
                    </p>
                </div>

                <div className="border border-zinc-800 rounded-2xl p-6">
                    <h3 className="text-xl font-semibold mb-3">
                        Credit Analysis
                    </h3>

                    <p className="text-zinc-400">
                        Microsserviços resilientes com Kafka
                        e arquitetura hexagonal.
                    </p>
                </div>

                <div className="border border-zinc-800 rounded-2xl p-6">
                    <h3 className="text-xl font-semibold mb-3">
                        Scheduling Platform
                    </h3>

                    <p className="text-zinc-400">
                        Sistema online de agendamento com
                        Spring Boot e Angular.
                    </p>
                </div>

            </div>
        </section>
    );
}