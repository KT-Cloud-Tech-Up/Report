import { Controller, Get } from "@nestjs/common";

@Controller("hello")
class HelloController {
  @Get()
  hello(): string {
    return "Hello, NestJS!";
  }
}

export default HelloController;
