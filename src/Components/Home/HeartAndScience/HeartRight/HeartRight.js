import React from 'react';
import ReactPlayer from 'react-player';

//  ملاحظة بقدر احط للفيديو هدول الاتربيوت ويوجد كمان اتربيوت ثانية
/*
  <ReactPlayer 
  width="200"
  height="300"
  controls 
  url='https://youtu.be/uyWt48mWmz0' />
  onReady={() => console.log("read")}
  onStart={() => console.log("start")}
  onPause={() => console.log("pause")}
  onEnded={() => console.log("ended")}
  onError={() => console.log("error")}

*/

function HeartRight() {

   return (
    <div className="col-lg-6">
       <ReactPlayer className="vedio" width="100%" controls url='https://youtu.be/uyWt48mWmz0' onStart={() => alert("The Vedio Is Start")} />
    </div>

   );

}

export default HeartRight