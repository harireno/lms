import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
  getRoot() {
    return {
      message: "LMS Starter API is running",
    };
  }
}