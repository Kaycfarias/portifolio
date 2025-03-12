"use client";
import Navbar from "./components/navbar";
import Sections from "./components/sections";
import { useState } from "react";
import { Slide, ToastContainer } from "react-toastify";

const NextThemesProvider = dynamic(
  () => import("next-themes").then((e) => e.ThemeProvider),
  {
    ssr: false,
  }
);

import dynamic from "next/dynamic";

export default function Home() {
  const navigation = [
    { name: "About", href: "#About", id: "Btnabout" },
    { name: "Skills", href: "#Skills", id: "Btnskills" },
    { name: "Projects", href: "#Projects", id: "btnprojects" },
    { name: "Contacts", href: "#Contacts", id: "btncontacts" },
  ];
  const [selectedItem, setSelectedItem] = useState("");

  type HandleClick = (name: string) => void;

  const handleClick: HandleClick = (name) => {
    setSelectedItem(name);
  };

  return (
    
    <NextThemesProvider attribute="class" defaultTheme="system">
        <Navbar
          navigation={navigation}
          handleClick={handleClick}
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
        />
        <Sections navigation={navigation} setSelectedItem={setSelectedItem} />
        <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        
        transition={Slide}
        limit={3}
      />
    </NextThemesProvider>
  );
}
