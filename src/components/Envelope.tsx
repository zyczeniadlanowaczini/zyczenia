import { Heart } from 'lucide-react';

interface EnvelopeProps {
  from: string;
  onClick: () => void;
}

export default function Envelope({ from, onClick }: EnvelopeProps) {
  return (
    <button
      onClick={onClick}
      className="group relative w-full aspect-[3/2] bg-gradient-to-br from-amber-100 to-stone-100 rounded-sm shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden border-2 border-red-900/30"
    >
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_50%_50%,rgba(127,29,29,0.1),transparent)]" />

      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-br from-red-900 to-red-950 transform origin-top group-hover:rotate-x-12 transition-transform duration-300"
           style={{ clipPath: 'polygon(0 0, 100% 0, 50% 100%)' }} />

      <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
        <div className="bg-stone-100/95 backdrop-blur-sm rounded-full p-3 mb-4 shadow-md">
          <Heart className="w-6 h-6 text-red-900 fill-red-900" />
        </div>

        <div className="bg-stone-100/98 backdrop-blur-sm px-6 py-3 rounded-sm shadow-md border border-red-900/20">
          <p className="text-red-900 font-medium text-lg font-handwritten">Od: {from}</p>
        </div>
      </div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <p className="text-red-900/70 text-sm font-light">Kliknij aby otworzyć</p>
      </div>
    </button>
  );
}
