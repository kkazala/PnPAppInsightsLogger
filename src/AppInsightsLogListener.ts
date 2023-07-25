
import { AnalyticsPlugin } from '@microsoft/applicationinsights-analytics-js';
import { ICustomProperties, SeverityLevel } from '@microsoft/applicationinsights-web';
import { ConsoleListener, ILogEntry, ILogListener, LogLevel, Logger } from "@pnp/logging";


export class  AppInsightsLogListener implements ILogListener {

    constructor(protected appInsights: AnalyticsPlugin, protected customProperties?: ICustomProperties) {}

    public log(entry: ILogEntry): void {

        const parseMessage = (entry: ILogEntry): string => {
            const msg: string[] = [];

            msg.push(entry.message);

            if (entry.data) {
                try {
                    msg.push('Data: ' + JSON.stringify(entry.data));
                } catch (e) {
                    msg.push(`Data: Error in stringify of supplied data ${e}`);
                }
            }
            return msg.join(' | ');
        }


        if (entry.level === LogLevel.Off) {
            // No log required since the level is Off
            return;
        }
        const msg = parseMessage(entry);

        if (this.appInsights) {
            switch (entry.level) {
                case LogLevel.Verbose:
                    this.appInsights.trackTrace({ message: msg, severityLevel: SeverityLevel.Verbose }, this.customProperties);
                    break;
                case LogLevel.Info:
                    this.appInsights.trackTrace({ message: msg, severityLevel: SeverityLevel.Information }, this.customProperties);
                    break;
                case LogLevel.Warning:
                    this.appInsights.trackTrace({ message: msg, severityLevel: SeverityLevel.Warning }, this.customProperties);
                    break;
                case LogLevel.Error:
                    this.appInsights.trackException({ error: new Error(msg), severityLevel: SeverityLevel.Error });
                    break;
            }
        }
    }
}

export function setLogger({ appInsights, logLevel, console }: { appInsights?: AnalyticsPlugin; logLevel: number; console: boolean; }): void {
    if(console){
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        Logger.subscribe(new (ConsoleListener as any)());
    }
    if (appInsights !== undefined) {
        Logger.subscribe(new AppInsightsLogListener(appInsights));
    }

    if (logLevel && logLevel in [0, 1, 2, 3, 99]) {
        Logger.activeLogLevel = logLevel;
    }
}
