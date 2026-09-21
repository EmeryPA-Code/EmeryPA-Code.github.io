export default function Headline({
  lines,
  italicIndex,
  as: Tag = 'h2',
  className = '',
}: {
  lines: string[];
  italicIndex: number;
  as?: 'h1' | 'h2';
  className?: string;
}) {
  return (
    <Tag className={`font-display font-bold leading-[1.05] tracking-tight text-[#F5F5F3] ${className}`}>
      {lines.map((line, i) => (
        <span key={line} className={i === italicIndex ? 'text-[#A6FF4D]' : 'block'}>
          {line}
          {i < lines.length - 1 ? <br /> : null}
        </span>
      ))}
    </Tag>
  );
}
