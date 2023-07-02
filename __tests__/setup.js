/* 
For some reason using <Image /> from "next/image" causes an console.error when running tests:

  Warning: Received `true` for a non-boolean attribute `priority`

This makes test runs really bloated with this error, so this is a workaround to supress the message
*/
jest.spyOn(global.console, "error").mockImplementationOnce((message) => {
  if (!message.includes("for a non-boolean attribute")) {
    global.console.warn(message);
  }
});
