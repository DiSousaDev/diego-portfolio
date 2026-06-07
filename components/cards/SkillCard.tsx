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
    rounded-[1.75rem]
    border
    border-white/10
    bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))]
    p-6
    shadow-[0_30px_120px_-70px_rgba(0,0,0,0.9)]
    "
    >
    <h3 className="mb-4 text-2xl font-semibold text-white">
        {title}
        </h3>

        <div className="flex flex-wrap gap-2">
        {skills.map(skill => (
                <span
                    key={skill}
            className="
            border
            border-white/10
            bg-black/20
            px-3
            py-1.5
            rounded-full
            text-sm
            text-zinc-200
            "
        >
        {skill}
        </span>
))}
    </div>
    </div>
);
}
