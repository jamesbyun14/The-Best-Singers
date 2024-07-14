"use client";

import Navigation from "@/components/Navigation";
import Singer, { popular } from "@/components/Singers";
export default function Page() {
  return (
    <div>
      <Navigation />
      <h1 className="text-center text-3xl m-5 bg-yellow-100 p-2 uppercase">
        Popular these days
      </h1>
      {popular.map((person) => (
        <Singer
          key={person.number}
          name={popular[person.number].name}
          country={popular[person.number].country}
          img={popular[person.number].img}
          link={popular[person.number].link}
        />
      ))}
    </div>
  );
}
