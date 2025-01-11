import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
	site: "https://televensi.github.io",
	base: "televensi",
	vite: {
		plugins: [tailwindcss()],
	},
});
