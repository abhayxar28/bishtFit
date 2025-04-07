import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/auth.config";
import Navbar from "./Navbar";

export default async function NavbarWrapper() {
  const session = await getServerSession(authOptions);
  
  return <Navbar session={session} />;
} 