import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-purple-600/90">
      <div className="mx-auto w-full flex flex-col items-center justify-center p-2">
            <a
              href="https://github.com/Kaycfarias"
              className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              <Image
                className="dark:invert"
                src="/github.svg"
                alt="github logo"
                width={20}
                height={20}
                priority
              ></Image>
              <span className="sr-only">GitHub account</span>
            </a>
        <p>@kaycfarias</p>
      </div>
    </footer>
  );
}
