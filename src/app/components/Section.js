import clsx from "clsx";

export default function Section({ children, className }) {
  return (
    <section className={clsx("px-4 py-12 md:py-20 max-w-6xl mx-auto", className)}>
      {children}
    </section>
  );
}