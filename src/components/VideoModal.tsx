import { X, ArrowRight } from 'lucide-react';
import { VideoMessage } from '../types';

interface VideoModalProps {
  message: VideoMessage;
  onClose: () => void;
  onNext: () => void;
  hasNext: boolean;
}

export default function VideoModal({ message, onClose, onNext, hasNext }: VideoModalProps) {
  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn">
      <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-auto animate-slideUp">
        <div className="sticky top-0 bg-white border-b border-pink-100 px-6 py-4 flex justify-between items-center rounded-t-2xl">
          <h3 className="text-2xl text-gray-800" style={{ fontFamily: "'Playfair Display', serif" }}>
            Życzenia od: <span className="text-red-600 font-handwritten">{message.from}</span>
          </h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-pink-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        <div className="p-6">
          <div className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden shadow-lg mb-6">
            <iframe
              src={message.videoUrl}
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          <div className="text-center mb-6">
            <p className="text-xl text-gray-700 font-light">❤️ Życzenia od: <span className="font-handwritten text-red-600 text-2xl">{message.from}</span></p>
          </div>

          <div className="flex gap-4 justify-center flex-wrap">
            <button
              onClick={onClose}
              className="px-8 py-3 bg-pink-100 hover:bg-pink-200 text-pink-800 rounded-full font-medium transition-colors"
              style={{ fontFamily: "'Quicksand', sans-serif" }}
            >
              Wróć do kopert
            </button>

            {hasNext && (
              <button
                onClick={onNext}
                className="px-8 py-3 bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white rounded-full font-medium transition-colors flex items-center gap-2"
                style={{ fontFamily: "'Quicksand', sans-serif" }}
              >
                Następne życzenia
                <ArrowRight className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
