import { MediaPlayer, MediaProvider, Poster, Track } from "@vidstack/react";
import {
  defaultLayoutIcons,
  DefaultVideoLayout,
} from "@vidstack/react/player/layouts/default";
import AnimatedBtn from "./AnimatedBtn";

const VideoIntroduction = () => {
  return (
    <div className="flex flex-col gap-11 justify-center mt-20">
      <MediaPlayer className="max-w-[768px] max-h-[550px] mx-auto"
        src="https://files.vidstack.io/sprite-fight/720p.mp4"
        viewType="video"
        streamType="on-demand"
        logLevel="warn"
        crossOrigin
        playsInline
        title="Sprite Fight"
        poster="https://files.vidstack.io/sprite-fight/poster.webp"
      >
        <MediaProvider>
          <Poster className="vds-poster" />
          {/* {textTracks.map((track) => (
            <Track {...track} key={track.src} />
          ))} */}
        </MediaProvider>
        <DefaultVideoLayout
          thumbnails="https://files.vidstack.io/sprite-fight/thumbnails.vtt"
          icons={defaultLayoutIcons}
        />
      </MediaPlayer>

      <div className="mx-auto">
        <AnimatedBtn />
      </div>
    </div>
  );
};

export default VideoIntroduction;
