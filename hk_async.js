const pup = require('puppeteer');
const config = require('./hk_config.json');
const ansCode = require('./ansCode');
let page;
(async function(){
    try
    {
        let browser_Prom = await pup.launch({
        headless:false,
        args:[`--start-maximized`],
        // slowMo:true,
        defaultViewport:null,
      })
        let newTab=await browser_Prom.pages();
        page=newTab[0];
        await page.goto("https://www.google.com/");
        await page.click(`input.gLFyf.gsfi`);
        await waitAndType(`input.gLFyf.gsfi`,page,config.To_link);
        await page.keyboard.press("Enter");
        await waitAndClick(`h3.LC20lb.MBeuO.DKV0Md`,page);
        await waitAndType(`input[type="text"]`,page,config.username);
        await waitAndType(`input[type="password"]`,page,config.password);
        await page.keyboard.press("Enter");
        await waitAndClick(`div[data-automation="algorithms"]`,page);
        await waitAndClick(`input[value="warmup"]`,page,{delay:20});
        let Qcounter=await page.$$(`button.ui-btn.ui-btn-normal.primary-cta.ui-btn-line-primary.ui-btn-styled`);
        // console.log("Total no of Q's are: "+Qcounter.length);
        await Qsolver(Qcounter[0],ansCode.answers[0]);
    }
    catch(err)
    {
        console.log(err);
    }
})()

async function Qsolver(qns,ans)
{
    try
    {
        await qns.click();
        await waitAndClick(`div.hr-monaco-editor-parent`,page);
        await page.click(`input[type="checkbox"]`,{delay:50});
        await waitAndType(`input[type="checkbox"]`,page,ans );
        await page.keyboard.down("Control");
        await page.keyboard.press("A");
        await page.keyboard.press("X");
        await page.click('div.hr-monaco-editor-parent',{delay:50});
        await page.keyboard.press("A");
        await page.keyboard.press("Backspace");
        await page.keyboard.press("V");
        await page.keyboard.up("Control");
        await page.click(`button.ui-btn.ui-btn-normal.ui-btn-primary.pull-right.hr-monaco-submit.ui-btn-styled`);
    }
    catch(err)
    {
        console.log(err);
    }
}




async function waitAndType(selector,cPage,data)
{
    try
    {
        await cPage.waitForSelector(selector,{visible:true});
        let typedItem = await cPage.type(selector,data,{delay:40});
        return typedItem;
    }
    catch(err)
    {
        console.log(err);
    }
}

async function waitAndClick(selector,cPage)
{
    try
    {
        await cPage.waitForSelector(selector,{visible:true});
        let clickedItem = await cPage.click(selector,{delay:40});
        return clickedItem;
    }
    catch(err)
    {
        console.log(err);
    }
}
