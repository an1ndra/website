'use client';

import { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';

interface VideoJSPlayerProps {
  src: string;
  width?: number;
  height?: number;
  captions?: {
    src: string;
    label: string;
    language: string;
    default?: boolean;
  }[];
}

// Create a client-only component to avoid hydration issues
function VideoJSPlayerClient({ src, width = 800, height = 450, captions = [] }: VideoJSPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const playerRef = useRef<any>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;
    
    console.log('VideoJS Player initializing with src:', src);
    
    // Dynamic import to avoid SSR issues
    Promise.all([
      import('video.js'),
      import('video.js/dist/video-js.css'),
      import('videojs-contrib-quality-levels'),
      import('videojs-hls-quality-selector'),
      import('videojs-sprite-thumbnails')
    ]).then(([videojs, , _qualityLevels,_hlsQualitySelectorr]) => {
      
      if (!videoRef.current) return;

      // Initialize Video.js player
      playerRef.current = videojs.default(videoRef.current, {
        controls: true,
        responsive: true,
        fluid: false,
        width,
        height,
        sources: [{
          src,
          type: 'application/x-mpegURL'
        }],
        tracks: captions.map(caption => ({
          kind: 'captions',
          src: caption.src,
          srclang: caption.language,
          label: caption.label,
          default: caption.default || false
        })),
        html5: {
          hls: {
            enableLowInitialPlaylist: false,
            smoothQualityChange: true,
            overrideNative: true
          }
        }
      });

      playerRef.current.spriteThumbnails({
        url: 'http://localhost:3000/maxresdefault.jpg',
        width: 160,
        height: 90,
        columns: 10
      });
      // Add quality selector plugin
      playerRef.current.hlsQualitySelector({
        displayCurrentQuality: true,
      });

      playerRef.current.ready(() => {
        console.log('VideoJS player is ready');
        
        // Log available quality levels
        const qualityLevels = playerRef.current.qualityLevels();
        console.log('Available quality levels:', qualityLevels.length);
        
        qualityLevels.on('addqualitylevel', (event: any) => {
          console.log('Quality level added:', event.qualityLevel);
        });
      });

      playerRef.current.on('error', (error: any) => {
        console.error('VideoJS error:', error);
      });
    });

    // Cleanup
    return () => {
      if (playerRef.current) {
        playerRef.current.dispose();
        playerRef.current = null;
      }
    };
  }, [src, width, height, captions, isClient]);

  if (!isClient) {
    return (
      <div 
        style={{ width, height, backgroundColor: 'black' }}
        className="flex items-center justify-center text-white"
      >
        Loading player...
      </div>
    );
  }

  return (
    <div>
      <video
        ref={videoRef}
        className="video-js vjs-default-skin"
        data-setup="{}"
      />
    </div>
  );
}

// Export as a dynamic component with no SSR
export default dynamic(() => Promise.resolve(VideoJSPlayerClient), {
  ssr: false,
  loading: () => (
    <div 
      style={{ width: 800, height: 450, backgroundColor: 'black' }}
      className="flex items-center justify-center text-white"
    >
      Loading video player...
    </div>
  )
});