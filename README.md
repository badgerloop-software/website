# Badgerloop Software: Website

*Contributors: Vaughn Kottler*

## Local Development

Install [Git](https://git-scm.com/). Make a new folder for the project, open `git bash` and navigate to this folder. Install [node.js LTS](https://nodejs.org/en/).

Run `git init` followed by `git remote add origin https://github.com/badgerloop-software/website.git` followed by `git pull origin master`.

Run `git checkout dev` followed by `git pull origin dev`. **You do not want to be doing development on the master branch.** Pushing to the master branch triggers an automatic update.

Run `npm install` from the root folder of the repository.

Change directories to the `web` folder and run `npm install` again.

From the root folder, you can run `node server website` to serve traffic through port 8080 locally. This means you would visit `http://localhost:8080` to view your work.

## Website Technologies

1. **[Angular-Material 1.1.3](https://material.angularjs.org/latest/)**

Requires the following additional dependencies:

  * [angular](https://angularjs.org/) *(1.5.x)*
  * [angular-aria](https://docs.angularjs.org/api/ngAria) *(1.5.x)*
  * [angular-animate](https://docs.angularjs.org/api/ngAnimate) *(1.5.x)*

Optionally added dependencies:

  * [angular-route](https://docs.angularjs.org/api/ngRoute) *(1.5.x)*

## Dashboard Technologies

1. **N/A**

## Server and Hosting

1. **Ubuntu Server 16.04 LTS**
