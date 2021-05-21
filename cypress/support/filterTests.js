/// <reference types="Cypress" />
const filterTests = (definedTags, runTest) => {
  if (Cypress.env('tags')) {
    const tags = Cypress.env('tags').split('/');
    const found = definedTags.some(($definedTag) => tags.includes($definedTag));

    if (found) {
      runTest();
    }
  } else {
    runTest();
  }
};

export default filterTests;
