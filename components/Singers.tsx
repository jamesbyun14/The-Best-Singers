"use client";

import { link } from "fs";
import Image from "next/image";
import Link from "next/link";

export const legends = [
  {
    number: 0,
    name: "Elvis Presley",
    country: "The US",
    img: "/US.png",
    link: "https://www.google.com/search?q=Elvis+Presley",
  },
  {
    number: 1,
    name: "The Beatles",
    country: "The UK",
    img: "/UK.png",
    link: "https://www.google.com/search?q=The+Beatles",
  },
  {
    number: 2,
    name: "Michael Jackson",
    country: "The US",
    img: "/US.png",
    link: "https://www.google.com/search?q=Mickle+Jackson",
  },
];

export const popular = [
  {
    number: 0,
    name: "Taylor Swift",
    country: "The US",
    img: "/US.png",
    link: "https://www.google.com/search?q=Taylor+Swift",
  },
  {
    number: 1,
    name: "Ed Sheeran",
    country: "The UK",
    img: "/UK.png",
    link: "https://www.google.com/search?q=Ed+Sheeran",
  },
  {
    number: 2,
    name: "Justin Bieber",
    country: "Canada",
    img: "/Canada.png",
    link: "https://www.google.com/search?q=Justin+Bieber",
  },
  {
    number: 3,
    name: "Charlie Puth",
    country: "The US",
    img: "/US.png",
    link: "https://www.google.com/search?q=Charlie+Puth",
  },
];

export default function Singer(props: any) {
  function HandleMouseOver(e: any) {
    e.target.className = "text-yellow-600 text-xl ml-px underline";
  }
  function HandleMouseOut(e: any) {
    e.target.className = "text-xl ml-px";
  }
  return (
    <div className="m-4">
      <Link href={props.link}>
        <p
          className="text-xl ml-px"
          onMouseOver={HandleMouseOver}
          onMouseOut={HandleMouseOut}
        >
          {props.name}
        </p>
      </Link>
      <p className="flex ml-3">
        <Image
          src={props.img}
          width={20}
          height={15}
          alt="The US"
          className="mx-1"
        />
        {props.country}
      </p>
    </div>
  );
}
