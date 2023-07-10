import { aui } from './helper/jest.setup';

describe('jest with askui', () => {
  xit('should generate an annotation', async () => {
    await aui.annotate();
  });

  xit('should do a Google search given a browser with Google Search has already been opened and is focused', async () => {
    await aui.click().text().containsText('Search Google or type a URL').exec();
    await aui.type('askui').exec();
    await aui.pressKey('enter').exec();
    await aui.getAll().exec();
  });

  it('should open the spotlight given it is running on Mac OS', async () => {
    await aui.expect().text().containsText('Search Google or type a URL').exists().exec();
    await aui.pressTwoKeys('command', 'space').exec();
    await aui.type('askui', {isSecret: true}).exec();
    await aui.moveMouse(20, 20).exec();
    await aui.moveMouse(300, 300).exec();
    throw Error("Oh no!");
  })
});
