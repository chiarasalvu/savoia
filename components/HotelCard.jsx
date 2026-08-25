import { Hotel } from 'lucide-react';

export default function HotelCard({ title, titleHref, addressHref, addressText, phoneHref, phoneText }) {
  return (
    <div className="group flex h-full w-full flex-col items-center rounded-xl bg-savoia-light p-8 text-center text-[#333] shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <a href={titleHref} className="flex flex-col items-center">
        <span className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-savoia-accent/20 text-savoia-dark transition-colors duration-300 group-hover:bg-savoia-accent/40">
          <Hotel size={28} />
        </span>
        <h2 className="text-lg font-medium uppercase tracking-wide">{title}</h2>
      </a>
      <span className="my-3 h-px w-10 bg-[#333]/15" />
      <a href={addressHref} className="text-sm text-[#333]/75 transition-colors hover:text-savoia-dark">
        {addressText}
      </a>
      <a href={phoneHref} className="mt-1 text-sm font-medium transition-colors hover:text-savoia-dark">
        {phoneText}
      </a>
    </div>
  );
}
