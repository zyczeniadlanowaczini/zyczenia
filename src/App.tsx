import Envelope from './components/Envelope';
import AccessGate from './components/AccessGate';
import { VideoMessage } from './types';

const videoMessages: VideoMessage[] = [
  {
    id: 1,
    from: 'Kacper',
    videoUrl: 'https://drive.google.com/file/d/1AQxu0ziQxA5COnMgJ4ipN8D1VukvePtY/preview',
  },
  {
    id: 2,
    from: 'Mikołaj',
    videoUrl: 'https://drive.google.com/file/d/1aUjslBxMXKvxRnZTDIzGQ3c38GdYX5mi/preview',
  },
  {
    id: 3,
    from: 'Cristina',
    videoUrl: 'https://drive.google.com/file/d/1Ub5ardOp888xYtUbir7LApC2K2fn8V9l/preview',
  },
  {
    id: 4,
    from: 'Julka Kulbaczewska',
    videoUrl: 'https://drive.google.com/file/d/165RybQEhJk3o4qqvzbrB_SWd1goUPAOk/preview',
  },
  {
    id: 5,
    from: 'Ola & Maciek',
    videoUrl: 'https://drive.google.com/file/d/1fwJ12JO87ARbjav7IBYdeDMy8iKXDCxP/preview',
  },
  {
    id: 6,
    from: 'Ola Maksym',
    videoUrl: 'https://drive.google.com/file/d/1piAN3Vf23FGx8CBkuQYs10jxLVfu0CEo/preview',
  },
  {
    id: 7,
    from: 'Estera',
    videoUrl: 'https://drive.google.com/file/d/18hnbVbh2iJziZaBCNobITGQjC2d-R9yU/preview',
  },
    {
    id: 8,
    from: 'Paweł',
    videoUrl: 'https://drive.google.com/file/d/1BqOTERveUIkplaK4a6soJE819Q6CPzJf/preview',
  },
    {
    id: 9,
    from: 'Nadia',
    videoUrl: 'https://drive.google.com/file/d/1VbDij0penL4KGuZPCEm8ZNIPeu_VBS5x/preview',
  },
    {
    id: 10,
    from: 'Aneta & Daniel',
    videoUrl: 'https://drive.google.com/file/d/1OTkKINKruf8Fv6YzBh5hBHFIKW39Sbk1/preview',
  },
   {
    id: 11,
    from: 'Judyta & Julka',
    videoUrl: 'https://drive.google.com/file/d/1fY150b10D-r5iX_osclrQ2Og0xrUMll3/preview',
  },
  {
    id: 12,
    from: 'Alex Beim',
    videoUrl: 'https://drive.google.com/file/d/1KYoi_hXBENiug8lsOQ1LR3pr6m92NERk/preview',
  },
    {
    id: 13,
    from: 'Agata Łabuda',
    videoUrl: 'https://drive.google.com/file/d/1klABcA_yy11F-pUmhb9Tsw3yzm00DiR3/preview',
  },
     {
    id: 14,
    from: 'Chowan',
    videoUrl: 'https://drive.google.com/file/d/1qvoOblSCoFo_pnj6DdDmVquelivHOFzy/preview',
  },
   {
    id: 15,
    from: 'Karina',
    videoUrl: 'https://drive.google.com/file/d/1f1Ivjeljs0bskEzpQqCVf1PQtOa7xLrk/preview',
  },
  
];

function App() {
  const handleEnvelopeClick = (videoUrl: string) => {
    window.open(videoUrl, '_blank', 'noopener,noreferrer,width=1024,height=768,left=100,top=100');
  };


  return (
    <AccessGate>
    <div className="min-h-screen bg-gradient-to-br from-[#FBF7F2] via-[#FBF7F2] to-[#FBF7F2]">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <section className="text-center mb-16 animate-fadeIn">
          <div className="mb-8">
            <svg className="w-24 h-16 mx-auto text-[##704540] opacity-70" viewBox="0 0 120 60" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M 20 30 Q 30 15, 40 30 Q 50 45, 60 30 Q 70 15, 80 30 Q 90 45, 100 30" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M 20 30 Q 30 45, 40 30 Q 50 15, 60 30 Q 70 45, 80 30 Q 90 15, 100 30" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
   
     

   <img
  src="/happy.png"
  alt="Happy"
  className="mx-auto mt-6 mb-8 w-56 md:w-72 opacity-95"
 />  

          <p className="text-xl md:text-2xl text-[#704540] mb-4 font-light tracking-wide">
            Tutaj czekają koperty z urodzinowymi życzeniami dla Ciebie
          </p>
          <p className="text-lg md:text-xl text-[#704540] font-light">
            Klikaj na koperty, oglądaj filmiki i wracaj kiedy chcesz!
          </p>


        </section>

        <section className="mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 animate-slideUp">
            {videoMessages.map((message) => (
              <Envelope
                key={message.id}
                from={message.from}
                onClick={() => handleEnvelopeClick(message.videoUrl)}
              />
            ))}
          </div>
        </section>

        <section className="text-center py-12 px-6 rounded-none animate-fadeIn relative">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-[#704540] to-transparent opacity-50"></div>
          <p className="text-xl md:text-2xl text-[#704540] leading-relaxed mb-4 font-light">
            To wszystko było zrobione specjalnie dla Ciebie!
          </p>
          <p className="text-xl md:text-2xl text-[#704540] mb-3 font-light">
            Bo jesteś dla Nas bardzo ważna...
          </p>
          <p className="text-5xl md:text-6xl font-bold text-[#704540]">
            Kochamy Cię!
          </p>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-[#704540] to-transparent opacity-50"></div>
                      <img
  src="/tort.png"
  alt="Urodzinowy tort"
  className="mx-auto mt-4 mb-6 w-40 md:w-48 opacity-95"
 />  
  
   
        </section>
      </div>
    </div>
      </AccessGate>
  );
}

export default App;
