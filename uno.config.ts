import {
    defineConfig,
    presetAttributify,
    presetIcons,
    presetTagify,
    presetUno,
} from "unocss";

import transformerDirectives from "@unocss/transformer-directives";

export default defineConfig({
    shortcuts: {
        badge: "inline-block text-sm font-semibold rounded-full bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 px-2 py-1",
        card: "bg-white border border-slate-200 rounded-lg shadow hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800 dark:hover:bg-slate-700",
        gradient:
            "bg-clip-text text-transparent bg-gradient-to-r from-thau to-blue-500",
    },
    theme: {
        colors: {
            thau: "#204080",
        },
    },
    presets: [presetUno(), presetAttributify(), presetTagify(), presetIcons()],
    transformers: [transformerDirectives()],
});
