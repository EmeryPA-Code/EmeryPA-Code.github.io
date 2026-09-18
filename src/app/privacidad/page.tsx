import type { Metadata } from 'next';
import Link from 'next/link';
import { site } from '@/content/site';

export const metadata: Metadata = {
  title: `Privacidad — ${site.meta.name}`,
  description: 'Política de privacidad de la web personal de Emery Piqueras.',
  alternates: {
    canonical: `${site.meta.url}privacidad/`,
  },
};

export default function PrivacidadPage() {
  return (
    <main id="contenido" className="min-h-screen py-24 md:py-32">
      <div className="max-w-content mx-auto px-6 md:px-10 max-w-2xl">
        <Link href="/" className="text-sm text-accent hover:underline">
          ← Volver al inicio
        </Link>

        <h1 className="font-sans font-medium text-3xl md:text-4xl text-ink mt-8 mb-8">
          Privacidad
        </h1>

        <div className="space-y-6 text-base text-ink-soft leading-relaxed">
          <p>
            Esta web es un espacio personal de {site.meta.fullName}. No utiliza cookies de
            seguimiento ni analítica de terceros, y no recopila datos personales de quienes la
            visitan más allá de lo estrictamente necesario para que el navegador la muestre
            correctamente.
          </p>
          <p>
            Si me escribes por email o a través de cualquiera de mis redes sociales, los datos
            que me facilites (como tu nombre, tu email o el contenido del mensaje) se usan
            únicamente para responderte y no se ceden a terceros ni se utilizan con fines
            distintos al de mantener esa conversación.
          </p>
          <p>
            Esta web está alojada de forma estática en GitHub Pages. GitHub, como proveedor de
            hosting, puede recoger datos técnicos básicos (como la dirección IP) según su propia
            política de privacidad, ajena a mí como autor del sitio.
          </p>
          <p>
            Si tienes cualquier duda sobre esta política o quieres que elimine algún dato que me
            hayas facilitado, puedes escribirme a{' '}
            <a href={`mailto:${site.contact.email}`} className="text-accent hover:underline">
              {site.contact.email}
            </a>
            .
          </p>
        </div>
      </div>
    </main>
  );
}
