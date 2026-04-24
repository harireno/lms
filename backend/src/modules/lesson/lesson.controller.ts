import { Controller, Get } from "@nestjs/common";
import { LessonService } from "./lesson.service";

@Controller("lessons")
export class LessonController {
  constructor(private readonly lessonService: LessonService) {}

  @Get()
  findAll() {
    return this.lessonService.findAll();
  }
}