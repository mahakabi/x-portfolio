import Link from "next/link";

export default function ProjectCard({ project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="block rounded-lg border border-gray-200 p-5 transition hover:border-gray-400"
    >
      <h3 className="text-lg font-semibold">{project.name}</h3>
      <p className="mt-2 text-gray-600">{project.summary}</p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <li key={t} className="rounded bg-gray-100 px-2 py-1 text-xs">
            {t}
          </li>
        ))}
      </ul>
    </Link>
  );
}
