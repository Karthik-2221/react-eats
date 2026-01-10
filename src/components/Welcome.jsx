const Welcome = ({ onEnter }) => {
  return (
    <div
      className="w-screen h-screen flex flex-col justify-center items-center bg-linear-to-br transition-all duration-1000
 from-green-400 to-emerald-600 text-white text-center px-4"
    >
      <h1 className="text-5xl md:text-6xl font-bold mb-4">ReactEats 🍔</h1>

      <p className="text-lg md:text-xl max-w-xl mb-8">
        A modern food delivery web application built with React, Tailwind CSS,
        Redux, and Context API. Order your favorite meals with ease.
      </p>

      <button
        onClick={onEnter}
        className="bg-white text-green-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-green-100 transition"
      >
        Welcome to ReactEats
      </button>
    </div>
  );
};

export default Welcome;
