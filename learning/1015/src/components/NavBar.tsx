function NavBar() {
  return (
    <div className="w-full h-16 flex flex-wrap bg-gray-800 justify-between items-center">
      <div className="text-white ml-10 text-xl">MySite</div>
      <div className="flex flex-row gap-3 mr-10 text-xl">
        <a href="#" className="text-white">
          Home
        </a>
        <a href="#" className="text-white">
          About
        </a>
        <a href="#" className="text-white">
          Contact
        </a>
      </div>
    </div>
  );
}

export default NavBar;
