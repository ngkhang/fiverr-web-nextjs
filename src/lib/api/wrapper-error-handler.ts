import { ApiErrorResponse } from '@/types/api.type';
import { isAxiosError } from 'axios';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';
import { NextRequest, NextResponse } from 'next/server';
import z, { ZodError } from 'zod';
import { CybersoftErrorResponse } from '../axios/cybersoft-api.type';
import { AppError } from './app-error';

type RouteContext = { params: Promise<Record<string, string>> };
type RouteHandler = (req: NextRequest, context: RouteContext) => Promise<NextResponse>;

export function wrapperErrorHandler(handler: RouteHandler): RouteHandler {
  return async (req, context) => {
    try {
      return await handler(req, context);
    } catch (error) {
      return toErrorResponse(error);
    }
  };
}

function toErrorResponse(error: unknown): NextResponse {
  const dateTime = new Date().toISOString();

  if (error instanceof ZodError) {
    const statusCode = StatusCodes.BAD_REQUEST;

    return NextResponse.json(
      {
        statusCode,
        message: 'Validation failed',
        errors: z.flattenError(error).fieldErrors,
        dateTime,
      } satisfies ApiErrorResponse,
      { status: statusCode },
    );
  }

  if (error instanceof AppError) {
    return NextResponse.json(
      {
        statusCode: error.statusCode,
        message: error.message,
        errors: error.errors,
        dateTime: error.dateTime,
      } satisfies ApiErrorResponse,
      { status: error.statusCode },
    );
  }

  if (isAxiosError(error)) {
    const cybersoftError = error.response?.data as CybersoftErrorResponse | undefined;
    const statusCode =
      cybersoftError?.statusCode ?? error.response?.status ?? StatusCodes.BAD_GATEWAY;

    return NextResponse.json(
      {
        statusCode,
        message: cybersoftError?.message ?? 'Upstream API error',
        detail: typeof cybersoftError?.content === 'string' ? cybersoftError.content : undefined,
        dateTime: cybersoftError?.dateTime ?? dateTime,
      } satisfies ApiErrorResponse,
      { status: statusCode },
    );
  }

  console.error('Unhandled route error:', error);
  const statusCode = StatusCodes.INTERNAL_SERVER_ERROR;

  return NextResponse.json(
    {
      statusCode,
      message: ReasonPhrases.INTERNAL_SERVER_ERROR,
      dateTime,
    } satisfies ApiErrorResponse,
    { status: statusCode },
  );
}
