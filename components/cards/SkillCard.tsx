type SkillCardProps = {
    title: string;
    skills: string[];
};

export function SkillCard({
                              title,
                              skills,
                          }: SkillCardProps) {
    return (
        <div
            className="
    rounded-2xl
    border
    border-zinc-800
    bg-zinc-900/50
    backdrop-blur
    p-6
    "
    >
    <h3 className="text-xl font-semibold mb-4">
        {title}
        </h3>

        <div className="flex flex-wrap gap-2">
        {skills.map(skill => (
                <span
                    key={skill}
            className="
            bg-zinc-800
            px-3
            py-1
            rounded-full
            text-sm
            "
        >
        {skill}
        </span>
))}
    </div>
    </div>
);
}