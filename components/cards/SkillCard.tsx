import type { IconType } from "react-icons";
import {
    FaAws,
    FaCloud,
    FaCodeBranch,
    FaCube,
    FaDatabase,
    FaJava,
    FaLayerGroup,
    FaMicrosoft,
    FaNetworkWired,
    FaRedhat,
} from "react-icons/fa6";
import {
    SiApachekafka,
    SiDocker,
    SiGithubactions,
    SiHibernate,
    SiJenkins,
    SiSpringboot,
    SiSpringsecurity,
    SiSonarqubeserver,
} from "react-icons/si";

type SkillCardProps = {
    title: string;
    skills: string[];
};

const skillIcons: Record<string, { color: string; icon: IconType }> = {
    "AWS": {
        color: "text-[#ff9900]",
        icon: FaAws,
    },
    "Azure": {
        color: "text-[#0078d4]",
        icon: FaMicrosoft,
    },
    "Azure DevOps": {
        color: "text-[#0078d4]",
        icon: FaMicrosoft,
    },
    "Clean Architecture": {
        color: "text-[#7dd3fc]",
        icon: FaLayerGroup,
    },
    "DDD": {
        color: "text-[#f59e0b]",
        icon: FaCube,
    },
    "Docker": {
        color: "text-[#2496ed]",
        icon: SiDocker,
    },
    "Event Driven": {
        color: "text-[#a855f7]",
        icon: FaNetworkWired,
    },
    "Feign Client": {
        color: "text-[#f97316]",
        icon: FaCodeBranch,
    },
    "GitHub Actions": {
        color: "text-[#2088ff]",
        icon: SiGithubactions,
    },
    "Hexagonal Architecture": {
        color: "text-[#7dd3fc]",
        icon: FaLayerGroup,
    },
    "Hibernate": {
        color: "text-[#59666c]",
        icon: SiHibernate,
    },
    "Jenkins": {
        color: "text-[#d33833]",
        icon: SiJenkins,
    },
    "JPA": {
        color: "text-[#60a5fa]",
        icon: FaDatabase,
    },
    "Java": {
        color: "text-[#f89820]",
        icon: FaJava,
    },
    "Kafka": {
        color: "text-white",
        icon: SiApachekafka,
    },
    "Microservices": {
        color: "text-[#7dd3fc]",
        icon: FaNetworkWired,
    },
    "OpenShift": {
        color: "text-[#ee0000]",
        icon: FaRedhat,
    },
    "REST APIs": {
        color: "text-[#38bdf8]",
        icon: FaCloud,
    },
    "SonarQube": {
        color: "text-[#4e9bcd]",
        icon: SiSonarqubeserver,
    },
    "Spring Boot": {
        color: "text-[#6db33f]",
        icon: SiSpringboot,
    },
    "Spring Security": {
        color: "text-[#6db33f]",
        icon: SiSpringsecurity,
    },
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
        {skills.map(skill => {
                const skillMeta = skillIcons[skill];
                const SkillIcon = skillMeta?.icon;

                return (
                <span
                    key={skill}
            className="
            inline-flex
            items-center
            gap-2
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
        {SkillIcon ? (
            <SkillIcon className={`h-4 w-4 ${skillMeta.color}`} />
        ) : (
            <span className="h-2 w-2 rounded-full bg-zinc-500" />
        )}
        {skill}
        </span>
);
})}
    </div>
    </div>
);
}
