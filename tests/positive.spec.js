const { test, expect } = require('@playwright/test');


const scenarios = [
  { 
    id: 'Pos_Fun_0001', 
    name: 'Greeting about Activity', 
    input: 'oyaa sellam karanna yanavadha?', 
    expected: 'ඔයා සෙල්ලම් කරන්න යනවද?' 
  },
  { 
    id: 'Pos_Fun_0002', 
    name: 'Simple Expression of Feeling', 
    input: 'mata badagini inne.', 
    expected: 'මට බඩගිනි ඉන්නේ.' 
  },
  { 
    id: 'pos_Fun_0003', 
    name: 'Positive Statement', 
    input: 'hodha dheeval mata laebenavaa.', 
    expected: 'හොද දේවල් මට ලැබෙනවා.' 
  },
 
  { 
    id: 'pos_Fun_0004', 
    name: 'Present Tense variations', 
    input: 'nQQgi paadam karanavaa.', 
    expected: 'නංගි පාඩම් කරනවා.' 
  },
  { 
    id: 'pos_Fun_0005', 
    name: 'Future Tense variations', 
    input: 'api adha raee kaeema kannemu.', 
    expected: 'අපි අද රෑ කෑම කන්නෙමු.' 
  },
  { 
    id: 'pos_Fun_0006', 
    name: 'Negation patterns', 
    input: 'mama ohuva aeththatama vishvaasa karannee naehae', 
    expected: 'මම ඔහුව ඇත්තටම විශ්වාස කරන්නේ නැහැ' 
  },
  { 
    id: 'pos_Fun_0007', 
    name: 'Multiple spaces', 
    input: 'Lamayi sellam karanavaa.', 
    expected: 'ළමයි සෙල්ලම් කරනවා.' 
  },
  { 
    id: 'pos_Fun_0008', 
    name: 'Negation patterns', 
    input: 'mata oyaava hamuvenna baee.', 
    expected: 'මට ඔයාව හමුවෙන්න බෑ.' 
  },
  { 
    id: 'pos_Fun_0009', 
    name: 'Slang and colloquial phrasing', 
    input: 'siraavata kiyannam, eyaa hari hoDHAyi.', 
    expected: 'සිරාවට කියන්නම්, එයා හරි හොඳයි.' 
  },
  { 
    id: 'pos_Fun_0010', 
    name: 'Repeated word expressions', 
    input: 'oyaa oyaa', 
    expected: 'ඔයා ඔයා' 
  },
  { 
    id: 'pos_Fun_0011', 
    name: 'English abbreviations and short forms', 
    input: 'mata ATM ekata yanna oona.', 
    expected: 'මට ATM එකට යන්න ඕන.' 
  },
  { 
    id: 'pos_Fun_0012', 
    name: 'English technical/brand terms', 
    input: 'mata Facebook account ekata login venna baehae. Password eka hariyenma thibbaa nam?', 
    expected: 'මට Facebook account එකට login වෙන්න බැහැ. Password එක හරියෙන්ම තිබ්බා නම්?' 
  },
  { 
    id: 'pos_Fun_00013', 
    name: 'Currency, time formats, dates, and units of measurement', 
    input: 'mama pebaravaari 20 laa book gaththaa. Price eka unaa Rs.1500. Library open udhee 7.00 AM. Pens 10 pcs ganna mama shop yamu.', 
    expected: 'මම පෙබරවාරි 20 ලා book ගත්තා. Price එක උනා Rs.1500. Library open උදේ 7.00 AM. Pens 10 pcs ගන්න මම shop යමු.' 
  },

   {
    id: 'pos_Fun_0014',
    name: 'Incorrect letter conversion',
    input: 'mama matath an ayatath garu karanavaa, meya mata hoDHA sabaDHAthaa godanaGAaa gaeniimata upakaarii venavaa.',
    expected: 'මම මටත් අන් අයටත් ගරු කරනවා, මෙය මට හොඳ සබඳතා ගොඩනඟා ගැනීමට උපකාරී වෙනවා.'

  },

   {
    id: 'pos_Fun_0015',
    name: 'Incorrect letter conversion',
    input: 'pothpath apata dhaenuma labaa gaeniimata upakaarii vee.',
    expected: 'පොත්පත් අපට දැනුම ලබා ගැනීමට උපකාරී වේ.'

  },

  
  {
    id: 'pos_Fun_0016',
    name: 'Romanized to Sinhala Conversion',
    input: 'jiivithayata jalaya athYAvashYAyi.',
    expected: 'ජීවිතයට ජලය අත්‍යවශ්‍යයි.'

  },
  
  {
    id: 'pos_Fun_0017',
    name: 'similar Imperative sentences',
    input: 'eka liyanna.',
    expected: 'එක ලියන්න.'

  },

   {
    id: 'pos_Fun_0018',
    name: 'similar request sentences',
    input: 'mata podi udhavvak karanna puLuvandha?',
    expected: 'මට පොඩි උදව්වක් කරන්න පුළුවන්ද?'

  },

  {
    id: 'pos_Fun_0019',
    name: 'similar frequently used day-to-day expressions',
    input: 'mata mahansiyen innavaa.',
    expected: 'මට මහන්සියෙන් ඉන්නවා.'

  },

  {
    id: 'pos_Fun_0020',
    name: 'Everyday Knowledge Statement',
    input: 'kRUShikarmaanthayata varShaava vaedhagath.',
    expected: 'කෘෂිකර්මාන්තයට වර්ෂාව වැදගත්.'

  },

  {
    id: 'pos_Fun_0021',
    name: 'Common Positive Statement',
    input: 'sQQgiithaya minisun sathutu karayi.',
    expected: 'සංගීතය මිනිසුන් සතුටු කරයි.'

  },

   {
    id: 'pos_Fun_0022',
    name: 'polite phrasing',
    input: 'samāvenna, mata ehema kiyanna sidu una.',
    expected: 'සම්āවෙන්න, මට එහෙම කියන්න සිඩු උන.'

  },

   {
    id: 'pos_Fun_0023',
    name: 'Complex sentences',
    input: 'oya enne nam, mama gedara innavaa.',
    expected: 'ඔය එන්නෙ නම්, මම ගෙඩර ඉන්නවා.'

  },

  {
  id: 'pos_Fun_0024',
  name: 'English technical/brand terms',
  input: 'API documentation eka read karala thiyenavada? Errors eka correct karanna ona.',
  expected: 'API documentation එක read කරලා තියෙනවද? Errors එක correct කරන්න ඕන.'
},








];

for (const scenario of scenarios) {
  test(`${scenario.id}: ${scenario.name}`, async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');

    // Input: Singlish text box [cite: 303]
    const inputArea = page.getByPlaceholder('Input Your Singlish Text Here.');
    await inputArea.pressSequentially(scenario.input, { delay: 30 });

    // Output: The specific results div we found in your DevTools
    const outputDiv = page.locator('div.whitespace-pre-wrap.overflow-y-auto').first();

    // Verification: Real-time update check [cite: 372, 392]
    await expect(outputDiv).not.toBeEmpty({ timeout: 10000 });
    
    const actualOutput = await outputDiv.innerText();
    console.log(`TC ID: ${scenario.id} | Actual: ${actualOutput}`);

    // Requirements check: Save a screenshot for your report evidence
    await page.screenshot({ path: `screenshots/${scenario.id}.png` });

    // Status Check
    // Note: For Neg_Fun tests, you might expect the output to be messy
    if (scenario.id.startsWith('Pos')) {
        expect(actualOutput.trim()).toBe(scenario.expected);
    }
  });
}