import { X, ArrowRight, ExternalLink } from 'lucide-react';
import { VideoMessage } from '../types';

interface VideoModalProps {
  message: VideoMessage;
  onClose: () => void;
  onNext: () => void;
  hasNext: boolean;
}

function isGoogleDriveUrl(url: string): boolean {
  return url.includes('drive.google.com');
}

function getEmbedUrl(url: string): string {
  if (isGoogleDriveUrl(url)) {
    const fileIdMatch = url.match(/\/d\/([a-zA-Z0-9-_]+)/);
    if (fileIdMatch) {
      return `https://drive.google.com/file/d/${fileIdMatch[1]}/preview`;
    }
  }
  return url;
}

export default function VideoModal({ message, onClose, onNext, hasNext }: VideoModalProps) {
  const embedUrl = getEmbedUrl(message.videoUrl);
  const isGoogleDrive = isGoogleDriveUrl(message.videoUrl);

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn">
      <div className="bg-gradient-to-br from-stone-50 to-amber-50 rounded-sm shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-auto animate-slideUp border border-red-900/20">
        <div className="sticky top-0 bg-gradient-to-r from-stone-50 to-amber-50 border-b-2 border-red-900/30 px-6 py-6 flex justify-between items-center rounded-t-sm">
          <div>
            <p className="text-red-900/60 text-xs tracking-wide font-light">ŻYCZENIA OD</p>
            <h3 className="text-4xl text-red-900">{message.from}</h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-red-900/5 rounded-full transition-colors"
          >
            <X className="w-6 h-6 text-red-900/70" />
          </button>
        </div>

        <div className="p-6">
          {isGoogleDrive ? (
            <div className="relative aspect-video bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg overflow-hidden shadow-lg mb-6 flex items-center justify-center">
              <button
                onClick={() => window.open(embedUrl, '_blank', 'width=1024,height=768,left=100,top=100')}
                className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-red-900 to-red-800 hover:from-red-950 hover:to-red-900 text-stone-50 rounded-lg font-medium transition-colors shadow-lg"
              >
                <span className="text-lg">Otwórz filmik</span>
                <ExternalLink className="w-5 h-5" />
              </button>
            </div>
          ) : (
            <div className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden shadow-lg mb-6">
              <iframe
                src={embedUrl}
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          )}

          <div className="text-center mb-8 py-4">
            <p className="text-red-900/60 text-xs tracking-widest font-light mb-2">❤️ ŻYCZENIA OD</p>
            <p className="text-5xl text-red-900">{message.from}</p>
          </div>

          <div className="flex gap-4 justify-center flex-wrap pb-4">
            <button
              onClick={onClose}
              className="px-8 py-3 bg-stone-200/50 hover:bg-stone-300/50 text-red-900 rounded-sm font-medium transition-colors border border-red-900/20 text-lg"
            >
              Wróć do kopert
            </button>

            {hasNext && (
              <button
                onClick={onNext}
                className="px-8 py-3 bg-gradient-to-r from-red-900 to-red-800 hover:from-red-950 hover:to-red-900 text-stone-50 rounded-sm font-medium transition-colors flex items-center gap-2 text-lg"
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
