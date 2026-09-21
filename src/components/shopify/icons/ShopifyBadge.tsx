import Image from 'next/image';

export default function ShopifyBadge({ className = '' }: { className?: string }) {
  return (
    <span
      className={`shopify-glow relative inline-block align-middle bg-[#F5F5F3] rounded-full px-5 py-2.5 md:px-7 md:py-3.5 ${className}`}
    >
      <Image
        src="/images/shopify/shopify-logo.png"
        alt="Shopify"
        width={900}
        height={260}
        className="h-6 md:h-9 w-auto"
        priority
      />
    </span>
  );
}
