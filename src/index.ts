
export * from "./AppInsights";
export { AppInsightsLogListener, setLogger } from "./AppInsightsLogListener";
export { handleError } from "./ErrorHandler";

export function HW():string{
    return "Hello World";
}
