'use client'
import logo from "../../../assets/boy.png";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
const Navbar = () => {
  // const { isMenuActive, setIsMenuActive } = useNavbar();
  // const { user } = useAuthUser();
   
  return (
    <div className="w-screen container h-14 fixed top-0 z-[99999] bg-transparent flex items-center justify-between">
      {/* Left */}
      <div className="items-center h-full flex gap-2">
        <Avatar>
          <AvatarImage src={logo.src} alt="logo" />
          <AvatarFallback>BOY</AvatarFallback>
        </Avatar>
        <p className="font-semibold text-lg">My Portfolio</p>
      </div>
     
     
    </div>
  );
};

export default Navbar;
