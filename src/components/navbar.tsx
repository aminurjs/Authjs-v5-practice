import Link from "next/link";
import { Button } from "./ui/button";
import { Menu, Package2, Search } from "lucide-react";
import { Input } from "./ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { auth, signOut } from "@/auth";

const Navbar = async () => {
  const session = await auth();
  return (
    <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <Link href="/" className="flex items-center gap-2 text-lg font-semibold md:text-base">
          <Package2 className="h-6 w-6" />
          <span className="sr-only">Acme Inc</span>
        </Link>
        <Link href="/dashboard" className="text-foreground transition-colors hover:text-foreground">
          Dashboard
        </Link>
        {/* <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground">
          Orders
        </Link>
        <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground">
          Products
        </Link>
        <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground">
          Customers
        </Link>
        <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground">
          Analytics
        </Link> */}
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="grid gap-6 text-lg font-medium">
            <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
              <Package2 className="h-6 w-6" />
              <span className="sr-only">Acme Inc</span>
            </Link>
            <Link href="/dashboard" className="hover:text-foreground">
              Dashboard
            </Link>
            {/* <Link href="#" className="text-muted-foreground hover:text-foreground">
              Orders
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              Products
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              Customers
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              Analytics
            </Link> */}
          </nav>
        </SheetContent>
      </Sheet>
      <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <form className="ml-auto flex-1 sm:flex-initial">
          <div className="relative cursor-not-allowed">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search products..."
              className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
              readOnly
            />
          </div>
        </form>
        {session?.user ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <Avatar>
                  {session.user.image && <AvatarImage src={session.user.image} />}

                  <AvatarFallback>
                    {session?.user?.name
                      ?.split(" ")
                      .map((part) => part[0].toUpperCase())
                      .join("")}
                  </AvatarFallback>
                </Avatar>

                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-not-allowed">Settings</DropdownMenuItem>
              <DropdownMenuItem className="cursor-not-allowed">Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer" title="Log out">
                <form
                  action={async () => {
                    "use server";
                    await signOut();
                  }}
                >
                  <button type="submit">Log out</button>
                </form>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <div className="flex gap-5">
            <Link href="/login">
              {" "}
              <Button size="sm" variant="outline">
                Login
              </Button>
            </Link>
            <Link href="/register">
              <Button size="sm">Register</Button>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
