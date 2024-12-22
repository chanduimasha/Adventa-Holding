import React from 'react';

interface EnvironmentalVideoProps {
  url: string;
}

const EnvironmentalVideo: React.FC<EnvironmentalVideoProps> = ({ url }) => {
  return (
    <div className="relative aspect-w-16 aspect-h-9">
      <video
        className="w-full h-full rounded-lg shadow-lg"
        controls
        autoPlay
        loop
        muted
      >
        <source src={url} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default EnvironmentalVideo;