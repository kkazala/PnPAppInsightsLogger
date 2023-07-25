


# Versions

## 0.2.6

` function setLogger({ appInsights, logLevel, console }: { appInsights?: AnalyticsPlugin; logLevel: number; console: boolean; }): void `
appInsights parameter NOT mandatory

## Publish
`npm publish`


## Notes

If you call tsc from the command line with a specific file path, it will ignore your tsconfig.json
Typescript docs (<https://www.typescriptlang.org/docs/handbook/tsconfig-json.html>):
_When input files are specified on the command line, tsconfig.json files are ignored._

to allow rush-pnpm link --global "pnp-appinsights-listener":
pnpm config set pnpm-prefix C:\Users\kinga\AppData\Roaming\npm\pnpm-global\5\node_modules


<https://cameronnokes.com/blog/the-30-second-guide-to-publishing-a-typescript-package-to-npm/>
