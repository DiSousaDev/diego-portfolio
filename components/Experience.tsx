import { experiences } from "@/data/experience";

export function Experience() {
    return (
        <section
            id="experience"
            className="max-w-6xl mx-auto py-24 px-6"
        >
            <h2 className="text-4xl font-bold mb-12">
                Experiência
            </h2>

            <div className="space-y-6">

                {experiences.map((exp) => (
                    <div
                        key={exp.company}
                        className="
              border
              border-zinc-800
              rounded-2xl
              bg-zinc-900/40
              p-6
            "
                    >
                        <h3 className="text-2xl font-semibold">
                            {exp.company}
                        </h3>

                        <p className="text-zinc-500 mb-4">
                            {exp.period}
                        </p>

                        <p className="text-zinc-300">
                            {exp.description}
                        </p>
                    </div>
                ))}

            </div>
        </section>
    );
}