![Screen](https://raw.githubusercontent.com/DaZzz/i2x-challenge/master/screen.png)

# 🎧 SoundBuddy

This is React showcase app for demonstration purposes. In this app you will be able to
login to an app called SoundBuddy, browse through the list of records and play them.

The app structured in the following way:

* `/components` - components shared accross all routes (e.g. App, PrivateRoute)
* `/modules` - modules shared accross all routes (e.g. Auth)
* `/routes` - route specific components, modules and assets
* `/store` - Redux store
* `/static` - Contains index.html

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/)
* [Yarn](https://yarnpkg.com/)

## Installation

* `git clone <repository-url>` this repository
* `yarn`

## Running / Development

* `yarn start`
* Visit the app at [http://localhost:8080](http://localhost:8080).

### Building

* `yarn run build` (production)

### Deploying

* `yarn run build`
* `git add build/**`
* `git commit -m "Update build"`
* `yarn run deploy:gh-pages`

