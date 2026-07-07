export default function Tag({ children, color = "secondary" }: { children: string; color?: "secondary" | "tertiary" | "primary" }) {
  const colors = {
    secondary: "bg-secondary/10 border-secondary/20 text-secondary",
    tertiary: "bg-tertiary/10 border-tertiary/20 text-tertiary",
    primary: "bg-primary/10 border-primary/20 text-primary",
  };
  return (
    <span className={`inline-block px-3 py-1 rounded-full border ${colors[color]} font-mono text-tag-label tracking-widest uppercase`}>
      {children}
    </span>
  );
}
