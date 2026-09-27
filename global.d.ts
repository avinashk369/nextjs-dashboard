// Plain (non-module) stylesheets imported for their side effects only.
// Next ships declarations for `*.module.css` but not for `*.css`, so TypeScript
// flags `import '@/app/ui/global.css'` once `noUncheckedSideEffectImports` is on.
declare module '*.css';
