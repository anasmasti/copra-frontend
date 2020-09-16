"use strict";
exports.__esModule = true;
var core_1 = require("@angular/core");
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var app_module_1 = require("./app/app.module");
var environment_1 = require("./environments/environment");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)["catch"](function (err) { return console.error(err); });
var loadingElement = document.querySelector(".load-body");
platform_browser_dynamic_1.platformBrowserDynamic()
    .bootstrapModule(app_module_1.AppModule)
    // trigger the transition
    .then(function () { return loadingElement.classList.add("loaded"); })
    // remove the loading element after the transition is complete to prevent swallowed clicks
    .then(function () { return setTimeout(function () { return loadingElement.remove(); }, 1000); });
