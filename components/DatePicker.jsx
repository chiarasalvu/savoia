'use client';

import { useEffect, useRef, useState } from 'react';
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight } from 'lucide-react';

const DAY_LABELS = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
const MONTH_LABELS = [
  'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
  'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre',
];

function buildMonthGrid(year, month) {
  const firstWeekday = (new Date(year, month, 1).getDay() + 6) % 7; // Monday-first
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const daysInPrevMonth = new Date(year, month, 0).getDate();

  const cells = [];
  for (let i = firstWeekday - 1; i >= 0; i -= 1) {
    cells.push({ day: daysInPrevMonth - i, current: false });
  }
  for (let day = 1; day <= daysInMonth; day += 1) {
    cells.push({ day, current: true });
  }
  while (cells.length % 7 !== 0) {
    cells.push({ day: cells.length, current: false });
  }
  return cells;
}

function pad(n) {
  return String(n).padStart(2, '0');
}

export default function DatePicker({ label, name, required, className = '' }) {
  const [open, setOpen] = useState(false);
  const [viewDate, setViewDate] = useState(() => new Date());
  const [selected, setSelected] = useState(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();
  const cells = buildMonthGrid(year, month);
  // Only lets you navigate back as far as the current month — no browsing
  // into the past, since a booking date before today makes no sense.
  const canGoPrev = year > today.getFullYear() || (year === today.getFullYear() && month > today.getMonth());

  const displayValue = selected ? `${pad(selected.getDate())}/${pad(selected.getMonth() + 1)}/${selected.getFullYear()}` : '';
  const isoValue = selected ? `${selected.getFullYear()}-${pad(selected.getMonth() + 1)}-${pad(selected.getDate())}` : '';

  return (
    <div className={className} ref={wrapperRef}>
      <label className="mb-2 block text-left text-sm text-savoia-charcoal">{label}</label>
      <div className="relative">
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className={`flex w-full items-center gap-3 rounded-2xl border bg-white px-5 py-4 text-left transition-colors ${
            open ? 'border-savoia-charcoal' : 'border-savoia-taupe/30 hover:border-savoia-charcoal'
          }`}
        >
          <CalendarIcon size={20} className="shrink-0 text-savoia-charcoal" />
          <span className={selected ? 'text-savoia-charcoal' : 'text-savoia-taupe-text'}>{displayValue || 'dd/mm/aaaa'}</span>
        </button>

        {open && (
          <div className="absolute left-0 top-full z-20 mt-2 w-[300px] rounded-2xl border border-savoia-taupe/30 bg-white p-4 shadow-lg">
            <div className="mb-3 flex items-center justify-between">
              <button
                type="button"
                onClick={() => setViewDate(new Date(year, month - 1, 1))}
                disabled={!canGoPrev}
                className="rounded-full p-1 text-savoia-charcoal transition-colors hover:bg-savoia-stone disabled:invisible"
              >
                <ChevronLeft size={18} />
              </button>
              <span className="text-sm font-medium text-savoia-charcoal">
                {MONTH_LABELS[month]} {year}
              </span>
              <button
                type="button"
                onClick={() => setViewDate(new Date(year, month + 1, 1))}
                className="rounded-full p-1 text-savoia-charcoal transition-colors hover:bg-savoia-stone"
              >
                <ChevronRight size={18} />
              </button>
            </div>

            <div className="grid grid-cols-7 text-center text-xs text-savoia-taupe-text">
              {DAY_LABELS.map((d, i) => (
                <span key={`${d}-${i}`} className="py-1">
                  {d}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-y-1 text-center text-sm">
              {cells.map((cell, i) => {
                const cellDate = cell.current ? new Date(year, month, cell.day) : null;
                const isPast = cellDate && cellDate < today;
                const isSelected =
                  cell.current && selected &&
                  selected.getDate() === cell.day && selected.getMonth() === month && selected.getFullYear() === year;
                return (
                  <button
                    type="button"
                    key={`${cell.day}-${i}`}
                    disabled={!cell.current || isPast}
                    onClick={() => setSelected(cellDate)}
                    className={`mx-auto flex h-8 w-8 items-center justify-center rounded-full transition-colors ${
                      !cell.current
                        ? 'invisible'
                        : isPast
                          ? 'text-savoia-taupe/30'
                          : isSelected
                            ? 'bg-savoia-charcoal text-white'
                            : 'text-savoia-charcoal hover:bg-savoia-stone'
                    }`}
                  >
                    {cell.day}
                  </button>
                );
              })}
            </div>

            <div className="mt-3 flex items-center justify-between border-t border-savoia-taupe/10 pt-3 text-sm">
              <button type="button" onClick={() => setSelected(null)} className="text-savoia-taupe-text transition-colors hover:text-savoia-charcoal">
                Borrar
              </button>
              <button
                type="button"
                onClick={() => {
                  const today = new Date();
                  setSelected(today);
                  setViewDate(today);
                }}
                className="font-medium text-savoia-charcoal hover:underline"
              >
                Hoy
              </button>
            </div>
          </div>
        )}
      </div>

      <input type="hidden" name={name} value={isoValue} required={required} />
    </div>
  );
}
