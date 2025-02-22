import { useTheme } from 'next-themes'
import {SunIcon, MoonIcon} from './icons' 
import { toast } from "react-toastify";

export default function Toggle() { 
    const { theme, setTheme } = useTheme()

    return (
      <>
        <div
          className="flex items-center space-x-1 md:space-x-0 rounded-md md:rounded-full bg-[#F5A2AA] dark:bg-[#3E0C0F] text-base shadow-custom md:p-2 px-3 py-2"
          onClick={() => {
            setTheme(
              theme === "light" ? "dark" : theme === "dark" ? "system" : "light"
            );
            toast(
              <div className="flex flex-col p-4">
                <h3 className="text-sm font-semibold">
                  Theme changed
                </h3>
                <p className="text-sm">
                  {theme === "light"
                    ? "switched to Dark mode"
                    : theme === "dark"
                    ? "switched to System default"
                    : "switched to Light mode"}
                </p>
              </div>,
              {
                className:
                  "p-0 w-[400px] border border-purple-600/40 light-background dark:dark-background",
              }
            );
          }}
        >
          <SunIcon />
          <MoonIcon />
          <span className="sr-only">Switch to light / dark version</span>
          <p className="md:hidden">
            {theme === "dark"
              ? "Dark mode"
              : theme === "light"
              ? "Light mode"
              : "System default"}
          </p>
        </div>
      </>
    );
}