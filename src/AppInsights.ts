import { AnalyticsPlugin } from "@microsoft/applicationinsights-analytics-js";
import { ReactPlugin } from "@microsoft/applicationinsights-react-js";
import { ApplicationInsights, ITelemetryPlugin } from "@microsoft/applicationinsights-web";
import { createBrowserHistory } from "history";
const browserHistory = createBrowserHistory({});
export const reactPlugin = new ReactPlugin();
export function AppInsights(connString: string): AnalyticsPlugin {
    const ai = new ApplicationInsights({
        config: {
            connectionString: connString,
            // https://github.com/microsoft/applicationinsights-react-js/issues/32#issuecomment-1638493196
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            extensions: [reactPlugin as any as ITelemetryPlugin],
            extensionConfig: {
                [reactPlugin.identifier]: { history: browserHistory }
            }
        }
    });
    ai.loadAppInsights();
    return ai.appInsights;
}
