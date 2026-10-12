# titaned-frontend-library (copy)

`index.js` and `index.css` are the unchanged `dist/` files of the npm package
`titaned-frontend-library` **1.0.24** (the header and left navigation of every TitanEd MFE).

Why a copy and not a dependency: the package declares the peer dependency
`@edx/frontend-platform >=8.0.0 <=8.1.2`. In a frontend-base site `@edx/frontend-platform` is an
alias of `@openedx/frontend-base-compat`, so `npm install` of the site stops with `ERESOLVE` as
soon as an app of the site depends on the package. The other (legacy) MFE forks solve it with an
`overrides` entry in their own `package.json`; a workspace package cannot do that, only the site
root can. The bundle itself imports nothing but `react` and `@openedx/paragon`.

To update: copy `dist/index.js` and `dist/index.css` of the new version here, change the version
above, and check `index.d.ts` still describes the props used in `TelsLayout.tsx`.

When the package drops that peer dependency (or the site root gets the override), delete this
folder, add `titaned-frontend-library` to `dependencies` and import it by name.
