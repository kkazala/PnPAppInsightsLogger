
# PnP AppInsights Logger

This package includes a collection of utility functions and classes designed for effortless integration of logging into Node.js web applications.

The motivation behind creating this package stems from the idea that rather than duplicating identical utility files across every project, it's more convenient to have them bundled together.

## AppInsightsLogListener

A custom log listener using `PnPjs` library and created according to the [Create a Custom Listener](https://pnp.github.io/pnpjs/logging/#create-a-custom-listener). It sends logs to the **Application Insights.**
This code is inspired by [Track SPFx logs using PnP Logging and Azure Application Insights](https://ravichandran.blog/2020/05/31/track-spfx-logs-using-pnp-logging-and-azure-application-insights/)

`setLogger` method subscribes to `ConsoleListener`, custom `Application Insights Listener`, or both. It also suports setting `log level`.

## AppInsights

A helper method using [Application Insights JavaScript SDK](https://github.com/microsoft/ApplicationInsights-JS#readme).
It accepts connection string as a parameter, and returns an instance of the `ApplicationInsights`.

## handleError

Provides `handleError` method as defined in [https://pnp.github.io/pnpjs/concepts/error-handling/#errorhandlerts](https://pnp.github.io/pnpjs/concepts/error-handling/#errorhandlerts)

# Usage

You may use the `setLogger` method to log information to the Console, to Application Insights, or both.

To log errors to the Application Insights, you need to obtain the [Connection String](https://learn.microsoft.com/en-us/azure/azure-monitor/app/sdk-connection-string?tabs=dotnet5), create `AppInsights` instance and reference it in the `setLoger` method. Use `Loglevel: 3` to log errors.

```ts
import { AppInsights, setLogger } from 'pnp-appinsights-listener';

export interface ICorporateDesignApplicationCustomizerProperties {
  logLevel?: number;
  appInsightsConnString?: string;
}

export default class CorporateDesignApplicationCustomizer {
    if (this.properties.appInsightsConnString) {
      const ai = AppInsights(this.properties.appInsightsConnString);
      setLogger({
        appInsights: ai,
        logLevel: this.properties.logLevel,
        console: true
      });
    }
    else {
      setLogger({
        logLevel: this.properties.logLevel,
        console: true
      });
    }
}
```


### References

- [ConsoleListener](https://pnp.github.io/pnpjs/logging/#consolelistener)
- [LogLevel](https://pnp.github.io/pnpjs/logging/#log-levels)
- [Create a Custom Listener](https://pnp.github.io/pnpjs/logging/#create-a-custom-listener)
- [Track SPFx logs using PnP Logging and Azure Application Insights](https://ravichandran.blog/2020/05/31/track-spfx-logs-using-pnp-logging-and-azure-application-insights/)
