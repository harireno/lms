import { Injectable } from "@nestjs/common";

@Injectable()
export class CourseService {
  findAll() {
    return [];
  }

  findOne(slug: string) {
    return {
      slug,
      title: "Placeholder Course",
    };
  }
}