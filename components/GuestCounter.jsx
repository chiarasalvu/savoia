'use client';

import { useState } from 'react';

export default function GuestCounter({ adultsName = 'adults', childrenName = 'children' }) {
  const [open, setOpen] = useState(false);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);

  return (
    <div className="relative w-full">
      <label htmlFor="guest-field" className="mb-1 block text-left text-xs font-medium uppercase tracking-[0.15em] text-savoia-taupe-text">
        Cantidad de huéspedes
      </label>
      <button
        type="button"
        id="guest-field"
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center border-b border-savoia-taupe/40 bg-transparent p-2 text-left transition-colors hover:border-savoia-charcoal"
      >
        {adults} Adulto{adults !== 1 ? 's' : ''}, {children} Menor{children !== 1 ? 'es' : ''}
      </button>

      {open && (
        <div className="absolute left-0 top-full z-10 rounded border border-savoia-taupe/40 bg-savoia-sand p-3 shadow-md">
          <Stepper label="Adultos" value={adults} min={1} onChange={setAdults} />
          <Stepper label="Menores (menor de 12 años)" value={children} min={0} onChange={setChildren} />
        </div>
      )}

      <input type="hidden" name={adultsName} value={adults} />
      <input type="hidden" name={childrenName} value={children} />
    </div>
  );
}

function Stepper({ label, value, min, onChange }) {
  return (
    <div className="mb-2 flex items-center justify-center gap-2">
      <label className="mr-2">{label}</label>
      <button
        type="button"
        onClick={() => onChange(Math.max(min, value - 1))}
        className="h-8 w-8 rounded-full bg-savoia-charcoal text-savoia-sand transition-colors hover:bg-savoia-accent hover:text-savoia-charcoal"
      >
        -
      </button>
      <input readOnly value={value} className="w-12 border border-savoia-taupe/40 bg-transparent text-center" />
      <button
        type="button"
        onClick={() => onChange(value + 1)}
        className="h-8 w-8 rounded-full bg-savoia-charcoal text-savoia-sand transition-colors hover:bg-savoia-accent hover:text-savoia-charcoal"
      >
        +
      </button>
    </div>
  );
}
