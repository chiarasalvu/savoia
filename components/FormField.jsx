export default function FormField({ label, name, type = 'text', required, className = '', as = 'input', children, ...rest }) {
  const useStaticLabel = as === 'select' || type === 'date';

  if (useStaticLabel) {
    const Tag = as;
    return (
      <div className={className}>
        <label htmlFor={name} className="mb-1 block text-xs font-medium uppercase tracking-[0.15em] text-savoia-taupe-text">
          {label}
        </label>
        <Tag
          id={name}
          name={name}
          {...(as === 'input' ? { type } : {})}
          required={required}
          className="w-full border-b border-savoia-taupe/40 bg-transparent px-1 pb-2 pt-1 text-savoia-charcoal outline-none transition-colors focus:border-savoia-charcoal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-savoia-accent"
          {...rest}
        >
          {children}
        </Tag>
      </div>
    );
  }

  const Tag = as;
  return (
    <div className={`relative ${className}`}>
      <Tag
        id={name}
        name={name}
        {...(as === 'input' ? { type } : {})}
        required={required}
        placeholder=" "
        className="peer w-full border-b border-savoia-taupe/40 bg-transparent px-1 pb-2 pt-5 text-savoia-charcoal outline-none transition-colors focus:border-savoia-charcoal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-savoia-accent"
        {...rest}
      >
        {children}
      </Tag>
      <label
        htmlFor={name}
        className="pointer-events-none absolute left-1 top-5 text-savoia-taupe-text transition-all duration-200 peer-focus:top-0 peer-focus:text-xs peer-focus:tracking-[0.1em] peer-[&:not(:placeholder-shown)]:top-0 peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:tracking-[0.1em]"
      >
        {label}
      </label>
    </div>
  );
}
