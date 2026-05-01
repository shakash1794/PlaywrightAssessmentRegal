# The internet is broken

We're trying to test https://the-internet.herokuapp.com/ but, it's going horribly. Goodness gracious, barely any tests are green. Please help us by doing the following:

1. Unzip this repo.
2. Create a new GitHub repo.
3. Push this repo in its broken state to your new repo.
4. Fix as much as you can.
5. Make any changes you feel would make this better.
6. Make a PR against the original.
7. Send us the PR link for review.

## Node JS

The recommended node version is v20.19.3 or v22.17.1
We recommend using nvm to install and manage node versions. It can be found at https://github.com/nvm-sh/nvm.

## Running Tests

Run tests with `npm run wdio` or `npm run wdio-headless`

Run specific tests with `npm run wdio -- --cucumberOpts.tagExpression="@TAG"`

---

## Candidate Requirements

This repository is a test for QA candidates. Your task is to demonstrate your ability to fix broken automated tests using WebdriverIO (WDIO). Please ensure you:

- Fix as many broken tests as possible.
- Submit a pull request with your changes.
- Attach proof or a screenshot showing that all tests pass in your PR.
- Keep your code clean and well-commented.
- Do not commit any sensitive information.

Your submission will be reviewed based on:

- The number of tests fixed.
- Code quality and clarity.
- Evidence of passing tests.
- Any improvements or enhancements you make.

Good luck!
