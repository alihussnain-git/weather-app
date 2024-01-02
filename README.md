# Weather App
Weather app to display for weather for searched city in react native using https://www.weatherapi.com/.


## Prerequisites

Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup)


## Installation

run `yarn`
This command will install all packages and prepare the development environment to run the app.
```
for building ios after yarn install run 
1. cd ios
2. pod install
```

## Available scripts

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
yarn start
```

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For android

```bash
yarn android
```

### For iOS

```bash
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

### Run tests
```
yarn test
```

### Run Lint
```
yarn lint
```

## Solution
The app is crafted with React Native, leveraging the power of React Navigation for seamless navigation, React Query for efficient data fetching, and Axios for streamlined API requests. Its architecture is meticulously designed with modularity in mind, ensuring components and hooks are neatly organized to promote code reusability.

Despite the apparent simplicity of the project, a deliberate and strategic approach was taken when structuring the API calls. This decision was driven by a desire to not just meet the task's requirements but to demonstrate a commitment to best practices. The architecture was built with scalability at its core, laying a robust foundation for future enhancements without compromising code quality, maintainability, or performance.

This meticulous approach was particularly important given that the evaluation of this task focused on network communication and data mapping to components. Therefore, every effort was made to ensure the state of each component was optimized for performance.

## Design Decisions
- Axios: Utilized for making API requests due to its simplicity and support for request customization.
- React Query: Used for data fetching and caching, improving the app's performance by reducing unnecessary API calls, providing and clean approach to connect components with APIs without writing our own custom hooks.
- Modular Components: Components are designed to be modular and reusable, promoting maintainability and code organization.

## Known Limitations

- Limited Testing: Automated tests have not been included in this implementation.
- Minimal Styling: The focus was on functionality rather than UI aesthetics.
- Simplified Loading and Error Handling: Loading and Error handling has been kept minimal for the sake of brevity.
- Add support for language and locales, currently hard coded strings added for the sake of simplicity.
- The setup of the environment should be orchestrated through React Native Config, a valuable tool that facilitates the configuration of distinct environments to ensure robust support for varying deployment contexts. Also secrets currently kept in config.ts should never be part of repo directly and store at a secure platform e.g.1password etc.
