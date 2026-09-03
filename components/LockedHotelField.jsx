import { Building2 } from 'lucide-react';

// A non-interactive stand-in for HotelSelect: shows the hotel already
// chosen, with no dropdown and no way to change it. Used on a hotel's own
// page, where the contact form should only ever submit for that hotel.
export default function LockedHotelField({ label, value, name = 'hotel' }) {
  return (
    <div className="flex w-full items-center gap-3 rounded-2xl border border-savoia-taupe/30 bg-savoia-stone px-5 py-4 text-left">
      <Building2 size={20} className="shrink-0 text-savoia-charcoal" />
      <span className="text-savoia-charcoal">{label}</span>
      <input type="hidden" name={name} value={value} />
    </div>
  );
}
