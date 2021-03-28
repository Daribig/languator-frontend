Languator Frontend

<hr>

File Naming Convention: 

Any files that aren't TypeScript files : 'foo-bar'

TypeScript files : 'FooBar'

<hr>

What's installed:

bootstrap: inline-with-html css styling (import in 'InjectApplication.tsx' so can be used in any children)

react: provides classes for us to reference when building tree

react-dom: handles how the react tree we built is put onto the page

react-router-dom: provides us with classes that allow us to map url paths to specific components to handle 'this' path

(parcel uses babel behind the scenes)
parcel: packages dependencies up into single/ a few files - and does tree shaking to only package up files being used in 'this' build. Also created a quick developent environment as we can run the 'parcel' executable on port 3000, that provides hot-reload whenever we make an adjustment to our source code (and save it) - 'npm run dev-build'. 'npm run prod-build' builds a production ready frontend, a key difference imo is that this build doesn't include 'map' files, that map minified code to the source typescript code ('npm run dev-build' does feature this mapping - can be seen in the 'Sources' tab of Chrome's Developer Tools).

TypeScript: Compiles our TS into JS - provides type checking (hence 'Type'Script)

Explicit Types for React, React-Router and React-Router-DOM classes

serve: serves our packaged (treeshaken) files in the 'prod-build' directory on port 3000, this process can then be pointed to by nginx for serving our frontend (on a remote machine/VPS) - our shell script 'run-file-server.sh' can be pointed to by a process manager (such as pm2) to manage the 'serve' process (that serves our frontend to clients forwarded to port 3000)
