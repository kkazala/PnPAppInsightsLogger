
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

### References

- [ConsoleListener](https://pnp.github.io/pnpjs/logging/#consolelistener)
- [LogLevel](https://pnp.github.io/pnpjs/logging/#log-levels)
- [Create a Custom Listener](https://pnp.github.io/pnpjs/logging/#create-a-custom-listener)
- [Track SPFx logs using PnP Logging and Azure Application Insights](https://ravichandran.blog/2020/05/31/track-spfx-logs-using-pnp-logging-and-azure-application-insights/)
