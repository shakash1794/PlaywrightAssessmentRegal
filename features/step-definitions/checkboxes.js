import { When, Then } from "@wdio/cucumber-framework";
import { expect } from "@wdio/globals";
import checkboxesPage from "../pageobjects/checkboxes.page.js";

When(/^I select checkbox (\d)$/, async function (num) {
  this.checkbox = await checkboxesPage.elements.checkbox(num);
  const isChecked = await this.checkbox.isSelected();
  // Only click if not already checked to ensure it ends up checked
  if (!isChecked) {
    await checkboxesPage.select(num);
  }
});

Then(/^The checkbox should be checked$/, async function () {
  await expect(this.checkbox).toHaveAttribute("checked");
});
