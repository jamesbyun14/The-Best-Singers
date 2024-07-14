"use client";
import Navigation from "@/components/Navigation";
import Singer, { legends } from "@/components/Singers";

export default function Page() {
  return (
    <div>
      <Navigation />
      <h1 className="text-center text-3xl m-5 bg-yellow-100 p-2 uppercase">
        Legends
      </h1>
      {legends.map((legend) => (
        <Singer
          key={legend.number}
          name={legends[legend.number].name}
          country={legends[legend.number].country}
          img={legends[legend.number].img}
          link={legends[legend.number].link}
        />
      ))}
    </div>
  );
}
