import { skills } from "@/data/skills";
import { SkillCard } from "./cards/SkillCard";

export function Skills() {
    return (
        <section
            id="skills"
            className="mx-auto max-w-6xl px-6 py-24"
        >
            <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <div>
                    <span className="text-sm uppercase tracking-[0.24em] text-[#f59e0b]">Stack</span>
                    <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-5xl">
                        Ferramentas que sustentam produtos de verdade.
                    </h2>
                </div>

                <p className="max-w-xl text-sm leading-7 text-zinc-400 md:text-base">
                    Tecnologias escolhidas para escala, manutencao e previsibilidade operacional.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">

                {Object.entries(skills).map(
                    ([title, values]) => (
                        <SkillCard
                            key={title}
                            title={title}
                            skills={values}
                        />
                    )
                )}

            </div>
        </section>
    );
}
