"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppInsights = exports.reactPlugin = void 0;
var applicationinsights_react_js_1 = require("@microsoft/applicationinsights-react-js");
var applicationinsights_web_1 = require("@microsoft/applicationinsights-web");
var history_1 = require("history");
var browserHistory = (0, history_1.createBrowserHistory)({});
exports.reactPlugin = new applicationinsights_react_js_1.ReactPlugin();
function AppInsights(connString) {
    var _a;
    var ai = new applicationinsights_web_1.ApplicationInsights({
        config: {
            connectionString: connString,
            // https://github.com/microsoft/applicationinsights-react-js/issues/32#issuecomment-1638493196
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            extensions: [exports.reactPlugin],
            extensionConfig: (_a = {},
                _a[exports.reactPlugin.identifier] = { history: browserHistory },
                _a)
        }
    });
    ai.loadAppInsights();
    return ai.appInsights;
}
exports.AppInsights = AppInsights;
