"use client"
import Navbar from "./components/navbar";
import Sections from "./components/sections"
import { useState } from 'react';
import { Slide, ToastContainer} from "react-toastify";

const NextThemesProvider = dynamic(
	() => import('next-themes').then((e) => e.ThemeProvider),
	{
		ssr: false,
	}
)

import dynamic from 'next/dynamic'

export default function Home() {
  const navigation = [
    { name: 'Home', href: '#Home', id: 'Btnhome'},
    { name: 'Projects', href: '#Projects', id: 'btnprojects'},
    { name: 'Contacts', href: '#Contacts', id: 'btncontacts'},
  ]
  const [selectedItem, setSelectedItem] = useState('')

  type HandleClick = (name: string) => void;

  const handleClick: HandleClick = (name) => {
    setSelectedItem(name);
  };
    
  return (
    <div className="">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        stacked
        theme="dark"
        transition={Slide}
      />
      <NextThemesProvider attribute="class" defaultTheme="system">
        <Navbar
          navigation={navigation}
          handleClick={handleClick}
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
        />
        <Sections navigation={navigation} setSelectedItem={setSelectedItem} />
      </NextThemesProvider>
    </div>
  );
}
