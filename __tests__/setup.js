import "@testing-library/jest-dom";
import { useRouter } from "next/router";

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

jest.mock("next/image", () => ({
	__esModule: true,
	default: (props) => {
		/* eslint-disable @next/next/no-img-element */
		return <img {...props} alt="" />;
		/* eslint-enable @next/next/no-img-element */
	},
}));

jest.mock("next/router", () => ({
	useRouter: jest.fn(),
}));

useRouter.mockReturnValue({
	asPath: "/",
	route: "/",
});
