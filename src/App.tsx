import { useState } from 'react';
import Envelope from './components/Envelope';
import VideoModal from './components/VideoModal';
import { VideoMessage } from './types';

const videoMessages: VideoMessage[] = [
  {
    id: 1,
    from: 'Kacper',
    videoUrl: 'https://www.youtube.com/watch?v=oye0VWULmpA',
  },
  {
    id: 2,
    from: 'Mikołaj',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  {
    id: 3,
    from: 'Olimpia',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  {
    id: 4,
    from: 'Patryk',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  {
    id: 5,
    from: 'Ola & Maciek',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  {
    id: 6,
    from: 'Kacper',
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
    <div className="min-h-screen bg-gradient-to-br from-[#FBF7F2] via-[#FBF7F2] to-[#FBF7F2]">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <section className="text-center mb-16 animate-fadeIn">
          <div className="mb-8">
            <svg className="w-24 h-16 mx-auto text-red-900 opacity-70" viewBox="0 0 120 60" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M 20 30 Q 30 15, 40 30 Q 50 45, 60 30 Q 70 15, 80 30 Q 90 45, 100 30" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M 20 30 Q 30 45, 40 30 Q 50 15, 60 30 Q 70 45, 80 30 Q 90 15, 100 30" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold text-red-900 mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
            Wszystkiego
          </h1>
          <h1 className="text-6xl md:text-7xl font-bold text-red-900 mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            najlepszego!
          </h1>
          <p className="text-lg md:text-xl text-red-900/70 mb-4 font-light tracking-wide">
            Tutaj czekają koperty z urodzinowymi życzeniami dla Ciebie
          </p>
          <p className="text-base md:text-lg text-red-900/60 font-light">
            Klikaj na koperty, oglądaj filmiki i wracaj kiedy chcesz!
          </p>
          <p className="font-handwritten text-[#2F5FA8] text-xl md:text-2xl mb-4 opacity-90">
  it's your birthday
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

        <section className="text-center py-12 px-6 rounded-none animate-fadeIn relative">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-red-900 to-transparent opacity-50"></div>
          <p className="text-lg md:text-xl text-red-900/70 leading-relaxed mb-4 font-light">
            To wszystko było zrobione specjalnie dla Ciebie!
          </p>
          <p className="text-lg md:text-xl text-red-900/70 mb-3 font-light">
            Bo jesteś dla Nas bardzo ważna 💛
          </p>
          <p className="text-5xl md:text-6xl font-bold text-red-900 font-handwritten">
            Kochamy Cię!
          </p>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-red-900 to-transparent opacity-50"></div>
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
