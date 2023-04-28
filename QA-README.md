## How did you approach solving the problem?

- Include any decision making around libraries used, tooling choices

Due to time restraints thus not being able to put in full planning. I started implementing each requirement in
a simple approach and as project complexity increased, I would abstract out functionality, components and state to reduce over
complicating any one section of the app.

The only third party packages used were for testing, vite and for the visual editor (Codux).

## How did you verify your solution works correctly?

I tested the solution in all three required browsers both in dev and preview (product build) modes.
I also created several unit tests for making sure individual functionality works as required.

## How long did you spend on the exercise?

Multiple days, as I had to spread the time spent due to time restraints.

## What would you add if you had more time and how?

- I would work on more unit tests, adding coverage for more of the application.
- I would clean up the SCSS code more by removing any obsolete styles (left from refactoring) and general tidyup of the styles.
- I would put more time into planning and refactor areas of the application i.e. useFilters hook.
- I would add functionality to create more records
- I would consider adding auth or removing / repalcing the profile button (currently for show).
- I would put more time into the Loader component (currently very basic).
- I would implement a better system for handling and displaying errors i.e. Modals.
