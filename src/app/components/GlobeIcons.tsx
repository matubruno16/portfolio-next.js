import IconCloud from "./IconCloud";

const slugs = [
  "typescript",
  "javascript",
  "python",
  "nodejs",
  "astro",
  "react",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "tailwindcss",
  "amazonaws",
  "postgresql",
  "vercel",
  "testinglibrary",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "figma",
];

export function GlobelIcons() {
  return (
    <div className="relative flex h-full w-full max-w-[32rem] p-10 items-center justify-center overflow-hidden">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}
