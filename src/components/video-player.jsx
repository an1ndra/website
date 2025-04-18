import "@vidstack/react/player/styles/base.css";
import "@vidstack/react/player/styles/plyr/theme.css";

import { MediaPlayer, MediaProvider } from "@vidstack/react";
import {
  PlyrLayout,
  plyrLayoutIcons,
} from "@vidstack/react/player/layouts/plyr";
import { Poster } from "@vidstack/react";

export default function VideoPlayer({ video }) {
  return (
    <div>
      <MediaPlayer
        title="Sprite Fight"
        aspectRatio="16/9"
        load="visible"
        posterLoad="visible"
        src="https://files.vidstack.io/sprite-fight/hls/stream.m3u8"
      >
        <MediaProvider playsInline>
          <Poster
            className="absolute inset-0 block h-full w-full bg-black rounded-md opacity-0 transition-opacity data-[visible]:opacity-100 [&>img]:h-full [&>img]:w-full [&>img]:object-cover"
            src="https://files.vidstack.io/sprite-fight/poster.webp"
            alt="Girl walks into campfire with gnomes surrounding her friend ready for their next meal!"
          />
        </MediaProvider>
        <PlyrLayout
          thumbnails="https://files.vidstack.io/sprite-fight/thumbnails.vtt"
          icons={plyrLayoutIcons}
        />
      </MediaPlayer>
    </div>
  );
}
