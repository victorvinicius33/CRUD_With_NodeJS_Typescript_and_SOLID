import { HttpResponse } from './protocols';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const ok = <T>(body: any): HttpResponse<T> => ({
  statusCode: 200,
  body,
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const created = <T>(body: any): HttpResponse<T> => ({
  statusCode: 201,
  body,
});

export const badRequest = (message: string): HttpResponse<string> => {
  return {
    statusCode: 400,
    body: message,
  };
};

export const serverError = (): HttpResponse<string> => {
  return {
    statusCode: 500,
    body: 'Something went wrong',
  };
};
