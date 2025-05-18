"use client";

import { useEffect, useState } from "react";
import "@vidstack/react/player/styles/default/theme.css";
import "@vidstack/react/player/styles/default/layouts/video.css";
import video from "./video.json";

import { MediaPlayer, MediaProvider, Poster } from "@vidstack/react";
import {
  defaultLayoutIcons,
  DefaultVideoLayout,
} from "@vidstack/react/player/layouts/default";

import { Check } from "lucide-react";

export default function Video() {
  const [videoUrl, setVideoUrl] = useState<string | null>(null);

  useEffect(() => {
    const fetchVideoUrl = async () => {
      try {
        const res = await fetch("/api/hls");
        const data = await res.json();
        setVideoUrl(data.url);
        console.log("Fetched HLS URL:", data.url);
      } catch (error) {
        console.error("Failed to fetch video URL:", error);
      }
    };

    fetchVideoUrl();
  }, []);

  return (
    <>
      <div className="flex sm:flex-row flex-col-reverse w-full">
        <div className="sm:w-2/6 w-full sm:m-4 overflow-y-scroll h-screen">
          {video.map((item) => (
            <div
              id="title"
              key={item.id}
              className="flex flex-col w-full h-fit p-4 ml-2 mr-2 bg-white border
               border-black dark:border-gray-300 rounded-lg shadow-sm hover:bg-gray-100
                dark:bg-gray-800  dark:hover:bg-gray-700 cursor-pointer"
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
            <MediaPlayer
              title="Sprite Fight"
              src="https://live-hls-abr-cdn.livepush.io/live/bigbuckbunnyclip/index.m3u8"
              style={{ borderRadius: "0" }}
              playsInline
            >
              <MediaProvider>
                <Poster
                  className="vds-poster"
                  src="https://files.vidstack.io/sprite-fight/poster.webp"
                  alt="Poster image"
                />
              </MediaProvider>
              <DefaultVideoLayout
                thumbnails="https://files.vidstack.io/sprite-fight/thumbnails.vtt"
                icons={defaultLayoutIcons}
              />
            </MediaPlayer>
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
          <div className=" flex-col hidden sm:flex gap-2 mb-4 w-full h-fit p-4 bg-white border border-black dark:border-gray-300 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800  dark:hover:bg-gray-700 cursor-pointer">
            <div className="font-bold">Hello World</div>
            <div className="font-normal text-gray-400">
              Remember to install Node.js first before trying to use npm.
            </div>
          </div>
        </div>
      </div>
    </>
    // <div className="flex sm:flex-row flex-col-reverse sm:2/6">
    //   {video.map((item) => (
    //     <div
    //       key={item.id}
    //       className="block w-full h-fit m-4 sm:w-2/6 p-4 bg-white border border-black dark:border-gray-300 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800  dark:hover:bg-gray-700 cursor-pointer"
    //     >
    //       <div className="flex justify-between">
    //         <div>
    //           <p className="font-bold">{item.title}</p>
    //         </div>
    //         <div className="flex items-center">
    //           <div>
    //             <Check
    //               size={20}
    //               className={`mr-2 ${
    //                 item.complete === "true"
    //                   ? "text-green-500"
    //                   : "text-gray-400"
    //               }`}
    //             />
    //           </div>
    //           <div className="text-gray-500">{item.time}</div>
    //         </div>
    //       </div>
    //     </div>
    //   ))}
    //   <div className="sm:w-4/6 w-full">
    //     <div>
    //       <MediaPlayer
    //         title="Sprite Fight"
    //         src={
    //           // videoUrl ||
    //           "https://live-hls-abr-cdn.livepush.io/live/bigbuckbunnyclip/index.m3u8"
    //         }
    //         style={{ borderRadius: "0" }}
    //         playsInline
    //       >
    //         <MediaProvider>
    //           <Poster
    //             className="vds-poster"
    //             src="https://files.vidstack.io/sprite-fight/poster.webp"
    //             alt="Poster image"
    //           />
    //         </MediaProvider>
    //         <DefaultVideoLayout
    //           thumbnails="https://files.vidstack.io/sprite-fight/thumbnails.vtt"
    //           icons={defaultLayoutIcons}
    //         />
    //       </MediaPlayer>
    //     </div>
    //     <div className="flex flex-col gap-2 w-full h-fit p-4 bg-white border border-black dark:border-gray-300 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800  dark:hover:bg-gray-700 cursor-pointer">
    //       <div className="font-bold">Hello World</div>
    //       <div className="font-normal text-gray-400">
    //         Remember to install Node.js first before trying to use npm.
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}
