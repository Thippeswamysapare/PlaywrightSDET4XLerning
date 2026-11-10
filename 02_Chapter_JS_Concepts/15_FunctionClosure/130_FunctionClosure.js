function outerFunction() {
    let outerVariable = "I am from outer function";

    function innerFunction() {
        console.log(outerVariable);
    }

    return innerFunction;
}

const closureFunction = outerFunction();
closureFunction();

function startBrowser() {
    let browserName = "Edge";

    function installBrowser() {
        console.log(browserName);
    }

    return installBrowser;
}

const browserInstaller = startBrowser();
browserInstaller();
// Removed the extra closing brace at the end of the file