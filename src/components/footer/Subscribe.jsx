const Subscribe = () => {
  return (
    <div className="flex items-center bg-white rounded-xl h-[70px] py-1.5 pl-8 pr-3">
      <input type="email" className="outline-none w-full h-full flex-1 text-brand-black-100" placeholder="Your Email" />
      <button className="text-brand-black-100 font-semibold leading-6 px-3" type="submit">Subscribe</button>
    </div>
  );
};

export default Subscribe;
