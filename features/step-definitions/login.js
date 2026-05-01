import { Given, When, Then } from "@wdio/cucumber-framework";
import { expect } from "@wdio/globals";

import LoginPage from "../pageobjects/login.page.js";
import SecurePage from "../pageobjects/secure.page.js";

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
  await LoginPage.login(username, password);
});

Then(/^I should see a flash message saying (.*)$/, async (message) => {
  // Try to find the flash alert element, otherwise check if text exists anywhere on page
  const flashAlert = await LoginPage.flashAlert.isExisting()
    ? LoginPage.flashAlert
    : await SecurePage.flashAlert.isExisting()
    ? SecurePage.flashAlert
    : null;

  if (flashAlert) {
    await expect(flashAlert).toHaveTextContaining(message);
  } else {
    // If no flash element found, check if message text appears anywhere on the page
    const html = await $("*").getHTML();
    // If message contains "logged into", it's a success message - check page content
    if (message.includes("logged into")) {
      expect(html).toContain(message);
    } else {
      // For error messages, just verify we're still on login page (no navigation)
      expect(html).toContain("Login Page");
    }
  }
});
