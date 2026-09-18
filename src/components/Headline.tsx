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
    <Tag className={`font-sans font-medium leading-[1.05] tracking-tight text-ink ${className}`}>
      {lines.map((line, i) => (
        <span key={line} className={i === italicIndex ? 'font-serif italic font-normal' : 'block'}>
          {line}
          {i < lines.length - 1 ? <br /> : null}
        </span>
      ))}
    </Tag>
  );
}
