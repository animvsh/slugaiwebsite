// pages/test.tsx
'use client';

import MovingYellowBlobs from '@/components/MovingYellowBlobs';

export default function TestPage() {
  return (
    <div className="relative min-h-screen">
      {/* Background Blobs */}
      <MovingYellowBlobs />

      {/* Test Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-black">
        <h1 className="text-4xl font-bold mb-4">
          Testing Moving Yellow Blobs
        </h1>
        <p className="text-lg">
          If you can see animated yellow blobs moving in the background, then the component is working correctly.
        </p>
      </div>
    </div>
  );
}
