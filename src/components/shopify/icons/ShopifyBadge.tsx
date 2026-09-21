export default function ShopifyBadge({ className = '' }: { className?: string }) {
  return (
    <span
      className={`shopify-glow inline-flex items-center gap-2 align-middle bg-[#0B0B0C] border border-[#2A2A2E] rounded-full pl-2.5 pr-4 py-1.5 md:pl-3 md:pr-5 md:py-2 ${className}`}
    >
      <svg viewBox="0 0 40 40" className="w-6 h-6 md:w-8 md:h-8 shrink-0" aria-hidden="true">
        <path
          d="M27.5 8.2c0-.1-.1-.2-.3-.2-.1 0-2.3-.1-2.3-.1s-1.8-1.8-2-1.9c-.2-.2-.6-.1-.7-.1l-1 .3c-.1-.4-.4-.9-.8-1.4-1-1.1-2.2-1.4-2.8-1.4h-.2c-.5-.7-1.2-1-1.9-.9-2.6.2-4.1 3.5-4.6 5.3-1.1.3-1.9.6-2 .6-.6.2-.6.2-.7.8-.1.4-1.6 12.7-1.6 12.7L20 24l9.8-2.1s-2.2-13.4-2.3-13.7Z"
          fill="#95BF47"
        />
        <path
          d="M27.2 8c-.1 0-2.3-.1-2.3-.1s-1.8-1.8-2-1.9c-.1-.1-.2-.1-.2-.1L20 24l9.8-2.1s-2.2-13.4-2.3-13.7c0-.1-.2-.2-.3-.2Z"
          fill="#5E8E3E"
        />
        <path
          d="M18.3 12.8l-.9 3.4s-1-.5-2.2-.5c-1.8 0-1.9 1.1-1.9 1.4 0 1.5 4 2.1 4 5.7 0 2.8-1.8 4.6-4.2 4.6-2.9 0-4.4-1.8-4.4-1.8l.8-2.6s1.5 1.3 2.8 1.3c.9 0 1.2-.7 1.2-1.2 0-2-3.3-2.1-3.3-5.4 0-2.7 1.9-5.3 5.9-5.3 1.5 0 2.2.4 2.2.4Z"
          fill="#F5F5F3"
        />
      </svg>
      <span className="font-display font-bold text-xl md:text-3xl text-[#F5F5F3] tracking-tight">
        shopify
      </span>
    </span>
  );
}
