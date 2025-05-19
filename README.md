# Invalid Type Identifier Reproduction


Steps:

- Clone repo
- Run `bun run build` (should be fine)
- Run `bunx tsc` - see TS errors
- Open `src/pages.gen.ts` in editor, see red squiggles for the `getConfig` type import from the `/1234` route