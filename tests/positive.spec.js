const { test, expect } = require('@playwright/test');

// You can expand this array to include all 34+ required scenarios
const scenarios = [
  { 
    id: 'Pos_Fun_0001', 
    name: 'Simple Greeting', 
    input: 'oyaa sellam karanna yanavadha?', 
    expected: 'ඔයා සෙල්ලම් කරන්න යනවද?' 
  },
  { 
    id: 'Pos_Fun_0002', 
    name: 'Mixed Language', 
    input: 'adha mama sathutin.', 
    expected: 'අද මම සතුටින්.' 
  },
  { 
    id: 'Neg_Fun_0003', 
    name: 'Joined Words Stress Test', 
    input: 'hodha dheeval mata laebenavaa.', 
    expected: 'හොද දේවල් මට ලැබෙනවා.' 
  },
 
  {
    id: 'Neg_Fun_0004',
    name: 'Incorrect letter conversion',
    input: 'mata magee ilakka sapuraa gatha haekiyi.',
    expected: 'මට මගේ ඉලක්ක සපුරා ගත හැකියි.'

  },
  
  {
    id: 'Neg_Fun_0005',
    name: 'Incorrect letter conversion',
    input: 'saeema dhinakama aluth aaramBhayaki.',
    expected: 'සෑම දිනකම අලුත් ආරම්භයකි.'

  },

  {
    id: 'Neg_Fun_0006',
    name: 'Incorrect letter conversion',
    input: 'magee uthsaahaya gaena mama aadambara venavaa.',
    expected: 'මගේ උත්සාහය ගැන මම ආඩම්බර වෙනවා.'

  },

  {
    id: 'Neg_Fun_0007',
    name: 'Incorrect letter conversion',
    input: 'mama haemadhaama aluth dheyak igena gannavaa.',
    expected: 'මම හැමදාම අලුත් දෙයක් ඉගෙන ගන්නවා.'

  },

  {
    id: 'Neg_Fun_0008',
    name: 'Incorrect letter conversion',
    input: 'naegenahirin hiru udhaaveyi',
    expected: 'නැගෙනහිරින් හිරු උදාවෙයි'

  },

  {
    id: 'Neg_Fun_0009',
    name: 'Incorrect letter conversion',
    input: 'mama anaagathaya gaena balaaporoththu thabaagena hoDHA dheeval sidhuvanu aethaeyi vishvaasa karami.',
    expected: 'මම අනාගතය ගැන බලාපොරොත්තු තබාගෙන හොඳ දේවල් සිදුවනු ඇතැයි විශ්වාස කරමි.'

  },

  {
    id: 'Neg_Fun_0010',
    name: 'Incorrect letter conversion',
    input: 'antharjaalaya minisunta sanniveedhanaya kiriimata upakaarii vee.',
    expected: 'අන්තර්ජාලය මිනිසුන්ට සන්නිවේදනය කිරීමට උපකාරී වේ.'

  },
  
  {
    id: 'Neg_Fun_0011',
    name: 'Incorrect letter conversion',
    input: 'mama saeema aluth dhinayakatama vishvaasayen haa Dhanaathmaka aakalpayakin muhuNa dhemi.',
    expected: 'මම සෑම අලුත් දිනයකටම විශ්වාසයෙන් හා ධනාත්මක ආකල්පයකින් මුහුණ දෙමි.'

  },

  {
    id: 'Neg_Fun_0012',
    name: 'Incorrect letter conversion',
    input: 'aDhYaapanaya yahapath anaagathayak godanaegiimata upakaarii vee.',
    expected: 'අධ්‍යාපනය යහපත් අනාගතයක් ගොඩනැගීමට උපකාරී වේ.'

  },

  {
    id: 'Neg_Fun_0013',
    name: 'Incorrect letter conversion',
    input: 'raathriyeedhii saDHA babaLayi.',
    expected: 'රාත්‍රියේදී සඳ බබළයි.'

  },

   {
    id: 'Neg_Fun_0014',
    name: 'Incorrect letter conversion',
    input: 'vYaayaama kiriimen shariiraya niroogiiva thabaa ganii.',
    expected: 'ව්‍යායාම කිරීමෙන් ශරීරය නිරෝගීව තබා ගනී.'

  },

   {
    id: 'Neg_Fun_0015',
    name: 'Incorrect letter conversion',
    input: 'mama matath an ayatath garu karanavaa, meya mata hoDHA sabaDHAthaa godanaGAaa gaeniimata upakaarii venavaa.',
    expected: 'මම මටත් අන් අයටත් ගරු කරනවා, මෙය මට හොඳ සබඳතා ගොඩනඟා ගැනීමට උපකාරී වෙනවා.'

  },

   {
    id: 'Neg_Fun_0016',
    name: 'Incorrect letter conversion',
    input: 'pothpath apata dhaenuma labaa gaeniimata upakaarii vee.',
    expected: 'පොත්පත් අපට දැනුම ලබා ගැනීමට උපකාරී වේ.'

  },

  
  {
    id: 'Neg_Fun_0017',
    name: 'Incorrect letter conversion',
    input: 'jiivithayata jalaya athYAvashYAyi.',
    expected: 'ජීවිතයට ජලය අත්‍යවශ්‍යයි.'

  },
  
  {
    id: 'Neg_Fun_0018',
    name: 'similar Imperative sentences',
    input: 'eka liyanna.',
    expected: 'එක ලියන්න.'

  },

   {
    id: 'Neg_Fun_0019',
    name: 'similar request sentences',
    input: 'mata podi udhavvak karanna puLuvandha?',
    expected: 'මට පොඩි උදව්වක් කරන්න පුළුවන්ද?'

  },

  {
    id: 'Neg_Fun_0020',
    name: 'similar frequently used day-to-day expressions',
    input: 'mata mahansiyen innavaa.',
    expected: 'මට මහන්සියෙන් ඉන්නවා.'

  },

  {
    id: 'Neg_Fun_0021',
    name: 'similar frequently used day-to-day expressions',
    input: 'kRUShikarmaanthayata varShaava vaedhagath.',
    expected: 'කෘෂිකර්මාන්තයට වර්ෂාව වැදගත්.'

  },

  {
    id: 'Neg_Fun_0022',
    name: 'similar frequently used day-to-day expressions',
    input: 'sQQgiithaya minisun sathutu karayi.',
    expected: 'සංගීතය මිනිසුන් සතුටු කරයි.'

  },

   {
    id: 'Neg_Fun_0023',
    name: 'similar frequently used day-to-day expressions',
    input: 'sQQgiithaya minisun sathutu karayi.',
    expected: 'සංගීතය මිනිසුන් සතුටු කරයි.'

  },

   {
    id: 'Neg_Fun_0024',
    name: 'similar frequently used day-to-day expressions',
    input: 'sQQgiithaya minisun sathutu karayi.',
    expected: 'සංගීතය මිනිසුන් සතුටු කරයි.'

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