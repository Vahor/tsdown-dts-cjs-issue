- run build
- in ./dist/cjs/index.d.cts, export is `./index.d.mts`, should be "../esm/index.d.mts"
- bunx tsc example.ts --noEmit

- And in example.ts if we import directly from cjs:
```
dist/cjs/index.d.cts:1:20 - error TS2307: Cannot find module './index.d.mts' or its corresponding type declarations.

1 export type * from './index.d.mts'
```

