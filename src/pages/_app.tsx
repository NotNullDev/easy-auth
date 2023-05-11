import "@/styles/globals.css";
import { clsx } from "clsx";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import Link from "next/link";
import { Button } from "../../components/ui/button";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={(clsx(inter.className), "min-h-screen")}>
      <Header />
      <Component {...pageProps} />
    </div>
  );
}

function Header() {
  return (
    <header className="p-4 ">
      <Button variant="ghost">
        <Link href={"/"} className="text-white">
          EasyAuth
        </Link>
      </Button>
    </header>
  );
}
