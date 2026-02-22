import { Heart } from 'lucide-react';

interface EnvelopeProps {
  from: string;
  onClick: () => void;
}

export default function Envelope({ from, onClick }: EnvelopeProps) {
  return (
    <button
      onClick={onClick}
      className="
        group relative w-full aspect-[3/2]
        bg-gradient-to-br from-[#9B6B65] via-[#B8827D] to-[#A67470]
        rounded-none shadow-xl hover:shadow-2xl
        transition-all duration-500 hover:scale-105 hover:-rotate-2
        overflow-hidden
      "
      style={{
        boxShadow: '0 8px 24px rgba(90, 15, 27, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.15)',
      }}
    >
      {/* paper texture overlay */}
      <div className="absolute inset-0 paper-texture pointer-events-none" />

      {/* soft vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(58,10,18,0.08)_100%)]" />

      {/* envelope flap - hand drawn effect */}
      <div
        className="
          absolute top-0 left-0 w-full h-1/2
          bg-gradient-to-b from-[#9B6B65] via-[#8B5D57] to-[#7A4D47]
          transition-all duration-500 group-hover:opacity-90
          flap-open
        "
        style={{
          clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
          boxShadow: 'inset 0 1px 3px rgba(255, 255, 255, 0.2), inset 0 -1px 2px rgba(0, 0, 0, 0.1)',
          transformOrigin: 'top center',
        }}
      />

      {/* envelope body */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
        {/* heart icon */}
        <div className="mb-5 transform transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-8">
          <Heart className="w-8 h-8 text-[#F5E6D3]/60 fill-[#F5E6D3]/60" />
        </div>

        {/* sender text - handwritten style */}
        <div className="text-center">
          <p className="text-[#F5E6D3] text-3xl font-light tracking-wide drop-shadow-md">
            Od: {from}
          </p>
        </div>

        {/* decorative dots */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-1.5 h-1.5 rounded-full bg-[#F5E6D3]/40" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#F5E6D3]/40" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#F5E6D3]/40" />
        </div>
      </div>

    </button>
  );
}
