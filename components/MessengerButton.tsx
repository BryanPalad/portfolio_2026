import { FaFacebookMessenger } from "react-icons/fa6";

type MessengerButtonProps = {
  href?: string;
  ariaLabel?: string;
  className?: string;
};

const MessengerButton = ({
  href = "https://m.me/BryanPalad.15",
  ariaLabel = "Message Bryan on Messenger",
  className = "",
}: MessengerButtonProps) => {
  return (
    <div
      className={`group fixed bottom-4 right-4 z-50 sm:bottom-6 sm:right-6 ${className}`}
    >
      <span className="pointer-events-none absolute right-full top-1/2 mr-3 hidden -translate-y-1/2 whitespace-nowrap rounded-md bg-slate-900 px-2 py-1 text-xs font-medium text-white opacity-0 shadow-md transition-all duration-200 group-hover:-translate-x-1 group-hover:opacity-100 md:block">
        Message me
      </span>

      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel}
        title="Message me"
        className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#0084FF] text-white shadow-[0_10px_24px_-8px_rgba(0,132,255,0.7)] transition-transform duration-200 hover:scale-105 focus-visible:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0084FF] focus-visible:ring-offset-2"
      >
        <FaFacebookMessenger className="h-7 w-7" />
      </a>
    </div>
  );
};

export default MessengerButton;
