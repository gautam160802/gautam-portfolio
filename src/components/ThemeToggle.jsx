import React, { useEffect, useState } from "react";

function ThemeToggle() {
  const [isDark, setIsDark] = useState(
    () =>
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark((prev) => !prev);

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle Dark Mode"
      className="fixed top-4 right-4 z-50 bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-800 p-2 rounded-full shadow-lg transition duration-300 hover:bg-gray-700 dark:hover:bg-gray-300"
      title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
    >
      {isDark ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="yellow"
          viewBox="0 0 24 24"
          stroke="none"
        >
          <path d="M12 3.1a1 1 0 011 1v1.38a1 1 0 11-2 0V4.1a1 1 0 011-1zM5.21 6.62a1 1 0 011.4 1.43l-.98.98a1 1 0 01-1.4-1.43l.98-.98zM3.1 12a1 1 0 011-1h1.38a1 1 0 110 2H4.1a1 1 0 01-1-1zm2.11 5.79a1 1 0 011.4-1.43l.98.98a1 1 0 01-1.4 1.43l-.98-.98zM12 18.9a1 1 0 011-1v-1.38a1 1 0 11-2 0v1.38a1 1 0 011 1zm6.79-2.11a1 1 0 010-1.4l.98-.98a1 1 0 011.4 1.4l-.98.98a1 1 0 01-1.4 0zM19.9 12a1 1 0 01-1 1h-1.38a1 1 0 110-2h1.38a1 1 0 011 1zm-2.11-5.79a1 1 0 01-1.4 1.4l-.98-.98a1 1 0 011.4-1.4l.98.98z" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="5" />
          <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M17.36 17.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M17.36 6.64l1.42-1.42" />
        </svg>
      )}
    </button>
  );
}

export default ThemeToggle;
