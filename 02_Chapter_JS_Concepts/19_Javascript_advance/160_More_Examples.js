import { test , page} from '@playwright/test'
function test(Callbacktest, callmewhendone){

    console.log("This is Call back test");
    callmewhendone();
}

test("My test", async ({page}) => {
    await page.goto('https://example.com');
});