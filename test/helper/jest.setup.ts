import { UiControlClient, UiController } from "askui";
import path from "path";
import { AskUIJestHtmlStepReporter } from "@askui/askui-reporters";

// Client is necessary to use the askui API
// eslint-disable-next-line import/no-mutable-exports
let aui: UiControlClient;

jest.setTimeout(60 * 1000 * 60);

beforeAll(async () => {

  aui = await UiControlClient.build({
    reporter: new AskUIJestHtmlStepReporter(),
  });

  await aui.connect();
});

// UNCOMMENT THE FOLLOWING CODE TO RECORD VIDEOS OF YOUR TESTS

// IMPORTANT: With jest-html-reporters, you can have either video
//            reporting or the reporting of step details together with screenshots. 
//            So make sure that if you want to use video reporting, you disable the
//            step details reporting by only commenting out line 14
//            (`    reporter: new askuiJestHtmlStepReporter(),`).

// beforeEach(async () => {
//   await aui.startVideoRecording();
// })

// afterEach(async () => {
//   await aui.stopVideoRecording();
//   const video = await aui.readVideoRecording();
//   const output = path.join(__dirname, "./video.mp4");
//   await AskUIJestHtmlStepReporter.writeVideoAttachment(video, output);
// });

afterAll(async () => {
  aui.disconnect();
});

export { aui };