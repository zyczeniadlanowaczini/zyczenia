import Envelope from './Envelope';
import { VideoMessage } from '../types';

/* ===== helpers ===== */
function isGoogleDriveUrl(url: string): boolean {
  return url.includes('drive.google.com');
}

function getEmbedUrl(url: string): string {
  if (isGoogleDriveUrl(url)) {
    const match = url.match(/\/d\/([a-zA-Z0-9-_]+)/);
    if (match) {
      return `https://drive.google.com/file/d/${match[1]}/preview`;
    }
  }
  return url;
}

/* ===== component ===== */
interface EnvelopeWithVideoProps {
  message: VideoMessage;
}

export default function EnvelopeWithVideo({ message }: EnvelopeWithVideoProps) {
  const handleClick = () => {
    const url = getEmbedUrl(message.videoUrl);

    window.open(
      url,
      '_blank',
      'noopener,noreferrer,width=1024,height=768,left=100,top=100'
    );
  };

  return (
    <Envelope
      from={message.from}
      onClick={handleClick}
    />
  );
}
