import { useState } from 'react';
import Envelope from './components/Envelope';
import VideoModal from './components/VideoModal';
import { VideoMessage } from './types';

const videoMessages: VideoMessage[] = [
  {
    id: 1,
    from: 'Kacper',
    videoUrl: 'https://drive.google.com/file/d/1AI-cWO9UHKEnwxcYDXohlSAPjSGMCKH4/view?usp=sharing',
  },
  {
    id: 2,
    from: 'Mikołaj',
    videoUrl: 'https://drive.google.com/file/d/1AI-cWO9UHKEnwxcYDXohlSAPjSGMCKH4/preview',
  },
  {
    id: 3,
    from: 'Olimpia',
    videoUrl: 'https://vimeo.com/1160998960?share=copy&fl=sv&fe=ci',
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
            <svg className="w-24 h-16 mx-auto text-[#2F5FA8] opacity-70" viewBox="0 0 120 60" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M 20 30 Q 30 15, 40 30 Q 50 45, 60 30 Q 70 15, 80 30 Q 90 45, 100 30" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M 20 30 Q 30 45, 40 30 Q 50 15, 60 30 Q 70 45, 80 30 Q 90 15, 100 30" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h1 className="text-7xl md:text-8xl font-bold text-[#2F5FA8] mb-2">
            Wszystkiego
          </h1>
          <h1 className="text-7xl md:text-8xl font-bold text-[#2F5FA8] mb-6">
            najlepszego!
          </h1>

          <img
  src="/tort.png"
  alt="Urodzinowy tort"
  className="mx-auto mt-4 mb-6 w-40 md:w-48 opacity-95"
 />

          <p className="text-xl md:text-2xl text-[#2F5FA8] mb-4 font-light tracking-wide">
            Tutaj czekają koperty z urodzinowymi życzeniami dla Ciebie
          </p>
          <p className="text-lg md:text-xl text-[#2F5FA8] font-light">
            Klikaj na koperty, oglądaj filmiki i wracaj kiedy chcesz!
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
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-[#2F5FA8] to-transparent opacity-50"></div>
          <p className="text-xl md:text-2xl text-[#2F5FA8] leading-relaxed mb-4 font-light">
            To wszystko było zrobione specjalnie dla Ciebie!
          </p>
          <p className="text-xl md:text-2xl text-[#2F5FA8] mb-3 font-light">
            Bo jesteś dla Nas bardzo ważna...
          </p>
          <p className="text-5xl md:text-6xl font-bold text-[#2F5FA8]">
            Kochamy Cię!
          </p>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-[#2F5FA8] to-transparent opacity-50"></div>
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
