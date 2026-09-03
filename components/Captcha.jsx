'use client';

import { useEffect, useState } from 'react';
import { ShieldCheck } from 'lucide-react';

// A self-contained challenge (no external service/site key needed): the form
// won't submit until the sum is right, enforced natively via the input's
// `pattern` so it plugs into the browser's own validation UI for free.
//
// The question is generated on mount (client-only) rather than during the
// initial render, since Math.random() called at render time would produce a
// different number on the server than on the client and break hydration.
export default function Captcha({ className = '' }) {
  const [challenge, setChallenge] = useState(null);

  useEffect(() => {
    setChallenge({ a: 1 + Math.floor(Math.random() * 8), b: 1 + Math.floor(Math.random() * 8) });
  }, []);

  if (!challenge) {
    return (
      <div className={className}>
        <div className="h-[58px] rounded-2xl border border-savoia-taupe/30 bg-white" />
      </div>
    );
  }

  const { a, b } = challenge;

  return (
    <div className={className}>
      <div className="flex items-center gap-3 rounded-2xl border border-savoia-taupe/30 bg-white px-5 py-4">
        <ShieldCheck size={20} className="shrink-0 text-savoia-charcoal" />
        <span className="text-savoia-charcoal">
          Para confirmar que sos una persona, ¿cuánto es {a} + {b}?
        </span>
        <input
          type="text"
          inputMode="numeric"
          required
          pattern={String(a + b)}
          title="Ese no es el resultado correcto"
          placeholder="Resultado"
          aria-label={`¿Cuánto es ${a} + ${b}?`}
          className="ml-auto w-20 min-w-0 shrink-0 border-b border-savoia-taupe/30 bg-transparent text-center text-savoia-charcoal outline-none placeholder:text-savoia-taupe-text focus:border-savoia-charcoal"
        />
      </div>
    </div>
  );
}
