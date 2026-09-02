interface CybersoftBaseResponse<T> {
  statusCode: number;
  content: T;
  dateTime: string;
}

export interface CybersoftSuccessResponse<T> extends CybersoftBaseResponse<T> {}

export interface CybersoftErrorResponse extends CybersoftBaseResponse<string | null> {
  message: string;
}
