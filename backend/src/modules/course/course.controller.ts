import { Controller, Get, Param } from "@nestjs/common";
import { CourseService } from "./course.service";

@Controller("courses")
export class CourseController {
  constructor(private readonly courseService: CourseService) {}

  @Get()
  findAll() {
    return this.courseService.findAll();
  }

  @Get(":slug")
  findOne(@Param("slug") slug: string) {
    return this.courseService.findOne(slug);
  }
}