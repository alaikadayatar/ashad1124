type IconProps = {
  className?: string;
};

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function PhoneIcon({ className = "size-3.5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} {...stroke}>
      <path d="M7 3.5h2.1c.4 0 .7.2.8.6l1 2.8c.1.4 0 .8-.3 1.1L9.2 9.4a.7.7 0 0 0-.2.7 11.2 11.2 0 0 0 5 5 .7.7 0 0 0 .7-.2l1.4-1.4c.3-.3.7-.4 1.1-.3l2.8 1c.4.1.6.4.6.8V17a2 2 0 0 1-2.2 2A14.8 14.8 0 0 1 5 6.7 2 2 0 0 1 7 3.5Z" />
    </svg>
  );
}

export function MailIcon({ className = "size-3.5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} {...stroke}>
      <rect x="3.5" y="5.5" width="17" height="13" />
      <path d="m4 7 8 6.5L20 7" />
    </svg>
  );
}

export function PinIcon({ className = "size-3.5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} {...stroke}>
      <path d="M12 21s6.2-5.1 6.2-10a6.2 6.2 0 1 0-12.4 0C5.8 15.9 12 21 12 21Z" />
      <circle cx="12" cy="11" r="1.7" />
    </svg>
  );
}
