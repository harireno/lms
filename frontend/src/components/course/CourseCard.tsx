type CourseCardProps = {
  title: string;
};

export default function CourseCard({ title }: CourseCardProps) {
  return (
    <div style={{ border: "1px solid #ddd", padding: 16, borderRadius: 8 }}>
      <h3>{title}</h3>
      <p>Course card placeholder.</p>
    </div>
  );
}
