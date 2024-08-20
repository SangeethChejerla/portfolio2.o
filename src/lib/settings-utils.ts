// A vibrant blue-purple hue (around 260 degrees on the color wheel)
const ROCKING_DEFAULT_HUE = 260;

// Helper function to check if we are in a browser environment
const isBrowser = typeof window !== 'undefined';

// Function to get the default hue from the config carrier element or use the rocking default
export function getDefaultHue(): number {
  if (isBrowser) {
    const configCarrier = document.getElementById('config-carrier');
    return parseInt(configCarrier?.dataset.hue || `${ROCKING_DEFAULT_HUE}`, 10);
  }
  return ROCKING_DEFAULT_HUE;
}

// Function to get the hue from localStorage or default if not available
export function getHue(): number {
  if (isBrowser) {
    try {
      const stored = localStorage.getItem('hue');
      return stored ? parseInt(stored, 10) : getDefaultHue();
    } catch {
      console.warn('Failed to retrieve hue from localStorage.');
      return getDefaultHue();
    }
  }
  return getDefaultHue(); // Fallback for server-side rendering
}

// Function to set the hue in localStorage and apply it to the document
export function setHue(hue: number): void {
  if (isBrowser) {
    try {
      localStorage.setItem('hue', String(hue));
    } catch {
      console.warn('Failed to save hue to localStorage.');
    }
    applyHueToDocument(hue);
  }
}

// Function to apply the hue to the document
export function applyHueToDocument(hue: number): void {
  if (isBrowser) {
    document.documentElement.style.setProperty('--primary-hue', String(hue));

    const themeProvider = document.getElementById('theme-provider');
    if (themeProvider) {
      themeProvider.dataset.hue = String(hue);
    }

    window.dispatchEvent(new CustomEvent('hue-change'));
  }
}

// Function to reset the hue to the default rocking value
export function resetToDefaultHue(): void {
  setHue(ROCKING_DEFAULT_HUE);
}
