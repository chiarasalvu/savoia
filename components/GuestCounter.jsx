'use client';

import { useState } from 'react';

export default function GuestCounter() {
  const [open, setOpen] = useState(false);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);

  return (
    <div className="relative mx-auto mb-5 w-full max-w-[400px]">
      <label htmlFor="guest-field" className="mb-1 block text-left">
        Cantidad de huéspedes
      </label>
      <button
        type="button"
        id="guest-field"
        onClick={() => setOpen((o) => !o)}
        className="flex w-4/5 items-center border border-[#ccc] bg-white p-2 text-left"
      >
        {adults} Adulto{adults !== 1 ? 's' : ''}, {children} Menor{children !== 1 ? 'es' : ''}
      </button>

      {open && (
        <div className="absolute left-0 top-full z-10 rounded border border-[#ccc] bg-white p-3 shadow-md">
          <Stepper label="Adultos" value={adults} min={1} onChange={setAdults} />
          <Stepper label="Menores (menor de 12 años)" value={children} min={0} onChange={setChildren} />
        </div>
      )}

      <input type="hidden" name="adults" value={adults} />
      <input type="hidden" name="children" value={children} />
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
        className="h-8 w-8 rounded-full bg-gray-500 text-white"
      >
        -
      </button>
      <input readOnly value={value} className="w-12 border border-[#ccc] text-center" />
      <button type="button" onClick={() => onChange(value + 1)} className="h-8 w-8 rounded-full bg-gray-500 text-white">
        +
      </button>
    </div>
  );
}
