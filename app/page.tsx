"use client"
import Navbar from "./components/navbar";
import Sections from "./components/sections"
import { useState } from 'react';
import { ToastContainer} from "react-toastify";

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
  const [selectedItem, setSelectedItem] = useState(null)
  const handleClick = (name: any) => {
    setSelectedItem(name)
  }
    
  return (
    <NextThemesProvider attribute="class" defaultTheme="system">
      <div className="relative">
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
        />
        <Navbar
          navigation={navigation}
          handleClick={handleClick}
          selectedItem={selectedItem}
          setSelectedItem
        />
        <Sections navigation={navigation} setSelectedItem={setSelectedItem} />
      </div>
    </NextThemesProvider>
  );
}
