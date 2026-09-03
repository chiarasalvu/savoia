'use client';

import { useState } from 'react';
import { Building2, ChevronDown } from 'lucide-react';

const HOTELS = [
  { value: 'ostende', label: 'Hotel Savoia Ostende' },
  { value: 'mendoza', label: 'Hotel Savoia Mendoza' },
  { value: 'san bernardo', label: 'Hotel Savoia San Bernardo' },
  { value: 'cariló', label: 'Puerto Hamlet Cariló' },
];

export default function HotelSelect({ name = 'hotel', required }) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  return (
    <div className="relative w-full">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className={`flex w-full items-center gap-3 rounded-2xl border bg-white px-5 py-4 text-left transition-colors ${
          open ? 'border-savoia-charcoal' : 'border-savoia-taupe/30 hover:border-savoia-charcoal'
        }`}
      >
        <Building2 size={20} className="shrink-0 text-savoia-charcoal" />
        <span className={selected ? 'text-savoia-charcoal' : 'text-savoia-taupe-text'}>
          {selected ? selected.label : 'Seleccione un hotel'}
        </span>
        <ChevronDown
          size={18}
          className={`ml-auto shrink-0 text-savoia-taupe-text transition-transform ${open ? 'rotate-180' : ''}`}
        />
      </button>

      {open && (
        <div className="absolute left-0 top-full z-10 mt-2 w-full overflow-hidden rounded-2xl border border-savoia-taupe/30 bg-white shadow-md">
          {HOTELS.map((hotel) => (
            <button
              key={hotel.value}
              type="button"
              onClick={() => {
                setSelected(hotel);
                setOpen(false);
              }}
              className="flex w-full items-center gap-3 border-b border-savoia-taupe/10 px-5 py-4 text-left transition-colors last:border-b-0 hover:bg-savoia-stone"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-savoia-stone text-savoia-charcoal">
                <Building2 size={18} />
              </span>
              <span className="text-savoia-charcoal">{hotel.label}</span>
            </button>
          ))}
        </div>
      )}

      <input type="hidden" name={name} value={selected?.value ?? ''} required={required} />
    </div>
  );
}
