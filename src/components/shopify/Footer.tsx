import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[#2A2A2E] py-10">
      <div className="max-w-content mx-auto px-6 md:px-10 flex flex-col sm:flex-row items-center justify-between gap-6 text-sm text-[#9A9A9E]">
        <span className="text-[#F5F5F3]">Emery Piqueras</span>

        <a href="#inicio" className="hover:text-[#F5F5F3] transition-colors">
          Volver arriba ↑
        </a>

        <div className="flex items-center gap-6">
          <span>© {year} Emery Piqueras</span>
          <Link href="/" className="hover:text-[#F5F5F3] transition-colors">
            Web principal
          </Link>
          <Link href="/privacidad/" className="hover:text-[#F5F5F3] transition-colors">
            Privacidad
          </Link>
        </div>
      </div>
    </footer>
  );
}
