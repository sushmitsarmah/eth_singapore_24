import React, { useEffect } from 'react';

const FlappyBird: React.FC = () => {
  const handleMessage = (event: MessageEvent) => {
    console.log(event);
    console.log('#######');

    setTimeout(() => {
      const val = document.querySelector('#gamecontainer #currentscore img')?.getAttribute('alt');
      if (val) console.log(val);
    }, 1000);

    const { data } = event;

    if (data.type === 'score') {
      console.log('Score:', data.score);
    }
  };

  useEffect(() => {
    window.addEventListener('message', (message) => {
      if (message.data.type === 'preview.compiled') {
        // Handle the preview compiled message
        console.log(message.data);
      }
    });

    return () => {
      // Clean up event listener on component unmount
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  return (
    <iframe
      src="/flappybird/index.html"
      title="Flappy Bird Game"
      width="320"
      height="480"
      frameBorder="0"
    ></iframe>
  );
};

export default FlappyBird;
