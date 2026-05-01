import { Given, When, Then } from "@wdio/cucumber-framework";
import Page from "../pageobjects/page.js";
const index = new Page();

Given(/^I am on the (.+) page$/, async (page) => {
  await index.open(page);
});

Given("I am at the index page", async function () {
  await index.open();
});

When(/^I click the (.+) link$/, async function (page) {
  this.page = page;
  await index.click(page);
});

Then("I should be driected to the selected page", async function () {
  const html = await $("*").getHTML();
  // Check that we navigated to a page with content (not just empty html)
  // and that it contains the page name (somewhere on the page)
  expect(html.length).toBeGreaterThan(100);
  expect(html.toLowerCase()).toContain(this.page.toLowerCase());
});
