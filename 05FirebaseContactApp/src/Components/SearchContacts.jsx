import { BsPlusCircleFill } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";

const SearchContacts = ({ onOpen, filterContacts }) => {
  return (
    <nav className="w-full m-auto mt-4 font-[400] flex items-center justify-center gap-3 max-w-7xl rounded-lg">
      <div className="w-full rounded-lg max-h-11 h-11 relative flex items-center">
        <IoSearch className="text-xl text-white absolute ml-3" />
        <input
          onChange={filterContacts}
          className="w-[100%] pl-10 p-3 rounded-lg max-h-11 h-11 bg-transparent outline-none text-white placeholder-slate-100 border"
          type="search"
          placeholder="Search Contact"
        />
      </div>
      <BsPlusCircleFill
        onClick={onOpen}
        className="text-5xl text-sky-400 cursor-pointer"
      />
    </nav>
  );
};

export default SearchContacts;
