import Link from 'next/link';

export default function Button({ href, children, type = 'button', className = '' }) {
  const classes = `inline-block bg-savoia-charcoal px-6 py-3 text-sm font-medium uppercase tracking-wide text-savoia-sand transition-colors duration-300 hover:bg-savoia-accent hover:text-savoia-charcoal ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes}>
      {children}
    </button>
  );
}
