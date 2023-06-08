# Askui Example Jest HTML Reporters

An example of how to use [jest-html-reporters](https://github.com/Hazyzh/jest-html-reporters) with [askui](https://github.com/askui/askui) and `jest` to get either step-level-reporting or video-reporting.

## Installation of Jest and Typescript

Use following command to set up Jest:
```shell
npm i -D jest @types/jest ts-jest typescript jest-html-reporters
```

## Configuration

You need to configure credentials to be able to run the example. See https://docs.askui.com/docs/api/Configuration/askui-ui-control-client#credentials

Also the example assumes that you start the askui UI Controller manually instead of through the `beforeAll` and `afterAll` (teardown) hooks.

## How to execute the example

This can be executed with the following command:
```shell
npx jest --config ./test/jest.config.ts
```
