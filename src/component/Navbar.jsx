import logo from "../assets/kevinRushLogo.png"; 
import { FaLinkedin, FaGithub, FaTwitter, FaCode } from "react-icons/fa";
import { SiGeeksforgeeks } from "react-icons/si";

const Navbar = () => {
  return ( 
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center"> 
        <img className="mx-4 w-28" src={logo} alt="logo" />
      </div>
    
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/aayush-kumar-gupta-7a6466214/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin />
        </a> 
        <a href="https://github.com/Aayushgupta24?tab=repositories" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FaGithub />
        </a> 
        <a href="https://x.com/AayushK88649573" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          <FaTwitter />
        </a>
        <a href="https://auth.geeksforgeeks.org/user/aayushkggfg/?utm_source=geeksforgeeks&utm_medium=my_profile&utm_campaign=auth_user" target="_blank" rel="noopener noreferrer" aria-label="GeeksforGeeks">
          <SiGeeksforgeeks />
        </a>
       {/* <a
          href="https://drive.google.com/file/d/1eyo5lm0z6py6W-KkUtX4j6Ny5ITZmKyI/view"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Resume"
          className="flex items-center"
        >
          <FaCode />
          <span className="ml-2 hidden sm:inline text-sm">Resume</span>
        </a> */}
        <a
          href="https://leetcode.com/cap_America/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LeetCode"
          className="flex items-center"
        >
          <FaCode />
          <span className="ml-2 hidden sm:inline text-sm">LeetCode</span>
        </a>  
      </div>
    </nav>
  );
};

export default Navbar;
