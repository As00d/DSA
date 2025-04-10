import { AiFillTaobaoCircle } from "react-icons/ai";

const Header = () => {
  return (
    <div className="flex justify-between h-22 text-2xl text-white bg-black">
      <div className="flex mx-24 items-center cursor-pointer ">
        <AiFillTaobaoCircle className="text-4xl hover:text-gray-300" />
        <span className="font-medium px-2 hover:text-gray-300">Abstract</span>
        <a href="#" className="px-2 border-l-2 border-white">
          <span className="hover:border-b-1">Help Center</span>
        </a>
      </div>
      <div className="mx-24 items-center flex font-light text-2xl p-2">
        <input
          type="text"
          name=""
          id=""
          className="bg-white rounded-lg p-2.5 text-gray-600 mx-2 w-[270px] text-xl"
          placeholder="Search..."
        />
        <button className="p-2.5 rounded-lg mx-2 w-[220px] border cursor-pointer">
          Submit a request
        </button>
        <button className="p-2.5 rounded-lg bg-[#4C5FD5] mx-2 w-[150px] cursor-pointer hover:bg-white hover:text-black">
          Sign in
        </button>
      </div>
    </div>
  );
};

export default Header;
