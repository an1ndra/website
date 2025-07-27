"use client"

import React from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import 'videojs-contrib-quality-levels';
import 'videojs-hls-quality-selector';
import '@/components/videoJS/VideoPlayer.css'
import { useRef,RefObject } from 'react';

export const VideoJS = (props) => {
  const videoRef = useRef<RefObject<RefObject<any>>>(null);
  const playerRef = useRef(null);
  const { options, onReady } = props;

  React.useEffect(() => {
    if (!playerRef.current) {
      const videoElement = document.createElement('video-js');
      videoElement.classList.add('vjs-big-play-centered');
      videoRef.current.appendChild(videoElement);

      const player = (playerRef.current = videojs(videoElement, options, () => {
        videojs.log('player is ready');
        if (onReady) {
          onReady(player);
        }
      }));

      player.ready(() => {
        player.hlsQualitySelector({
          default: 'auto',
          displayCurrentQuality: true,
          vjsIconClass: 'vjs-icon-cog',
        });
      });
    } else {
      const player = playerRef.current;
      player.autoplay(options.autoplay);
      player.src(options.sources);
    }
  }, [options]);

  React.useEffect(() => {
    const player = playerRef.current;
    // Clean up function to dispose the player after the component unmounts
    return () => {
      if (player && !player.isDisposed()) {
        player.dispose();
        playerRef.current = null;
      }
    };
  }, []);

  return (
    <div className='video-player' data-vjs-player>
      <div ref={videoRef} />
    </div>
  );
};


const videoJsOptions = {
    autoplay: false,
    controls: true,
    responsive: true,
    fluid: true,
    poster: "https://files.vidstack.io/sprite-fight/poster.webp",
    tracks: [
      {
        src: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
        label: 'English',
        kind: 'subtitles',
        default: true,
      },
      {
        kind: "chapters",
        src: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
        srclang: "en",
        label: 'Chapters',
        default: true
      }
    ],
    height: 400,
    weight: 400,
    sources: [
      {
        src: 'https://files.vidstack.io/sprite-fight/hls/stream.m3u8',
        type: 'application/x-mpegURL',
      },
    ],

  };

export default VideoJS;