import SearchIcon from "@/icons/searchIcon";

function NavBarDesktop() {
  return (
    <div className="sticky top-0 bg-black text-[20px] font-bold hidden items-center justify-end p-[20px] flex-row gap-[40px] text-orange-500 lg:flex">
      <a href="./" className="mr-auto text-[40px] font-bold leading-none">
        LIO
      </a>
      <form className="flex border-[2px] rounded-full border-orange-900 has-[:focus]:border-orange-500 py-[5px] pl-[20px] pr-[10px]">
        <input
          placeholder="Search portfoLIOs with email"
          className="text-orange-500 placeholder:text-gray-400 placeholder:text-[15px] placeholder:font-light text-[25px] w-[500px] bg-transparent border-0  focus:outline-none"
        />
        <button className="cursor-pointer pl-[5px] border-l-[2px] border-orange-500">
          <SearchIcon height="40px" width="40px" color="#f97316" />
        </button>
      </form>

      <a
        href="./create"
        className="flex justify-center items-center gap-[7px] border-orange-500 border-[2px] px-[15px] py-[5px] rounded-[5px] hover:bg-orange-500 hover:text-black"
      >
        My portfoLIO
      </a>
      {/* <a
        href="./about"
        className="border-orange-500 border-[2px] px-[15px] py-[5px] rounded-[5px] hover:bg-orange-500 hover:text-black"
      >
        About
      </a> */}
      <a
        href="./login"
        className="border-orange-500 border-[2px] px-[15px] py-[5px] rounded-[5px] hover:bg-orange-500 hover:text-black"
      >
        Login
      </a>
    </div>
  );
}

export default NavBarDesktop;
