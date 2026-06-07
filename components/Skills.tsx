import { skills } from "@/data/skills";
import { SkillCard } from "./cards/SkillCard";

export function Skills() {
    return (
        <section
            id="skills"
            className="max-w-6xl mx-auto py-24 px-6"
        >
            <h2 className="text-4xl font-bold mb-12">
                Skills
            </h2>

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