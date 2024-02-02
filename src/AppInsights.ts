import { ReactPlugin } from "@microsoft/applicationinsights-react-js";
import { ApplicationInsights, ITelemetryPlugin } from "@microsoft/applicationinsights-web";
import { createBrowserHistory } from "history";

const browserHistory = createBrowserHistory({});

export const reactPlugin = new ReactPlugin();
export function AppInsights(connString: string): ApplicationInsights {
    let ai: ApplicationInsights;
    try{
    ai = new ApplicationInsights({
        config: {
            connectionString: connString,
            extensions: [reactPlugin as unknown as ITelemetryPlugin],
            extensionConfig: {
                [reactPlugin.identifier]: { history: browserHistory }
            }
        }
    });
    } catch (e) {
        console.log(e);
        throw("A")
    }
    try {
        ai.loadAppInsights();

    } catch (error) {
        console.log(error);
        throw("B")
    }
    return ai;
}
