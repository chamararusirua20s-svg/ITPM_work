const { test, expect } = require('@playwright/test');

// These scenarios contain intentional "wrong" inputs or mismatched expectations
const scenarios = [
  { 
    id: 'Neg_Fun_0004', 
    name: 'Empty Input Validation', 
    input: '', 
    expected: 'ස්තූතියි' // This WILL FAIL because empty input won't produce this word
  },
  { 
    id: 'Neg_Fun_0005', 
    name: 'Incorrect letter conversion - knv', 
    input: 'knv', 
    expected: 'කනවා' // This WILL FAIL if the translator doesn't result in 'කනවා'
  },
  { 
    id: 'Neg_Fun_0006', 
    name: 'Gibberish Input Stress Test', 
    input: 'hggfff', 
    expected: 'නිදියනවා' // This WILL FAIL because 'hggfff' is nonsense
  }
];

for (const scenario of scenarios) {
  test(`${scenario.id}: ${scenario.name}`, async ({ page }) => {
    // 1. Navigate to the site
    await page.goto('https://www.swifttranslator.com/');

    // 2. Select the input area
    const inputArea = page.getByPlaceholder('Input Your Singlish Text Here.');
    
    // 3. Type the "wrong" input
    if (scenario.input !== '') {
        await inputArea.pressSequentially(scenario.input, { delay: 30 });
    } else {
        await inputArea.fill(''); // Handle empty case
    }

    // 4. Locate the output div
    const outputDiv = page.locator('div.whitespace-pre-wrap.overflow-y-auto').first();

    // 5. Wait for the translation to occur (using a short delay for stability)
    await page.waitForTimeout(2000); 
    
    const actualOutput = (await outputDiv.innerText()).trim();
    console.log(`TC ID: ${scenario.id} | Input: "${scenario.input}" | Actual: "${actualOutput}"`);

    // 6. Capture screenshot for evidence
    await page.screenshot({ path: `screenshots/${scenario.id}.png` });

    // 7. THE FIX: Direct assertion. 
    // If actualOutput is NOT EXACTLY equal to scenario.expected, the test FAILS.
    expect(actualOutput).toBe(scenario.expected);
  });
}