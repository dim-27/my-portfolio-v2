import localFont from "next/font/local"

export const primaryFont = localFont({
  src: '../../public/fonts/ClashDisplayComplete/ClashDisplay-Variable.woff2',
  variable: '--font-clash-display',
  display: 'swap',
  weight: '100 900'
})

export const headingFontRegular = localFont({
  src: '../../public/fonts/instrument-serif/InstrumentSerif-Regular.woff2',
  variable: '--font-instrument-serif-regular',
  display: 'swap',
  weight: '400'
})

export const headingFontItalic = localFont({
  src: '../../public/fonts/instrument-serif/InstrumentSerif-Italic.woff2',
  variable: '--font-instrument-serif-italic',
  display: 'swap',
  weight: '400'
})