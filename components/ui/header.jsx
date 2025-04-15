import {SignedIn , SignedOut ,SignInButton , UserButton ,S} from "@clerk/nextjs"
import Link from "next/link";
import Image from "next/image";
import { Button } from "./button";
import { PenBox ,LayoutDashboard } from "lucide-react";
import { checkUser } from "@/lib/checkUser"; 

export const Header = async () => {
    await checkUser();
  return (
    <div className="fixed top-0 w-full bg-black/70 backdrop-blur-md z-50 border-b ">
      <nav className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/">
        <Image
        src={"/logo.png"}
        alt="logo"
        width={150}
        height={200}
        />
        </Link>
        <div className="flex items-center space-x-4">
          <SignedIn>
            <Link href={"/dashboard"} className="text-gray-600 hover:shadow-2xl shadow-black  flex items-center gap-2">
            <Button variant="outline">
              <LayoutDashboard size={18}/>
              <span className="hidden md:inline">Dashboard</span>
            </Button>
            </Link>

            <Link href={"/transaction/create"} className="text-gray-600 hover:shadow-2xl shadow-white  flex items-center gap-2">
            <Button >
              <PenBox size={18}/>
              <span className="hidden md:inline">Add Transation</span>
            </Button>
            </Link>
          </SignedIn>
            <SignedOut> 
            <SignInButton forceRedirectUrl="/dashboard"> 
              <Button variant="outline">Login</Button>
            </SignInButton>              
            </SignedOut>
            <SignedIn>
              <UserButton appearance={{
                elements :{
                  avatarBox :"w-10 h-10",
                }
              }}/> 
            </SignedIn> 
          </div> 
      </nav>
  </div>
     //intergrated the signup page using clerk
  );
};
export default Header ;
