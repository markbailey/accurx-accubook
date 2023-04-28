## How did you approach solving the problem?

- Include any decision making around libraries used, tooling choices

As I faced time constraints, I couldn't dedicate enough time to thorough planning. Consequently, I began by implementing each requirement using a straightforward approach. As the project's complexity grew, I focused on abstracting out functionality, components, and state to avoid overcomplicating any section of the application.

I relied solely on third-party packages for testing, vite support, and for Codux (visdual editor).

- <font color="#0b8888">**[@wixc3/react-board]**</font> - Required by Codux (visual editor).
- <font color="#0b8888">**[classnames]**</font> - Installed by Codux to simplify className concatination.
- <font color="#0b8888">**[@testing-library/react, @testing-library/react-hooks, jest, jest-environment-jsdom, ts-jest]**</font> - Adds support for creating and running unit tests.
- <font color="#0b8888">**[@babel/preset-env, @babel/preset-react, identity-obj-proxy]**</font> - Adds support for <font color="white">[svg, css, scss, json]</font> imports within testing environment.
- <font color="#0b8888">**[isomorphic-fetch, @types/isomorphic-fetch]**</font> - Adds polyfill for fetch in testing environment.

## How did you verify your solution works correctly?

To ensure the solution's performance and stability, I conducted testing using a variety of approaches. Firstly, I tested the solution in all three required browsers, namely Chrome, Firefox, and Edge, ensuring that it was fully compatible with each browser's unique features and functionalities. I tested the solution in both development and preview modes (production), analyzing its behavior in each stage of the build process.

Furthermore, to verify that the solution's individual components and functionalities were operating correctly, I developed an array of unit tests. These tests were designed to assess the functionality of features and components, analyzing their behavior.

## How long did you spend on the exercise?

Given the limited time I have available, I had to spread my workload over several days, carefully balancing my efforts to ensure that I met all the project's requirements. Although this approach required more time, it allowed me to ensure that each task received the attention to detail.

## What would you add if you had more time and how?

- To ensure the application's functionality is thoroughly tested, I would invest more time in creating additional unit tests that cover more aspects of the application. This would help to identify any potential bugs or issues that may have been overlooked during development, ensuring that the application is stable and reliable.
- To improve the application's codebase and maintainability, I would further clean up the SCSS code by removing any obsolete styles left from refactoring and performing a general tidy-up of the styles. This would help to streamline the codebase, making it easier to maintain and update in the future.
- To ensure the application is scalable and robust, I would dedicate more time to planning and refactoring key areas of the application. For instance, I would revisit the useFilters hook to optimize its performance or replace it entirely.
- To enhance the application's functionality, I would consider adding the ability to create more records. This would increase the application's flexibility and allow users to create and manage more data within the system.
- I would consider adding authentication functionality or removing/replacing the profile button, which currently serves no practical purpose.
- To improve the application's error handling and make it more user-friendly, I would implement a better system for handling and displaying errors. This could involve using modal dialogs to provide clear and concise error messages that users can easily understand.
- To optimize the application's performance and ensure it runs smoothly, I would work on optimizing key areas of the application. This could involve streamlining code, reducing unnecessary processes, improving api calls and state management, ultimately resulting in a faster and more responsive application.
