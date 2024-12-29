"use client"
import { ThemeToggle } from "@/components/themeToggle";

function Navbar () {

    return (
        <nav className="w-full border-solid flex justify-between py-2 px-3">
            <div className="flex">
                <p>Slider</p>
                <div className="navbar-end">
                    <a className="navbar-item" href="/home">Home</a>
                    <a className="navbar-item" href="/about">About</a>
                    <a className="navbar-item" href="/contact">Contact</a>
                </div>
            </div>
            <div className="flex">
                <div>Avatar</div>
                <ThemeToggle/>
                <p className="text-black dark:text-white">Logout</p>
            </div>
        </nav>
    )
}

export default Navbar;