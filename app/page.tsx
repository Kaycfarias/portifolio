"use client"
import Navbar from "./components/navbar";
import Sections from "./components/sections"

export default function Home() {
  return (
    <div className="relative">
      <Navbar/>
      <Sections/>
    </div>
  );
}
