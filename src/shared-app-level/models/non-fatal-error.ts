export interface NonFatalError {
    exceptionId: string;
    defaultMessage: string;
    parameters: { [key: number]: string };
    message: string;
}
