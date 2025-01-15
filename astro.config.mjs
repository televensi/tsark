import tailwindcss from "@tailwindcss/vite";
import umami from "@yeskunall/astro-umami";
import { defineConfig } from "astro/config";

export default defineConfig({
	site: "https://televensi.github.io",
	vite: {
		plugins: [tailwindcss()],
	},
	integrations: [
		umami({
			id: "644cfe13-b4f1-493a-94a3-86db27bc084b",
			endpointUrl: "https://umami.z0x.ca",
		}),
	],
});
