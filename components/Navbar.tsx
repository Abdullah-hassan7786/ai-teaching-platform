import Link from "next/link";
import Image from "next/image";
import Navitems from "./Navitems";
import {SignInButton, SignedIn, SignedOut, UserButton} from "@clerk/nextjs";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link href="/">
        <div className="flex items-center gap-2.5 cursor-pointer">
          <Image
            src="/images/logo.svg"
            alt="logo"
            width={40}
            height={40}
          />
        </div>
      </Link>
        <div className="flex items-center gap-8 cursor-pointer">
         <Navitems />
            <SignedOut>
                <div  className="flex items-center gap-2">
                    <SignInButton>
                        <button className="btn-signin">Sign in</button>
                    </SignInButton>

                </div>
            </SignedOut>
            <SignedIn>
                <UserButton afterSignOutUrl={"/"} />
            </SignedIn>
        </div>
    </nav>
  );
};

export default Navbar;
