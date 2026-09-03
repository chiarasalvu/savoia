'use client';

import { useState } from 'react';
import { User, Users } from 'lucide-react';

export default function GuestCounter({ adultsName = 'adults', childrenName = 'children' }) {
  const [open, setOpen] = useState(false);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);

  return (
    <div className="relative w-full">
      <label htmlFor="guest-field" className="mb-2 block text-left text-sm text-savoia-charcoal">
        Cantidad de huéspedes
      </label>
      <button
        type="button"
        id="guest-field"
        onClick={() => setOpen((o) => !o)}
        className={`flex w-full items-center gap-3 rounded-2xl border bg-white px-5 py-4 text-left text-savoia-charcoal transition-colors ${
          open ? 'border-savoia-charcoal' : 'border-savoia-taupe/30 hover:border-savoia-charcoal'
        }`}
      >
        <Users size={20} className="shrink-0 text-savoia-charcoal" />
        <span>
          {adults} Adulto{adults !== 1 ? 's' : ''}, {children} Menor{children !== 1 ? 'es' : ''}
        </span>
      </button>

      {open && (
        <div className="absolute left-0 top-full z-10 mt-2 w-full rounded-2xl border border-savoia-taupe/30 bg-white p-2 shadow-md">
          <Stepper icon={User} label="Adultos" value={adults} min={1} onChange={setAdults} />
          <div className="h-px bg-savoia-taupe/15" />
          <Stepper icon={Users} label="Menores" sublabel="Menor de 12 años" value={children} min={0} onChange={setChildren} />
        </div>
      )}

      <input type="hidden" name={adultsName} value={adults} />
      <input type="hidden" name={childrenName} value={children} />
    </div>
  );
}

function Stepper({ icon: Icon, label, sublabel, value, min, onChange }) {
  return (
    <div className="flex items-center justify-between gap-4 px-3 py-4">
      <div className="flex items-center gap-3">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-savoia-stone text-savoia-charcoal">
          <Icon size={20} />
        </span>
        <div>
          <p className="text-sm font-medium text-savoia-charcoal">{label}</p>
          {sublabel && <p className="text-xs text-savoia-taupe-text">{sublabel}</p>}
        </div>
      </div>
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => onChange(Math.max(min, value - 1))}
          disabled={value <= min}
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-savoia-stone text-savoia-taupe-text transition-opacity disabled:opacity-40"
        >
          −
        </button>
        <span className="w-4 text-center text-savoia-charcoal">{value}</span>
        <button
          type="button"
          onClick={() => onChange(value + 1)}
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-savoia-charcoal text-white transition-opacity hover:opacity-90"
        >
          +
        </button>
      </div>
    </div>
  );
}
