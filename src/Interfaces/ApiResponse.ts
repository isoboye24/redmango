export default interface apiResponse {
  data?: {
    // includes suggestions
    statusCode?: number;
    success?: boolean;
    errorMessages?: Array<string>;
    result: {
      // without suggestions
      [key: string]: string;
    };
  };
  error?: any;
}
