import {
  defineConfig,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  theme: {
    colors: {
      veryCool: '#0000ff',
      brand: {
        primary: 'hsla(var(--hue, 217), 78%, 51%)',
      },
    }
  },
  shortcuts: {
    btn: 'px-4 py-1 rounded inline-block bg-teal-700 text-white cursor-pointer hover:bg-teal-800',
  },
  presets: [
    presetUno(),
    presetTypography(),
    presetWebFonts({
      fonts: {
        inter: 'Inter',
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})
