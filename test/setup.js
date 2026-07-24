/* jsdom polyfills for @mui/x-charts, DataGrid and popper-based components */

// node globals missing from the jsdom environment (typescript/docgen need them)
const { TextEncoder, TextDecoder } = require('util');
global.TextEncoder = global.TextEncoder || TextEncoder;
global.TextDecoder = global.TextDecoder || TextDecoder;

// @mui/x-charts clones plain config objects; jsdom's global lacks it
if (!global.structuredClone) {
  global.structuredClone = (value) => JSON.parse(JSON.stringify(value));
}

class ResizeObserverMock {
  observe() {}
  unobserve() {}
  disconnect() {}
}
global.ResizeObserver = global.ResizeObserver || ResizeObserverMock;

class IntersectionObserverMock {
  observe() {}
  unobserve() {}
  disconnect() {}
  takeRecords() {
    return [];
  }
}
global.IntersectionObserver = global.IntersectionObserver || IntersectionObserverMock;

if (!window.matchMedia) {
  window.matchMedia = (query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  });
}

if (!global.URL.createObjectURL) {
  global.URL.createObjectURL = () => 'blob:mock';
}

// charts measure the SVG container; jsdom reports 0x0 which breaks scales
if (!window.SVGElement.prototype.getBBox) {
  window.SVGElement.prototype.getBBox = () => ({ x: 0, y: 0, width: 100, height: 100 });
}
