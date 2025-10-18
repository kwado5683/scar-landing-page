export function FeatureCard({ title, children, icon }) {
  return (
    <div className="rounded-xl border p-6 hover:shadow-sm transition">
      {icon && <div className="mb-3">{icon}</div>}
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground">{children}</p>
    </div>
  );
}