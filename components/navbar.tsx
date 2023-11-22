'use client'
import React from "react";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenu,
    Link,
    NavbarMenuToggle,
    NavbarMenuItem,
} from "@nextui-org/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    CreditCard,
    Github,
    Keyboard,
    LifeBuoy,
    LogOut,
    Settings,
    User,
} from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Logo } from "./logo.jsx";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Button } from "./ui/button";

export default function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const menuItems = [
        "Shorten Links",
        "QR Codes",
        "Bio Pages",
        "Profile",
        "Settings",
        "Billing",
        "GitHub",
        "Support",
        "Log Out",
    ];

    const openGitHub = () => {
        window.open('https://github.com/affan-ch/Linko', '_blank'); // Replace 'https://github.com' with your desired URL
      };

    return (

        <Navbar isBordered position="sticky">
            <NavbarContent justify="start">
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
                <NavbarBrand className="mr-4">
                    <Logo />
                    <p className="font-bold text-inherit">Linko</p>
                </NavbarBrand>


                <NavbarMenu>
                    {menuItems.map((item, index) => (
                        <NavbarMenuItem key={`${item}-${index}`}>
                            <Link
                                color={
                                    index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
                                }
                                className="w-full"
                                href="#"
                                size="lg"
                            >
                                {item}
                            </Link>
                        </NavbarMenuItem>
                    ))}
                </NavbarMenu>

            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-5">
                <NavbarItem isActive>
                    <Link color="foreground" href="/shorten">
                        Shorten Links
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="#" aria-current="page">
                        QR Codes
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#">
                        Bio Pages
                    </Link>
                </NavbarItem>
            </NavbarContent>

            <NavbarContent as="div" className="items-center" justify="end">
                <Button variant="outline" size="icon" onClick={openGitHub}>
                    <Github className="h-[1.2rem] w-[1.2rem] transition-all" />
                    <span className="sr-only">GitHub</span>
                </Button>

                <ThemeToggle />

                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56 mr-5">
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuGroup>
                            <DropdownMenuItem>
                                <User className="mr-2 h-4 w-4" />
                                <span>Profile</span>
                                <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <CreditCard className="mr-2 h-4 w-4" />
                                <span>Billing</span>
                                <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Settings className="mr-2 h-4 w-4" />
                                <span>Settings</span>
                                <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Keyboard className="mr-2 h-4 w-4" />
                                <span>Keyboard shortcuts</span>
                                <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                            </DropdownMenuItem>
                        </DropdownMenuGroup>


                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                            <Github className="mr-2 h-4 w-4" />
                            <span>GitHub</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <LifeBuoy className="mr-2 h-4 w-4" />
                            <span>Support</span>
                        </DropdownMenuItem>

                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                            <LogOut className="mr-2 h-4 w-4" />
                            <span>Log out</span>
                            <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </NavbarContent>
        </Navbar>
    );
}
