/**
 * Our tests use Jasmine.
 */

describe('RNDeviceFarm Device Test', () => {
  it('Should have welcome text', () => {
    // We need to wait for the component to be visible.
    // The ~ is how we select on testId
    $('~welcomeText').waitForDisplayed(1000);
    const element = $("~welcomeText");
    expect(element.getText()).toBe('Welcome to React Native!')
  });
});
