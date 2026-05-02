import RequireAuth from "@/components/auth/RequireAuth";
import DashboardClient from "@/components/dashboard/DashboardClient";
import { learnerCourseProgress } from "@/data/course-progress";

export default function DashboardPage() {
  return (
    <RequireAuth>
      <DashboardClient initialProgressList={learnerCourseProgress} />
    </RequireAuth>
  );
}