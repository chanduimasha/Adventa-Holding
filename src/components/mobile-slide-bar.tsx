import React from 'react';

interface MobileSlideBarProps {
  imagineRef: React.RefObject<HTMLDivElement>;
  engineerRef: React.RefObject<HTMLDivElement>;
  modernizeRef: React.RefObject<HTMLDivElement>;
  manageRef: React.RefObject<HTMLDivElement>;
}

const MobileSlideBar: React.FC<MobileSlideBarProps> = ({
  imagineRef,
  engineerRef,
  modernizeRef,
  manageRef,
}) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white px-4 py-4 shadow-lg z-50">
      <ul className="flex justify-around">
        <li
          className="cursor-pointer"
          onClick={() => {
            if (imagineRef.current) {
              imagineRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
              });
            }
          }}
        >
          Imagine
        </li>
        <li
          className="cursor-pointer"
          onClick={() => {
            if (engineerRef.current) {
              engineerRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
              });
            }
          }}
        >
          Engineer
        </li>
        <li
          className="cursor-pointer"
          onClick={() => {
            if (modernizeRef.current) {
              modernizeRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
              });
            }
          }}
        >
          Modernize
        </li>
        <li
          className="cursor-pointer"
          onClick={() => {
            if (manageRef.current) {
              manageRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
              });
            }
          }}
        >
          Manage
        </li>
      </ul>
    </div>
  );
};

export default MobileSlideBar;