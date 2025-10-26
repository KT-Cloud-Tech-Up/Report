export class ResponseDto<T> {
  status: number;
  message: string;
  data: T;

  constructor(status: number, message: string, data: T) {
    this.status = status;
    this.message = message;
    this.data = data;
  }

  static ok<T>(data: T, message = '성공'): ResponseDto<T> {
    return new ResponseDto<T>(200, message, data);
  }

  static error<T>(message = '에러 발생', status = 400): ResponseDto<T> {
    return new ResponseDto<T>(status, message, null as unknown as T);
  }
}
