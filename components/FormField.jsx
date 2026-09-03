export default function FormField({ label, name, type = 'text', required, className = '', as = 'input', icon: Icon, ...rest }) {
  const Tag = as;

  if (as === 'textarea') {
    return (
      <div className={className}>
        <div className="flex items-start gap-3 rounded-2xl border border-savoia-taupe/30 bg-white px-5 py-4 transition-colors focus-within:border-savoia-charcoal">
          {Icon && <Icon size={20} className="mt-0.5 shrink-0 text-savoia-charcoal" />}
          <Tag
            id={name}
            name={name}
            required={required}
            placeholder={label}
            className="w-full min-w-0 resize-y bg-transparent text-savoia-charcoal outline-none placeholder:text-savoia-taupe-text"
            {...rest}
          />
        </div>
      </div>
    );
  }

  // Date inputs can't show a custom placeholder, so they keep a visible label
  // above the field — same treatment as GuestCounter and the Hotel dropdown.
  const showTopLabel = type === 'date';

  const field = (
    <div className="flex items-center gap-3 rounded-2xl border border-savoia-taupe/30 bg-white px-5 py-4 transition-colors focus-within:border-savoia-charcoal">
      {Icon && <Icon size={20} className="shrink-0 text-savoia-charcoal" />}
      <Tag
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={showTopLabel ? undefined : label}
        aria-label={label}
        className="w-full min-w-0 bg-transparent text-savoia-charcoal outline-none placeholder:text-savoia-taupe-text"
        {...rest}
      />
    </div>
  );

  if (showTopLabel) {
    return (
      <div className={className}>
        <label htmlFor={name} className="mb-2 block text-left text-sm text-savoia-charcoal">
          {label}
        </label>
        {field}
      </div>
    );
  }

  return <div className={className}>{field}</div>;
}
