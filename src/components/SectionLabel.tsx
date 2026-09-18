export default function SectionLabel({ children }: { children: string }) {
  return (
    <p className="text-xs md:text-sm tracking-[0.2em] text-accent font-medium mb-6">
      {children}
    </p>
  );
}
