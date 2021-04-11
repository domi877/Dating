[![Build Status][travis-image]][travis-url]  
[![Contributors][contributors-shield]][contributors-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

# Dating
A Dating App for everybody

## Requirements

`Node 10` or greater and `yarn` is required. Development for iOS requires a Mac and Xcode 9.4 or up, and will target iOS 9 and up.

You also need to install the dependencies required by React Native.  
Go to the [React Native environment setup](https://reactnative.dev/docs/environment-setup), then select `React Native CLI Quickstart` tab.  
Follow instructions for your given `development OS` and `target OS`.

### Enable Icons on target OS: Android

Edit `android/app/build.gradle` ( NOT `android/build.gradle` ) and add the following (of not already present):

```gradle
apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"
```

## Quick start

You can setup and run the project by running:

- `yarn install` to install the dependencies
- run the following steps for your platform

### Android

- `yarn start` to start the metro bundler, in a dedicated terminal
- `yarn android` to run the Android application (remember to start a simulator or connect an Android phone)

### iOS

- `cd ios`
- `pod install` to install pod dependencies
- `cd ..` to come back to the root folder
- `yarn start` to start the metro bundler, in a dedicated terminal
- `yarn ios` to run the iOS application (remember to start a simulator or connect an iPhone phone)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[travis-image]: https://travis-ci.com/domi877/Dating.svg?branch=main
[travis-url]: https://travis-ci.com/domi877/Dating
[contributors-shield]: https://img.shields.io/github/contributors/domi877/Dating.svg?style=for-the-badge
[contributors-url]: https://github.com/domi877/Dating/graphs/contributors
[stars-shield]: https://img.shields.io/github/stars/domi877/Dating.svg?style=for-the-badge
[stars-url]: https://github.com/domi877/Dating/stargazers
[issues-shield]: https://img.shields.io/github/issues/domi877/Dating.svg?style=for-the-badge
[issues-url]: https://github.com/domi877/Dating/issues
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/dominik-iffland-48a727202/
