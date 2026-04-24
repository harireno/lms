import DashboardClient from "@/components/dashboard/DashboardClient";
import { learnerCourseProgress } from "@/data/course-progress";

export default function DashboardPage() {
  return <DashboardClient initialProgressList={learnerCourseProgress} />;
}
