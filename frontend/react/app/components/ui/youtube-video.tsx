"use client"

import YouTube, { YouTubeProps } from "react-youtube"

interface YouTubeVideoProps {
  videoId: string
}

export default function YouTubeVideo({ videoId }: YouTubeVideoProps) {
  const opts: YouTubeProps["opts"] = {
    height: "390",
    width: "600",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      loop: 1,
    },
  }

  return <YouTube videoId={videoId} opts={opts} />
}
