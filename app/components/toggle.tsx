import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { toast } from "react-toastify";
import { Sun, Moon, LaptopMinimal, Loader } from "lucide-react";

export default function Toggle() {
  const { theme, setTheme } = useTheme();
  const [ isClient, setIsClient ] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div
      className="flex items-center space-x-1 md:space-x-0 rounded-md md:rounded-full bg-[--lightaccent] dark:bg-[--darkaccent] text-[--lightforeground] dark:text-[--darkforeground] text-base shadow-custom px-3 py-2 md:p-2"
      onClick={() => {
        setTheme(
          theme === "light" ? "dark" : theme === "dark" ? "system" : "light"
        );
        toast(
          <div className="flex flex-wrap">
            <div className="flex items-center justify-center pl-4 py-4">
              {theme == "dark" ? (
                <Moon />
              ) : theme == "light" ? (
                <Sun />
              ) : (
                <LaptopMinimal />
              )}
            </div>
            <div className="flex flex-col p-4">
              <h3 className="text-sm font-semibold">Theme changed</h3>
              <p className="text-sm">
                {theme === "light"
                  ? "switched to Dark mode"
                  : theme === "dark"
                  ? "switched to System default"
                  : "switched to Light mode"}
              </p>
            </div>
          </div>,
          {
            className:
              "p-0 w-full rounded-md border border-purple-600/40 light-background dark:dark-background",
            position: "top-center",
          }
        );
      }}
    >
      {isClient ? (
        theme == "dark" ? (
          <Moon />
        ) : theme == "light" ? (
          <Sun />
        ) : (
          <LaptopMinimal />
        )
      ) : (
        <Loader />
      )}

      <div className={theme == "system" ? "" : ""}></div>
      <span className="sr-only">Switch to light / dark version</span>
      <p className="md:hidden" suppressHydrationWarning>
        {theme === "dark"
          ? "Dark mode"
          : theme === "light"
          ? "Light mode"
          : "System default"}
      </p>
    </div>
  );
}
