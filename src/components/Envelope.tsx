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
        bg-gradient-to-br from-[#5A0F1B] via-[#7A1224] to-[#9B1C31]
        rounded-sm shadow-lg hover:shadow-2xl
        transition-all duration-300 hover:scale-105
        overflow-hidden border-2 border-red-900/30
      "
    >
      {/* soft bordo glow */}
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_50%_50%,rgba(155,28,49,0.25),transparent)]" />

      {/* envelope flap */}
      <div
        className="
          absolute top-0 left-0 w-full h-1/2
          bg-gradient-to-br from-[#7A1224] to-[#3A0A12]
          transform origin-top group-hover:rotate-x-12
          transition-transform duration-300
        "
        style={{ clipPath: 'polygon(0 0, 100% 0, 50% 100%)' }}
      />

      {/* content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
        <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 mb-4 shadow-md">
          <Heart className="w-6 h-6 text-red-900 fill-red-900" />
        </div>

        <div className="bg-white/95 backdrop-blur-sm px-6 py-3 rounded-sm shadow-md border border-red-900/20">
          <p className="text-red-900 font-medium text-lg font-handwritten">
            Od: {from}
          </p>
        </div>
      </div>

      {/* hover hint */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <p className="text-white/80 text-sm font-light">
          Kliknij aby otworzyć
        </p>
      </div>
    </button>
  );
}
