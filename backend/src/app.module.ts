import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { HealthModule } from "./modules/health/health.module";
import { AuthModule } from "./modules/auth/auth.module";
import { UserModule } from "./modules/user/user.module";
import { CourseModule } from "./modules/course/course.module";
import { SectionModule } from "./modules/section/section.module";
import { LessonModule } from "./modules/lesson/lesson.module";
import { EnrollmentModule } from "./modules/enrollment/enrollment.module";
import { ProgressModule } from "./modules/progress/progress.module";

@Module({
  imports: [
    HealthModule,
    AuthModule,
    UserModule,
    CourseModule,
    SectionModule,
    LessonModule,
    EnrollmentModule,
    ProgressModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}