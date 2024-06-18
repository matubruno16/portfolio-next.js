/* eslint-disable @next/next/no-img-element */

interface ProjectCardProps {
  url: string;
  src: string;
  title: string;
  description: string;
  skills: string[];
}

export default function ProjectCard({
  url,
  src,
  title,
  description,
  skills,
}: ProjectCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="w-full max-w-[450px] overflow-hidden rounded-xl shadow-lg border border-[#2A0E61] hover:cursor-pointer hover:shadow-2xl hover:shadow-[#2A0E61]/50 transition ease-in-out"
    >
      <img
        src={src}
        alt={title}
        width={450}
        height={300}
        className="w-full object-cover aspect-video"
      />

      <div className="relative p-4">
        <div className="w-full flex flex-row flex-wrap items-center gap-1 pb-2">
          {skills.map((skill) => (
            <h3
              className=" rounded-3xl py-1 px-2 border border-[#7042f88b] opacity-[0.9] text-gray-200 text-[12px]"
              key={skill}
            >
              {skill}
            </h3>
          ))}
        </div>
        <h2 className="text-2xl font-semibold text-white">{title}</h2>
        <p className="mt-2 text-gray-400">{description}</p>
      </div>
    </a>
  );
}
