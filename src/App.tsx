import { useState } from 'react';
import Envelope from './components/Envelope';
import VideoModal from './components/VideoModal';
import { VideoMessage } from './types';

const videoMessages: VideoMessage[] = [
  {
    id: 1,
    from: 'Ania',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  {
    id: 2,
    from: 'Kasia',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  {
    id: 3,
    from: 'Tomek',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  {
    id: 4,
    from: 'Magda',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  {
    id: 5,
    from: 'Piotr',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  {
    id: 6,
    from: 'Julia',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
];

function App() {
  const [selectedMessage, setSelectedMessage] = useState<VideoMessage | null>(null);

  const handleNext = () => {
    if (!selectedMessage) return;

    const currentIndex = videoMessages.findIndex(m => m.id === selectedMessage.id);
    const nextIndex = (currentIndex + 1) % videoMessages.length;
    setSelectedMessage(videoMessages[nextIndex]);
  };

  const hasNext = selectedMessage
    ? videoMessages.findIndex(m => m.id === selectedMessage.id) < videoMessages.length - 1
    : false;

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-pink-100 to-rose-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <section className="text-center mb-16 animate-fadeIn">
          <h1 className="text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-red-500 mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Wszystkiego najlepszego 🎉
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-4 font-light tracking-wide">
            Tutaj czekają koperty z urodzinowymi życzeniami dla Ciebie
          </p>
          <p className="text-base md:text-lg text-gray-600 font-light">
            Klikaj koperty, oglądaj filmiki i wracaj kiedy chcesz!
          </p>
        </section>

        <section className="mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 animate-slideUp">
            {videoMessages.map((message) => (
              <Envelope
                key={message.id}
                from={message.from}
                onClick={() => setSelectedMessage(message)}
              />
            ))}
          </div>
        </section>

        <section className="text-center py-12 px-6 bg-white/50 backdrop-blur-sm rounded-3xl shadow-lg animate-fadeIn">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-4 font-light">
            To wszystko było zrobione specjalnie dla Ciebie.
          </p>
          <p className="text-lg md:text-xl text-gray-700 mb-3 font-light">
            Bo jesteś ważna 💛
          </p>
          <p className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-red-500 font-handwritten">
            Kochamy Cię!
          </p>
        </section>
      </div>

      {selectedMessage && (
        <VideoModal
          message={selectedMessage}
          onClose={() => setSelectedMessage(null)}
          onNext={handleNext}
          hasNext={hasNext}
        />
      )}
    </div>
  );
}

export default App;
