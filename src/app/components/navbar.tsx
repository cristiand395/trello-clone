"use client"
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
                <div>Dark</div>
            </div>
        </nav>
    )
}

export default Navbar;