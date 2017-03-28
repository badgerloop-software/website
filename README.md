# Badgerloop Software: Website

*Contributors: Vaughn Kottler, Devin Johnson, Kody Fisher*

## Local Development

Install [Git](https://git-scm.com/). Make a new folder for the project, open `git bash` if on Windows (Mac open terminal) and navigate to this folder. Install [node.js LTS](https://nodejs.org/en/).

Run `git init` followed by `git remote add origin https://github.com/badgerloop-software/website.git` followed by `git pull origin master`.

Run `git fetch`, `git pull origin dev` and then `git checkout dev`. **You do not want to be doing development on the master branch.** Pushing to the master branch triggers an automatic update.

Run `npm install` from the root folder of the repository.

From the root folder, you can run `node server` to serve traffic through port 8080 locally. This means you would visit `http://localhost:8080` to view your work.

This is necessary because Angular routing requests template pages dynamically and most browsers doesn't allow you to make these type of requests to your own system (for your own protection).

## Website Technologies

1. **[Angular-Material 1.1.1](https://material.angularjs.org/1.1.1/)**

	Requires the following additional dependencies:

	* [angular](https://angularjs.org/) *(1.5.8)*
	* [angular-aria](https://docs.angularjs.org/api/ngAria) *(1.5.8)*
	* [angular-animate](https://docs.angularjs.org/api/ngAnimate) *(1.5.8)*

	We have also opted to use Angular routing:

	* [angular-route](https://docs.angularjs.org/api/ngRoute) *(1.5.8)*

2. **[Google Fonts](https://fonts.google.com/)**

	* [Montserrat](https://fonts.google.com/specimen/Montserrat)
	* [Material Icons](https://material.io/icons/)

## Server and Hosting

1. **[Ubuntu Server 16.04 LTS](https://www.ubuntu.com/download/server)**

2. **[PHP 7](http://php.net/manual/en/intro-whatis.php)**

3. **[MongoDB 3.4.2](https://www.mongodb.com/)**
