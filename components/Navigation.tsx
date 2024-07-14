"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const path = usePathname();

  return (
    <nav className={path === "/" ? "" : "bg-gray-200"}>
      <ul>
        <li>
          <Link
            href="/"
            className={
              path === "/" ? "invisible" : "text-yellow-600 text-sm m-3"
            }
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="legends"
            className={
              path === "/"
                ? "text-yellow-400 text-xl m-3 bg-green-100"
                : "text-yellow-500 text-sm m-3"
            }
          >
            Legends 😎
          </Link>
        </li>
        <li>
          <Link
            href="popular"
            className={
              path === "/"
                ? "text-yellow-400 text-xl m-3 bg-green-100"
                : "text-yellow-500 text-sm m-3"
            }
          >
            Popular these days ✨
          </Link>
        </li>
      </ul>
    </nav>
  );
}
