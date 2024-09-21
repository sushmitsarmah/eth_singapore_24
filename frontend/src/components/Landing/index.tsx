// import Image from "next/image";
// import Link from "next/link";
// import Header from '../assets/header.png';
// import logo from '../assets/logo.png';
// // import img1 from '../assets/img1.jpg';
// // import img2 from '../assets/img2.jpg';
// // import img3 from '../assets/img3.jpg';
// // import img4 from '../assets/img4.jpg';
// // import img5 from '../assets/img5.jpg';
// // import img6 from '../assets/img6.jpg';
// const LandingPage = () => {
//   // Add buttons function for "Play Now" and "Learn Now"
//   const addButtons = () => {
//     return (
//       <div className="flex flex-row gap-4 mt-6">
//       <Link href="/dashboard" passHref>
//         <button className="btn bg-yellow-400 hover:bg-[#5b44db] text-black py-4 px-10 rounded-md shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105">
//           Play Now
//         </button>
//       </Link>
//       <Link href="/" passHref>
//         <button className="btn bg-[#4E36C3] hover:bg-[#a4008b] text-white py-4 px-10 rounded-md shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105">
//           Learn Now
//         </button>
//       </Link>
//     </div>
//     );
//   };
  

//   return (
//     <>
//       {/* Header Section */}
//       <div className="Header relative bg-gradient-to-r from-black via-[#000000cc] to-black h-screen overflow-hidden">
//       <Image
//         src={Header}
//         alt="Header Background"
//         layout="fill"
//         objectFit="cover"
//         className="absolute opacity-30"
//       />
//       <div className="absolute left-10 top-1/4 text-white flex flex-col gap-6 z-10 backdrop-blur-sm p-10 rounded-lg">
//         <div className="flex flex-col gap-4 text-5xl font-bold leading-snug">
//           <Image src={logo} alt="Logo" width={300} height={150} />
//           <p className="flex flex-row gap-4">
//             <span className="text-white">Beyond The</span>
//             <span className="text-yellow-400">Past,</span>
//           </p>
//           <p>Before The Future</p>
//         </div>
//         <p className="font-bold text-2xl max-w-xl leading-relaxed">
//           <span>Unlock Your Sports Predictions Power with Wagerbox</span>
//           <span className="block mt-2">Where Web3, Quizzes, and Winning Collide</span>
//         </p>
//         {addButtons()}
//       </div>
//     </div>

//       {/* Banner Section */}
//       <div className="Banner flex flex-row bg-yellow-400 justify-between text-black font-bold p-4 shadow-md">
//   <p className="text-black">Best Games</p>
//   <div className="flex items-center gap-2 text-black">
//     {/* <Image src="../assets/icon1.png" alt="Icon 1" width={30} height={30} /> */}
//     <p>Packaged Quizzes Recommendation</p>
//   </div>
//   <div className="flex items-center gap-2 text-black">
//     {/* <Image src="../assets/icon2.png" alt="Icon 2" width={30} height={30} /> */}
//     <p>Sports Betting</p>
//   </div>
//   <div className="flex items-center gap-2 text-black">
//     {/* <Image src="../assets/icon3.png" alt="Icon 3" width={30} height={30} /> */}
//     <p>Bet on Favourite Esports</p>
//   </div>
// </div>


//       {/* Game Selection Section */}
//       {/* <div className="bg-[#211551] flex flex-col gap-4 p-5 items-center">
//         <div className="font-bold text-white text-3xl flex flex-col items-center">
//           <p>Choose your</p>
//           <p className="flex flex-row gap-4">
//             <span className="text-yellow">Favourite</span>
//             <span>Game Streams To</span>
//           </p>
//           <p>Bet on</p>
//         </div>

//         <div className="flex flex-row gap-4">
//           <Image src={img1} alt="Game 1" className="rounded-3xl" width={200} height={200} />
//           <Image src={img2} alt="Game 2" className="rounded-3xl" width={200} height={200} />
//           <Image src={img3} alt="Game 3" className="rounded-3xl" width={200} height={200} />
//           <Image src={img4} alt="Game 4" className="rounded-3xl" width={200} height={200} />
//           <Image src={img5} alt="Game 5" className="rounded-3xl" width={200} height={200} />
//           <Image src={img6} alt="Game 6" className="rounded-3xl" width={200} height={200} />
//         </div> */}
//         {/* {addButtons()} */}
//       {/* </div> */}

//       {/* How It Works Section (currently commented out) */}
//       <div className="bg-[#000000] flex flex-col items-center p-5 text-3xl">
//         {/* Uncomment when needed */}
//         {/* <p className="text-white font-bold">How it works</p> */}
//         {/* <Image src="..//assets/howitworks.png" alt="How it works" width={500} height={300} /> */}
//       </div>
//     </>
//   );
// };

// export default LandingPage;
import Image from "next/image";
import Link from "next/link";
// import Header from '../assets/header.png';
import logo from '../assets/logooo.png';

const LandingPage = () => {
  // Add buttons function for "Join Tournament" and "Learn More"
  const addButtons = () => {
    return (
      <div className="flex flex-row gap-4 mt-6">
        <Link href="/dashboard" passHref>
          <button className="px-[28px] py-[16px] bg-[#71FF4C] rounded-md text-black font-luckiest text-[24px] hover:bg-[#4bff3c] transition duration-300 ease-in-out transform hover:scale-105 shadow-lg">
            Join Tournament
          </button>
        </Link>
        {/* <Link href="/learn" passHref>
          <button className="px-[28px] py-[16px] bg-[#4E36C3] rounded-md text-white font-luckiest text-[24px] hover:bg-[#a4008b] transition duration-300 ease-in-out transform hover:scale-105 shadow-lg">
            Learn More
          </button>
        </Link> */}
      </div>
    );
  };

  return (
    <div className="w-full h-screen bg-black flex items-center justify-between px-10 relative">
      {/* Background Image */}
      {/* <div className="absolute inset-0 z-0">
        <Image
          src={Header}
          alt="Header Background"
          layout="fill"
          objectFit="cover"
          className="opacity-20"
        />
      </div> */}

      {/* Left Side Content */}
      <div className="relative z-10 w-full md:w-1/2 lg:w-1/2 flex flex-col justify-center pl-[10px]">
        {/* Tagline */}
        <div className="flex pb-[10px]">
          <p className="px-[24px] py-[6px] bg-[#71FF4C]/10 border border-[#71FF4C]/30 text-[#71FF4C]/60 font-luckiest uppercase tracking-wider text-[18px]">
            Predict Crypto Prices & Win Big
          </p>
        </div>

        {/* Heading */}
        <p className="text-[50px] md:text-[70px] lg:text-[80px] font-luckiest text-white leading-tight md:leading-[84px] mt-6">
        <span>Join </span>
          <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">Moraq</span>
          <br />
          <span>Token Tournaments</span> <br />
          <span className="text-[#71FF4C]">Stake, Predict, Win</span>
        </p>

        {/* Description */}
        <p className="mt-6 text-white opacity-80 text-[22px] md:text-[20px] leading-relaxed font-bold font-inter">
          Compete in weekly tournaments predicting crypto token price movements. Stake tokens on whether prices will rise or fall, and climb the leaderboard to win big rewards. Experience the thrill of real-time price predictions and maximize your profits.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8">
          {addButtons()}
        </div>
      </div>

      {/* Right Side Logo */}
      <div className="relative z-10 hidden md:flex w-1/2 justify-center items-center">
        <Image src={logo} alt="Logo" width={1600} height={1600} />
      </div>
    </div>
  );
};

export default LandingPage;
