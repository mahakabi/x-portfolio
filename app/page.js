import Image from "next/image";
import { cv } from "@/data/cv";
import { withBase } from "@/lib/withBase";
import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
// TODO: replace assets/avatar.svg with your own photo (e.g. assets/me.jpg).
// Importing the image (instead of using a "/public" path) keeps it working on GitHub Pages.
import avatar from "@/assets/avatar.svg";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="flex flex-col items-start gap-6 py-16 sm:flex-row sm:items-center">
        <Image
          src={avatar}
          alt={cv.name}
          width={120}
          height={120}
          className="rounded-full"
          priority
        />
        <div>
          <h1 className="text-4xl font-bold">{cv.name}</h1>
          <p className="mt-2 text-xl text-gray-600">{cv.title}</p>
          <p className="mt-1 text-gray-500">{cv.location}</p>
          {cv.cvFile && (
            <a
              href={withBase(`/${cv.cvFile}`)}
              download
              className="mt-4 inline-block rounded bg-brand px-4 py-2 text-white"
            >
              Download CV
            </a>
          )}
        </div>
      </section>

      <Section id="about" title="About">
        <p className="leading-relaxed text-gray-700">{cv.summary}</p>
      </Section>

      <Section id="education" title="Education">
        <ul className="space-y-4">
          {cv.education.map((e) => (
            <li key={e.degree}>
              <h3 className="font-semibold">{e.degree}</h3>
              <p className="text-gray-600">
                {e.school} · {e.period}
              </p>
              <p className="text-gray-500">{e.details}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="experience" title="Experience">
        <ul className="space-y-6">
          {cv.experience.map((job) => (
            <li key={job.role + job.company}>
              <h3 className="font-semibold">
                {job.role} · {job.company}
              </h3>
              <p className="text-sm text-gray-500">{job.period}</p>
              <ul className="mt-2 list-disc space-y-1 ps-5 text-gray-700">
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="projects" title="Projects">
        <div className="grid gap-4 sm:grid-cols-2">
          {cv.projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Section>

      <Section id="skills" title="Skills">
        <div className="space-y-3">
          {cv.skills.map((s) => (
            <p key={s.group}>
              <span className="font-semibold">{s.group}: </span>
              {s.items.join(", ")}
            </p>
          ))}
        </div>
      </Section>

      <Section id="achievements" title="Achievements">
        <ul className="space-y-3">
          {cv.achievements.map((a) => (
            <li key={a.title}>
              <span className="font-semibold">{a.title}</span>
              <span className="text-gray-600"> · {a.detail}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="contact" title="Contact">
        <ul className="space-y-2">
          <li>
            <a href={`mailto:${cv.contact.email}`} className="underline">
              {cv.contact.email}
            </a>
          </li>
          <li>
            <a href={cv.contact.github} className="underline">
              GitHub
            </a>
          </li>
          <li>
            <a href={cv.contact.linkedin} className="underline">
              LinkedIn
            </a>
          </li>
        </ul>
      </Section>
    </>
  );
}
