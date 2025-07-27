"use client";

import { useEffect, useState, useRef } from "react";
import video from "./video.json";
import VideoJS from "@/components/videoJS/VideoPlayer";

import { Check, ChevronLeft, ChevronRight } from "lucide-react";

export default function Video() {
  const [videoUrl, setVideoUrl] = useState<string>();

  useEffect(() => {
    setVideoUrl("/api/get-presigned-m3u8");
  }, []);

  const playerRef = useRef<any>(null);

  console.log("Video URL ", videoUrl);


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
    sources: [
      {
        src: 'https://files.vidstack.io/sprite-fight/hls/stream.m3u8',
        type: 'application/x-mpegURL',
      },
    ],

  };

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    player.on('waiting', () => {
      console.log('Player is waiting');
    });

    player.on('dispose', () => {
      console.log('Player will dispose');
    });
  };

  return (
    <>
      <div className="flex sm:flex-row flex-col-reverse w-full">
        <div className="sm:w-2/6 w-full sm:m-4 overflow-y-scroll h-screen">
          {video.map((item) => (
            <div
              id="title"
              key={item.id}
              className="flex flex-col w-full h-fit p-4 mb-4 bg-white border
               border-black dark:border-gray-600 rounded-lg shadow-sm hover:bg-gray-100
                dark:bg-gray-800  dark:hover:bg-gray-800/75 cursor-pointer"
            >
              <div className="flex justify-between">
                <div>
                  <p className="font-bold">{item.title}</p>
                </div>
                <div className="flex items-center">
                  <div>
                    <Check
                      size={20}
                      className={`mr-2 ${
                        item.complete === "true"
                          ? "text-green-500"
                          : "text-gray-400"
                      }`}
                    />
                  </div>
                  <div className="text-gray-500">{item.time}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="sm:w-4/6 w-full">
          <div>
            <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
          </div>
          <div>
            <h2
              className="font-bold text-2xl flex
            flex-col gap-2"
            >
              Getting Started with React
            </h2>
            <p>
              Learn the basics of React and how to set up your development
              environment.
            </p>
          </div>
          <div
            id="tab"
            className="flex justify-between content-center pb-4 items-end"
          >
            <ChevronLeft className="ml-3 block sm:hidden hover:text-gray-300" />
            <div role="tablist" className="tabs tabs-border">
              <a role="tab" className="tab tab-active">
                Description
              </a>
              <a role="tab" className="tab ">
                Notes
              </a>
              <a role="tab" className="tab">
                Links
              </a>
            </div>
            <ChevronRight className="mr-3 block sm:hidden hover:text-gray-300" />
          </div>
          <div className=" flex-col hidden sm:flex gap-2 mb-4 w-full h-fit p-4 bg-white border border-black dark:border-gray-600 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800  dark:hover:bg-gray-800/80 cursor-pointer">
            <div className="font-bold">Hello World</div>
            <div className="font-normal text-gray-400">
              Remember to install Node.js first before trying to use npm.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
