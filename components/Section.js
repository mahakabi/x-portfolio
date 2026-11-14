// A reusable wrapper for each part of the page (Education, Projects, ...).
// The id lets the navbar jump to it: <a href="#projects">.
export default function Section({ id, title, children }) {
  return (
    <section id={id} className="scroll-mt-20 py-12">
      <h2 className="mb-6 text-2xl font-bold">{title}</h2>
      {children}
    </section>
  );
}
