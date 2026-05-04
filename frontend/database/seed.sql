INSERT INTO courses (slug, title, description, access_type, is_published)
VALUES
  (
    'from-localhost-to-live-lms',
    'From Localhost to Live LMS',
    'Course deployment LMS dari localhost sampai live di VPS.',
    'free',
    true
  ),
  (
    'from-static-lms-to-dynamic-lms',
    'From Static LMS to Dynamic LMS',
    'Course lanjutan untuk menambahkan database dan member system ke LMS.',
    'free',
    true
  )
ON CONFLICT (slug) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  access_type = EXCLUDED.access_type,
  is_published = EXCLUDED.is_published,
  updated_at = NOW();

INSERT INTO lessons (course_id, slug, title, order_no)
SELECT id, 'intro', 'Introduction', 1
FROM courses
WHERE slug = 'from-static-lms-to-dynamic-lms'
ON CONFLICT (course_id, slug) DO UPDATE SET
  title = EXCLUDED.title,
  order_no = EXCLUDED.order_no,
  updated_at = NOW();

INSERT INTO lessons (course_id, slug, title, order_no)
SELECT id, 'database-architecture', 'Arsitektur Database LMS', 2
FROM courses
WHERE slug = 'from-static-lms-to-dynamic-lms'
ON CONFLICT (course_id, slug) DO UPDATE SET
  title = EXCLUDED.title,
  order_no = EXCLUDED.order_no,
  updated_at = NOW();

INSERT INTO lessons (course_id, slug, title, order_no)
SELECT id, 'postgresql-setup', 'Setup PostgreSQL untuk LMS', 3
FROM courses
WHERE slug = 'from-static-lms-to-dynamic-lms'
ON CONFLICT (course_id, slug) DO UPDATE SET
  title = EXCLUDED.title,
  order_no = EXCLUDED.order_no,
  updated_at = NOW();  

INSERT INTO lessons (course_id, slug, title, order_no)
SELECT id, 's2d-18', 'Auto Enroll Free Course ke Dashboard', 18
FROM courses
WHERE slug = 'from-static-lms-to-dynamic-lms'
ON CONFLICT (course_id, slug) DO UPDATE SET
  title = EXCLUDED.title,
  order_no = EXCLUDED.order_no,
  updated_at = NOW();

INSERT INTO lessons (course_id, slug, title, order_no)
SELECT id, 's2d-19', 'Persist Enrollment ke PostgreSQL', 19
FROM courses
WHERE slug = 'from-static-lms-to-dynamic-lms'
ON CONFLICT (course_id, slug) DO UPDATE SET
  title = EXCLUDED.title,
  order_no = EXCLUDED.order_no,
  updated_at = NOW();

INSERT INTO lessons (course_id, slug, title, order_no)
SELECT id, 's2d-20', 'Dashboard Membaca Enrollment Database', 20
FROM courses
WHERE slug = 'from-static-lms-to-dynamic-lms'
ON CONFLICT (course_id, slug) DO UPDATE SET
  title = EXCLUDED.title,
  order_no = EXCLUDED.order_no,
  updated_at = NOW();

INSERT INTO lessons (course_id, slug, title, order_no)
SELECT id, 's2d-21', 'Persist Lesson Progress ke PostgreSQL', 21
FROM courses
WHERE slug = 'from-static-lms-to-dynamic-lms'
ON CONFLICT (course_id, slug) DO UPDATE SET
  title = EXCLUDED.title,
  order_no = EXCLUDED.order_no,
  updated_at = NOW();

INSERT INTO lessons (course_id, slug, title, order_no)
SELECT id, 's2d-22', 'Dashboard Membaca Lesson Progress Database', 22
FROM courses
WHERE slug = 'from-static-lms-to-dynamic-lms'
ON CONFLICT (course_id, slug) DO UPDATE SET
  title = EXCLUDED.title,
  order_no = EXCLUDED.order_no,
  updated_at = NOW();  

INSERT INTO lessons (course_id, slug, title, order_no)
SELECT id, 's2d-23', 'Course Detail dan Lesson Page Membaca Progress Database', 23
FROM courses
WHERE slug = 'from-static-lms-to-dynamic-lms'
ON CONFLICT (course_id, slug) DO UPDATE SET
  title = EXCLUDED.title,
  order_no = EXCLUDED.order_no,
  updated_at = NOW();  