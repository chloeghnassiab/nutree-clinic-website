'use client'
import Script from 'next/script'

declare global {
  interface Window {
    jotformEmbedHandler?: (selector: string, base: string) => void
  }
}

/**
 * Jotform iframe embed, reproduced exactly as on the live Umso pages.
 * When `useEmbedHandler` is true we load Jotform's official embed handler
 * (auto-resize + forwards the page's query string, e.g. UTM params, to the form),
 * exactly like the live page's inline `jotformEmbedHandler(...)` call.
 */
export function JotformEmbed({
  formId,
  src,
  title,
  height = 539,
  minHeight,
  useEmbedHandler = true,
  rounded = false,
}: {
  formId: string
  src: string
  title: string
  height?: number
  minHeight?: number
  useEmbedHandler?: boolean
  rounded?: boolean
}) {
  const id = `JotFormIFrame-${formId}`
  return (
    <>
      <iframe
        id={id}
        title={title}
        src={src}
        allow="geolocation; microphone; camera; fullscreen; payment"
        allowTransparency
        frameBorder={0}
        scrolling="no"
        style={{
          width: '100%',
          minWidth: '100%',
          maxWidth: '100%',
          ...(minHeight ? { minHeight } : { height }),
          border: 'none',
          borderRadius: rounded ? 12 : undefined,
          display: 'block',
        }}
      />
      <Script
        src="https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js"
        strategy="afterInteractive"
        onReady={() => {
          if (useEmbedHandler && typeof window.jotformEmbedHandler === 'function') {
            window.jotformEmbedHandler(`iframe[id='${id}']`, 'https://form.jotform.com/')
          }
        }}
      />
    </>
  )
}
