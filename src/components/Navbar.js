import React from "react";

export default function Navbar() {
  return (
    <aside className="w-64" aria-label="Sidebar">
    <div className="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800">     
        <nav>
            <img src="https://images.unsplash.com/photo-1661510048029-42404e817867?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" height="300" width="300" className="rounded"></img>
            <ul className="space-y-2">
                <li>
                    <a href="">Home</a>
                </li>
                <li>
                    <a href="">About</a>
                </li>
                <li>
                    <a href="">Contact</a>
                </li>
                <li>
                    <a href="">Resume</a>
                </li>
                <li>
                    <a href="">Repos</a>
                </li>
            </ul>
        </nav>
    </div>
    </aside>
  );
}