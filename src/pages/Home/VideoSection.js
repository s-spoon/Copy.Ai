import React, { useEffect, useState } from "react";

function VideoSection() {
    
    return (
        <>
            <div className="w-full md:w-10/12 mx-auto rounded-lg bg-gradient-to-r from-purple-700 via-pink-500 to-pink-600 p-2 md:p-3 lg:p-5 z-20">
                <video className="rounded" width="100%" height="240" controls>
                    <source src="movie.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className="mt-6 md:mt-9 lg:mt-12 w-full rounded-full bg-gradient-to-r from-purple-600 via-pink-400 to-pink-300 py-[10px]">
                <div className="w-10/12 mx-auto py-2">
                    <div className="marquee">
                        <p className="text-xl md:text-2xl lg:text-4xl text-white font-bold">
                        أكثر من 10,000 محترف يثقون في ذكي&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        أكثر من 10,000 محترف يثقون في ذكي&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        أكثر من 10,000 محترف يثقون في ذكي&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        أكثر من 10,000 محترف يثقون في ذكي&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default VideoSection;
