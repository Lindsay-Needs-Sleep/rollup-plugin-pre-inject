// @ts-nocheck

require('jest-extended');

jest.setTimeout(60000); // 1 Minute Timeout for Async Operations

// global.console = {
//     log: jest.fn(), // Ignore console.log in test output
//     warn: jest.fn(), // Ignore Svelte warnings in test output

//     error: console.error, // Keep native behaviour for other functions
//     info: console.info,
//     debug: console.debug,
// };
