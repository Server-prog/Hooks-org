import { Search } from "lucide-react"

function Header () {
    return (
        <header className="p-4 text-white">
            <nav className="container mx-auto flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <img src="public/hookslogo.png" alt="logo" className="w-9 h-9" />
                    <h1>V.01</h1>
                </div>

                <div className="flex items-center justify-normal bg-gray-900 text-gray-300 rounded-full px-4 py-2 w-full max-w-lg border border-gray-700 focus-within:ring-2 focus-within:ring-blue-500">
                    <Search className="w-5 h-5 text-gray-400" />
                    <input type="text" placeholder="Search" className="bg-transparent outline-none flex-grow px-2 text-gray-300 placeholder-gray-500" />
                    <div className="flex items-center space-x-1 bg-gray-800 px-2 py-1 rounded-md text-xs text-gray-400">
                        <span className="font-mono">Ctrl</span>
                        <span className="font-mono">K</span>
                    </div>
                </div>

                <ul className="flex gap-4">
                    <li><a className="hover:underline"> Home</a></li>
                    <li><a className="hover:underline"> Sobre</a></li>
                    <li><a className="hover:underline"> Blog</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header