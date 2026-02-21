import { useEffect, useState } from 'react';

const ACCESS_CODE = '990304'; // ← TU ZMIEŃ KOD

export default function AccessGate({
  children,
}: {
  children: React.ReactNode;
}) {
  const [authorized, setAuthorized] = useState(false);
  const [code, setCode] = useState('');

  useEffect(() => {
    const saved = localStorage.getItem('access_granted');
    if (saved === 'true') setAuthorized(true);
  }, []);

  const handleSubmit = () => {
    if (code === ACCESS_CODE) {
      localStorage.setItem('access_granted', 'true');
      setAuthorized(true);
    } else {
      alert('Podane hasło jest niepoprawne...');
    }
  };

  if (!authorized) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-stone-50 font-sans">
        <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-sm">
          <h2 className="text-2xl mb-4 text-center font-light font-sans">Podaj hasło dostępu</h2>

          <input
            type="password"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="w-full border p-3 rounded mb-4 font-sans"
            placeholder="Kod"
          />

          <button
            onClick={handleSubmit}
            className="w-full bg-red-900 text-white py-3 rounded font-sans"
          >
            Wejdź
          </button>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
