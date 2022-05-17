# Front End Developer, Client Solutions - Hiring Challenge

Movable Ink is a software company that provides marketers with technology to create personalized experiences. This often means we are reaching out to different API's, applying business logic to the data, and generating an image in real-time.

In this code challenge, you will be in charge of creating a view that renders the forecast for a specific location. Please, use plain HTML, CSS, and JS.

**Don't spend more than two hours on this.** The goal of this challenge is to get a sense for how you reason about a problem and structure your code _not_ if you can finish it.

## Challenge details

Requirements for the challenge:

1. Create a project that consume the **geolocation endpoint**.
1. Use the data from the geolocation endpoint to make a second call to the **forecast endpoint**.
1. Use the data from both endpoints to generate the creative found [here.](/img/creative_mock_up.gif)
1. Your code should be as maintainable and extensible as possible.
1. Please timebox this exercise to 2 hours.

## Get Started

- Run `npm run start` to start your local dev environment
- Run `npm run pack` to package your code and send to us

## Geolocation endpoint

```sh
https://se-weather-api.herokuapp.com/api/v1/geo
```

This is the endpoint for retrieving the geo data associated with a given zip code. This endpoint should be called with `GET` and accepts a single query string parameter (`zip_code`).

Example:

```sh
https://se-weather-api.herokuapp.com/api/v1/geo?zip_code=90210
https://se-weather-api.herokuapp.com/api/v1/geo?zip_code=10019
```

## Forecast endpoint

```
https://se-weather-api.herokuapp.com/api/v1/forecast
```

This is the endpoint for retrieving the weather forecast data associated with at a lat/lon. This endpoint should be called with `GET` and accepts three query string parameters (`latitude`, `longitude`, `date`).

Example:

```
https://se-weather-api.herokuapp.com/api/v1/forecast?latitude=34.09&longitude=-104.2&date=01/24/2020
https://se-weather-api.herokuapp.com/api/v1/forecast?latitude=32.05&longitude=-94.1&date=01/24/2020
```






# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
