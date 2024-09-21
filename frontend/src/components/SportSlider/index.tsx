/* eslint-disable @typescript-eslint/no-unused-vars */
// components/SportSlider.tsx
import React, { useState, useRef, useEffect } from 'react';

interface SportSliderProps {
  sports: string[];
  onSportChange: (sport: string) => void;
}

const SportSlider: React.FC<SportSliderProps> = ({ sports, onSportChange }) => {
  const [clickedSport, setClickedSport] = useState<string>('All');
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleSportClick = (sport: string) => {
    setClickedSport(sport);
    onSportChange(sport);
  };

  useEffect(() => {
    const sliderContainer = sliderRef.current;

    const handleScroll = () => {
      if (!sliderContainer) return;
      const scrollLeft = sliderContainer.scrollLeft;
      const scrollWidth = sliderContainer.scrollWidth;
      const clientWidth = sliderContainer.clientWidth;

      document.querySelectorAll('.sport-button').forEach((button, index) => {
        if (index === 0 && scrollLeft > 0) {
          button.classList.add('hidden');
        } else if (index === sports.length - 1 && scrollLeft + clientWidth < scrollWidth) {
          button.classList.add('hidden');
        } else {
          button.classList.remove('hidden');
        }
      });
    };

    sliderContainer?.addEventListener('scroll', handleScroll);

    return () => {
      sliderContainer?.removeEventListener('scroll', handleScroll);
    };
  }, [sports]);

  useEffect(() => {
    const allButton = document.querySelector('.sport-button');
    allButton?.classList.add('glow');
  }, []);

  return (
    <div ref={sliderRef} className="flex overflow-x-auto mb-4 relative">
      {sports.map((sport, index) => (
        <button
          key={sport}
          className={`${
            clickedSport === sport
              ? 'bg-[#98ee2c] text-white glow'
              : 'bg-white text-black'
          } px-4 py-2 rounded-full focus:outline-none mr-2 mb-3 sport-button`}
          onClick={() => handleSportClick(sport)}
        >
          {sport}
        </button>
      ))}
    </div>
  );
};

export default SportSlider;
