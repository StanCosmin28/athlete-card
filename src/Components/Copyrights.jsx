import { Heart } from "lucide-react";

export default function Copyrights() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-gray-200 dark:border-gray-800 py-2 animate-fade-in-up">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          {/* Copyright text with hover effect */}
          <p className="text-gray-600 dark:text-gray-400 text-sm flex items-center gap-1 hover:scale-105 transition-all duration-200 ease-in-out">
            © {currentYear} Made with
            <span className="inline-flex animate-pulse">
              <Heart className="h-4 w-4 text-red-500 fill-red-500" />
            </span>
            by Stan Cosmin
          </p>

          <div className="text-sm font-medium bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent hover:scale-105 transition-all duration-200 ease-in-out">
            @stanc
          </div>

          <div className="w-24 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent my-2" />

          <div className="flex gap-4 text-xs text-gray-500 dark:text-gray-500">
            <a
              href="#"
              className="hover:text-gray-900 dark:hover:text-gray-300 transition-colors duration-200"
            >
              Privacy
            </a>
            <a
              href="#"
              className="hover:text-gray-900 dark:hover:text-gray-300 transition-colors duration-200"
            >
              Terms
            </a>
            <a
              href="#"
              className="hover:text-gray-900 dark:hover:text-gray-300 transition-colors duration-200"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
