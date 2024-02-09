import React from 'react'
import { Player, Controls } from '@lottiefiles/react-lottie-player';

function IlustratorAnimation({imageSrc, show, orderStatus}) { // in show, true means show the controls  and false means hide the controls
  return (
    <>
        <Player
            autoplay
            loop
            src={ orderStatus !== "pending" ? imageSrc : PENDING_IMAGE_SRC}
            style={{ height: '300px', width: '300px' }}
>
             <Controls visible={show}  />
        </Player>
    </>
  )
}

const PENDING_IMAGE_SRC = "https://lottie.host/2c1afd9c-3d59-4bab-9f43-af318c169fd3/1jQqrZiIjH.json"

export default IlustratorAnimation