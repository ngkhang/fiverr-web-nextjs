import { ReasonPhrases, StatusCodes } from 'http-status-codes';

export class AppError extends Error {
  public dateTime: string;

  constructor(
    message: string = ReasonPhrases.BAD_REQUEST,
    public statusCode: number = StatusCodes.BAD_REQUEST,
    public errors?: Record<string, string[]>,
  ) {
    super(message);
    this.name = 'AppError';
    this.dateTime = new Date().toISOString();
  }
}

export class UnauthorizedError extends AppError {
  constructor(message = ReasonPhrases.UNAUTHORIZED) {
    super(message, StatusCodes.UNAUTHORIZED);
  }
}

export class NotFoundError extends AppError {
  constructor(message = ReasonPhrases.NOT_FOUND) {
    super(message, StatusCodes.NOT_FOUND);
  }
}
