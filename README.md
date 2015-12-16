# shazamjs-desktop

## Install electron
Install electron cli for your system before running the application.

```
# Install the `electron` command globally in your $PATH
npm install electron-prebuilt -g
```

## Install
Run npm install after cloning repo
```
npm install
```

## Run
```
electron main.js
```
or

```
npm start
```

## Description
Desktop application of shazamjs using electron framework. 95% of the code here is exactly the same as the website. This application uses the electron framework to create a desktop version of shazamjs. It still uses boostrap, angular, and socket.io to perform real time communication with a shazamjs-core instance. Please make sure shazamjs-core is running before executing this application.
