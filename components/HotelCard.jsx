import { Hotel } from 'lucide-react';

export default function HotelCard({ title, titleHref, addressHref, addressText, phoneHref, phoneText }) {
  return (
    <div className="flex h-full w-full flex-col items-center bg-savoia-stone p-[50px] text-center text-savoia-charcoal">
      <a href={titleHref} className="flex flex-col items-center">
        <Hotel size={40} className="mb-2" />
        <h2 className="pb-5 text-xl font-medium uppercase">{title}</h2>
      </a>
      <a href={addressHref} className="text-savoia-charcoal">
        {addressText}
      </a>
      <br />
      <a href={phoneHref} className="text-savoia-charcoal">
        {phoneText}
      </a>
    </div>
  );
}
