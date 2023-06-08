import { UiControlClient, UiController } from "askui";
// import fs from "fs";
// import path from "path";
import { askuiJestHtmlStepReporter } from "./askui-jest-html-step-reporter";
// import { convertBase64StringToReadStream, writeWebmToMp4 } from './video-reporting-utils';
// const { addAttach } = require("jest-html-reporters/helper");

// Server for controlling the operating system
let uiController: UiController;

// Client is necessary to use the askui API
// eslint-disable-next-line import/no-mutable-exports
let aui: UiControlClient;

jest.setTimeout(60 * 1000 * 60);

beforeAll(async () => {
  uiController = new UiController({
    /**
     * Select the display you want to run your tests on, display 0 is your main display;
     * ignore if you have only one display
     */
    display: 0,
  });

  aui = await UiControlClient.build({
    reporter: new askuiJestHtmlStepReporter(),
  });

  await aui.connect();
});

// UNCOMMENT THE FOLLOWING CODE TO RECORD VIDEOS OF YOUR TESTS

// IMPORTANT: With jest-html-reporters, you can have either video reporting or the reporting of step details together with screenshots. So make sure that if you want to use video reporting, you disable the step details reporting by commenting out line 29 (`    reporter: new askuiJestHtmlStepReporter(),`).

// beforeEach(async () => {
//   await aui.startVideoRecording();
// })

// afterEach(async () => {
//   await aui.stopVideoRecording();
//   const video = await aui.readVideoRecording();
//   const output = path.join(__dirname, "./video.mp4");
//   await writeWebmToMp4(convertBase64StringToReadStream(video), output);
//   addAttach({
//     attach: await fs.readFileSync(output),
//     description: "Video",
//     bufferFormat: "mp4",
//   });
//   await fs.promises.unlink(output);
// });

afterAll(async () => {
  aui.close();
});

export { aui };
