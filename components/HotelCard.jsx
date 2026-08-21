import { Hotel } from 'lucide-react';

export default function HotelCard({ title, titleHref, addressHref, addressText, phoneHref, phoneText }) {
  return (
    <div className="w-full bg-savoia-light p-8 text-center text-[#333]">
      <a href={titleHref}>
        <Hotel size={40} className="mx-auto mb-2" />
        <h2 className="mt-2 uppercase">{title}</h2>
      </a>
      <a href={addressHref}>{addressText}</a>
      <br />
      <a href={phoneHref}>{phoneText}</a>
    </div>
  );
}
