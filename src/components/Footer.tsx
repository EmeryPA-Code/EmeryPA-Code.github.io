import { site } from '@/content/site';

export default function Footer() {
  const { footer, meta } = site;
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-bg/70">
      <div className="max-w-content mx-auto px-6 md:px-10 py-10 flex flex-col sm:flex-row items-center justify-between gap-6 text-sm">
        <span className="text-bg">{meta.name}</span>

        <a href="#inicio" className="hover:text-bg transition-colors">
          {footer.backToTop} ↑
        </a>

        <div className="flex items-center gap-6">
          <span>
            © {year} {meta.name}
          </span>
          <a href={footer.privacyLink.href} className="hover:text-bg transition-colors">
            {footer.privacyLink.label}
          </a>
        </div>
      </div>
    </footer>
  );
}
