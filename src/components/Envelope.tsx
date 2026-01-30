import { Heart } from 'lucide-react';

interface EnvelopeProps {
  from: string;
  onClick: () => void;
}

export default function Envelope({ from, onClick }: EnvelopeProps) {
  return (
    <button
      onClick={onClick}
      className="group relative w-full aspect-[3/2] bg-gradient-to-br from-red-600 to-red-700 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.3),transparent)]" />

      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-br from-red-500 to-red-600 transform origin-top group-hover:rotate-x-12 transition-transform duration-300"
           style={{ clipPath: 'polygon(0 0, 100% 0, 50% 100%)' }} />

      <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
        <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 mb-4 shadow-md">
          <Heart className="w-6 h-6 text-red-600 fill-red-600" />
        </div>

        <div className="bg-white/95 backdrop-blur-sm px-6 py-3 rounded-lg shadow-md">
          <p className="text-red-800 font-medium text-lg font-handwritten">Od: {from}</p>
        </div>
      </div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <p className="text-white text-sm font-light">Kliknij aby otworzyć</p>
      </div>
    </button>
  );
}
