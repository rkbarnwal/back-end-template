git init
git add .
git remote add origin https://github.com/rkbarnwal/back-end-template.git
npm init -y
git commit -m "initial commit"
git push --set-upstream origin master

node .\my-script.js

----
npm install --save-dev @babel/core @babel/node @babel/preset-env
npx babel-node .\my-script.js
----
