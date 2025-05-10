import "@vidstack/react/player/styles/default/theme.css";
import "@vidstack/react/player/styles/default/layouts/video.css";
import { MediaPlayer, MediaProvider, Poster } from "@vidstack/react";
import {
  defaultLayoutIcons,
  DefaultVideoLayout,
} from "@vidstack/react/player/layouts/default";
import { CircleCheck } from "lucide-react";
export default function Video() {
  return (
    <>
      <div className="flex sm:flex-row flex-col-reverse">
        <button className="sm:w-2/6 w-full btn">
          <div className="cursor-pointer flex flex-row justify-between">
            <div>Btn</div>
            <div><CircleCheck/></div>
          </div>
        </button>
        <div className="sm:w-4/6 w-full">
          <MediaPlayer
            title="Sprite Fight"
            src="https://files.vidstack.io/sprite-fight/hls/stream.m3u8"
            style={{ borderRadius: "0" }}
            playsInline
          >
            <MediaProvider>
              <Poster
                className="vds-poster"
                src="https://files.vidstack.io/sprite-fight/poster.webp"
                alt="Girl walks into campfire with gnomes surrounding her friend ready for their next meal!"
              />
            </MediaProvider>
            <DefaultVideoLayout
              thumbnails="https://files.vidstack.io/sprite-fight/thumbnails.vtt"
              icons={defaultLayoutIcons}
            />
          </MediaPlayer>
        </div>
      </div>
    </>
  );
}
