// wrap console.xxx() to add prefix
const prefix = 'NflxIntroSkip>';
const console = {
  log: (...args) => window.console.log(prefix, ...args),
  warn: (...args) => window.console.warn(prefix, ...args),
  error: (...args) => window.console.error(prefix, ...args),
};

module.exports = console;
