import { MediaPlayer, MediaProvider, Poster, Track } from "@vidstack/react";
import {
  defaultLayoutIcons,
  DefaultVideoLayout,
} from "@vidstack/react/player/layouts/default";

type Video = {
    src: string,
    poster: string,
    thumbnail: string,
    width: number,
    height: number
}

const Video = ($: Video) => {
    // const dynamicClassName = `max-w-[${$.width}px] max-h-[${$.height}px] mx-auto`;
    // const dynamicClassName = `max-w-[${$.width}px] max-h-[${$.height}px] mx-auto`;
  return (
    <div className="max-w-[850px] mx-auto">
        <MediaPlayer className="w-full h-full"
        src={$.src}
        viewType="video"
        streamType="on-demand"
        logLevel="warn"
        crossOrigin
        playsInline
        title="Sprite Fight"
        poster={$.poster}
      >
        <MediaProvider>
          <Poster className="vds-poster" />
          {/* {textTracks.map((track) => (
            <Track {...track} key={track.src} />
          ))} */}
        </MediaProvider>
        <DefaultVideoLayout
          thumbnails={$.thumbnail}
          icons={defaultLayoutIcons}
        />
      </MediaPlayer>
    </div>
  )
}

export default Video