'use client';

import Image from 'next/image';

const polaroids = [
  {
    src: '/video/video4.mp4',
    type: 'video',
    caption: 'sweet',
    style: 'top-4 left-[5%] -rotate-[5deg] z-30',
  },
  {
    src: '/video/video5.mp4',
    type: 'video',
    caption: 'memories',
    style: 'top-24 left-[35%] rotate-[3deg] z-20',
  },
  {
    src: '/video/video6.mp4',
    type: 'video',
    caption: '2.01.02.022',
    style: 'top-[18rem] left-[10%] -rotate-[2deg] z-10',
  },
  {
    src: '/video/video7.mp4',
    type: 'video',
    caption: 'good times',
    style: 'top-[28rem] left-[45%] rotate-[1deg] z-0',
  },
];

export default function VideoPolaroidLayout() {
  return (
    <div className="relative w-full h-full overflow-hidden pointer-events-none pl-20 pt-5">
      <div className="relative w-full h-[700px]">
        {polaroids.map((item, idx) => (
          <div
            key={idx}
            className={`absolute w-60 bg-white rounded-md p-3 shadow-xl transition-transform duration-300 hover:scale-[1.02] ${item.style} pointer-events-auto`}
          >
            {/* Tape */}
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 z-50">
              <Image
                src="/tape.png"
                alt="tape"
                width={100}
                height={50}
                className="rotate-[2deg]"
              />
            </div>

            {/* Video */}
            <div className="w-full h-72 overflow-hidden rounded-sm bg-black">
              <video
                src={item.src}
                className={`w-full h-full object-cover ${item.caption === 'good times' ? 'opacity-100' : 'opacity-90'}`}
                autoPlay
                muted
                loop
                playsInline
              />
            </div>

            {/* Caption */}
            <p className="text-center text-[14px] font-handwriting mt-2 text-black">
              {item.caption}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
