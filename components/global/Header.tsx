import { Button } from "../ui/button";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

function Header() {
  return (
    <nav className="flex justify-between items-center layout">
      <Link href="/">
        <p className="font-extrabold text-xl">
          Invo<span className="text-primary">Snap</span>
        </p>
      </Link>

      <div className="flex justify-center items-center gap-2">
        <ThemeToggle />
        <Link href="/new">
          <Button
            variant="expandIcon"
            Icon={ArrowRightIcon}
            iconPlacement="right"
          >
            Try Now
          </Button>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
