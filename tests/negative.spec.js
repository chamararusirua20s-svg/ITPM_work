const { test, expect } = require('@playwright/test');

// These scenarios contain intentional "wrong" inputs or mismatched expectations
const scenarios = [
  { 
    id: 'Neg_Fun_0001', 
    name: 'Present Tense variations', 
    input: 'nQQgi padam karanavaa.', 
    expected: 'නංගි පාඩම් කරනවා.' // This WILL FAIL because empty input won't produce this word
  },
  { 
    id: 'Neg_Fun_0002', 
    name: 'Future Tense variations', 
    input: 'api adha raee kaeemmma kannemu.', 
    expected: 'අපි අද රෑ කෑම කන්නෙමු.' // This WILL FAIL if the translator doesn't result in 'කනවා'
  },
  { 
    id: 'Neg_Fun_0003', 
    name: 'Negation patterns', 
    input: 'mama ohuva aeththatama vishvaasssa karannee naehae', 
    expected: 'මම ඔහුව ඇත්තටම විශ්වාස කරන්නේ නැහැ' // This WILL FAIL because 'hggfff' is nonsense
  },
  { 
    id: 'Neg_Fun_0004', 
    name: 'Multiple spaces', 
    input: 'Lamayi sellassssm karanavaa.', 
    expected: 'ළමයි සෙල්ලම් කරනවා.' // This WILL FAIL because 'hggfff' is nonsense
  },
  { 
    id: 'Neg_Fun_0005', 
    name: 'Negation patterns', 
    input: 'mata oyaava hamuvvvvvenna baee.', 
    expected: 'මට ඔයාව හමුවෙන්න බෑ.' // This WILL FAIL because 'hggfff' is nonsense
  },
  { 
    id: 'Neg_Fun_0006', 
    name: 'Slang and colloquial phrasing', 
    input: 'siraavata kiyyyyyannam, eyaa hari hoDHAyi.', 
    expected: 'සිරාවට කියන්නම්, එයා හරි හොඳයි.' // This WILL FAIL because 'hggfff' is nonsense
  },
  { 
    id: 'Neg_Fun_0007', 
    name: 'Repeated word expressions', 
    input: 'oyyyyyaa oyaa', 
    expected: 'ඔයා ඔයා' // This WILL FAIL because 'hggfff' is nonsense
  },
  { 
    id: 'Neg_Fun_0008', 
    name: 'English abbreviations and short forms', 
    input: 'mata ATM ekata yyyyyanna oona.', 
    expected: 'මට ATM එකට යන්න ඕන.' // This WILL FAIL because 'hggfff' is nonsense
  },
  { 
    id: 'Neg_Fun_0009', 
    name: 'English technical/brand terms', 
    input: 'mata Facebook account ekata login venna bbbbbnnnaehae. Password eka hariyenma thibbaa nam?', 
    expected: 'මට Facebook account එකට login වෙන්න බැහැ. Password එක හරියෙන්ම තිබ්බා නම්?' // This WILL FAIL because 'hggfff' is nonsense
  },
  { 
    id: 'Neg_Fun_00010', 
    name: 'Currency, time formats, dates, and units of measurement', 
    input: 'mama pebaravaari 20 laa bqqqqook gaththaa. Price eka unaa Rs.1500. Library open udhee 7.00 AM. Pens 10 pcs ganna mama shop yamu.', 
    expected: 'මම පෙබරවාරි 20 ලා book ගත්තා. Price එක උනා Rs.1500. Library open උදේ 7.00 AM. Pens 10 pcs ගන්න මම shop යමු.' // This WILL FAIL because 'hggfff' is nonsense
  },
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