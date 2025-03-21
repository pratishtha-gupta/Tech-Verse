import flowbite from "flowbite-react/tailwind";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    ...flowbite.content(), // Correct way to include Flowbite content
  ],
  theme: {
    extend: {},
  },
  plugins: [
    flowbite.plugin(), // Correct way to include Flowbite as a plugin
  ],
  safelist: ['bg-clip-text', 'text-transparent'], // Keep it inside the main object
};
