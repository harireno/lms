Bagus — berarti fondasi Next.js + frontend kamu sudah jalan. Sekarang home page baru “static” (mati), belum “hidup”.

Supaya home page hidup, langkah berikutnya adalah menambahkan interaksi dan data.

Urutan paling aman:

## Step 1 — Jadikan "Featured Courses" dinamis (pakai data dummy dulu)

Sekarang kemungkinan hardcoded:

* Python Basic
* Odoo Development
* Prompt Engineering

Ubah jadi ambil dari array:

```javascript
const courses = [
 {id:1, title:"Python Basic", price:49},
 {id:2, title:"Odoo Development", price:89},
 {id:3, title:"Prompt Engineering", price:129},
];
```

Render dengan:

```jsx
{courses.map(course => (
  <div key={course.id}>
     <h3>{course.title}</h3>
     <p>${course.price}</p>
     <button>Enroll</button>
  </div>
))}
```

Sekarang homepage sudah "bernafas" karena datanya dinamis.

---

## Step 2 — Buat tombol hidup

Kalau ada tombol:

```html
Enroll
```

buat bisa diklik:

```javascript
const handleEnroll = (course) => {
   alert(`You selected ${course.title}`);
}
```

Button:

```jsx
<button onClick={() => handleEnroll(course)}>
  Enroll
</button>
```

Sekarang ada event.

---

## Step 3 — Tambahkan search box

Di header:

```jsx
<input
 placeholder="Search courses..."
 onChange={(e)=>setKeyword(e.target.value)}
/>
```

Lalu filter:

```javascript
const filteredCourses = courses.filter(c =>
 c.title.toLowerCase().includes(keyword.toLowerCase())
);
```

Sekarang user bisa interaksi.

---

## Step 4 — Tambahkan routing

Buat klik course masuk ke detail page:

```javascript
/course/1
/course/2
```

Next.js App Router:

Folder:

```bash
app/course/[id]/page.tsx
```

Isi:

```jsx
export default function CourseDetail() {
 return <h1>Course Detail</h1>
}
```

Di card:

```jsx
<Link href={`/course/${course.id}`}>
 View Course
</Link>
```

Sekarang homepage sudah masuk ke aplikasi.

---

## Step 5 — Ambil data dari API (dummy API dulu)

Buat:

```bash
app/api/courses/route.ts
```

```javascript
export async function GET() {
 return Response.json([
   {id:1,title:"Python"},
   {id:2,title:"Odoo"}
 ]);
}
```

Fetch:

```javascript
useEffect(()=>{
 fetch('/api/courses')
  .then(res=>res.json())
  .then(data=>setCourses(data))
},[])
```

Nah sekarang homepage benar-benar hidup.

---

## Setelah itu baru tambah fitur LMS inti:

Tahap berikutnya:

### Phase berikutnya:

1. Login/Register

```bash
/auth/login
/auth/register
```

---

2. Student Dashboard

```bash
/dashboard
```

---

3. Course Player

```bash
/course/1/lesson/1
```

Video + Progress bar

---

4. Database (PostgreSQL)

Simpan:

* users
* courses
* lessons
* enrollments

---

5. Admin Panel

Create Course

Upload Lesson

Manage Students

---

## Kalau saya urutkan idealnya:

Jangan lompat ke database dulu.

Lakukan ini:

✅ Home page static (sudah)

⬜ Dynamic courses

⬜ Search

⬜ Course detail routing

⬜ Fake API

⬜ Login

⬜ Database

⬜ Real LMS features

---

Kalau mau, setelah ini kita bisa lanjut bikin Step 2: menghidupkan "Featured Courses" menjadi data-driven.
