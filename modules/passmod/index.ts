// Reexport the native module. On web, it will be resolved to PassmodModule.web.ts
// and on native platforms to PassmodModule.ts
export { default } from './src/PassmodModule';
export { default as PassmodView } from './src/PassmodView';
export * from  './src/Passmod.types';
