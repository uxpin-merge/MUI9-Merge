/**
 * Default font loading. Mirrors the old repo's `addFont()` idea: append a
 * <link> to the document head with per-URL dedupe. Only the library's default
 * fonts are loaded here — any user/AI-selected fonts arrive later as <link>
 * tags injected by UXPin into the canvas iframe, together with the token
 * stylesheet. The library must render correctly with zero injections.
 */
export const DEFAULT_FONTS: string[] = [
  'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap',
  // Material icon fonts used by the Icon/MaterialIcon components:
  'https://fonts.googleapis.com/icon?family=Material+Icons',
  'https://fonts.googleapis.com/icon?family=Material+Icons+Outlined',
];

const loaded: Record<string, boolean> = {};

export function loadFont(href: string): void {
  if (loaded[href] || typeof document === 'undefined') {
    return;
  }
  if (document.querySelector(`link[href="${href}"]`)) {
    loaded[href] = true;
    return;
  }
  const link = document.createElement('link');
  link.href = href;
  link.rel = 'stylesheet';
  document.head.appendChild(link);
  loaded[href] = true;
}

export function ensureFonts(): void {
  DEFAULT_FONTS.forEach(loadFont);
}
