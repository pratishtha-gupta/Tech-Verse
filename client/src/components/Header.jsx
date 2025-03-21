import { Navbar, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";

export default function Header() {
  return (
    <Navbar className="border-b-2 px-4 py-2">
     <Link
  to="/"
  className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
>
<span className='px-2 py-1 bg-gradient-to-r from-indigo-300 via-indigo-600 to-purple-600 rounded-lg text-white'> Pratishtha's </span> 
 
  Blog
</Link>


      <form className="ml-auto">
        <TextInput
          type="text"
          placeholder="Search..."
          rightIcon={AiOutlineSearch}
          inputClassName="hidden lg:inline border border-gray-300 rounded-md px-3 py-2 focus:ring-indigo-500 focus:border-indigo-500 w-64"
        />
      </form>
    </Navbar>
  );
}

