import { ZoomMtg } from '@zoomus/websdk';
import React from 'react'

export default function Zoom() {
    ZoomMtg.preLoadWasm();
    ZoomMtg.prepareJssdk();
    return (
        <div>
          
            
        </div>
    )
}


