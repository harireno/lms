import type { Course, CurriculumSection, Lesson } from "@/types/course.types";

function flattenCurriculum(curriculum: CurriculumSection[]): Lesson[] {
  return curriculum
    .slice()
    .sort((a, b) => a.order - b.order)
    .flatMap((section) =>
      section.lessons.slice().sort((a, b) => a.order - b.order)
    );
}

const pythonCurriculum: CurriculumSection[] = [
  {
    id: "python-sec-1",
    title: "Python Foundations",
    summary:
      "Build a practical foundation in syntax, variables, loops, and reusable logic.",
    order: 1,
    lessons: [
      {
        id: "py-1",
        title: "Introduction to Python",
        duration: "10 min",
        summary: "Understand what Python is and why it is widely used.",
        order: 1,
        materials: [
          {
            id: "py-1-html",
            title: "Lesson Notes",
            type: "html",
            description: "Readable HTML notes for quick review.",
            htmlContent:
              "<h2>Introduction to Python</h2><p>Python is popular because it is readable, productive, and widely used for automation, backend apps, and data work.</p>",
          },
          {
            id: "py-1-video",
            title: "Intro Video",
            type: "video",
            description: "Short walkthrough for the lesson.",
            url: "https://example.com/videos/python-introduction",
            duration: "10 min",
          },
        ],
      },
      {
        id: "py-2",
        title: "Variables and Data Types",
        duration: "18 min",
        summary:
          "Learn strings, numbers, booleans, and basic variable usage.",
        order: 2,
        materials: [
          {
            id: "py-2-html",
            title: "Variables Cheatsheet",
            type: "html",
            description: "Quick HTML guide for variables and types.",
            htmlContent:
              "<h2>Variables and Data Types</h2><p>Use variables to store values and basic data types such as strings, integers, floats, and booleans.</p>",
          },
        ],
      },
      {
        id: "py-3",
        title: "Conditionals and Loops",
        duration: "22 min",
        summary: "Use if statements, for loops, and while loops effectively.",
        order: 3,
        materials: [
          {
            id: "py-3-pdf",
            title: "Practice Worksheet",
            type: "pdf",
            description: "PDF worksheet for conditionals and loops.",
            fileName: "python-conditionals-loops.pdf",
            url: "https://example.com/files/python-conditionals-loops.pdf",
          },
        ],
      },
      {
        id: "py-4",
        title: "Functions",
        duration: "20 min",
        summary:
          "Create reusable logic with function parameters and return values.",
        order: 4,
        materials: [
          {
            id: "py-4-docx",
            title: "Function Exercises",
            type: "docx",
            description: "Downloadable exercise sheet.",
            fileName: "python-functions-exercises.docx",
            url: "https://example.com/files/python-functions-exercises.docx",
          },
        ],
      },
    ],
  },
];

const odooCurriculum: CurriculumSection[] = [
  {
    id: "odoo-sec-1",
    title: "Odoo Module Essentials",
    summary:
      "Learn how Odoo modules are structured and how backend pieces work together.",
    order: 1,
    lessons: [
      {
        id: "od-1",
        title: "Odoo Architecture Overview",
        duration: "14 min",
        summary:
          "Understand models, views, menus, actions, and module structure.",
        order: 1,
        materials: [
          {
            id: "od-1-html",
            title: "Architecture Notes",
            type: "html",
            description: "HTML reading material for Odoo architecture.",
            htmlContent:
              "<h2>Odoo Architecture</h2><p>Odoo modules are built around models, views, menus, security, and business actions.</p>",
          },
        ],
      },
      {
        id: "od-2",
        title: "Creating a Custom Module",
        duration: "25 min",
        summary: "Learn the basic folder structure and manifest setup.",
        order: 2,
        materials: [
          {
            id: "od-2-video",
            title: "Module Scaffold Walkthrough",
            type: "video",
            description: "Video walkthrough for creating a starter addon.",
            url: "https://example.com/videos/odoo-custom-module",
            duration: "25 min",
          },
        ],
      },
      {
        id: "od-3",
        title: "Models and Fields",
        duration: "28 min",
        summary: "Define business objects using Python models and fields.",
        order: 3,
        materials: [
          {
            id: "od-3-pdf",
            title: "Models and Fields Reference",
            type: "pdf",
            description: "Reference sheet for common model fields.",
            fileName: "odoo-models-fields-reference.pdf",
            url: "https://example.com/files/odoo-models-fields-reference.pdf",
          },
        ],
      },
      {
        id: "od-4",
        title: "Views and Menus",
        duration: "24 min",
        summary:
          "Create form, list, and search views, then link them to menus.",
        order: 4,
        materials: [
          {
            id: "od-4-docx",
            title: "View Practice Pack",
            type: "docx",
            description:
              "Practice instructions for creating views and menus.",
            fileName: "odoo-views-practice-pack.docx",
            url: "https://example.com/files/odoo-views-practice-pack.docx",
          },
        ],
      },
    ],
  },
];

const promptCurriculum: CurriculumSection[] = [
  {
    id: "prompt-sec-1",
    title: "Prompt Foundations",
    summary:
      "Understand the building blocks of high-quality prompting and how prompts shape outputs.",
    order: 1,
    lessons: [
      {
        id: "pe-1",
        title: "Prompting Fundamentals",
        duration: "12 min",
        summary:
          "Understand how instructions, context, and constraints shape outputs.",
        order: 1,
        isPreview: true,
        materials: [
          {
            id: "pe-1-html",
            title: "HTML Lesson Content",
            type: "html",
            description: "Rich text lesson content rendered directly in the LMS.",
            htmlContent:
              "<h2>Prompting Fundamentals</h2><p>A strong prompt gives the model a clear task, useful context, and explicit output expectations.</p><ul><li>State the task clearly</li><li>Provide relevant context</li><li>Add constraints and success criteria</li></ul>",
          },
          {
            id: "pe-1-video",
            title: "Lesson Video",
            type: "video",
            description:
              "Short video explaining the fundamentals of prompting.",
            url: "https://example.com/videos/prompting-fundamentals",
            duration: "12 min",
          },
        ],
      },
      {
        id: "pe-2",
        title: "Role and Context Design",
        duration: "16 min",
        summary:
          "Guide the model by defining role, audience, and task clearly.",
        order: 2,
        materials: [
          {
            id: "pe-2-pdf",
            title: "Prompt Role Design PDF",
            type: "pdf",
            description: "Portable lesson handout for offline reading.",
            fileName: "prompt-role-context-design.pdf",
            url: "https://example.com/files/prompt-role-context-design.pdf",
          },
          {
            id: "pe-2-html",
            title: "Worked Examples",
            type: "html",
            description: "Extra examples for role framing and context quality.",
            htmlContent:
              "<h2>Role and Context Design</h2><p>Specify who the model should act as, who the audience is, and the constraints for the final answer.</p>",
          },
        ],
      },
    ],
  },
  {
    id: "prompt-sec-2",
    title: "Reusable Patterns",
    summary:
      "Move from basic prompting to repeatable prompt structures for real work.",
    order: 2,
    lessons: [
      {
        id: "pe-3",
        title: "Prompt Patterns for Coding",
        duration: "21 min",
        summary:
          "Use reusable prompt patterns for refactoring, debugging, and reviews.",
        order: 3,
        materials: [
          {
            id: "pe-3-docx",
            title: "Coding Prompt Workbook",
            type: "docx",
            description: "Downloadable workbook with prompt templates.",
            fileName: "prompt-patterns-for-coding.docx",
            url: "https://example.com/files/prompt-patterns-for-coding.docx",
          },
          {
            id: "pe-3-video",
            title: "Live Coding Prompt Demo",
            type: "video",
            description:
              "Video demo for code review and debugging prompts.",
            url: "https://example.com/videos/prompt-patterns-for-coding",
            duration: "21 min",
          },
        ],
      },
      {
        id: "pe-4",
        title: "Prompt Iteration and Evaluation",
        duration: "19 min",
        summary:
          "Improve prompts by testing, comparing, and refining results.",
        order: 4,
        materials: [
          {
            id: "pe-4-html",
            title: "Iteration Framework",
            type: "html",
            description:
              "Framework for improving prompts using side-by-side comparisons.",
            htmlContent:
              "<h2>Prompt Iteration</h2><p>Iterate prompts by changing one variable at a time, comparing outputs, and recording what improved clarity and consistency.</p>",
          },
          {
            id: "pe-4-pdf",
            title: "Evaluation Checklist",
            type: "pdf",
            description: "Checklist for evaluating prompt quality.",
            fileName: "prompt-evaluation-checklist.pdf",
            url: "https://example.com/files/prompt-evaluation-checklist.pdf",
          },
        ],
      },
    ],
  },
];

const localhostToLiveCurriculum: CurriculumSection[] = [
  {
    id: "l2l-sec-1",
    title: "Module 1 — Menyiapkan Ubuntu VPS",
    summary:
      "Menyiapkan server Ubuntu 22.04 untuk deployment LMS, termasuk akses awal menggunakan PuTTY dan struktur dasar server.",
    order: 1,
    lessons: [
      {
        id: "l2l-1",
        title: "Apa itu VPS untuk LMS",
        duration: "12 min",
        summary:
          "Memahami apa itu VPS, mengapa LMS membutuhkan VPS, dan bagaimana VPS menjadi rumah online untuk aplikasi yang sebelumnya hanya berjalan di localhost.",  
        order: 1,
        materials: [
          {
            id: "l2l-1-html",
            title: "Pengantar VPS untuk LMS",
            type: "html",
            description: "Penjelasan dasar tentang peran VPS untuk LMS.",
            htmlContent:
              "<h2>Apa itu VPS untuk LMS</h2><p>Sebelum LMS kita bisa diakses banyak orang melalui internet, aplikasi itu membutuhkan <strong>rumah online</strong>. Rumah online itulah yang dalam course ini kita sebut sebagai <strong>VPS</strong> atau <strong>Virtual Private Server</strong>.</p><p>Kalau saat ini LMS kita berjalan di <code>localhost</code>, artinya aplikasi hanya hidup di komputer kita sendiri. Orang lain tidak bisa membukanya dari internet. Begitu kita ingin LMS menjadi <em>live</em>, bisa diakses lewat domain, aktif 24 jam, dan stabil sebagai environment production, kita perlu memindahkan aplikasi itu ke server.</p><h3>Definisi sederhana</h3><p>VPS adalah komputer virtual yang berjalan di data center dan bisa kita sewa. Walaupun bentuknya virtual, fungsinya mirip seperti komputer Linux sungguhan: kita bisa login, install software, membuat folder project, menjalankan aplikasi, membuka port tertentu, dan menghubungkannya ke domain.</p><p>Di course ini, VPS yang kita pakai menggunakan <strong>Ubuntu 22.04</strong>, lalu dari Windows kita mengaksesnya memakai <strong>PuTTY</strong> melalui koneksi SSH.</p><h3>Kenapa LMS butuh VPS?</h3><ul><li><strong>Agar online 24 jam</strong> — LMS tidak lagi bergantung pada laptop atau PC lokal kita.</li><li><strong>Agar bisa diakses publik</strong> — learner bisa membuka LMS dari browser lewat IP atau domain.</li><li><strong>Agar siap production</strong> — kita bisa menambahkan Nginx, SSL, PM2, firewall, dan optimasi server.</li><li><strong>Agar lebih terstruktur</strong> — pemisahan jelas antara environment development di localhost dan environment live di server.</li></ul><h3>Bedanya localhost dan VPS</h3><table><thead><tr><th>Localhost</th><th>VPS</th></tr></thead><tbody><tr><td>Hanya berjalan di komputer kita</td><td>Berjalan di server online</td></tr><tr><td>Tidak cocok untuk akses publik</td><td>Bisa diakses lewat internet</td></tr><tr><td>Cocok untuk development</td><td>Cocok untuk staging / production</td></tr><tr><td>Tergantung laptop menyala</td><td>Bisa aktif 24 jam</td></tr></tbody></table><h3>Analogi yang paling mudah</h3><p>Bayangkan LMS kita seperti toko.</p><ul><li><strong>Localhost</strong> = toko masih di dalam rumah sendiri. Kita bisa lihat, kita bisa coba, tetapi orang lain tidak bisa datang bebas.</li><li><strong>VPS</strong> = kita pindahkan toko ke ruko yang memang menghadap jalan umum. Orang bisa datang, alamatnya jelas, dan toko bisa buka terus.</li></ul><h3>Apa saja yang nanti berjalan di VPS ini?</h3><p>VPS bukan hanya tempat menyimpan file. VPS akan menjadi tempat untuk menjalankan seluruh stack deployment kita, misalnya:</p><ul><li><strong>Node.js</strong> untuk menjalankan aplikasi LMS berbasis Next.js.</li><li><strong>Nginx</strong> sebagai web server dan reverse proxy.</li><li><strong>SSL</strong> agar domain LMS aman dengan HTTPS.</li><li><strong>PM2</strong> agar aplikasi tetap hidup walau terminal ditutup atau server reboot.</li><li><strong>Firewall dan hardening</strong> agar server lebih aman saat dibuka ke internet.</li></ul><h3>Apakah semua website harus pakai VPS?</h3><p>Tidak selalu. Tetapi untuk course ini, memakai VPS sangat tepat karena kita ingin belajar workflow production yang nyata: login ke server, setup Ubuntu, deploy app, hubungkan domain, pasang SSL, dan memelihara aplikasi live. Jadi bukan sekadar teori hosting, tetapi benar-benar membangun pengalaman deploy yang real.</p><h3>Apa yang akan kita lakukan setelah memahami VPS?</h3><p>Setelah lesson ini, kita akan masuk ke langkah yang lebih praktis:</p><ol><li>Memahami kenapa kita memilih Ubuntu 22.04.</li><li>Login ke VPS memakai PuTTY.</li><li>Melakukan login pertama sebagai root.</li><li>Update package Ubuntu.</li><li>Membuat user deploy non-root.</li><li>Menyiapkan folder project LMS di server.</li></ol><h3>Mindset penting sebelum lanjut</h3><p>Mulai dari titik ini, kita perlu membedakan dua dunia kerja:</p><ul><li><strong>Local development</strong> — tempat kita coding, testing, dan memperbaiki bug di komputer sendiri.</li><li><strong>Live server / VPS</strong> — tempat aplikasi yang sudah siap dijalankan untuk diakses publik.</li></ul><p>Jadi singkatnya: <strong>VPS adalah rumah online untuk LMS kita</strong>. Tanpa VPS atau server sejenis, LMS tetap hanya menjadi project lokal. Dengan VPS, LMS mulai berubah menjadi aplikasi sungguhan yang siap dibuka lewat internet.</p><h3>Kesimpulan lesson ini</h3><p>Kalau localhost adalah tempat kita <em>membangun</em> LMS, maka VPS adalah tempat kita <em>menjalankan</em> LMS secara live.</p><p>Di lesson berikutnya, kita akan mulai dari fondasi paling aman dan stabil: <strong>mengapa kita memilih Ubuntu 22.04</strong> sebagai sistem operasi server.</p>",  
          },
        ],
      },
      {
        id: "l2l-2",
        title: "Memilih Ubuntu 22.04",
        duration: "11 min",
        summary:
          "Memahami alasan memilih Ubuntu 22.04 LTS sebagai fondasi VPS yang stabil, aman, dan nyaman untuk deployment LMS berbasis Node.js, Nginx, SSL, dan PM2.",        
        order: 2,
        materials: [
          {
            id: "l2l-2-html",
            title: "Alasan Memilih Ubuntu 22.04",
            type: "html",
            description: "Catatan singkat tentang alasan memilih Ubuntu 22.04.",
            htmlContent:
              "<h2>Memilih Ubuntu 22.04</h2><p>Setelah kita memahami apa itu VPS, pertanyaan berikutnya adalah: <strong>sistem operasi apa yang paling aman dan nyaman untuk mulai belajar deployment LMS?</strong></p><p>Di course ini, kita memilih <strong>Ubuntu 22.04 LTS</strong>. Bukan karena Ubuntu adalah satu-satunya pilihan, tetapi karena Ubuntu 22.04 memberi kombinasi yang sangat baik antara <strong>stabilitas, dokumentasi, kemudahan belajar, dan kesiapan production</strong>.</p><h3>Apa arti Ubuntu 22.04 LTS?</h3><p><strong>Ubuntu</strong> adalah distribusi Linux yang sangat populer untuk server. Angka <strong>22.04</strong> menunjukkan versi rilisnya. Sedangkan <strong>LTS</strong> berarti <em>Long Term Support</em>, yaitu versi yang didukung dalam jangka panjang dan cocok untuk server yang ingin kita pakai dengan tenang tanpa terlalu sering pindah versi.</p><p>Untuk learner yang baru mulai belajar VPS, memilih versi LTS adalah langkah yang bijak karena fokus kita bukan mengejar versi paling baru, tetapi membangun server yang <strong>stabil, konsisten, dan mudah dirawat</strong>.</p><h3>Kenapa bukan OS lain dulu?</h3><p>Sebenarnya ada banyak pilihan lain seperti Debian, Rocky Linux, AlmaLinux, atau bahkan distro yang lebih minimal. Tetapi untuk kebutuhan course ini, Ubuntu 22.04 lebih cocok karena:</p><ul><li><strong>Lebih ramah pemula</strong> — banyak tutorial, dokumentasi, dan contoh command yang mudah ditemukan.</li><li><strong>Ekosistem luas</strong> — sangat umum dipakai untuk Node.js, Nginx, SSL, Git, PM2, dan berbagai workflow deployment web app.</li><li><strong>Komunitas besar</strong> — kalau nanti kita menemui error, kemungkinan besar solusi atau pembahasannya sudah banyak tersedia.</li><li><strong>Cocok untuk production</strong> — bukan hanya bagus untuk belajar, tetapi juga sangat layak dipakai untuk website live sungguhan.</li></ul><h3>Kenapa Ubuntu 22.04 cocok untuk LMS kita?</h3><p>LMS frontend yang sedang kita bangun berjalan dengan stack yang sangat cocok di Ubuntu 22.04. Nanti di VPS ini kita akan memasang beberapa komponen penting:</p><ul><li><strong>Node.js</strong> untuk menjalankan aplikasi Next.js.</li><li><strong>Nginx</strong> sebagai reverse proxy dan web server.</li><li><strong>Certbot + SSL</strong> untuk mengaktifkan HTTPS.</li><li><strong>PM2</strong> untuk menjaga aplikasi tetap berjalan di background.</li><li><strong>UFW dan Fail2Ban</strong> untuk lapisan keamanan dasar.</li></ul><p>Ubuntu 22.04 sangat nyaman untuk semua kebutuhan tersebut karena package management-nya jelas, workflow install-nya rapi, dan command-command Linux server dasarnya sangat umum dipakai.</p><h3>Keuntungan belajar di Ubuntu 22.04</h3><ol><li><strong>Perintah Linux yang kita pelajari relevan</strong><br/>Apa yang kita pelajari di sini akan berguna lagi saat nanti menangani VPS lain, server staging, atau project production lain.</li><li><strong>Lebih mudah mengikuti course langkah demi langkah</strong><br/>Karena kita menyamakan OS, maka instruksi instalasi, lokasi file konfigurasi, dan pola troubleshooting menjadi lebih konsisten.</li><li><strong>Minim kejutan untuk pemula</strong><br/>Semakin banyak perbedaan OS, semakin besar peluang bingung di tengah jalan. Dengan Ubuntu 22.04, kita menurunkan kompleksitas awal.</li><li><strong>Lebih mudah saat terjadi error nyata</strong><br/>Karena course ini adalah living course, saat muncul error nyata di VPS, materi bisa kita update dengan lebih konsisten jika fondasi OS-nya sama.</li></ol><h3>Stabilitas lebih penting daripada sekadar terbaru</h3><p>Dalam dunia server, versi paling baru belum tentu pilihan terbaik untuk belajar deployment dasar. Untuk LMS yang ingin kita jalankan live, yang lebih penting adalah:</p><ul><li>mudah di-maintain,</li><li>kompatibel dengan dependency umum,</li><li>tidak sering berubah drastis,</li><li>dan punya dokumentasi yang matang.</li></ul><p>Itulah sebabnya Ubuntu 22.04 LTS terasa sangat pas: cukup modern, tetapi tetap stabil.</p><h3>Analogi sederhananya</h3><p>Kalau VPS adalah rumah online untuk LMS kita, maka <strong>Ubuntu 22.04 adalah pondasi dan tata ruang rumah itu</strong>. Kita ingin pondasi yang kuat, layout yang mudah dipahami, dan lingkungan yang tidak bikin kita repot setiap saat. Jadi sebelum kita isi rumah itu dengan Node.js, Nginx, SSL, dan PM2, kita pastikan dulu pondasinya memang nyaman dipakai.</p><h3>Apa yang akan kita rasakan nanti saat memakai Ubuntu 22.04?</h3><p>Saat kita mulai login ke server dan menjalankan command satu per satu, kita akan melihat bahwa banyak langkah deployment di Ubuntu cukup natural, misalnya:</p><pre><code>sudo apt update\nsudo apt upgrade -y\nsudo apt install nginx -y</code></pre><p>Model kerja seperti ini sangat cocok untuk belajar VPS karena kita jadi memahami server secara bertahap, bukan hanya klik-klik tanpa tahu apa yang sebenarnya terjadi.</p><h3>Kesesuaian dengan course ini</h3><p>Course <strong>From Localhost to Live LMS</strong> dirancang agar mengikuti pengalaman nyata deployment di VPS Ubuntu 22.04 dari Windows menggunakan PuTTY. Jadi pemilihan Ubuntu 22.04 bukan hanya teori, tetapi memang selaras dengan alur berikutnya:</p><ol><li>Login ke VPS</li><li>Update package</li><li>Membuat user deploy</li><li>Install Node.js dan Nginx</li><li>Menjalankan LMS</li><li>Menghubungkan domain dan SSL</li><li>Menjaga aplikasi tetap hidup dengan PM2</li></ol><h3>Kesimpulan lesson ini</h3><p><strong>Ubuntu 22.04 dipilih karena stabil, populer, mudah dipelajari, dan sangat cocok untuk deployment LMS berbasis Node.js.</strong></p><p>Dengan kata lain, Ubuntu 22.04 memberi kita fondasi server yang cukup profesional untuk production, tetapi tetap nyaman untuk learner yang baru mulai mengenal VPS.</p><p>Di lesson berikutnya, kita akan masuk ke hal yang lebih praktis: <strong>bagaimana mengakses server Ubuntu VPS dari Windows menggunakan PuTTY</strong>.</p>",    
          },
        ],
      },
      {
        id: "l2l-3",
        title: "Akses server menggunakan PuTTY",
        duration: "18 min",
        summary:
          "Memahami cara mengakses VPS Ubuntu dari Windows menggunakan PuTTY melalui SSH, termasuk persiapan data login, pengisian setting PuTTY, langkah login pertama, dan cara menyimpan session agar tidak perlu mengetik IP berulang kali.",                
        order: 3,
        materials: [
          {
            id: "l2l-3-html",
            title: "Workflow PuTTY ke VPS",
            type: "html",
            description: "Panduan konsep koneksi awal menggunakan PuTTY.",
            htmlContent:
              "<h2>Akses server dengan PuTTY</h2><p>Dari Windows, kita bisa memakai PuTTY untuk login ke VPS melalui SSH. Pastikan kita memiliki IP VPS, username, password atau private key, serta port SSH yang benar.</p><h3>Apa yang harus diisi di PuTTY Configuration?</h3><p>Sebelum klik tombol <strong>Open</strong>, perhatikan beberapa field penting di layar konfigurasi PuTTY berikut:</p><ul><li><strong>Host Name (or IP address)</strong> → isi dengan IP public VPS Anda.</li><li><strong>Port</strong> → biasanya <code>22</code> jika masih memakai port SSH default.</li><li><strong>Connection type</strong> → pilih <strong>SSH</strong>.</li></ul><div class=\"tutorial-image\"><img src=\"/images/putty-configuration-login.png\" alt=\"Screen capture PuTTY Configuration untuk login ke VPS\" class=\"lesson-inline-image\" /><p class=\"image-caption\">Contoh tampilan awal PuTTY Configuration. Masukkan IP VPS pada Host Name, pastikan Port benar, lalu pilih SSH sebelum klik Open.</p></div><h3>Urutan login singkat</h3><ol><li>Buka aplikasi PuTTY.</li><li>Masukkan IP VPS pada field <strong>Host Name (or IP address)</strong>.</li><li>Pastikan <strong>Port</strong> sesuai, biasanya <code>22</code>.</li><li>Pilih <strong>SSH</strong> pada Connection type.</li><li>Klik <strong>Open</strong>.</li><li>Masukkan username server, biasanya <code>root</code> untuk login pertama.</li><li>Masukkan password server saat diminta.</li></ol><p>Jika semua benar, Anda akan masuk ke terminal Ubuntu VPS dan siap menjalankan command Linux dari Windows.</p><h3>Menyimpan session di PuTTY agar tidak ketik IP berulang kali</h3><p>Selain dipakai untuk login manual, PuTTY juga punya fitur built-in yang sangat membantu, yaitu <strong>Saved Sessions</strong>. Fitur ini memungkinkan kita menyimpan konfigurasi koneksi server, sehingga pada login berikutnya kita tidak perlu mengetik ulang IP, port, atau setting lain dari awal.</p><p>Untuk workflow LMS seperti course ini, fitur Saved Sessions sangat berguna karena kita akan berkali-kali masuk ke VPS yang sama.</p><h3>Tutorial step-by-step menyimpan host di PuTTY</h3><ol><li><strong>Buka PuTTY</strong><br/>Jalankan aplikasi PuTTY seperti biasa sampai muncul layar <em>PuTTY Configuration</em>.</li><li><strong>Isi Host Name / IP Address</strong><br/>Pada bagian <strong>Host Name (or IP address)</strong>, isi dengan IP VPS Anda, misalnya <code>103.xxx.xxx.xxx</code>.</li><li><strong>Pastikan port benar</strong><br/>Biarkan port default <code>22</code> jika masih memakai SSH standar.</li><li><strong>Beri nama session</strong><br/>Pada bagian <strong>Saved Sessions</strong>, isi nama bebas yang mudah diingat, misalnya <code>VPS-LMS</code>, <code>Server-Odoo</code>, atau <code>Production-Server</code>.</li><li><strong>Klik tombol Save</strong><br/>Setelah nama session diisi, klik <strong>Save</strong>. Jika berhasil, nama session akan muncul di daftar bawahnya.</li></ol><h3>Cara menggunakan kembali session yang sudah disimpan</h3><p>Saat nanti Anda ingin login lagi ke server yang sama, langkahnya jauh lebih cepat:</p><ol><li>Buka PuTTY.</li><li>Klik nama session yang sudah tersimpan, misalnya <code>VPS-LMS</code>.</li><li>Klik tombol <strong>Load</strong>.</li><li>Klik tombol <strong>Open</strong>.</li></ol><p>Dengan cara ini, Anda tidak perlu mengetik IP VPS lagi setiap kali ingin masuk ke server.</p><h3>Tips pro: simpan username juga</h3><p>Kalau ingin lebih nyaman, Anda bisa menyimpan username default di session yang sama.</p><ol><li>Buka menu <strong>Connection &gt; Data</strong>.</li><li>Isi field <strong>Auto-login username</strong> dengan username server, misalnya <code>root</code> atau <code>deploy</code>.</li><li>Kembali ke menu <strong>Session</strong>.</li><li>Pilih nama session Anda.</li><li>Klik <strong>Save</strong> lagi.</li></ol><p>Setelah itu, PuTTY akan otomatis menyiapkan username saat session dibuka.</p><h3>Tips pro: simpan private key jika memakai SSH key</h3><p>Kalau server Anda memakai SSH key, session PuTTY juga bisa menyimpan referensi file private key.</p><ol><li>Buka menu <strong>Connection &gt; SSH &gt; Auth</strong>.</li><li>Load file private key <code>.ppk</code>.</li><li>Kembali ke menu <strong>Session</strong>.</li><li>Pilih nama session Anda.</li><li>Klik <strong>Save</strong> lagi.</li></ol><p>Dengan begitu, session PuTTY Anda menjadi lebih lengkap dan siap dipakai ulang.</p><h3>Kalau ingin mengubah atau update session</h3><p>Kalau suatu saat Anda ingin mengubah nama host, port, username, atau key, Anda tidak perlu membuat session baru dari nol. Cukup:</p><ol><li>Pilih session yang sudah ada</li><li>Klik <strong>Load</strong></li><li>Lakukan perubahan yang diperlukan</li><li>Klik <strong>Save</strong> lagi</li></ol><p>Ini akan menimpa session lama dengan konfigurasi terbaru.</p><h3>Insight penting tentang Saved Sessions</h3><p>Saved Sessions di PuTTY sangat membantu karena:</p><ul><li>lebih cepat untuk workflow harian,</li><li>mengurangi risiko salah ketik IP atau port,</li><li>tetap tersimpan walaupun Windows direstart,</li><li>dan sangat cocok untuk server yang sering diakses seperti VPS LMS.</li></ul><p>Secara umum, konfigurasi ini tersimpan di Windows. Jadi session tetap ada setelah restart, tetapi tidak otomatis ikut pindah ke PC lain.</p><h3>Contoh nama session yang rapi</h3><ul><li><code>VPS-LMS</code></li><li><code>LMS-Production</code></li><li><code>Ubuntu-LMS-Deploy</code></li></ul><p>Pakai nama yang jelas agar nanti Anda tidak bingung saat punya lebih dari satu server.</p><h3>Rekomendasi untuk course ini</h3><p>Untuk project <strong>From Localhost to Live LMS</strong>, sangat disarankan Anda langsung menyimpan session PuTTY dengan nama seperti <code>VPS-LMS</code>. Session ini nanti akan terus dipakai saat update package, membuat user deploy, install Nginx, setup SSL, sampai menjalankan PM2.</p><h3>Kesimpulan lesson ini</h3><p>PuTTY bukan hanya dipakai untuk login sekali lalu selesai. Dengan fitur <strong>Saved Sessions</strong>, workflow akses VPS menjadi jauh lebih rapi, cepat, dan nyaman. Jadi setelah berhasil login pertama, biasakan langsung simpan session agar pekerjaan deploy LMS terasa lebih smooth.</p>",              
          },
        ],
      },
      {
        id: "l2l-4",
        title: "Login pertama sebagai root",
        duration: "12 min",
        summary:
          "Memahami login pertama sebagai root, hal-hal yang wajib dicek setelah masuk ke server, serta pentingnya menyimpan password root dengan aman agar tidak kehilangan akses ke VPS.",      
        order: 4,
        materials: [
          {
            id: "l2l-4-html",
            title: "Login Awal Server",
            type: "html",
            description: "Checklist setelah login pertama sebagai root.",
            htmlContent:
              "<h2>Login pertama sebagai root</h2><p>Setelah berhasil masuk ke VPS melalui PuTTY, biasanya kita akan login pertama kali menggunakan user <code>root</code>. Ini adalah user dengan hak akses tertinggi di server. Artinya, root bisa melakukan hampir semua hal: install software, mengubah konfigurasi sistem, membuat user baru, menghapus file penting, bahkan membuat server tidak bisa dipakai kalau salah langkah.</p><p>Karena itu, login pertama sebagai root adalah momen yang sangat penting. Di tahap ini, kita belum hanya belajar masuk ke server, tetapi juga mulai memahami bahwa akses root adalah akses yang <strong>sangat powerful</strong> dan harus dijaga dengan serius.</p><h3>Apa itu user root?</h3><p><strong>Root</strong> adalah administrator utama di Linux. Kalau diibaratkan, root adalah pemegang kunci master seluruh bangunan server. Tidak ada area yang tertutup bagi root.</p><p>Itulah sebabnya login root biasanya dipakai hanya untuk setup awal, lalu setelah itu kita akan membuat user deploy non-root agar operasional harian lebih aman.</p><h3>Tampilan setelah login root berhasil</h3><p>Kalau login berhasil, biasanya terminal akan menampilkan prompt seperti ini:</p><pre><code>root@your-server:~#</code></pre><p>Tanda <code>#</code> di akhir prompt biasanya menunjukkan bahwa kita sedang berada di user root.</p><h3>Checklist yang perlu dicek setelah login pertama</h3><p>Begitu berhasil masuk, jangan langsung install macam-macam. Lakukan pengecekan dasar terlebih dahulu agar kita tahu kondisi awal server.</p><ol><li><strong>Cek user aktif</strong><pre><code>whoami</code></pre><p>Hasilnya seharusnya <code>root</code>.</p></li><li><strong>Cek hostname server</strong><pre><code>hostname</code></pre><p>Ini membantu kita mengenali identitas server.</p></li><li><strong>Cek versi Ubuntu</strong><pre><code>lsb_release -a</code></pre><p>Pastikan benar menggunakan Ubuntu 22.04 sesuai course ini.</p></li><li><strong>Cek IP server</strong><pre><code>ip a</code></pre><p>Gunakan ini untuk melihat interface jaringan dan memastikan server punya IP yang sesuai.</p></li><li><strong>Cek waktu server</strong><pre><code>date</code></pre><p>Jam server yang salah bisa berpengaruh ke log, SSL, dan troubleshooting nanti.</p></li><li><strong>Test update package list</strong><pre><code>apt update</code></pre><p>Kalau command ini berjalan normal, berarti server bisa terkoneksi ke repository package Ubuntu.</p></li></ol><h3>Hal paling penting: jangan sampai lupa password root</h3><p>Pada login pertama ini, ada satu hal yang harus benar-benar diberi perhatian: <strong>jangan sampai lupa password root</strong>.</p><p>Password root adalah salah satu akses paling penting ke server. Kalau Anda lupa password ini, maka situasinya bisa sangat merepotkan, apalagi kalau:</p><ul><li>Anda belum membuat user deploy non-root,</li><li>Anda belum memasang SSH key cadangan,</li><li>Anda belum punya akses console recovery dari provider VPS,</li><li>dan server sudah telanjur dipakai untuk deployment.</li></ul><div class=\"lesson-current-state-note\"><strong>Warning penting:</strong> segera simpan password root di tempat yang aman begitu Anda berhasil login pertama kali. Jangan mengandalkan ingatan saja.</div><h3>Di mana sebaiknya menyimpan password root?</h3><p>Gunakan tempat penyimpanan yang aman dan terorganisir, misalnya:</p><ul><li>password manager terpercaya,</li><li>catatan terenkripsi,</li><li>atau dokumen internal yang benar-benar aman dan hanya bisa diakses pihak yang berwenang.</li></ul><p>Jangan menyimpan password root sembarangan di chat, sticky note, atau file teks terbuka di desktop.</p><h3>Risiko jika lupa password root</h3><p>Kalau password root hilang, beberapa risiko yang bisa terjadi adalah:</p><ol><li><strong>Tidak bisa login ke server</strong><br/>Anda bisa terkunci dari VPS, terutama jika root adalah satu-satunya akun yang masih aktif dan belum ada user lain yang punya hak sudo.</li><li><strong>Proses setup tertunda</strong><br/>Deployment LMS tidak bisa dilanjutkan karena Anda tidak punya akses administratif ke server.</li><li><strong>Harus melakukan reset password</strong><br/>Ini bisa butuh prosedur tambahan melalui panel provider VPS, recovery mode, rescue mode, atau console khusus.</li><li><strong>Berisiko salah recovery</strong><br/>Kalau belum terbiasa, proses reset password root bisa membingungkan dan berisiko menambah masalah baru.</li><li><strong>Dalam kasus tertentu bisa berujung reinstall server</strong><br/>Kalau akses benar-benar hilang dan tidak ada jalur recovery yang praktis, kadang solusi paling cepat justru membangun ulang VPS dari awal.</li></ol><h3>Mindset yang benar tentang root</h3><p>Root itu penting, tetapi root bukan user yang ideal untuk dipakai kerja harian. Karena itulah setelah login pertama ini, langkah berikutnya dalam course adalah membuat user deploy non-root. Root dipakai secukupnya untuk setup awal dan keadaan darurat.</p><h3>Apa yang sebaiknya dilakukan segera setelah login root?</h3><ul><li>Pastikan password root tersimpan aman.</li><li>Lakukan pengecekan dasar server.</li><li>Jalankan update package.</li><li>Siapkan pembuatan user deploy non-root.</li></ul><p>Dengan urutan ini, kita membangun server dengan lebih rapi dan mengurangi risiko salah langkah di awal.</p><h3>Kesimpulan lesson ini</h3><p><strong>Login pertama sebagai root adalah pintu masuk administratif ke VPS.</strong> Gunakan momen ini untuk memastikan server sehat, identitas server jelas, koneksi package normal, dan yang paling penting: <strong>password root tersimpan aman dan tidak akan hilang</strong>.</p><p>Di lesson berikutnya, kita akan lanjut ke langkah praktis berikutnya yaitu <strong>update package Ubuntu</strong> sebelum instalasi software lain dimulai.</p>",       
          },
        ],
      },
      {
        id: "l2l-4b",
        title: "Mengganti Hostname Server (Best Practice)",
        duration: "14 min",
        summary:
          "Memahami kenapa hostname server perlu diganti, bagaimana menggantinya dengan hostnamectl, menyesuaikan /etc/hosts, melakukan verifikasi, lalu melihat dampaknya pada tampilan terminal agar lebih rapi dan profesional.",
        order: 5,
        materials: [
          {
            id: "l2l-4b-html",
            title: "Ganti Hostname Server",
            type: "html",
            description: "Panduan mengganti hostname Ubuntu server dengan aman.",
            htmlContent:
              `<h2>Mengganti Hostname Server (Best Practice)</h2>
<p>Setelah berhasil login pertama sebagai <code>root</code>, ada satu hal kecil tetapi penting yang sebaiknya kita rapikan sejak awal: <strong>hostname server</strong>.</p>
<p>Pada banyak VPS baru, hostname bawaan sering masih mengikuti nama default dari provider atau image sistem, misalnya:</p>
<pre><code>ip-172-31-xxx-xxx</code></pre>
<p>Secara teknis ini tidak selalu salah, tetapi untuk workflow deployment LMS, nama seperti itu terasa kurang nyaman dibaca, kurang profesional, dan bisa membingungkan saat nanti kita mengelola lebih dari satu server.</p>

<h3>Apa itu hostname?</h3>
<p><strong>Hostname</strong> adalah nama identitas server di dalam sistem Linux. Nama ini sering muncul di terminal prompt, log, dan beberapa konfigurasi sistem. Dengan hostname yang jelas, kita lebih mudah mengenali server yang sedang dipakai.</p>

<h3>Tujuan mengganti hostname</h3>
<p>Mengganti hostname bukan sekadar kosmetik. Tujuannya cukup penting untuk workflow server yang rapi.</p>
<ul>
  <li><strong>Membuat identitas server lebih jelas</strong> — tidak lagi memakai nama default provider.</li>
  <li><strong>Membuat terminal lebih clean</strong> — prompt menjadi lebih mudah dibaca.</li>
  <li><strong>Membedakan environment</strong> — misalnya <code>lms-dev</code>, <code>lms-staging</code>, dan <code>lms-prod</code>.</li>
  <li><strong>Mengurangi kebingungan saat mengelola banyak server</strong> — terutama kalau nanti ada beberapa VPS.</li>
  <li><strong>Membentuk production mindset</strong> — server tidak hanya hidup, tetapi juga dikelola dengan identitas yang rapi.</li>
</ul>

<h3>Contoh sebelum dan sesudah</h3>
<p>Sebelum diganti, prompt terminal bisa terlihat seperti ini:</p>
<pre><code>deploy@ip-172-31-xxx-xxx:~$</code></pre>
<p>Setelah diganti, tampilannya bisa menjadi seperti ini:</p>
<pre><code>deploy@lms-prod:~$</code></pre>
<p>Tampilan ini jauh lebih bersih dan lebih mudah dikenali.</p>

<h3>Best practice penamaan hostname</h3>
<p>Pilih nama yang <strong>singkat, jelas, dan relevan</strong> dengan fungsi server.</p>
<p>Contoh yang rapi:</p>
<ul>
  <li><code>lms-dev</code></li>
  <li><code>lms-staging</code></li>
  <li><code>lms-prod</code></li>
  <li><code>odoo-prod</code></li>
  <li><code>campusone-app</code></li>
</ul>
<p>Usahakan hostname:</p>
<ul>
  <li>menggunakan huruf kecil,</li>
  <li>menggunakan tanda minus <code>-</code> jika perlu,</li>
  <li>tidak memakai spasi,</li>
  <li>dan tetap mudah dibaca.</li>
</ul>

<h3>Langkah 1: lihat hostname yang aktif saat ini</h3>
<p>Sebelum mengganti, lihat dulu hostname server saat ini:</p>
<pre><code>hostname</code></pre>
<p>Command ini menampilkan hostname aktif secara singkat.</p>

<p>Kalau ingin melihat informasi yang lebih lengkap, gunakan:</p>
<pre><code>hostnamectl</code></pre>
<p>Command ini biasanya menampilkan beberapa informasi penting, misalnya:</p>
<pre><code> Static hostname: ip-172-31-xxx-xxx
       Icon name: computer-vm
         Chassis: vm
      Machine ID: xxxxx
         Boot ID: xxxxx
  Virtualization: kvm
Operating System: Ubuntu 22.04 LTS
          Kernel: Linux 5.x.x
    Architecture: x86-64</code></pre>

<h3>Apa yang perlu diperhatikan dari output <code>hostnamectl</code>?</h3>
<p>Fokus utama kita ada pada bagian:</p>
<ul>
  <li><strong>Static hostname</strong> — ini adalah hostname utama yang disimpan permanen oleh sistem.</li>
  <li><strong>Operating System</strong> — membantu memastikan kita memang sedang bekerja di server Ubuntu yang benar.</li>
  <li><strong>Kernel</strong> dan <strong>Architecture</strong> — bukan inti lesson ini, tetapi bagus untuk dikenali sejak awal.</li>
</ul>
<p>Untuk kebutuhan course ini, indikator terpenting adalah <strong>Static hostname</strong>.</p>

<h3>Apakah ada status hostname?</h3>
<p>Dalam praktik dasar Ubuntu, yang paling sering kita lihat dari <code>hostnamectl</code> adalah <strong>Static hostname</strong>. Pada sebagian konfigurasi Linux, kita juga bisa mengenal istilah berikut:</p>
<ul>
  <li><strong>Static hostname</strong> — hostname permanen yang disimpan oleh sistem.</li>
  <li><strong>Transient hostname</strong> — hostname sementara yang bisa datang dari network atau DHCP.</li>
  <li><strong>Pretty hostname</strong> — nama yang lebih human-friendly untuk tampilan tertentu.</li>
</ul>
<p>Namun untuk server Ubuntu yang kita kelola di course ini, fokus utamanya tetap pada <strong>Static hostname</strong>, karena itulah identitas inti server yang kita ubah.</p>

<h3>Langkah 2: ganti hostname dengan <code>hostnamectl</code></h3>
<p>Di Ubuntu 22.04, cara yang paling rapi untuk mengganti hostname adalah memakai:</p>
<pre><code>sudo hostnamectl set-hostname lms-prod</code></pre>
<p>Pada contoh ini, kita mengganti hostname menjadi <code>lms-prod</code>. Silakan sesuaikan dengan kebutuhan server Anda.</p>
<p>Kalau saat ini Anda masih login sebagai <code>root</code>, command di atas tetap aman dipakai. Kalau nanti Anda sudah memakai user lain yang punya sudo, polanya juga tetap sama.</p>

<h3>Langkah 3: lihat apa yang sudah berubah</h3>
<p>Setelah menjalankan command di atas, cek kembali:</p>
<pre><code>hostnamectl</code></pre>
<p>Kalau berhasil, bagian berikut seharusnya berubah:</p>
<pre><code>Static hostname: lms-prod</code></pre>
<p>Anda juga bisa melakukan cek cepat:</p>
<pre><code>hostname</code></pre>
<p>Kalau output command ini sudah menunjukkan <code>lms-prod</code>, berarti hostname aktif sudah berubah.</p>

<h3>Langkah 4: cek file yang ikut terkait</h3>
<p>Kalau ingin melihat apa yang tersimpan di file hostname sistem, jalankan:</p>
<pre><code>cat /etc/hostname</code></pre>
<p>Output yang diharapkan:</p>
<pre><code>lms-prod</code></pre>
<p>Ini membantu kita melihat bahwa nama hostname baru memang sudah tercatat di sistem.</p>

<h3>Langkah 5: sesuaikan file <code>/etc/hosts</code></h3>
<p>Setelah hostname diganti, best practice berikutnya adalah memastikan file <code>/etc/hosts</code> ikut diperbarui agar mapping nama lokal server tetap konsisten.</p>
<p>Buka file-nya dengan editor terminal:</p>
<pre><code>sudo nano /etc/hosts</code></pre>
<p>Cari baris yang biasanya mirip seperti ini:</p>
<pre><code>127.0.1.1   old-hostname</code></pre>
<p>Lalu ubah menjadi:</p>
<pre><code>127.0.1.1   lms-prod</code></pre>
<p>Simpan perubahan tersebut.</p>
<p>Kalau Anda memakai <code>nano</code>, biasanya urutannya:</p>
<ol>
  <li>Tekan <code>Ctrl + O</code> untuk save</li>
  <li>Tekan <code>Enter</code> untuk konfirmasi</li>
  <li>Tekan <code>Ctrl + X</code> untuk keluar</li>
 </ol>

<h3>Kenapa <code>/etc/hosts</code> ikut diedit?</h3>
<p>Karena file ini membantu sistem mengenali nama lokal server sendiri. Kalau hostname berubah tetapi file <code>/etc/hosts</code> tidak ikut disesuaikan, kadang bisa muncul perilaku yang membingungkan pada sebagian tool, prompt, atau resolusi nama lokal.</p>
<p>Jadi meskipun mengganti hostname lewat <code>hostnamectl</code> sudah langkah utama, mengupdate <code>/etc/hosts</code> adalah langkah pelengkap yang sangat disarankan.</p>

<h3>Langkah 6: lihat apa yang sudah diganti di <code>/etc/hosts</code></h3>
<p>Untuk memastikan file hosts sudah sesuai, Anda bisa cek dengan:</p>
<pre><code>cat /etc/hosts</code></pre>
<p>Pastikan baris hostname lokal sudah menunjukkan nama baru, misalnya:</p>
<pre><code>127.0.1.1   lms-prod</code></pre>

<h3>Langkah 7: logout lalu login ulang</h3>
<p>Supaya perubahan lebih terasa di tampilan terminal, keluar dulu dari sesi saat ini:</p>
<pre><code>exit</code></pre>
<p>Lalu login kembali ke server melalui PuTTY.</p>
<p>Kalau semua berhasil, prompt terminal biasanya akan berubah menjadi lebih rapi, misalnya:</p>
<pre><code>deploy@lms-prod:~$</code></pre>

<h3>Kenapa perlu login ulang?</h3>
<p>Walaupun hostname biasanya sudah berubah segera setelah command dijalankan, session terminal yang sedang aktif belum tentu langsung memperlihatkan tampilan prompt yang baru. Karena itu, <strong>logout lalu login ulang</strong> adalah cara paling mudah untuk memastikan perubahan terlihat jelas.</p>

<div class="lesson-current-state-note"><strong>Rekomendasi course:</strong> lakukan rename hostname segera setelah login awal sebagai root, sebelum lanjut ke langkah setup lain. Ini membuat identitas server sudah rapi sejak awal.</div>

<h3>Apakah mengganti hostname wajib?</h3>
<p>Jawaban jujurnya: <strong>tidak selalu wajib untuk membuat server bisa berjalan</strong>.</p>
<p>Tanpa mengganti hostname, server tetap bisa dipakai untuk install Node.js, Nginx, PM2, SSL, dan menjalankan LMS. Jadi ini bukan syarat mutlak agar deployment berhasil.</p>
<p>Namun, untuk workflow yang lebih rapi dan mindset production, <strong>mengganti hostname sangat direkomendasikan</strong>.</p>

<h3>Risiko kalau hostname dibiarkan default</h3>
<ul>
  <li><strong>Terminal terasa kurang nyaman dibaca</strong> karena nama server terlalu teknis.</li>
  <li><strong>Lebih mudah bingung</strong> jika nanti Anda mengelola beberapa VPS.</li>
  <li><strong>Kurang profesional</strong> saat dilihat dalam demo, tutorial, screenshot, atau dokumentasi.</li>
  <li><strong>Kurang selaras dengan environment</strong> karena nama server tidak mencerminkan fungsi sebenarnya.</li>
</ul>

<h3>Contoh alur lengkap yang aman</h3>
<pre><code>hostname
hostnamectl
sudo hostnamectl set-hostname lms-prod
hostnamectl
cat /etc/hostname
sudo nano /etc/hosts
cat /etc/hosts
exit</code></pre>

<h3>Kesimpulan lesson ini</h3>
<p><strong>Mengganti hostname bukan langkah yang membuat server hidup, tetapi langkah yang membuat server terasa lebih rapi, jelas, dan profesional.</strong></p>
<p>Yang perlu kita pahami bukan hanya cara menggantinya, tetapi juga cara <strong>melihat apa yang sudah berubah</strong>: melalui <code>hostname</code>, <code>hostnamectl</code>, <code>/etc/hostname</code>, <code>/etc/hosts</code>, dan tampilan prompt setelah login ulang.</p>
<p>Dengan begitu, kita tidak hanya menjalankan command, tetapi benar-benar mengerti hasil perubahan yang terjadi di server.</p>
<p>Di lesson berikutnya, kita akan lanjut ke kebiasaan penting berikutnya yaitu <strong>update package Ubuntu</strong> sebelum menginstall software lain.</p>`,    
          },
        ],
      },       
      {
        id: "l2l-5",
        title: "Update package Ubuntu",
        duration: "14 min",
        summary:
          "Memahami fungsi apt update dan apt upgrade, kapan perlu dijalankan, seberapa sering dilakukan, dan kebiasaan aman sebelum menginstall software baru di Ubuntu VPS.",        
        order: 5,
        materials: [
          {
            id: "l2l-5-html",
            title: "Update Ubuntu",
            type: "html",
            description: "Langkah update dan upgrade package Ubuntu.",
            htmlContent:
              "<h2>Update package Ubuntu</h2><p>Sebelum kita menginstall software apa pun di VPS Ubuntu, ada satu kebiasaan penting yang harus dibangun dari awal: <strong>cek dan update package list terlebih dahulu</strong>.</p><p>Di Ubuntu, kita biasanya memakai command berikut:</p><pre><code>sudo apt update && sudo apt upgrade -y</code></pre><p>Command ini sangat umum, tetapi pemula sering belum benar-benar paham bedanya <code>apt update</code> dan <code>apt upgrade</code>. Padahal memahami dua command ini penting supaya kita tahu kapan harus menjalankannya dan kapan tidak perlu berlebihan.</p><h3>Apa itu <code>apt update</code>?</h3><p><code>apt update</code> tidak langsung mengupdate software yang terpasang. Command ini berfungsi untuk <strong>mengambil informasi terbaru tentang package</strong> dari repository Ubuntu.</p><p>Sederhananya, <code>apt update</code> adalah proses <em>refresh daftar paket</em>. Jadi server Anda diberi tahu: versi terbaru package apa saja yang tersedia saat ini.</p><h3>Apa itu <code>apt upgrade</code>?</h3><p>Kalau <code>apt update</code> hanya menyegarkan daftar, maka <code>apt upgrade</code> baru benar-benar <strong>menginstall versi terbaru</strong> dari package yang sudah ada di server, selama upgrade itu aman dilakukan tanpa menghapus package lain.</p><p>Jadi urutan logikanya seperti ini:</p><ol><li><code>apt update</code> = ambil info terbaru</li><li><code>apt upgrade</code> = pasang update yang tersedia</li></ol><h3>Kenapa ini penting sebelum install software?</h3><p>Karena saat kita mau install software seperti Nginx, Node.js, Git, UFW, atau Fail2Ban, kita ingin server membaca repository terbaru, bukan data lama yang mungkin sudah kadaluarsa.</p><p>Kalau package list terlalu lama, beberapa hal bisa terjadi:</p><ul><li>server tidak menemukan package tertentu,</li><li>versi package yang diambil bukan yang terbaru dari repository saat itu,</li><li>muncul error dependency atau metadata lama,</li><li>dan proses install jadi membingungkan untuk pemula.</li></ul><h3>Apakah setiap mau install sesuatu harus <code>apt update</code> lagi?</h3><p>Jawaban singkatnya: <strong>tidak harus setiap beberapa menit</strong>, tetapi <strong>cukup sering dan masuk akal</strong>.</p><p>Yang perlu dipahami adalah <code>apt update</code> itu seperti menyegarkan katalog. Kalau baru saja Anda menjalankannya, lalu beberapa menit kemudian mau install package lain, biasanya <strong>tidak perlu update lagi</strong>.</p><p>Contohnya:</p><pre><code>sudo apt update\nsudo apt upgrade -y\nsudo apt install nginx -y\nsudo apt install git -y</code></pre><p>Pada contoh di atas, setelah Anda baru saja menjalankan <code>apt update</code>, lalu langsung install <code>nginx</code> dan <code>git</code> di sesi kerja yang sama, maka <strong>tidak perlu menjalankan apt update berulang-ulang sebelum setiap install</strong>.</p><h3>Kalau sudah update, sudah install sesuatu, lalu mau install yang lain, perlu update lagi?</h3><p>Tergantung <strong>jarak waktunya</strong>.</p><ul><li>Kalau masih dalam sesi setup yang sama, misalnya selang beberapa menit atau beberapa command, <strong>biasanya tidak perlu</strong>.</li><li>Kalau sudah cukup lama, misalnya beberapa jam, besok, atau beberapa hari kemudian, <strong>lebih baik jalankan apt update lagi</strong> sebelum install package berikutnya.</li></ul><p>Jadi bukan aturan kaku “setiap install harus update”, tetapi lebih ke prinsip: <strong>jalankan apt update saat package list kemungkinan sudah tidak fresh lagi</strong>.</p><h3>Apakah cukup 1 kali per hari?</h3><p>Untuk workflow belajar dan setup VPS seperti di course ini, pendekatan <strong>1 kali di awal sesi kerja</strong> itu sudah sangat baik.</p><p>Misalnya hari ini Anda mau setup server selama 1 jam. Maka pola yang aman:</p><ol><li>Login ke VPS</li><li>Jalankan <code>sudo apt update</code></li><li>Kalau ada pembaruan penting, jalankan <code>sudo apt upgrade -y</code></li><li>Lanjut install package-package yang dibutuhkan dalam sesi itu</li></ol><p>Kalau nanti malam Anda login lagi untuk install hal lain, tidak masalah menjalankan <code>apt update</code> lagi. Jadi secara praktis, <strong>1 kali di awal sesi kerja</strong> lebih masuk akal daripada memikirkan angka kaku seperti “harus 1 kali sehari” atau “setiap install wajib update”.</p><h3>Kapan sebaiknya jalankan <code>apt update</code> lagi?</h3><p>Gunakan panduan sederhana ini:</p><table><thead><tr><th>Kondisi</th><th>Perlu <code>apt update</code>?</th></tr></thead><tbody><tr><td>Baru login dan mulai setup server</td><td>Ya</td></tr><tr><td>Baru saja update lalu lanjut install package lain beberapa menit kemudian</td><td>Tidak perlu</td></tr><tr><td>Sudah beberapa jam / beda sesi kerja</td><td>Sebaiknya ya</td></tr><tr><td>Besok atau beberapa hari kemudian mau install package baru</td><td>Ya</td></tr><tr><td>Baru selesai install satu package lalu langsung install package berikutnya</td><td>Tidak perlu</td></tr></tbody></table><h3>Apakah selalu perlu <code>apt upgrade -y</code> juga?</h3><p>Tidak selalu harus setiap saat, tetapi pada <strong>awal setup server baru</strong>, sangat dianjurkan.</p><p>Karena VPS baru sering masih memakai package versi awal image bawaan provider. Dengan melakukan <code>apt upgrade -y</code>, kita membawa server ke kondisi yang lebih rapi dan lebih aman sebelum mulai menginstall komponen penting lain.</p><p>Namun setelah server berjalan stabil di production, upgrade besar perlu dilakukan dengan lebih hati-hati, terutama jika server sudah memegang layanan penting.</p><h3>Pola aman untuk server baru</h3><p>Untuk VPS baru seperti dalam course ini, pola yang aman adalah:</p><pre><code>sudo apt update\nsudo apt upgrade -y</code></pre><p>Setelah itu baru lanjut ke instalasi lain, misalnya:</p><pre><code>sudo apt install nginx -y</code></pre><pre><code>sudo apt install ufw -y</code></pre><pre><code>sudo apt install fail2ban -y</code></pre><p>Tidak perlu menyisipkan <code>apt update</code> sebelum setiap baris install di atas kalau semuanya masih dilakukan dalam sesi yang sama.</p><h3>Tips praktis untuk pemula</h3><ul><li><strong>Jangan spam command update terus-menerus</strong> hanya karena takut salah. Gunakan dengan logika.</li><li><strong>Biasakan update di awal sesi kerja</strong> saat mau setup atau install sesuatu.</li><li><strong>Untuk VPS baru</strong>, jalankan update + upgrade di awal sebelum instal komponen penting.</li><li><strong>Kalau kembali lagi di lain waktu</strong>, refresh lagi dengan <code>apt update</code>.</li></ul><div class=\"lesson-current-state-note\"><strong>Prinsip paling aman:</strong> untuk learner dan setup server baru, anggap saja <code>apt update</code> perlu dijalankan <strong>sekali di awal setiap sesi kerja</strong>, bukan sebelum setiap install package.</div><h3>Kesimpulan lesson ini</h3><p><strong><code>apt update</code> dipakai untuk menyegarkan daftar package, sedangkan <code>apt upgrade</code> dipakai untuk memasang pembaruan yang tersedia.</strong></p><p>Anda tidak perlu menjalankan <code>apt update</code> sebelum setiap install kalau masih dalam sesi setup yang sama. Tetapi jika sudah beda waktu, beda sesi, atau server baru saja diakses lagi setelah beberapa lama, jalankan lagi <code>apt update</code> agar package list tetap fresh.</p><p>Di lesson berikutnya, kita akan masuk ke langkah penting berikutnya: <strong>membuat user deploy non-root</strong> agar workflow deployment LMS lebih aman.</p>",       
          },
        ],
      },
      {
        id: "l2l-6",
        title: "Membuat user deploy",
        duration: "17 min",
        summary:
          "Membuat user non-root khusus untuk deployment agar server lebih aman, lebih rapi, tidak selalu dikelola langsung menggunakan root, lalu beralih dari root ke user deploy untuk tutorial berikutnya.",             
        order: 6,
        materials: [
          {
            id: "l2l-6-html",
            title: "User Deploy Non-Root",
            type: "html",
            description: "Membuat user deploy dan memberinya akses sudo.",
            htmlContent:
              "<h2>Membuat user deploy</h2><p>Setelah login pertama sebagai <code>root</code>, langkah penting berikutnya adalah <strong>membuat user non-root</strong> yang akan kita gunakan untuk pekerjaan deployment sehari-hari.</p><p>Dalam course ini, kita memakai nama user <strong>deploy</strong>. Nama ini bukan aturan wajib, tetapi cukup jelas karena perannya memang untuk membantu proses deploy aplikasi LMS.</p><h3>Kenapa tidak langsung pakai root saja?</h3><p>Secara teknis, root memang bisa melakukan semuanya. Tetapi justru karena itulah root terlalu berbahaya untuk dipakai kerja harian. Jika kita salah mengetik command saat memakai root, dampaknya bisa besar sekali: file sistem bisa terhapus, konfigurasi bisa rusak, atau service penting bisa terganggu.</p><p>Karena itu, pola yang lebih aman adalah:</p><ul><li><strong>root</strong> dipakai untuk setup awal dan kondisi administratif tertentu,</li><li><strong>deploy</strong> dipakai untuk pekerjaan sehari-hari seperti upload source code, install dependency, build project, menjalankan aplikasi, dan maintenance ringan.</li></ul><h3>Apa itu user deploy?</h3><p>User deploy adalah user Linux biasa yang kita buat secara khusus untuk mengelola project aplikasi di server. User ini bukan superuser penuh seperti root, tetapi bisa diberi hak <strong>sudo</strong> agar tetap bisa menjalankan command administratif saat diperlukan.</p><p>Dengan begitu, kita mendapatkan keseimbangan yang baik antara <strong>keamanan</strong> dan <strong>fleksibilitas kerja</strong>.</p><h3>Command untuk membuat user deploy</h3><p>Jalankan command berikut saat masih login sebagai root:</p><pre><code>adduser deploy</code></pre><p>Setelah command itu dijalankan, Ubuntu biasanya akan meminta beberapa input:</p><ul><li>password untuk user <code>deploy</code>,</li><li>konfirmasi password,</li><li>dan kadang informasi tambahan seperti full name, room number, work phone, dan sebagainya.</li></ul><p>Untuk field tambahan itu, Anda bisa langsung tekan <code>Enter</code> saja jika tidak ingin mengisinya.</p><h3>Contoh proses pembuatan user</h3><pre><code>root@your-server:~# adduser deploy\nAdding user `deploy' ...\nAdding new group `deploy' (1001) ...\nAdding new user `deploy' (1001) with group `deploy' ...\nCreating home directory `/home/deploy' ...\nCopying files from `/etc/skel' ...\nNew password:\nRetype new password:\npasswd: password updated successfully\nChanging the user information for deploy\nEnter the new value, or press ENTER for the default\n        Full Name []:\n        Room Number []:\n        Work Phone []:\n        Home Phone []:\n        Other []:\nIs the information correct? [Y/n] Y</code></pre><p>Kalau proses ini selesai dengan normal, berarti user <code>deploy</code> sudah berhasil dibuat.</p><h3>Memberi hak sudo ke user deploy</h3><p>Setelah user dibuat, tambahkan user tersebut ke group <code>sudo</code>:</p><pre><code>usermod -aG sudo deploy</code></pre><p>Atau versi yang juga umum dipakai:</p><pre><code>adduser deploy sudo</code></pre><p>Kedua pendekatan ini tujuannya sama: membuat user <code>deploy</code> bisa menjalankan command dengan <code>sudo</code>.</p><h3>Kenapa hak sudo itu penting?</h3><p>Karena nanti saat deploy LMS, ada beberapa command yang tetap membutuhkan hak administratif, misalnya:</p><ul><li>install package dengan <code>apt install</code>,</li><li>reload Nginx,</li><li>mengubah permission folder tertentu,</li><li>atau mengelola service.</li></ul><p>Kalau user <code>deploy</code> tidak punya hak sudo, kita akan bolak-balik login sebagai root, dan itu justru kurang praktis serta kurang aman.</p><h3>Contoh penggunaan sudo setelah login sebagai deploy</h3><p>Misalnya nanti Anda login sebagai <code>deploy</code>, lalu ingin update package:</p><pre><code>sudo apt update</code></pre><p>Sistem akan meminta password user <code>deploy</code>, bukan password root. Ini penting untuk dipahami.</p><h3>Langkah setelah user deploy selesai dibuat: logout dari root lalu login ke deploy</h3><p>Begitu user <code>deploy</code> sudah dibuat dan sudah masuk group <code>sudo</code>, langkah berikutnya yang sangat disarankan adalah <strong>berhenti bekerja sebagai root</strong>, lalu mulai masuk memakai user <code>deploy</code>.</p><p>Ini penting karena setelah lesson ini, workflow tutorial selanjutnya sebaiknya memakai user <code>deploy</code>, bukan root.</p><h3>Cara logout dari root</h3><p>Kalau Anda masih berada di terminal root, ketik:</p><pre><code>exit</code></pre><p>Setelah itu sesi terminal root akan tertutup atau kembali ke prompt sebelumnya. Kalau Anda sedang memakai PuTTY, biasanya session akan selesai dan jendela terminal bisa ditutup.</p><h3>Login ulang ke server memakai user deploy</h3><p>Setelah logout dari root, buka lagi session PuTTY Anda, lalu login memakai user <code>deploy</code>.</p><p>Contoh alurnya:</p><ol><li>Buka PuTTY</li><li>Pilih session server VPS Anda</li><li>Klik <strong>Open</strong></li><li>Pada prompt login, isi username: <code>deploy</code></li><li>Masukkan password user <code>deploy</code> yang tadi dibuat</li></ol><h3>Contoh login sebagai deploy</h3><pre><code>login as: deploy\ndeploy@123.123.123.123's password:</code></pre><p>Kalau login berhasil, Anda biasanya akan melihat prompt seperti ini:</p><pre><code>deploy@your-server:~$</code></pre><p>Perhatikan bedanya:</p><ul><li><code>root</code> biasanya berakhir dengan tanda <code>#</code></li><li><code>deploy</code> biasanya berakhir dengan tanda <code>$</code></li></ul><p>Ini membantu kita cepat sadar sedang berada di user mana.</p><h3>Verifikasi bahwa Anda sudah benar-benar masuk sebagai deploy</h3><p>Setelah berhasil login, jalankan command berikut:</p><pre><code>whoami</code></pre><p>Hasilnya harus:</p><pre><code>deploy</code></pre><p>Lalu cek juga apakah sudo berjalan normal:</p><pre><code>sudo apt update</code></pre><p>Jika command ini berjalan dan sistem meminta password user <code>deploy</code>, berarti user ini sudah siap dipakai untuk tutorial berikutnya.</p><h3>Kenapa mulai sekarang sebaiknya pakai deploy?</h3><p>Karena mulai setelah tahap ini, pekerjaan kita akan lebih banyak berupa aktivitas harian deployment, misalnya:</p><ul><li>masuk ke folder project LMS,</li><li>clone repository atau upload source code,</li><li>menjalankan <code>npm install</code>,</li><li>menjalankan <code>npm run build</code>,</li><li>mengelola file project,</li><li>dan menjalankan command dengan <code>sudo</code> hanya saat perlu.</li></ul><p>Semua ini jauh lebih aman jika dilakukan sebagai <code>deploy</code>.</p><div class=\"lesson-current-state-note\"><strong>Praktik yang dipakai mulai setelah lesson ini:</strong> logout dari <code>root</code>, lalu biasakan login kembali memakai <code>deploy</code>. Tutorial-tutorial berikutnya sebaiknya dijalankan dari user <code>deploy</code>, kecuali jika ada instruksi khusus yang memang perlu root.</div><h3>Checklist setelah user deploy dibuat</h3><p>Setelah selesai membuat user, lakukan pengecekan cepat berikut:</p><ol><li><strong>Cek apakah user deploy sudah ada</strong><pre><code>id deploy</code></pre></li><li><strong>Cek apakah deploy masuk group sudo</strong><pre><code>groups deploy</code></pre><p>Hasilnya seharusnya memuat <code>sudo</code>.</p></li><li><strong>Pastikan home directory user tersedia</strong><pre><code>ls -la /home</code></pre><p>Harus ada folder <code>/home/deploy</code>.</p></li><li><strong>Logout dari root</strong><pre><code>exit</code></pre></li><li><strong>Login kembali sebagai deploy</strong><br/>Masuk lagi ke server memakai username <code>deploy</code>.</li><li><strong>Verifikasi user aktif</strong><pre><code>whoami</code></pre><p>Hasilnya harus <code>deploy</code>.</p></li></ol><h3>Contoh hasil pengecekan group</h3><pre><code>root@your-server:~# groups deploy\ndeploy : deploy sudo</code></pre><p>Kalau <code>sudo</code> muncul di hasil ini, berarti user deploy sudah punya hak sudo.</p><h3>Password user deploy juga harus disimpan baik-baik</h3><p>Sama seperti password root, password user <code>deploy</code> juga harus disimpan aman. Jangan sampai nanti root sudah dinonaktifkan untuk login SSH, tetapi password deploy malah lupa. Itu bisa membuat akses ke server jadi ribet.</p><div class=\"lesson-current-state-note\"><strong>Catatan penting:</strong> simpan credential <code>deploy</code> dengan aman. Dalam workflow server yang sehat, user inilah yang justru akan lebih sering dipakai daripada root.</div><h3>Apakah nama user harus deploy?</h3><p>Tidak harus. Anda bisa memakai nama lain seperti <code>ubuntu</code>, <code>admin</code>, <code>lms</code>, atau nama tim Anda. Tetapi untuk course ini, memakai nama <code>deploy</code> memudahkan kita menjaga konsistensi tutorial dan command berikutnya.</p><h3>Contoh pola kerja setelah lesson ini</h3><p>Setelah user deploy tersedia, pola kerja kita nanti menjadi lebih rapi:</p><ul><li>Login awal dan setup inti: pakai <code>root</code></li><li>Kerja harian deployment: pakai <code>deploy</code></li><li>Kalau butuh hak administratif: gunakan <code>sudo</code> dari user <code>deploy</code></li></ul><h3>Command utama lesson ini</h3><pre><code>adduser deploy\nusermod -aG sudo deploy\nexit</code></pre><h3>Kesimpulan lesson ini</h3><p><strong>Membuat user deploy adalah langkah penting untuk membangun VPS yang lebih aman dan lebih profesional.</strong> Kita tidak ingin semua pekerjaan dilakukan langsung memakai root. Dengan user <code>deploy</code>, workflow deployment LMS menjadi lebih terstruktur, lebih aman, dan lebih siap untuk production.</p><p>Mulai setelah lesson ini, biasakan lanjut bekerja memakai <code>deploy</code>. Jadi tutorial-tutorial berikutnya dijalankan dari user <code>deploy</code>, kecuali jika ada instruksi khusus yang memang membutuhkan akses root.</p>",        
          },
        ],
      },
      {
        id: "l2l-7",
        title: "Login ulang dengan user deploy",
        duration: "15 min",
        summary:
          "Menguji login ulang memakai user deploy dari PuTTY, memastikan akses berhasil, dan memverifikasi bahwa user deploy dapat memakai sudo untuk pekerjaan deployment harian.",       
        order: 7,
        materials: [
          {
            id: "l2l-7-html",
            title: "Verifikasi User Deploy",
            type: "html",
            description: "Menguji user baru untuk workflow deployment.",
            htmlContent:
              "<h2>Login ulang dengan user deploy</h2><p>Setelah user <code>deploy</code> berhasil dibuat dan dimasukkan ke group <code>sudo</code>, kita belum boleh langsung menganggap semuanya selesai. Langkah berikutnya adalah <strong>menguji login ulang</strong> memakai user baru tersebut.</p><p>Tujuan lesson ini sangat penting: memastikan bahwa user <code>deploy</code> benar-benar bisa dipakai untuk bekerja sehari-hari, bukan hanya sekadar tercatat ada di server.</p><h3>Kenapa perlu login ulang?</h3><p>Karena sampai titik ini kita masih bekerja sebagai <code>root</code>. Kita perlu membuktikan tiga hal:</p><ol><li>user <code>deploy</code> benar-benar bisa login lewat SSH / PuTTY,</li><li>password user <code>deploy</code> benar dan tidak lupa,</li><li>user <code>deploy</code> benar-benar bisa memakai <code>sudo</code>.</li></ol><p>Kalau tiga hal ini lolos, berarti fondasi workflow deployment kita sudah jauh lebih aman.</p><h3>Tujuan akhir lesson ini</h3><p>Setelah lesson ini selesai, Anda seharusnya bisa:</p><ul><li>keluar dari sesi root,</li><li>login lagi memakai user <code>deploy</code> dari PuTTY,</li><li>menjalankan command biasa,</li><li>dan menguji command administratif memakai <code>sudo</code>.</li></ul><h3>Persiapan sebelum login ulang</h3><p>Sebelum menutup sesi root, pastikan beberapa hal ini sudah benar:</p><ul><li>user <code>deploy</code> memang sudah dibuat,</li><li>user <code>deploy</code> sudah masuk group <code>sudo</code>,</li><li>Anda masih ingat password user <code>deploy</code>,</li><li>IP VPS dan port SSH masih sama dan sudah dicatat.</li></ul><p>Kalau perlu, cek lagi dari sesi root:</p><pre><code>groups deploy</code></pre><p>Hasil yang ideal kurang lebih seperti ini:</p><pre><code>deploy : deploy sudo</code></pre><h3>Langkah 1 — Keluar dari sesi root</h3><p>Dari terminal root yang masih aktif, ketik:</p><pre><code>exit</code></pre><p>Atau Anda bisa langsung menutup jendela terminal PuTTY tersebut. Tetapi memakai <code>exit</code> lebih rapi karena sesi ditutup dengan benar.</p><h3>Langkah 2 — Buka PuTTY lagi</h3><p>Sekarang buka kembali aplikasi <strong>PuTTY</strong> di Windows.</p><p>Di halaman awal PuTTY, isi setting sama seperti sebelumnya:</p><ul><li><strong>Host Name (or IP address)</strong> = IP VPS Anda</li><li><strong>Port</strong> = biasanya <code>22</code> atau port SSH yang Anda pakai</li><li><strong>Connection type</strong> = <strong>SSH</strong></li></ul><p>Lalu klik <strong>Open</strong>.</p><h3>Langkah 3 — Login memakai user deploy</h3><p>Setelah terminal PuTTY terbuka, akan muncul prompt login:</p><pre><code>login as:</code></pre><p>Ketik:</p><pre><code>deploy</code></pre><p>Lalu tekan <code>Enter</code>.</p><p>Setelah itu akan diminta password. Masukkan password user <code>deploy</code> yang tadi dibuat saat lesson sebelumnya.</p><p>Ingat: saat mengetik password di terminal Linux, karakter memang tidak terlihat. Itu normal. Tetap ketik lalu tekan <code>Enter</code>.</p><h3>Contoh login lengkap di PuTTY</h3><pre><code>login as: deploy\ndeploy@123.45.67.89's password:</code></pre><p>Jika password benar, Anda akan masuk ke server dan biasanya melihat prompt seperti ini:</p><pre><code>deploy@your-server:~$</code></pre><p>Perhatikan tanda <code>$</code> di akhir prompt. Ini biasanya menandakan bahwa Anda login sebagai user biasa, bukan root.</p><h3>Langkah 4 — Verifikasi bahwa Anda benar-benar login sebagai deploy</h3><p>Begitu berhasil masuk, jangan langsung lanjut ke pekerjaan lain. Verifikasi dulu user aktif dengan command berikut:</p><pre><code>whoami</code></pre><p>Hasilnya harus:</p><pre><code>deploy</code></pre><p>Anda juga bisa cek lokasi home directory saat ini:</p><pre><code>pwd</code></pre><p>Biasanya hasilnya:</p><pre><code>/home/deploy</code></pre><p>Ini menunjukkan bahwa Anda benar-benar berada di environment user deploy.</p><h3>Langkah 5 — Uji apakah sudo berfungsi</h3><p>Ini langkah yang sangat penting. Jalankan command berikut:</p><pre><code>sudo apt update</code></pre><p>Sistem akan meminta password. Masukkan <strong>password user deploy</strong>, bukan password root.</p><p>Kalau command ini berjalan normal, berarti user <code>deploy</code> berhasil memakai <code>sudo</code>.</p><h3>Contoh hasil uji sudo yang berhasil</h3><pre><code>deploy@your-server:~$ sudo apt update\n[sudo] password for deploy:\nHit:1 http://archive.ubuntu.com/ubuntu jammy InRelease\nReading package lists... Done</code></pre><p>Kalau sampai tahap ini sukses, maka user <code>deploy</code> sudah siap dipakai untuk workflow deployment sehari-hari.</p><h3>Apa yang harus dicek setelah login deploy berhasil?</h3><ol><li><strong>Cek user aktif</strong><pre><code>whoami</code></pre></li><li><strong>Cek home directory</strong><pre><code>pwd</code></pre></li><li><strong>Cek group user</strong><pre><code>groups</code></pre><p>Hasil seharusnya memuat <code>sudo</code>.</p></li><li><strong>Test sudo</strong><pre><code>sudo apt update</code></pre></li></ol><h3>Checklist sukses lesson ini</h3><p>Lesson ini dianggap berhasil kalau semua poin berikut terpenuhi:</p><ul><li>PuTTY bisa terhubung ke VPS,</li><li>login dengan user <code>deploy</code> berhasil,</li><li><code>whoami</code> menghasilkan <code>deploy</code>,</li><li><code>groups</code> menampilkan <code>sudo</code>,</li><li><code>sudo apt update</code> berjalan normal.</li></ul><h3>Masalah umum dan cara membacanya</h3><table><thead><tr><th>Masalah</th><th>Arti Umum</th><th>Aksi Awal</th></tr></thead><tbody><tr><td>Access denied</td><td>Password deploy salah atau user belum benar</td><td>Cek lagi password dan pastikan login as adalah <code>deploy</code></td></tr><tr><td>User deploy tidak bisa login</td><td>User belum dibuat dengan benar atau shell bermasalah</td><td>Kembali login sebagai root dan cek <code>id deploy</code></td></tr><tr><td>sudo: user is not in the sudoers file</td><td>User deploy belum masuk group sudo</td><td>Login sebagai root lalu tambahkan lagi ke group sudo</td></tr><tr><td>Password sudo tidak diterima</td><td>Yang diminta adalah password deploy, bukan password root</td><td>Masukkan password user deploy</td></tr></tbody></table><h3>Kalau login deploy gagal, apa yang harus dilakukan?</h3><p>Jangan panik. Selama Anda masih punya akses root, masalah ini masih bisa diperbaiki. Login lagi sebagai <code>root</code>, lalu cek:</p><pre><code>id deploy</code></pre><pre><code>groups deploy</code></pre><pre><code>passwd deploy</code></pre><p>Kalau perlu, Anda bisa reset password user deploy dengan:</p><pre><code>passwd deploy</code></pre><p>Lalu coba login ulang lagi dari PuTTY.</p><h3>Kenapa lesson ini penting untuk deployment LMS?</h3><p>Karena setelah ini kita ingin membangun kebiasaan yang benar: <strong>tidak selalu bekerja sebagai root</strong>. Untuk install dependency project, membuat folder aplikasi, menjalankan <code>npm install</code>, build project, dan mengelola proses deployment, user <code>deploy</code> akan jauh lebih aman dipakai.</p><div class=\"lesson-current-state-note\"><strong>Praktik terbaik:</strong> mulai biasakan bekerja memakai <code>deploy</code>. Gunakan <code>root</code> hanya saat benar-benar diperlukan untuk tugas administratif tertentu.</div><h3>Contoh alur praktik singkat</h3><ol><li>Login sebagai root</li><li>Buat user deploy</li><li>Tambahkan deploy ke sudo</li><li><code>exit</code> dari root</li><li>Buka PuTTY lagi</li><li>Login sebagai deploy</li><li>Jalankan <code>whoami</code></li><li>Jalankan <code>sudo apt update</code></li></ol><p>Kalau semua ini berjalan, berarti server Anda sudah siap untuk masuk ke tahap berikutnya.</p><h3>Kesimpulan lesson ini</h3><p><strong>Login ulang dengan user deploy adalah langkah verifikasi penting</strong> untuk memastikan user non-root yang baru dibuat memang siap dipakai bekerja.</p><p>Begitu login deploy dan sudo berhasil, Anda sudah punya pola akses server yang lebih aman dan lebih profesional untuk melanjutkan deployment LMS.</p><p>Di lesson berikutnya, kita akan lanjut ke penataan yang lebih rapi lagi: <strong>struktur folder untuk LMS</strong> di dalam server.</p>",    
          },
        ],
      },
      {
        id: "l2l-8",
        title: "Struktur folder untuk LMS",
        duration: "18 min",
        summary:
          "Memahami struktur folder yang rapi untuk LMS di VPS, alasan pemilihannya, cara membuatnya, ownership yang aman, dan pola kerja agar project mudah dikelola saat development berlanjut ke production.",  
        order: 8,
        materials: [
          {
            id: "l2l-8-html",
            title: "Folder Structure LMS",
            type: "html",
            description: "Lokasi folder yang aman dan rapi untuk deployment.",
            htmlContent:
              "<h2>Struktur folder untuk LMS</h2><p>Setelah user <code>deploy</code> siap dipakai, langkah berikutnya adalah menentukan <strong>di mana source code LMS akan diletakkan di server</strong>. Ini kelihatan sederhana, tetapi sebenarnya sangat penting karena struktur folder yang rapi akan memudahkan kita saat install dependency, build project, menjalankan aplikasi, mengelola file environment, dan melakukan maintenance di kemudian hari.</p><p>Kalau dari awal folder project berantakan, nanti saat LMS sudah semakin besar, proses deploy akan terasa membingungkan. Karena itu, di lesson ini kita membangun kebiasaan yang benar sejak awal.</p><h3>Tujuan lesson ini</h3><p>Setelah lesson ini, Anda seharusnya memahami:</p><ul><li>folder mana yang cocok untuk menaruh aplikasi LMS di VPS,</li><li>kenapa kita tidak menaruh project sembarangan,</li><li>bagaimana membuat struktur folder yang rapi,</li><li>dan bagaimana memastikan user <code>deploy</code> menjadi pemilik folder project tersebut.</li></ul><h3>Kenapa struktur folder itu penting?</h3><p>Karena VPS bukan hanya tempat menjalankan satu command. VPS adalah tempat aplikasi akan hidup terus-menerus. Nantinya kita akan bekerja dengan banyak hal sekaligus:</p><ul><li>source code project,</li><li>dependency <code>node_modules</code>,</li><li>hasil build production,</li><li>file environment,</li><li>konfigurasi Nginx,</li><li>log aplikasi,</li><li>dan mungkin versi project berikutnya.</li></ul><p>Kalau semua itu tidak ditata dengan baik, kita akan cepat bingung: file mana yang aktif, folder mana yang dipakai production, dan user mana yang berhak menulis ke dalamnya.</p><h3>Pola folder yang kita pakai di course ini</h3><p>Untuk course ini, pola yang sederhana dan rapi adalah:</p><pre><code>/var/www/lms</code></pre><p>Ini berarti:</p><ul><li><code>/var/www</code> menjadi area umum untuk project web,</li><li><code>lms</code> adalah folder utama project kita.</li></ul><p>Pola ini cukup umum, mudah diingat, dan cocok untuk LMS yang akan dijalankan dengan Nginx sebagai reverse proxy.</p><h3>Kenapa memilih <code>/var/www</code>?</h3><p>Secara tradisional, banyak aplikasi web di Linux diletakkan di bawah <code>/var/www</code>. Tidak wajib, tetapi ini adalah lokasi yang sangat familiar untuk project web. Keuntungannya:</p><ul><li><strong>mudah dikenali</strong> sebagai lokasi aplikasi web,</li><li><strong>rapi</strong> saat nanti ada lebih dari satu project,</li><li><strong>mudah dijelaskan</strong> dalam tutorial dan maintenance,</li><li><strong>cocok</strong> dengan workflow Nginx dan deployment umum.</li></ul><p>Jadi bukan karena ini satu-satunya tempat yang benar, tetapi karena ini tempat yang <strong>masuk akal dan profesional untuk project web</strong>.</p><h3>Apakah boleh pakai folder lain?</h3><p>Boleh. Secara teknis Anda bisa menaruh project di lokasi lain seperti:</p><ul><li><code>/home/deploy/lms</code></li><li><code>/opt/lms</code></li><li><code>/srv/lms</code></li></ul><p>Tetapi untuk course ini kita memakai <code>/var/www/lms</code> agar pembelajaran konsisten dan mudah diikuti. Saat belajar deployment, konsistensi jauh lebih penting daripada terlalu banyak variasi pilihan.</p><h3>Struktur dasar yang akan kita buat</h3><p>Di tahap awal, struktur minimumnya bisa sesederhana ini:</p><pre><code>/var/www/\n└── lms/\n    ├── frontend/\n    ├── shared/        (opsional, jika nanti diperlukan)\n    ├── backups/       (opsional)\n    └── logs/          (opsional)</code></pre><p>Kalau saat ini project Anda baru fokus di frontend LMS berbasis Next.js, maka struktur paling sederhana dan aman adalah:</p><pre><code>/var/www/lms/frontend</code></pre><p>Jadi source code frontend akan berada di sana.</p><h3>Pola paling sederhana untuk project saat ini</h3><p>Karena dari file yang sudah kita pakai, fokus saat ini adalah frontend, maka pola awal yang cocok adalah:</p><pre><code>/var/www/lms/frontend</code></pre><p>Nanti saat Anda masuk ke folder itu, di sanalah Anda bisa:</p><ul><li>clone repository,</li><li>menjalankan <code>npm install</code>,</li><li>menjalankan <code>npm run build</code>,</li><li>dan menjalankan aplikasi production.</li></ul><h3>Cara membuat folder project</h3><p>Kalau Anda masih login sebagai root, buat folder utamanya terlebih dahulu:</p><pre><code>mkdir -p /var/www/lms</code></pre><p>Kalau ingin langsung membuat folder frontend juga:</p><pre><code>mkdir -p /var/www/lms/frontend</code></pre><p>Option <code>-p</code> membuat command ini aman dijalankan walaupun parent folder belum ada.</p><h3>Kenapa ownership folder penting?</h3><p>Membuat folder saja belum cukup. Kita juga harus memastikan bahwa user yang akan bekerja di dalam folder itu adalah user yang tepat, yaitu <code>deploy</code>.</p><p>Kalau ownership folder masih milik root, lalu nanti Anda login sebagai <code>deploy</code>, bisa saja Anda tidak bisa menulis file, tidak bisa clone project, atau tidak bisa melakukan build dengan nyaman.</p><h3>Command untuk mengubah ownership folder</h3><p>Setelah folder dibuat, ubah pemiliknya ke user <code>deploy</code>:</p><pre><code>chown -R deploy:deploy /var/www/lms</code></pre><p>Artinya:</p><ul><li><code>deploy</code> sebagai user owner,</li><li><code>deploy</code> sebagai group owner,</li><li><code>-R</code> berarti berlaku rekursif ke seluruh isi folder.</li></ul><h3>Kenapa bukan root yang tetap jadi owner?</h3><p>Karena kita sudah memutuskan bahwa pekerjaan deploy harian akan dilakukan dengan user <code>deploy</code>. Maka sangat masuk akal jika folder project juga dimiliki oleh user tersebut.</p><p>Pola yang sehat adalah:</p><ul><li>konfigurasi inti sistem: bisa dikelola via <code>sudo</code>,</li><li>folder project aplikasi: dimiliki user <code>deploy</code>,</li><li>workflow harian: dijalankan dari user <code>deploy</code>.</li></ul><h3>Contoh alur lengkap pembuatan folder</h3><pre><code>sudo mkdir -p /var/www/lms/frontend\nsudo chown -R deploy:deploy /var/www/lms</code></pre><p>Kalau Anda sedang login sebagai root, <code>sudo</code> tidak wajib. Tetapi kalau Anda sudah login sebagai <code>deploy</code>, gunakan <code>sudo</code>.</p><h3>Cara mengecek hasilnya</h3><p>Gunakan command berikut:</p><pre><code>ls -la /var/www</code></pre><p>Lalu untuk melihat isi folder LMS:</p><pre><code>ls -la /var/www/lms</code></pre><p>Untuk melihat ownership lebih jelas:</p><pre><code>stat /var/www/lms</code></pre><p>Atau cukup:</p><pre><code>ls -ld /var/www/lms</code></pre><p>Hasil yang kita harapkan adalah owner folder terlihat sebagai <code>deploy deploy</code>.</p><h3>Contoh hasil yang ideal</h3><pre><code>drwxr-xr-x 3 deploy deploy 4096 Apr 22 10:00 /var/www/lms</code></pre><p>Kalau owner dan group sama-sama <code>deploy</code>, itu pertanda bagus untuk workflow kita.</p><h3>Apakah perlu membuat banyak folder sejak awal?</h3><p>Tidak perlu berlebihan. Untuk fase awal, jangan buat struktur yang terlalu rumit. Fokus kita adalah menyiapkan folder yang cukup untuk bekerja dengan rapi.</p><p>Untuk kondisi LMS Anda saat ini, pola sederhana berikut sudah sangat cukup:</p><pre><code>/var/www/lms/frontend</code></pre><p>Nanti jika project berkembang, kita bisa menambah folder lain secara bertahap, misalnya:</p><ul><li><code>/var/www/lms/backups</code> untuk backup manual,</li><li><code>/var/www/lms/shared</code> untuk file bersama,</li><li><code>/var/www/lms/releases</code> jika suatu hari ingin pola deployment versioned.</li></ul><p>Tetapi untuk belajar VPS dan deploy pertama, jangan terlalu jauh dulu. Yang penting adalah <strong>jelas, sederhana, dan bisa dipakai</strong>.</p><h3>Contoh struktur yang mudah dipahami untuk tahap sekarang</h3><pre><code>/var/www/lms/\n└── frontend/\n    ├── package.json\n    ├── next.config.js\n    ├── src/\n    ├── public/\n    └── .env.production   (nanti jika diperlukan)</code></pre><p>Dengan pola ini, saat Anda masuk ke folder project, semuanya terasa jelas. Anda tahu di mana posisi project, di mana menjalankan command <code>npm</code>, dan di mana hasil build akan terbentuk.</p><h3>Pola kerja yang akan kita pakai nanti</h3><p>Nanti alurnya akan seperti ini:</p><ol><li>Login ke VPS sebagai <code>deploy</code></li><li>Masuk ke folder project<pre><code>cd /var/www/lms/frontend</code></pre></li><li>Clone source code atau upload project ke sana</li><li>Install dependency<pre><code>npm install</code></pre></li><li>Build production<pre><code>npm run build</code></pre></li><li>Jalankan aplikasi dan hubungkan dengan Nginx</li></ol><p>Semua workflow ini akan jauh lebih rapi kalau struktur foldernya sudah benar dari awal.</p><h3>Kesalahan umum yang perlu dihindari</h3><ul><li><strong>Menaruh project di folder acak</strong> seperti langsung di root home tanpa pola yang jelas.</li><li><strong>Folder dimiliki root</strong> padahal kerja harian memakai deploy.</li><li><strong>Membuat struktur terlalu rumit sejak awal</strong> padahal project masih sederhana.</li><li><strong>Tidak konsisten nama folder</strong> sehingga nanti bingung mana folder aktif production.</li></ul><div class=\"lesson-current-state-note\"><strong>Prinsip aman untuk tahap ini:</strong> buat struktur sesederhana mungkin, tetapi cukup rapi untuk dipakai jangka panjang. Untuk course ini, <code>/var/www/lms/frontend</code> adalah pilihan yang sangat baik.</div><h3>Contoh command lengkap lesson ini</h3><pre><code>sudo mkdir -p /var/www/lms/frontend\nsudo chown -R deploy:deploy /var/www/lms\nls -ld /var/www/lms\nls -la /var/www/lms</code></pre><h3>Kesimpulan lesson ini</h3><p><strong>Struktur folder yang rapi adalah fondasi workflow deployment yang sehat.</strong> Untuk LMS ini, kita memakai pola sederhana dan profesional di <code>/var/www/lms</code>, dengan source code frontend berada di <code>/var/www/lms/frontend</code>.</p><p>Setelah folder dibuat dan ownership-nya benar untuk user <code>deploy</code>, kita siap masuk ke tahap berikutnya di module berikutnya: mengamankan server, lalu melanjutkan ke install stack deployment LMS.</p>",      
          },
        ],
      },
    ],
  },
  {
    id: "l2l-sec-2",
    title: "Module 2 — Server Hardening",
    summary:
      "Mengamankan VPS sebelum aplikasi LMS dijalankan secara publik.",
    order: 2,
    lessons: [
      {
        id: "l2l-9",
        title: "Mengubah port SSH",
        duration: "16 min",
        summary:
          "Memahami apa itu SSH, kenapa port SSH sering diubah dari default, apa risikonya jika dibiarkan di port standar, dan bagaimana cara menggantinya dengan aman di Ubuntu VPS.",      
        order: 1,
        materials: [
          {
            id: "l2l-9-html",
            title: "Ganti Port SSH",
            type: "html",
            description: "Panduan dasar mengganti port SSH di Ubuntu.",
            htmlContent:
              "<h2>Mengubah port SSH</h2><p>Sebelum kita mengubah port SSH, kita perlu memahami dulu apa itu SSH secara sederhana.</p><h3>Apa itu SSH?</h3><p><strong>SSH</strong> adalah singkatan dari <strong>Secure Shell</strong>. Dummy paling gampangnya, SSH adalah <strong>jalur aman untuk masuk ke server dari jarak jauh</strong>. Jadi saat kita membuka VPS lewat PuTTY, sebenarnya kita sedang masuk ke server melalui layanan SSH.</p><p>Kalau diibaratkan, server adalah rumah, dan SSH adalah pintu masuk resminya. Selama pintu itu terbuka dan kita punya credential yang benar, kita bisa masuk lalu menjalankan command dari komputer kita ke VPS.</p><h3>Kenapa port SSH biasanya 22?</h3><p>Secara default, SSH memakai <strong>port 22</strong>. Karena ini adalah default standar, hampir semua orang tahu bahwa banyak server Linux membuka SSH di port ini.</p><p>Masalahnya, bot internet juga tahu hal yang sama. Jadi port 22 adalah target yang sangat sering dipindai otomatis.</p><h3>Kenapa port SSH sering diubah?</h3><p>Port SSH sering diubah untuk <strong>mengurangi noise dan serangan otomatis</strong> yang menarget port default. Jadi ini bukan perlindungan utama, tetapi salah satu lapisan keamanan tambahan yang cukup berguna.</p><p>Kalau port 22 dibiarkan terbuka, server Anda akan lebih sering menerima percobaan login otomatis dari bot yang memindai internet.</p><h3>Apa risiko jika port SSH tidak diubah?</h3><ul><li><strong>Lebih sering terkena brute-force attempt</strong> — bot akan mencoba username dan password berulang kali.</li><li><strong>Log server menjadi lebih berisik</strong> — karena banyak percobaan login otomatis tercatat.</li><li><strong>Menambah permukaan serangan</strong> — terutama jika password lemah atau root login masih aktif.</li><li><strong>Lebih mudah terdeteksi oleh scanning otomatis</strong> — karena port 22 adalah target paling umum.</li></ul><p>Perlu dipahami: <strong>mengubah port SSH tidak membuat server kebal</strong>, tetapi bisa membantu mengurangi serangan otomatis level dasar. Jadi ini lebih seperti menggeser pintu masuk utama dari lokasi yang terlalu mudah ditebak.</p><h3>Apakah mengubah port SSH wajib?</h3><p>Tidak mutlak wajib, tetapi sangat disarankan untuk server yang akan dibuka ke internet. Dalam course ini, kita anggap ini sebagai bagian dari <strong>server hardening dasar</strong>.</p><h3>Prinsip penting sebelum mengubah port SSH</h3><p>Sebelum mengganti port, ada dua hal yang wajib diingat:</p><ol><li><strong>Jangan tutup session SSH yang sedang aktif</strong> sebelum Anda yakin port baru bisa dipakai untuk login.</li><li><strong>Kalau memakai firewall</strong>, port baru harus dibuka juga. Kalau tidak, Anda bisa terkunci dari server.</li></ol><div class=\"lesson-current-state-note\"><strong>Peringatan penting:</strong> selalu uji login dengan port baru di jendela PuTTY kedua sebelum menutup session lama. Ini untuk mencegah Anda terkunci dari VPS.</div><h3>Cara mengubah port SSH di Ubuntu</h3><p>Login ke server, lalu buka file konfigurasi SSH:</p><pre><code>sudo nano /etc/ssh/sshd_config</code></pre><p>Cari baris yang berisi <code>#Port 22</code> atau <code>Port 22</code>. Lalu ubah menjadi port baru, misalnya:</p><pre><code>Port 2222</code></pre><p>Anda boleh memakai angka lain juga, asalkan:</p><ul><li>bukan port yang sedang dipakai service lain,</li><li>mudah Anda ingat,</li><li>dan nanti dibuka juga di firewall.</li></ul><h3>Contoh langkah edit</h3><ol><li>Buka file konfigurasi SSH<pre><code>sudo nano /etc/ssh/sshd_config</code></pre></li><li>Cari bagian port</li><li>Ubah menjadi misalnya:<pre><code>Port 2222</code></pre></li><li>Simpan file</li><li>Restart service SSH</li></ol><h3>Restart service SSH</h3><p>Setelah konfigurasi disimpan, jalankan:</p><pre><code>sudo systemctl restart ssh</code></pre><p>Atau pada beberapa sistem bisa juga:</p><pre><code>sudo systemctl restart sshd</code></pre><p>Namun untuk Ubuntu, <code>ssh</code> biasanya sudah benar.</p><h3>Kalau server memakai UFW firewall</h3><p>Kalau firewall UFW sudah aktif, jangan lupa buka port baru sebelum Anda mencoba login ulang:</p><pre><code>sudo ufw allow 2222</code></pre><p>Kalau sebelumnya port 22 hanya dipakai untuk SSH dan nanti memang ingin ditutup, lakukan itu <strong>setelah</strong> login lewat port baru berhasil diuji.</p><h3>Urutan aman yang disarankan</h3><ol><li>Edit file SSH config<pre><code>sudo nano /etc/ssh/sshd_config</code></pre></li><li>Ubah port, misalnya jadi <code>2222</code></li><li>Simpan file</li><li>Buka port baru di firewall jika firewall aktif<pre><code>sudo ufw allow 2222</code></pre></li><li>Restart service SSH<pre><code>sudo systemctl restart ssh</code></pre></li><li>Buka PuTTY baru dan test login memakai port baru</li><li>Kalau berhasil, baru lanjutkan hardening berikutnya</li></ol><h3>Cara login dari PuTTY setelah port diganti</h3><p>Setelah port diubah, saat membuka PuTTY Anda harus mengganti field <strong>Port</strong> dari <code>22</code> menjadi port baru, misalnya <code>2222</code>. Kalau memakai Saved Session, jangan lupa update session itu lalu simpan lagi.</p><h3>Contoh konfigurasi baru di PuTTY</h3><ul><li><strong>Host Name</strong> → IP VPS Anda</li><li><strong>Port</strong> → <code>2222</code></li><li><strong>Connection Type</strong> → SSH</li></ul><h3>Kesalahan umum yang perlu dihindari</h3><ul><li>Mengubah port SSH tetapi lupa membuka port baru di firewall</li><li>Menutup session lama sebelum test login ke port baru</li><li>Lupa mengganti port di PuTTY sehingga mengira server error</li><li>Memilih port baru yang bentrok dengan service lain</li></ul><h3>Contoh command inti lesson ini</h3><pre><code>sudo nano /etc/ssh/sshd_config</code></pre><pre><code>Port 2222</code></pre><pre><code>sudo ufw allow 2222</code></pre><pre><code>sudo systemctl restart ssh</code></pre><h3>Kesimpulan lesson ini</h3><p><strong>SSH adalah jalur aman untuk masuk ke server dari jarak jauh.</strong> Karena port default SSH yaitu 22 sangat umum diketahui, banyak bot internet menargetkannya secara otomatis. Dengan mengubah port SSH, kita menambahkan satu lapisan hardening dasar agar server tidak terlalu mudah menjadi target scanning otomatis.</p><p>Namun ingat: mengubah port SSH bukan perlindungan utama. Ini harus dipadukan dengan langkah lain seperti disable root login, firewall, dan proteksi tambahan seperti Fail2Ban.</p>",       
          },
        ],
      },
      {
        id: "l2l-10",
        title: "Disable root login",
        duration: "14 min",
        summary:
          "Memahami kenapa root login sebaiknya dinonaktifkan, apa risiko jika tetap dibiarkan aktif, dan bagaimana menonaktifkannya dengan aman setelah user deploy siap dipakai.",     
        order: 2,
        materials: [
          {
            id: "l2l-10-html",
            title: "Menonaktifkan Root Login",
            type: "html",
            description: "Konsep keamanan dasar untuk SSH production.",
            htmlContent:
              `<h2>Disable root login</h2>
<p>Setelah user <code>deploy</code> siap dipakai, salah satu langkah hardening yang sangat penting adalah <strong>menonaktifkan login langsung sebagai root melalui SSH</strong>.</p>

<h3>Kenapa root login sebaiknya di-disable?</h3>
<p>User <code>root</code> adalah akun dengan hak akses tertinggi di server. Kalau seseorang berhasil login sebagai root, maka orang tersebut hampir bisa melakukan apa saja di VPS: mengubah konfigurasi sistem, menghapus file penting, menambah user, mematikan service, bahkan mengambil alih seluruh server.</p>
<p>Karena itulah, root login lewat SSH sebaiknya tidak dibiarkan terbuka untuk akses harian dari internet.</p>

<h3>Kenapa ini relevan dengan pola course kita?</h3>
<p>Sesuai alur course ini, kita sudah membuat user <code>deploy</code> dan menyiapkannya untuk workflow harian. Artinya, sekarang kita <strong>tidak perlu lagi login langsung sebagai root</strong> untuk pekerjaan rutin.</p>
<p>Pola yang lebih aman adalah:</p>
<ul>
  <li>login ke server menggunakan user <code>deploy</code>,</li>
  <li>lalu gunakan <code>sudo</code> jika memang butuh hak administratif.</li>
</ul>

<h3>Apa risiko jika root login tidak di-disable?</h3>
<ul>
  <li><strong>Menjadi target utama brute-force</strong> — bot internet sangat sering mencoba login ke username <code>root</code>.</li>
  <li><strong>Risiko kompromi lebih besar</strong> — kalau password root bocor atau lemah, dampaknya langsung sangat besar.</li>
  <li><strong>Tidak mengikuti prinsip least privilege</strong> — pekerjaan harian dilakukan dengan akses terlalu tinggi.</li>
  <li><strong>Memperbesar dampak human error</strong> — salah command saat login sebagai root bisa merusak sistem lebih cepat.</li>
</ul>

<h3>Apakah root harus dihapus?</h3>
<p>Tidak. Yang kita nonaktifkan adalah <strong>login root lewat SSH</strong>, bukan menghapus user root dari sistem. User root tetap ada, tetapi akses remote langsungnya dibatasi.</p>

<h3>Prasyarat sebelum disable root login</h3>
<p><strong>Jangan lakukan langkah ini kalau user <code>deploy</code> belum benar-benar siap.</strong> Pastikan dulu:</p>
<ol>
  <li>user <code>deploy</code> sudah dibuat,</li>
  <li>user <code>deploy</code> sudah masuk group <code>sudo</code>,</li>
  <li>Anda sudah berhasil login memakai <code>deploy</code>,</li>
  <li><code>sudo</code> dari user <code>deploy</code> berjalan normal.</li>
</ol>

<div class="lesson-current-state-note"><strong>Peringatan penting:</strong> jangan disable root login sebelum Anda benar-benar bisa masuk ke server memakai user <code>deploy</code>. Kalau tidak, Anda bisa terkunci dari VPS.</div>

<h3>Cara men-disable root login</h3>
<p>Login ke server memakai user <code>deploy</code>, lalu buka file konfigurasi SSH:</p>
<pre><code>sudo nano /etc/ssh/sshd_config</code></pre>

<p>Cari baris berikut:</p>
<pre><code>#PermitRootLogin prohibit-password</code></pre>
<p>atau:</p>
<pre><code>PermitRootLogin yes</code></pre>

<p>Lalu ubah menjadi:</p>
<pre><code>PermitRootLogin no</code></pre>

<p>Kalau barisnya masih diberi tanda <code>#</code>, hapus tanda komentar tersebut agar setting benar-benar aktif.</p>

<h3>Contoh hasil konfigurasi yang benar</h3>
<pre><code>PermitRootLogin no</code></pre>

<h3>Simpan file lalu restart SSH</h3>
<p>Setelah file diubah dan disimpan, restart service SSH:</p>
<pre><code>sudo systemctl restart ssh</code></pre>

<h3>Langkah aman setelah restart</h3>
<p>Setelah restart, <strong>jangan langsung logout dari session aktif</strong>. Buka jendela PuTTY baru dan test login memakai user <code>deploy</code>.</p>
<p>Kalau login user <code>deploy</code> berhasil, barulah perubahan ini dianggap aman.</p>

<h3>Apa yang akan terjadi setelah root login di-disable?</h3>
<p>Setelah konfigurasi ini aktif:</p>
<ul>
  <li>login SSH langsung sebagai <code>root</code> akan ditolak,</li>
  <li>login harian harus memakai user biasa seperti <code>deploy</code>,</li>
  <li>hak administratif tetap bisa dipakai melalui <code>sudo</code>.</li>
</ul>

<h3>Contoh workflow yang benar setelah ini</h3>
<ol>
  <li>Login PuTTY sebagai <code>deploy</code></li>
  <li>Masuk ke server</li>
  <li>Jalankan command biasa untuk kerja harian</li>
  <li>Gunakan <code>sudo</code> hanya jika diperlukan</li>
</ol>

<h3>Kesalahan umum yang perlu dihindari</h3>
<ul>
  <li>Disable root login sebelum user <code>deploy</code> bisa dipakai</li>
  <li>Lupa menyimpan file <code>sshd_config</code></li>
  <li>Lupa restart service SSH setelah mengubah konfigurasi</li>
  <li>Tidak menguji login <code>deploy</code> setelah perubahan</li>
</ul>

<h3>Command inti lesson ini</h3>
<pre><code>sudo nano /etc/ssh/sshd_config</code></pre>
<pre><code>PermitRootLogin no</code></pre>
<pre><code>sudo systemctl restart ssh</code></pre>

<h3>Kesimpulan lesson ini</h3>
<p><strong>Root login sebaiknya di-disable karena akun root adalah target utama serangan otomatis dan memiliki hak akses tertinggi di server.</strong> Dengan menonaktifkan login root lewat SSH, kita memaksa workflow server menjadi lebih aman: masuk memakai user <code>deploy</code>, lalu naik hak akses hanya saat memang diperlukan dengan <code>sudo</code>.</p>
<p>Ini adalah salah satu langkah hardening paling penting setelah user deploy siap dipakai.</p>`,
  
          },
        ],
      },
      {
        id: "l2l-11",
        title: "Install UFW Firewall",
        duration: "14 min",
        summary:
          "Memahami apa itu UFW, kenapa firewall perlu dipasang di VPS, apa risikonya jika tidak dipakai, dan bagaimana menginstall UFW dengan aman menggunakan user deploy.",      
        order: 3,
        materials: [
          {
            id: "l2l-11-html",
            title: "Install UFW",
            type: "html",
            description: "Langkah memasang UFW firewall.",
            htmlContent:
              `<h2>Install UFW Firewall</h2>
<p>Setelah port SSH dibahas dan root login mulai diamankan, langkah hardening berikutnya adalah memasang <strong>firewall</strong> di VPS. Di Ubuntu, tool yang paling umum dan ramah pemula untuk ini adalah <strong>UFW</strong>.</p>

<h3>Apa itu UFW?</h3>
<p><strong>UFW</strong> adalah singkatan dari <strong>Uncomplicated Firewall</strong>. Sesuai namanya, UFW dibuat untuk mempermudah pengelolaan firewall di Ubuntu.</p>
<p>Dummy paling sederhananya begini: kalau server adalah rumah, maka UFW membantu kita menentukan <strong>pintu mana yang boleh dibuka dan pintu mana yang harus ditutup</strong>.</p>
<p>Dalam konteks VPS, “pintu” itu adalah <strong>port</strong>. Jadi dengan UFW, kita bisa mengatur port mana yang boleh diakses dari internet, misalnya:</p>
<ul>
  <li>port SSH untuk login ke server,</li>
  <li>port 80 untuk HTTP,</li>
  <li>port 443 untuk HTTPS.</li>
</ul>

<h3>Kenapa harus install UFW?</h3>
<p>Karena VPS yang terhubung ke internet idealnya tidak membiarkan semua port terbuka begitu saja. Kita ingin server hanya membuka akses yang memang diperlukan.</p>
<p>Dengan UFW, kita bisa membangun kebiasaan yang sehat:</p>
<ul>
  <li>hanya membuka port yang benar-benar dipakai,</li>
  <li>menutup port yang tidak perlu,</li>
  <li>mengurangi risiko server menjadi terlalu terbuka ke internet.</li>
</ul>

<h3>Apa risiko jika UFW tidak diinstall?</h3>
<ul>
  <li><strong>Server lebih terbuka dari yang seharusnya</strong> — port yang tidak perlu bisa tetap bisa diakses.</li>
  <li><strong>Permukaan serangan lebih luas</strong> — semakin banyak layanan terbuka, semakin besar peluang diserang.</li>
  <li><strong>Lebih sulit mengontrol akses</strong> — Anda tidak punya lapisan pembatas sederhana di level OS.</li>
  <li><strong>Troubleshooting keamanan jadi kurang rapi</strong> — karena tidak ada aturan firewall yang jelas dan terdokumentasi.</li>
</ul>

<h3>Apakah tanpa UFW server pasti langsung berbahaya?</h3>
<p>Tidak selalu langsung berbahaya, tetapi <strong>jauh kurang rapi dan kurang aman</strong>. Untuk server production, firewall adalah salah satu fondasi dasar keamanan. Jadi di course ini, UFW diperlakukan sebagai langkah yang sangat disarankan.</p>

<h3>Sesuai pola course ini: gunakan user deploy</h3>
<p>Karena workflow kita setelah ini memakai user <code>deploy</code>, maka instalasi UFW juga dilakukan dari user <code>deploy</code> dengan bantuan <code>sudo</code>, bukan dengan login harian sebagai root.</p>

<h3>Cara install UFW</h3>
<p>Login ke server memakai user <code>deploy</code>, lalu jalankan:</p>
<pre><code>sudo apt update
sudo apt install ufw -y</code></pre>

<p>Kalau instalasi berhasil, berarti tool UFW sudah tersedia di server.</p>

<h3>Cara mengecek apakah UFW sudah terinstall</h3>
<p>Setelah instalasi, Anda bisa cek statusnya dengan:</p>
<pre><code>sudo ufw status</code></pre>

<p>Kalau UFW baru saja diinstall, biasanya hasil awalnya adalah:</p>
<pre><code>Status: inactive</code></pre>

<p>Itu normal. Artinya UFW sudah terpasang, tetapi belum diaktifkan.</p>

<h3>Catatan penting sebelum enable UFW</h3>
<p><strong>Jangan langsung mengaktifkan UFW tanpa membuka port SSH lebih dulu.</strong> Kalau tidak, Anda bisa terkunci dari VPS.</p>
<p>Karena pada tahap ini kita baru fokus ke instalasi, aktivasi dan pembukaan port akan dibahas di lesson berikutnya.</p>

<div class="lesson-current-state-note"><strong>Peringatan penting:</strong> install UFW aman dilakukan sekarang, tetapi enable UFW harus hati-hati. Pastikan port SSH yang sedang Anda pakai sudah di-allow sebelum firewall diaktifkan.</div>

<h3>Contoh alur aman pada tahap ini</h3>
<ol>
  <li>Login ke VPS sebagai <code>deploy</code></li>
  <li>Install UFW dengan <code>sudo</code></li>
  <li>Cek status UFW</li>
  <li>Lanjut ke lesson berikutnya untuk membuka port yang dibutuhkan sebelum enable firewall</li>
</ol>

<h3>Command inti lesson ini</h3>
<pre><code>sudo apt update
sudo apt install ufw -y
sudo ufw status</code></pre>

<h3>Kesimpulan lesson ini</h3>
<p><strong>UFW adalah firewall sederhana bawaan Ubuntu yang membantu kita mengontrol port mana yang boleh diakses dari internet.</strong> Untuk VPS production, ini adalah lapisan keamanan dasar yang sangat penting.</p>
<p>Tanpa firewall, server bisa menjadi terlalu terbuka. Dengan UFW, kita bisa mulai membatasi akses secara lebih rapi dan aman. Setelah lesson ini, langkah berikutnya adalah membuka hanya port yang memang dibutuhkan sebelum firewall diaktifkan.</p>`,                   
          },
        ],
      },
      {
        id: "l2l-12",
        title: "Open ports yang dibutuhkan",
        duration: "16 min",
        summary:
          "Memahami port mana saja yang perlu dibuka di UFW, cara membuka port dengan aman, cara melihat rule yang sudah dibuka, dan cara memverifikasi konfigurasi firewall sebelum server dipakai lebih jauh.",      
        order: 4,
        materials: [
          {
            id: "l2l-12-html",
            title: "Open Port Server",
            type: "html",
            description: "Port minimum yang biasa dibutuhkan LMS.",
            htmlContent:
              `<h2>Open ports yang dibutuhkan</h2>
<p>Setelah UFW terinstall, langkah berikutnya bukan langsung mengaktifkan firewall, tetapi <strong>membuka hanya port yang memang dibutuhkan</strong>. Ini penting supaya saat firewall di-enable, server tetap bisa diakses untuk layanan yang memang kita perlukan, dan tetap tertutup untuk layanan yang tidak perlu.</p>

<h3>Kenapa port harus dibuka dulu sebelum enable UFW?</h3>
<p>Karena UFW bekerja dengan aturan akses. Kalau Anda mengaktifkan firewall sebelum membuka port penting seperti SSH, maka koneksi ke server bisa langsung terblokir. Itulah sebabnya lesson ini datang <strong>sebelum</strong> lesson enable firewall.</p>

<div class="lesson-current-state-note"><strong>Peringatan penting:</strong> jangan enable UFW sebelum port SSH yang sedang Anda pakai benar-benar sudah di-allow. Kalau tidak, Anda bisa terkunci dari VPS.</div>

<h3>Sesuai pola course ini: gunakan user deploy</h3>
<p>Mulai tahap ini, kita tetap mengikuti pola course sebelumnya: bekerja sebagai user <code>deploy</code> lalu memakai <code>sudo</code> saat perlu hak administratif.</p>

<h3>Port minimum yang biasanya dibutuhkan LMS</h3>
<p>Untuk skenario LMS seperti course ini, port minimum yang paling umum adalah:</p>
<ul>
  <li><strong>Port SSH</strong> — untuk login ke server. Dalam contoh course ini kita memakai port <code>2222</code>, tetapi sesuaikan dengan port SSH yang benar-benar Anda pakai.</li>
  <li><strong>Port 80</strong> — untuk HTTP.</li>
  <li><strong>Port 443</strong> — untuk HTTPS.</li>
</ul>

<h3>Contoh membuka port yang dibutuhkan</h3>
<pre><code>sudo ufw allow 2222
sudo ufw allow 80
sudo ufw allow 443</code></pre>

<p>Kalau server Anda memakai port SSH yang berbeda, misalnya <code>2203</code>, maka gunakan port yang sesuai:</p>
<pre><code>sudo ufw allow 2203</code></pre>

<h3>Prinsip penting: buka hanya yang perlu</h3>
<p>Jangan membuka terlalu banyak port tanpa alasan yang jelas. Semakin banyak port dibuka, semakin besar permukaan akses dari internet. Jadi pendekatan yang sehat adalah: <strong>buka hanya port yang memang dipakai</strong>.</p>

<h3>Cara melihat port yang sudah dibuka di UFW</h3>
<p>Setelah menambahkan rule, Anda bisa melihat daftar rule UFW dengan command berikut:</p>
<pre><code>sudo ufw status</code></pre>

<p>Kalau ingin tampilan yang lebih detail dan bernomor, gunakan:</p>
<pre><code>sudo ufw status numbered</code></pre>

<p>Contoh hasilnya bisa seperti ini:</p>
<pre><code>Status: active

To                         Action      From
--                         ------      ----
2222                       ALLOW       Anywhere
80                         ALLOW       Anywhere
443                        ALLOW       Anywhere</code></pre>

<h3>Kalau UFW belum di-enable, apakah rule tetap bisa ditambahkan?</h3>
<p>Ya, bisa. Ini justru workflow yang aman. Kita bisa menambahkan dulu semua rule yang dibutuhkan, lalu baru mengaktifkan firewall setelah semuanya siap.</p>

<h3>Cara membaca hasil <code>ufw status</code></h3>
<ul>
  <li><strong>To</strong> = port atau service tujuan</li>
  <li><strong>Action</strong> = apakah diizinkan atau ditolak</li>
  <li><strong>From</strong> = asal koneksi, biasanya <code>Anywhere</code></li>
</ul>

<h3>Cara memastikan port SSH yang benar-benar dipakai</h3>
<p>Sebelum membuka port SSH di UFW, pastikan Anda benar-benar tahu port SSH aktif yang sedang dipakai server. Jangan asal menebak. Kalau Anda sudah mengganti port SSH sebelumnya, maka port itulah yang harus di-allow.</p>
<p>Misalnya:</p>
<ul>
  <li>Kalau SSH masih di port default: buka <code>22</code></li>
  <li>Kalau SSH sudah dipindah: buka port baru tersebut, misalnya <code>2222</code> atau <code>2203</code></li>
</ul>

<h3>Contoh skenario yang aman</h3>
<ol>
  <li>Login ke server sebagai <code>deploy</code></li>
  <li>Tambahkan rule untuk port SSH yang aktif</li>
  <li>Tambahkan rule untuk HTTP dan HTTPS</li>
  <li>Cek ulang rule dengan <code>sudo ufw status</code></li>
  <li>Baru lanjut ke lesson enable firewall</li>
</ol>

<h3>Kalau salah membuka port, bagaimana mengeceknya?</h3>
<p>Gunakan:</p>
<pre><code>sudo ufw status numbered</code></pre>
<p>Dengan tampilan bernomor, Anda akan lebih mudah meninjau rule mana yang aktif. Ini sangat membantu sebelum firewall di-enable.</p>

<h3>Kesalahan umum yang perlu dihindari</h3>
<ul>
  <li>Membuka port SSH yang salah</li>
  <li>Lupa membuka port SSH sebelum enable firewall</li>
  <li>Mengira semua server selalu memakai port 22</li>
  <li>Membuka terlalu banyak port tanpa kebutuhan yang jelas</li>
  <li>Tidak mengecek ulang hasil rule dengan <code>ufw status</code></li>
</ul>

<h3>Command inti lesson ini</h3>
<pre><code>sudo ufw allow 2222
sudo ufw allow 80
sudo ufw allow 443
sudo ufw status
sudo ufw status numbered</code></pre>

<h3>Kesimpulan lesson ini</h3>
<p><strong>Sebelum firewall diaktifkan, port yang dibutuhkan harus dibuka lebih dulu.</strong> Untuk LMS, port minimum yang paling umum adalah port SSH, HTTP, dan HTTPS. Setelah rule dibuat, biasakan selalu mengeceknya kembali dengan <code>sudo ufw status</code> atau <code>sudo ufw status numbered</code> agar kita benar-benar tahu port mana yang sudah dibuka.</p>
<p>Setelah semua rule dasar siap, barulah kita aman masuk ke lesson berikutnya: mengaktifkan firewall.</p>`,        
          },
        ],
      },
      {
        id: "l2l-13",
        title: "Enable firewall",
        duration: "14 min",
        summary:
          "Memahami apa itu firewall, fungsi firewall di VPS, risiko jika server tanpa firewall, dan cara mengaktifkan UFW dengan aman setelah rule dasar selesai dibuat.",     
        order: 5,
        materials: [
          {
            id: "l2l-13-html",
            title: "Enable UFW",
            type: "html",
            description: "Mengaktifkan firewall Ubuntu.",
            htmlContent:
              `<h2>Enable firewall</h2>
<p>Setelah rule port selesai disiapkan, langkah berikutnya adalah <strong>mengaktifkan firewall</strong>. Pada course ini, firewall yang kita pakai adalah <strong>UFW</strong>.</p>

<h3>Apa itu firewall?</h3>
<p><strong>Firewall</strong> adalah lapisan pengaman jaringan yang membantu mengontrol koneksi masuk dan keluar dari server. Dummy paling mudahnya: kalau server adalah rumah, maka firewall adalah <strong>satpam di pintu gerbang</strong> yang memeriksa siapa yang boleh masuk dan lewat pintu mana.</p>
<p>Dalam konteks VPS, firewall membantu menentukan port mana yang boleh diakses dari internet dan mana yang harus ditutup.</p>

<h3>Fungsi firewall di VPS</h3>
<ul>
  <li><strong>Membatasi akses</strong> hanya ke port yang memang dibutuhkan</li>
  <li><strong>Mengurangi permukaan serangan</strong> dari internet</li>
  <li><strong>Membuat konfigurasi akses lebih rapi</strong> dan lebih terkontrol</li>
  <li><strong>Membantu hardening server</strong> sebagai lapisan keamanan dasar</li>
</ul>

<h3>Apa risiko jika server tanpa firewall?</h3>
<ul>
  <li><strong>Server bisa terlalu terbuka</strong> ke internet</li>
  <li><strong>Port yang tidak perlu</strong> berpotensi tetap bisa diakses</li>
  <li><strong>Lebih mudah menjadi target scanning</strong> dan probing otomatis</li>
  <li><strong>Kontrol akses menjadi kurang rapi</strong> karena tidak ada pembatas dasar di level OS</li>
</ul>

<h3>Sesuai pola course ini: gunakan user deploy</h3>
<p>Seperti lesson-lesson sebelumnya, aktivasi firewall dilakukan memakai user <code>deploy</code> lalu menjalankan <code>sudo</code> untuk command administratif.</p>

<h3>Kapan firewall boleh di-enable?</h3>
<p>Firewall <strong>baru boleh diaktifkan setelah</strong> rule penting selesai disiapkan, terutama:</p>
<ul>
  <li>port SSH yang sedang benar-benar dipakai</li>
  <li>port 80 untuk HTTP</li>
  <li>port 443 untuk HTTPS</li>
</ul>

<div class="lesson-current-state-note"><strong>Peringatan penting:</strong> jangan enable UFW sebelum port SSH yang aktif benar-benar sudah di-allow. Kalau tidak, Anda bisa terkunci dari VPS.</div>

<h3>Cara mengaktifkan UFW</h3>
<p>Login ke server sebagai <code>deploy</code>, lalu jalankan:</p>
<pre><code>sudo ufw enable</code></pre>

<p>Biasanya sistem akan menampilkan konfirmasi seperti ini:</p>
<pre><code>Command may disrupt existing ssh connections. Proceed with operation (y|n)?</code></pre>

<p>Kalau Anda sudah yakin port SSH yang benar sudah dibuka di lesson sebelumnya, jawab:</p>
<pre><code>y</code></pre>

<h3>Setelah enable, cek status firewall</h3>
<p>Setelah UFW aktif, segera cek statusnya:</p>
<pre><code>sudo ufw status</code></pre>

<p>Atau kalau ingin tampilan lebih detail dan bernomor:</p>
<pre><code>sudo ufw status numbered</code></pre>

<p>Contoh hasil yang sehat:</p>
<pre><code>Status: active

To                         Action      From
--                         ------      ----
2222                       ALLOW       Anywhere
80                         ALLOW       Anywhere
443                        ALLOW       Anywhere</code></pre>

<h3>Kalau port SSH Anda bukan 2222</h3>
<p>Sesuaikan dengan port SSH yang benar-benar sedang dipakai server Anda. Misalnya kalau Anda memakai <code>2203</code>, maka port itulah yang harus sudah di-allow sebelum firewall di-enable.</p>

<h3>Cara verifikasi setelah firewall aktif</h3>
<ol>
  <li>Pastikan <code>sudo ufw status</code> menunjukkan <code>Status: active</code></li>
  <li>Pastikan rule SSH, HTTP, dan HTTPS benar-benar muncul</li>
  <li>Jangan tutup session aktif terlalu cepat</li>
  <li>Coba buka session PuTTY baru untuk memastikan SSH tetap bisa dipakai</li>
</ol>

<h3>Urutan aman yang disarankan</h3>
<ol>
  <li>Login ke VPS sebagai <code>deploy</code></li>
  <li>Pastikan rule SSH, 80, dan 443 sudah dibuat</li>
  <li>Cek ulang dengan <code>sudo ufw status</code></li>
  <li>Aktifkan firewall dengan <code>sudo ufw enable</code></li>
  <li>Cek lagi status firewall</li>
  <li>Test koneksi SSH di jendela baru</li>
</ol>

<h3>Kesalahan umum yang perlu dihindari</h3>
<ul>
  <li>Enable firewall sebelum membuka port SSH</li>
  <li>Membuka port SSH yang salah</li>
  <li>Tidak mengecek ulang status firewall setelah enable</li>
  <li>Langsung logout tanpa menguji koneksi baru</li>
</ul>

<h3>Command inti lesson ini</h3>
<pre><code>sudo ufw enable
sudo ufw status
sudo ufw status numbered</code></pre>

<h3>Kesimpulan lesson ini</h3>
<p><strong>Firewall berfungsi sebagai lapisan pengendali akses jaringan di VPS.</strong> Tanpa firewall, server bisa menjadi terlalu terbuka ke internet. Dengan UFW, kita bisa membatasi akses hanya ke port yang memang dibutuhkan.</p>
<p>Namun aktivasi firewall harus dilakukan dengan hati-hati. Pastikan rule dasar terutama port SSH sudah benar-benar siap sebelum UFW di-enable.</p>`,        
          },
        ],
      },
      {
        id: "l2l-14",
        title: "Install Fail2Ban",
        duration: "14 min",
        summary:
          "Memahami apa itu Fail2Ban, seberapa penting penggunaannya untuk VPS, risiko jika tidak digunakan, dan cara menginstall serta mempersiapkannya dengan aman.",      
        order: 6,
        materials: [
          {
            id: "l2l-14-html",
            title: "Fail2Ban Dasar",
            type: "html",
            description: "Proteksi dasar brute-force pada server.",
            htmlContent:
              `<h2>Install Fail2Ban</h2>
<p>Setelah firewall aktif, langkah hardening berikutnya adalah menambahkan proteksi terhadap <strong>brute-force attack</strong>. Salah satu tool paling populer untuk ini di Linux adalah <strong>Fail2Ban</strong>.</p>

<h3>Apa itu Fail2Ban?</h3>
<p><strong>Fail2Ban</strong> adalah tool keamanan yang memonitor log server, lalu secara otomatis <strong>memblokir IP yang mencoba login berulang kali</strong> dan gagal.</p>
<p>Dummy paling mudahnya: kalau firewall adalah pintu, maka Fail2Ban adalah <strong>satpam yang mengingat siapa yang mencoba masuk berkali-kali dengan cara mencurigakan, lalu melarang orang itu masuk lagi</strong>.</p>

<h3>Bagaimana cara kerja Fail2Ban?</h3>
<p>Fail2Ban akan:</p>
<ul>
  <li>membaca log (misalnya log SSH),</li>
  <li>mendeteksi percobaan login gagal berulang,</li>
  <li>jika melewati batas tertentu, maka IP tersebut akan diblokir sementara.</li>
</ul>

<h3>Seberapa perlu menggunakan Fail2Ban?</h3>
<p>Untuk VPS yang terhubung ke internet publik, Fail2Ban sangat <strong>disarankan</strong>. Bahkan untuk server production, ini bisa dianggap sebagai salah satu layer keamanan dasar.</p>
<p>Kenapa? Karena hampir semua server di internet akan:</p>
<ul>
  <li>dipindai oleh bot,</li>
  <li>dicoba login berkali-kali,</li>
  <li>terutama pada layanan seperti SSH.</li>
</ul>

<h3>Apa risiko jika tidak menggunakan Fail2Ban?</h3>
<ul>
  <li><strong>Brute-force attack lebih mudah terjadi</strong> — bot bisa mencoba password berkali-kali tanpa diblokir.</li>
  <li><strong>Log server menjadi penuh</strong> oleh percobaan login gagal.</li>
  <li><strong>Beban server meningkat</strong> karena banyak request login tidak valid.</li>
  <li><strong>Risiko keamanan meningkat</strong> jika password lemah atau konfigurasi kurang aman.</li>
</ul>

<h3>Apakah firewall saja tidak cukup?</h3>
<p>Firewall seperti UFW hanya mengatur <strong>port mana yang boleh diakses</strong>. Tetapi firewall tidak tahu apakah login yang dilakukan itu valid atau mencurigakan.</p>
<p>Di sinilah Fail2Ban melengkapi firewall:</p>
<ul>
  <li>Firewall = kontrol akses port</li>
  <li>Fail2Ban = kontrol perilaku login</li>
</ul>

<h3>Sesuai pola course ini: gunakan user deploy</h3>
<p>Instalasi dilakukan menggunakan user <code>deploy</code> dengan bantuan <code>sudo</code>, bukan login langsung sebagai root.</p>

<h3>Cara install Fail2Ban</h3>
<p>Login ke server sebagai <code>deploy</code>, lalu jalankan:</p>
<pre><code>sudo apt update
sudo apt install fail2ban -y</code></pre>

<p>Jika instalasi berhasil, Fail2Ban akan otomatis terpasang di server.</p>

<h3>Cara mengecek status Fail2Ban</h3>
<p>Setelah instalasi, Anda bisa cek apakah service berjalan:</p>
<pre><code>sudo systemctl status fail2ban</code></pre>

<p>Atau cek apakah service aktif:</p>
<pre><code>sudo systemctl is-active fail2ban</code></pre>

<h3>Jika status masih inactive, cara mengaktifkan Fail2Ban</h3>
<p>Pada beberapa VPS, setelah install Fail2Ban, service belum otomatis berjalan. Jika hasil <code>is-active</code> menunjukkan <code>inactive</code>, maka Anda perlu menyalakannya secara manual.</p>

<p>Jalankan command berikut:</p>
<pre><code>sudo systemctl start fail2ban</code></pre>

<p>Setelah itu, cek kembali statusnya:</p>
<pre><code>sudo systemctl is-active fail2ban</code></pre>

<p>Jika berhasil, hasilnya akan menjadi:</p>
<pre><code>active</code></pre>

<h3>Supaya Fail2Ban otomatis aktif saat server restart</h3>
<p>Agar Fail2Ban tetap berjalan setiap kali VPS direstart, jalankan:</p>
<pre><code>sudo systemctl enable fail2ban</code></pre>

<div class="lesson-current-state-note"><strong>Catatan penting:</strong> tanpa <code>enable</code>, Fail2Ban hanya aktif sementara. Setelah reboot, service akan mati kembali.</div>

<h3>Catatan penting setelah instalasi</h3>
<p>Secara default, Fail2Ban sudah memiliki konfigurasi dasar. Namun biasanya pada tahap production, kita akan melakukan konfigurasi tambahan seperti:</p>
<ul>
  <li>menentukan berapa kali percobaan login gagal sebelum diblokir,</li>
  <li>berapa lama IP diblokir,</li>
  <li>dan service apa saja yang dimonitor.</li>
</ul>

<div class="lesson-current-state-note"><strong>Catatan penting:</strong> instalasi Fail2Ban adalah langkah awal. Konfigurasi lanjutan biasanya dilakukan setelah sistem dasar server sudah stabil.</div>

<h3>Contoh workflow yang benar</h3>
<ol>
  <li>Login ke VPS sebagai <code>deploy</code></li>
  <li>Install Fail2Ban dengan <code>sudo</code></li>
  <li>Cek status service</li>
  <li>Pastikan service berjalan normal</li>
  <li>Lanjut ke konfigurasi lanjutan di tahap berikutnya (opsional)</li>
</ol>

<h3>Command inti lesson ini</h3>
<pre><code>sudo apt update
sudo apt install fail2ban -y
sudo systemctl status fail2ban</code></pre>

<h3>Kesimpulan lesson ini</h3>
<p><strong>Fail2Ban adalah lapisan keamanan tambahan yang melindungi server dari brute-force attack.</strong> Tanpa Fail2Ban, server tetap bisa berjalan, tetapi lebih rentan terhadap percobaan login berulang dari bot internet.</p>
<p>Dengan Fail2Ban, server menjadi lebih “cerdas” dalam menghadapi percobaan login mencurigakan, sehingga keamanan VPS meningkat tanpa konfigurasi yang terlalu kompleks.</p>`,     
          },
        ],
      },
    ],
  },
  {
    id: "l2l-sec-3",
    title: "Module 3 — Install Node.js dan Nginx",
    summary:
      "Memasang stack runtime utama untuk menjalankan LMS berbasis Next.js.",
    order: 3,
    lessons: [
      {
        id: "l2l-15",
        title: "Install Node.js LTS",
        duration: "16 min",
        summary:
          "Memahami apa peran Node.js untuk LMS berbasis Next.js, kenapa versi LTS dipilih, apa yang terjadi jika server tidak memiliki Node.js, dan bagaimana cara menginstall Node.js dengan aman di VPS.",     
        order: 1,
        materials: [
          {
            id: "l2l-15-html",
            title: "Install Node.js",
            type: "html",
            description: "Panduan install Node.js dari NodeSource.",
            htmlContent:
              `<h2>Install Node.js</h2>
<p>Pada module ini, kita mulai masuk ke stack utama yang dibutuhkan untuk menjalankan LMS berbasis Next.js di VPS. Salah satu komponen paling penting adalah <strong>Node.js</strong>.</p>

<h3>Apa itu Node.js?</h3>
<p><strong>Node.js</strong> adalah runtime JavaScript yang memungkinkan JavaScript dijalankan di luar browser, termasuk di server. Jadi kalau sebelumnya JavaScript sering kita bayangkan hanya hidup di browser, dengan Node.js kita bisa menjalankan aplikasi JavaScript langsung di Ubuntu VPS.</p>

<h3>Peran Node.js secara keseluruhan untuk LMS ini</h3>
<p>Dalam context LMS yang sedang kita bangun, Node.js punya peran yang sangat penting karena frontend kita berbasis <strong>Next.js</strong>, dan Next.js membutuhkan lingkungan Node.js untuk bekerja dengan normal.</p>
<p>Secara praktis, Node.js dibutuhkan untuk:</p>
<ul>
  <li>menjalankan <code>npm install</code> untuk menginstall dependency project,</li>
  <li>menjalankan <code>npm run build</code> untuk membuat build production,</li>
  <li>menjalankan <code>npm run start</code> untuk menghidupkan aplikasi di server,</li>
  <li>menyediakan runtime agar aplikasi Next.js bisa berjalan.</li>
</ul>

<h3>Kenapa tidak cukup hanya upload source code?</h3>
<p>Karena source code Next.js tidak cukup hanya dipindahkan ke server. Server juga harus punya runtime yang bisa memahami dan menjalankan ekosistem JavaScript modern tersebut. Di sinilah Node.js menjadi fondasi utamanya.</p>

<h3>Apa yang terjadi jika tanpa Node.js?</h3>
<p>Kalau Node.js tidak ada di server, maka workflow deploy LMS akan berhenti di banyak titik penting. Misalnya:</p>
<ul>
  <li><code>npm install</code> tidak bisa dijalankan,</li>
  <li><code>npm run build</code> tidak bisa dijalankan,</li>
  <li><code>npm run start</code> tidak bisa dijalankan,</li>
  <li>aplikasi Next.js tidak punya runtime untuk berjalan.</li>
</ul>
<p>Artinya, tanpa Node.js, source code LMS Anda hanya menjadi file project saja di server, tetapi belum bisa benar-benar dijalankan sebagai aplikasi live.</p>

<h3>Kenapa memakai Node.js versi LTS?</h3>
<p>Untuk server production, kita lebih memilih versi <strong>LTS</strong> (<em>Long Term Support</em>) karena lebih stabil, lebih aman untuk jangka panjang, dan lebih cocok untuk deployment. Dalam course ini kita memakai pola install dari NodeSource agar versi Node.js yang dipasang lebih terkontrol.</p>

<h3>Sesuai pola course ini: gunakan user deploy</h3>
<p>Instalasi Node.js dilakukan memakai user <code>deploy</code> lalu menjalankan <code>sudo</code> untuk proses yang membutuhkan hak administratif. Jadi kita tetap tidak membangun kebiasaan login harian sebagai root.</p>

<h3>Cara install Node.js LTS</h3>
<p>Login ke VPS sebagai <code>deploy</code>, lalu jalankan:</p>
<pre><code>curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
sudo apt install nodejs -y</code></pre>

<p>Command pertama menambahkan repository NodeSource. Command kedua menginstall paket <code>nodejs</code>.</p>

<h3>Kenapa repository NodeSource dipakai?</h3>
<p>Karena pada banyak kasus, repository bawaan Ubuntu tidak selalu menyediakan versi Node.js yang paling sesuai dengan kebutuhan project modern. Dengan NodeSource, kita bisa mendapatkan versi Node.js yang lebih cocok untuk stack Next.js yang sedang dipakai.</p>

<h3>Hal yang perlu diperhatikan sebelum install</h3>
<ul>
  <li>Pastikan server sudah bisa mengakses internet</li>
  <li>Pastikan <code>curl</code> tersedia di server</li>
  <li>Pastikan package Ubuntu sudah cukup rapi dari lesson update sebelumnya</li>
</ul>

<h3>Jika command <code>curl</code> tidak ditemukan</h3>
<p>Pada beberapa VPS minimal, <code>curl</code> belum terinstall. Kalau muncul error seperti <code>curl: command not found</code>, install dulu dengan:</p>
<pre><code>sudo apt update
sudo apt install curl -y</code></pre>

<p>Setelah itu, ulangi command install Node.js tadi.</p>

<div class="lesson-current-state-note"><strong>Catatan penting:</strong> tanpa Node.js, LMS berbasis Next.js tidak akan bisa dibuild dan dijalankan di server. Jadi lesson ini adalah salah satu fondasi paling penting di tahap deployment.</div>

<h3>Setelah install selesai</h3>
<p>Setelah Node.js berhasil diinstall, langkah berikutnya adalah memverifikasi bahwa <code>node</code> dan <code>npm</code> benar-benar tersedia di server. Itu akan dibahas di lesson berikutnya.</p>

<h3>Command inti lesson ini</h3>
<pre><code>curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
sudo apt install nodejs -y</code></pre>

<h3>Kesimpulan lesson ini</h3>
<p><strong>Node.js adalah runtime utama yang membuat LMS berbasis Next.js bisa diinstall, dibuild, dan dijalankan di VPS.</strong> Tanpa Node.js, source code LMS tidak bisa berubah menjadi aplikasi live di server. Karena itu, install Node.js LTS adalah langkah fondasi yang wajib sebelum melanjutkan ke tahap build dan run aplikasi.</p>`,    
          },
        ],
      },
      {
        id: "l2l-16",
        title: "Verifikasi Node dan npm",
        duration: "5 min",
        summary:
          "Memastikan instalasi runtime berhasil sebelum deployment dilakukan.",
        order: 2,
        materials: [
          {
            id: "l2l-16-html",
            title: "Verifikasi Runtime",
            type: "html",
            description: "Cek versi Node.js dan npm.",
            htmlContent: `<h2>Verifikasi Node dan npm</h2>

<p>Setelah kita selesai menginstall Node.js, langkah berikutnya yang sangat penting adalah melakukan <strong>verifikasi</strong>.</p>

<p>Verifikasi ini memastikan bahwa Node.js dan npm benar-benar sudah terinstall dengan benar, bisa dijalankan, dan siap digunakan untuk menjalankan LMS kita.</p>

<h3>Kenapa perlu verifikasi?</h3>
<p>Banyak orang langsung lanjut ke step berikutnya tanpa verifikasi. Ini sering jadi sumber error di belakang.</p>
<ul>
  <li><strong>Memastikan instalasi berhasil</strong> — bukan hanya sekadar selesai tanpa error.</li>
  <li><strong>Memastikan command tersedia</strong> — Node dan npm bisa dipanggil dari terminal.</li>
  <li><strong>Menghindari error di step berikutnya</strong> — terutama saat install dependency project.</li>
  <li><strong>Memberi kepastian environment</strong> — kita tahu versi yang sedang dipakai.</li>
</ul>

<h3>Apa itu Node.js dan npm (untuk pemula)</h3>
<p><strong>Node.js</strong> adalah runtime JavaScript yang memungkinkan kita menjalankan JavaScript di server.</p>
<p><strong>npm (Node Package Manager)</strong> adalah tool untuk menginstall library/package yang dibutuhkan oleh aplikasi kita.</p>

<p>Dalam konteks LMS:</p>
<ul>
  <li>Node.js menjalankan backend atau build system</li>
  <li>npm menginstall dependency seperti framework, library, dan tools</li>
</ul>

<h3>Langkah 1: cek versi Node.js</h3>
<p>Jalankan command berikut:</p>
<pre><code>node -v</code></pre>

<p>Contoh output:</p>
<pre><code>v20.10.0</code></pre>

<p>Artinya:</p>
<ul>
  <li>Node.js sudah terinstall</li>
  <li>Versi yang aktif adalah versi tersebut</li>
</ul>

<h3>Langkah 2: cek versi npm</h3>
<p>Jalankan:</p>
<pre><code>npm -v</code></pre>

<p>Contoh output:</p>
<pre><code>10.2.3</code></pre>

<p>Artinya npm juga sudah siap digunakan.</p>

<h3>Langkah 3: cek lokasi instalasi (optional, untuk intermediate/expert)</h3>
<p>Untuk memastikan Node dan npm terinstall di path yang benar:</p>
<pre><code>which node
which npm</code></pre>

<p>Contoh output:</p>
<pre><code>/usr/bin/node
/usr/bin/npm</code></pre>

<p>Ini penting untuk memastikan tidak ada konflik instalasi (misalnya antara system install vs nvm).</p>

<h3>Langkah 4: cek versi detail Node.js</h3>
<p>Untuk melihat informasi lebih lengkap:</p>
<pre><code>node -p "process.versions"</code></pre>

<p>Ini biasanya akan menampilkan informasi seperti:</p>
<pre><code>{
  node: '20.x.x',
  v8: '...',
  uv: '...',
  openssl: '...'
}</code></pre>

<p>Untuk pemula, ini tidak wajib dipahami sekarang, tetapi bagus untuk diketahui.</p>

<h3>Bagaimana jika command tidak dikenali?</h3>
<p>Jika Anda mendapatkan error seperti:</p>
<pre><code>command not found: node</code></pre>

<p>Artinya Node.js belum terinstall dengan benar atau PATH belum terbaca.</p>

<p>Solusi umum:</p>
<ul>
  <li>Pastikan instalasi Node.js sudah selesai tanpa error</li>
  <li>Logout lalu login ulang ke server</li>
  <li>Cek kembali dengan <code>node -v</code></li>
</ul>

<h3>Bagaimana jika npm tidak ada?</h3>
<p>Jika <code>node -v</code> berhasil tetapi <code>npm -v</code> gagal:</p>
<ul>
  <li>Instalasi Node.js kemungkinan tidak lengkap</li>
  <li>Gunakan installer resmi Node.js (LTS) yang sudah include npm</li>
</ul>

<h3>Versi berapa yang sebaiknya digunakan?</h3>
<p>Untuk production, gunakan versi <strong>LTS (Long Term Support)</strong>.</p>

<p>Contoh:</p>
<ul>
  <li>Node.js 18 LTS</li>
  <li>Node.js 20 LTS</li>
</ul>

<p>Hindari versi experimental untuk server production.</p>

<h3>Apakah perlu update Node.js sekarang?</h3>
<p>Tidak perlu langsung update jika versi yang terinstall sudah LTS dan stabil.</p>

<h3>Ringkasan verifikasi cepat</h3>
<pre><code>node -v
npm -v
which node
which npm</code></pre>

<p>Jika semua command di atas berjalan tanpa error, berarti environment Node.js Anda sudah siap.</p>

<h3>Kesimpulan</h3>
<p>Verifikasi Node.js dan npm adalah langkah sederhana tetapi sangat penting.</p>
<p>Dengan memastikan versi, lokasi, dan availability command, kita menghindari banyak error di tahap berikutnya.</p>
<p>Di lesson berikutnya, kita akan mulai menggunakan Node.js untuk menjalankan aplikasi LMS.</p>`,    
          },
        ],
      },
      {
        id: "l2l-17",
        title: "Install Nginx",
        duration: "7 min",
        summary:
          "Memasang web server yang akan menjadi reverse proxy untuk LMS.",
        order: 3,
        materials: [
          {
            id: "l2l-17-html",
            title: "Install Nginx",
            type: "html",
            description: "Setup awal Nginx untuk production.",
            htmlContent: `<h2>Install Nginx</h2>
<p>Setelah Node.js terinstall, langkah berikutnya adalah memasang <strong>Nginx</strong>. Dalam konteks LMS ini, Nginx akan menjadi web server yang menerima request dari browser, lalu nantinya meneruskan request tersebut ke aplikasi LMS yang berjalan di port internal.</p>

<p>Untuk pemula, bayangkan Nginx sebagai <strong>pintu depan website</strong>. Orang luar masuk dari browser ke Nginx, lalu Nginx meneruskan ke aplikasi kita di dalam server.</p>

<p>Untuk yang sudah lebih advance, Nginx di sini akan berperan sebagai <strong>web server</strong> dan <strong>reverse proxy</strong> untuk aplikasi Node.js / Next.js.</p>

<h3>Kenapa perlu Nginx?</h3>
<ul>
  <li><strong>Membuka website ke publik</strong> dengan cara yang lebih standar.</li>
  <li><strong>Meneruskan request</strong> ke aplikasi LMS yang berjalan di port internal seperti <code>3000</code>.</li>
  <li><strong>Memudahkan domain dan SSL</strong> di langkah berikutnya.</li>
  <li><strong>Lebih cocok untuk production mindset</strong> dibanding langsung mengekspos aplikasi Node.js ke internet.</li>
</ul>

<h3>Langkah 1: cek apakah Nginx sudah ada</h3>
<p>Sebelum install, cek dulu apakah Nginx sudah terpasang:</p>
<pre><code>nginx -v</code></pre>

<p>Kalau Nginx sudah ada, biasanya akan muncul output seperti:</p>
<pre><code>nginx version: nginx/1.18.0 (Ubuntu)</code></pre>

<p>Kalau command tidak dikenali, berarti Nginx belum terinstall dan kita perlu memasangnya.</p>

<h3>Langkah 2: install Nginx jika belum ada</h3>
<p>Gunakan command berikut:</p>
<pre><code>sudo apt install nginx -y</code></pre>

<p>Kalau package belum ditemukan, refresh repository Ubuntu terlebih dahulu:</p>
<pre><code>sudo apt update</code></pre>

<p>Lalu jalankan lagi:</p>
<pre><code>sudo apt install nginx -y</code></pre>

<h3>Langkah 3: verifikasi binary Nginx</h3>
<p>Setelah install selesai, cek lagi:</p>
<pre><code>nginx -v</code></pre>

<p>Kalau versi muncul, berarti paket Nginx sudah terinstall dengan benar.</p>

<h3>Langkah 4: cek status service Nginx</h3>
<p>Karena Nginx adalah service sistem, kita juga perlu memeriksa apakah service-nya berhasil berjalan:</p>
<pre><code>sudo systemctl status nginx</code></pre>

<p>Kalau normal, biasanya akan terlihat status seperti:</p>
<pre><code>Active: active (running)</code></pre>

<p>Namun, pada kasus nyata di VPS, ada kemungkinan Nginx <strong>sudah terinstall</strong> tetapi <strong>gagal start</strong>.</p>

<h3>Kasus nyata: Nginx terinstall, tetapi service gagal start</h3>
<p>Contoh kasus yang bisa terjadi:</p>
<pre><code>nginx -v
nginx version: nginx/1.18.0 (Ubuntu)</code></pre>

<p>Tetapi saat dicek:</p>
<pre><code>sudo systemctl status nginx</code></pre>

<p>Muncul indikasi seperti:</p>
<pre><code>Active: failed (Result: exit-code)</code></pre>

<p>Kalau ini terjadi, artinya masalahnya bukan di instalasi paket, tetapi biasanya di <strong>konfigurasi</strong> atau <strong>port bentrok dengan service lain</strong>.</p>

<h3>Langkah diagnosis yang disarankan</h3>
<p>Untuk melihat apakah port HTTP/HTTPS sedang dipakai service lain, jalankan:</p>
<pre><code>sudo ss -tulpn | grep ':80\\|:443'</code></pre>

<p>Kalau pada output terlihat Apache2 memakai port 80, misalnya seperti ini:</p>
<pre><code>tcp   LISTEN 0      128      0.0.0.0:80      0.0.0.0:*    users:(("apache2",pid=4497,fd=3),("apache2",pid=4495,fd=3))</code></pre>

<p>Artinya, <strong>Apache2 sedang aktif dan sudah mengambil port 80</strong>, sehingga Nginx gagal start karena tidak bisa memakai port yang sama.</p>

<p>Sebelum start ulang Nginx, cek juga syntax konfigurasi Nginx:</p>
<pre><code>sudo nginx -t</code></pre>

<p>Kalau output menunjukkan syntax OK, maka fokus masalahnya memang biasanya bentrok port.</p>

<h3>Resolusi kasus: Apache2 memakai port 80</h3>
<p>Kalau memang ingin memakai <strong>Nginx sebagai web server utama</strong> untuk LMS ini, maka Apache2 perlu dihentikan dan dinonaktifkan.</p>

<p>Gunakan alur berikut:</p>
<pre><code>sudo ss -tulpn | grep ':80\\|:443'

sudo nginx -t

sudo systemctl stop apache2
sudo systemctl disable apache2
sudo systemctl start nginx
sudo systemctl status nginx</code></pre>

<p>Setelah itu, cek lagi status Nginx. Kalau berhasil, status biasanya berubah menjadi <code>active (running)</code>.</p>

<h3>Apa fungsi Apache2 yang di-disable itu?</h3>
<p><strong>Apache2</strong> adalah web server, sama seperti Nginx. Fungsinya juga bisa melayani website, menerima request HTTP, dan menampilkan aplikasi ke internet.</p>

<p>Masalahnya, dalam satu server, dua web server tidak bisa memakai port publik yang sama secara bersamaan, misalnya sama-sama ingin memakai port <code>80</code>.</p>

<p>Jadi saat Apache2 di-disable dalam lesson ini, maksudnya adalah <strong>kita memilih Nginx sebagai web server utama</strong> agar tidak bentrok.</p>

<h3>Apa dampaknya jika Apache2 di-disable?</h3>
<ul>
  <li><strong>Website atau service yang sebelumnya dilayani Apache2 akan berhenti dilayani oleh Apache2</strong>.</li>
  <li><strong>Port 80 menjadi kosong</strong> sehingga bisa dipakai Nginx.</li>
  <li><strong>Tidak ada dampak negatif</strong> untuk LMS ini selama memang kita memilih Nginx sebagai web server utama.</li>
  <li><strong>Kalau server masih dipakai untuk website lain yang bergantung pada Apache2</strong>, maka website tersebut bisa ikut terganggu. Karena itu, pastikan Apache2 memang tidak sedang dipakai untuk kebutuhan lain.</li>
</ul>

<p>Dalam flow course ini, kita memang sedang membangun stack deployment berbasis <strong>Nginx + Node.js</strong>, jadi menonaktifkan Apache2 adalah langkah yang wajar bila Apache2 hanya menjadi pengganggu port.</p>

<h3>Versi video</h3>
<p>Kalau ingin melihat panduan pendamping dalam bentuk video, gunakan link berikut:</p>
<p><a href="https://youtu.be/uOeAt_woF_c?si=v5zNPGajvaOKYyrJ" target="_blank" rel="noopener noreferrer">Tonton video pendamping lesson Install Nginx</a></p>

<div class="lesson-current-state-note"><strong>Catatan course:</strong> fokus lesson ini bukan hanya install Nginx, tetapi juga memahami cara memeriksa status, mendeteksi konflik port, dan menyelesaikan kasus nyata saat Nginx gagal start karena Apache2 sudah lebih dulu memakai port 80.</div>

<h3>Kesimpulan lesson ini</h3>
<p>Nginx adalah bagian penting dari deployment LMS di VPS. Yang perlu kita pelajari bukan hanya cara menginstallnya, tetapi juga cara <strong>melihat statusnya</strong>, cara <strong>menguji konfigurasinya</strong>, dan cara <strong>menyelesaikan konflik port</strong> bila ada web server lain seperti Apache2 yang sudah aktif lebih dulu.</p>

<p>Dengan begitu, kita tidak hanya berhasil install, tetapi juga benar-benar mengerti kenapa service bisa gagal start dan bagaimana cara memulihkannya.</p>`,     
          },
        ],
      },
      {
        id: "l2l-18",
        title: "Test Nginx di browser",
        duration: "12 min",
        summary:
          "Memastikan Nginx aktif dan bisa diakses sebelum konfigurasi domain dilakukan.",
        order: 4,
        materials: [
          {
            id: "l2l-18-html",
            title: "Test Nginx",
            type: "html",
            description: "Cek halaman default Nginx dari IP VPS.",
            htmlContent: `<h2>Test Nginx di browser</h2>
<p>Setelah Nginx berhasil diinstall dan service-nya aktif, langkah berikutnya adalah mengujinya langsung dari browser. Ini penting supaya kita tahu bahwa web server benar-benar bisa diakses dari luar server, bukan hanya terlihat aktif dari terminal.</p>

<p>Untuk pemula, anggap langkah ini sebagai <strong>tes pintu depan website</strong>. Kalau browser bisa menampilkan halaman default Nginx, berarti server sudah siap masuk ke tahap berikutnya seperti reverse proxy, domain, dan SSL.</p>

<p>Untuk yang sudah lebih advance, ini adalah verifikasi sederhana bahwa:</p>
<ul>
  <li>service Nginx benar-benar berjalan,</li>
  <li>port HTTP bisa diakses,</li>
  <li>server merespons request dari jaringan luar,</li>
  <li>dan belum ada masalah besar di layer awal web serving.</li>
</ul>

<h3>Yang perlu dipastikan sebelum test di browser</h3>
<p>Sebelum membuka browser, cek dulu status Nginx:</p>
<pre><code>sudo systemctl status nginx</code></pre>

<p>Kalau normal, biasanya akan terlihat status seperti:</p>
<pre><code>Active: active (running)</code></pre>

<p>Kalau Nginx belum aktif, jalankan:</p>
<pre><code>sudo systemctl start nginx</code></pre>

<p>Lalu cek lagi:</p>
<pre><code>sudo systemctl status nginx</code></pre>

<h3>Cek syntax konfigurasi Nginx</h3>
<p>Sebelum test dari browser, biasakan juga mengecek konfigurasi Nginx:</p>
<pre><code>sudo nginx -t</code></pre>

<p>Kalau hasilnya menunjukkan syntax OK dan test successful, berarti konfigurasi dasar Nginx aman untuk dipakai.</p>

<h3>Langkah utama: buka IP VPS di browser</h3>
<p>Setelah itu, buka browser di komputer Anda, lalu akses IP public VPS:</p>
<pre><code>http://IP_VPS_ANDA</code></pre>

<p>Contoh:</p>
<pre><code>http://123.123.123.123</code></pre>

<p>Kalau semua normal, browser biasanya menampilkan <strong>halaman default Nginx</strong>. Ini adalah tanda yang sangat bagus, karena artinya:</p>
<ul>
  <li>Nginx berhasil berjalan,</li>
  <li>port HTTP terbuka dan bisa diakses,</li>
  <li>server sudah siap untuk konfigurasi berikutnya.</li>
</ul>

<h3>Bagaimana kalau halaman tidak muncul?</h3>
<p>Kalau browser tidak menampilkan halaman default Nginx, jangan langsung panik. Cek beberapa hal berikut secara berurutan.</p>

<h4>1. Pastikan Nginx benar-benar running</h4>
<pre><code>sudo systemctl status nginx</code></pre>

<h4>2. Pastikan tidak ada konflik port 80 atau 443</h4>
<pre><code>sudo ss -tulpn | grep ':80\\|:443'</code></pre>

<p>Kalau sebelumnya Apache2 sempat aktif, pastikan Apache2 sudah tidak lagi memakai port 80.</p>

<h4>3. Pastikan konfigurasi Nginx valid</h4>
<pre><code>sudo nginx -t</code></pre>

<h4>4. Restart Nginx jika perlu</h4>
<pre><code>sudo systemctl restart nginx</code></pre>

<p>Lalu cek lagi statusnya:</p>
<pre><code>sudo systemctl status nginx</code></pre>

<h4>5. Test dari browser lagi</h4>
<pre><code>http://IP_VPS_ANDA</code></pre>

<h3>Troubleshooting nyata: Nginx aktif, tetapi browser tetap tidak bisa dibuka</h3>
<p>Dalam praktik nyata, ada kasus seperti ini:</p>
<ul>
  <li><code>sudo systemctl status nginx</code> sudah menunjukkan <strong>Active: active (running)</strong></li>
  <li>bahkan ada log seperti <code>Started A high performance web server and a reverse proxy server</code></li>
  <li>tetapi saat IP VPS dibuka di browser, halaman tetap tidak muncul</li>
</ul>

<p>Kalau ini terjadi, artinya Nginx di dalam server kemungkinan besar sudah sehat, tetapi akses dari luar server masih terhalang.</p>

<h4>1. Kalau <code>systemctl status</code> tidak langsung kembali ke prompt</h4>
<p>Untuk pemula, ini sering terasa seperti error, padahal sebenarnya normal. Saat menjalankan:</p>
<pre><code>sudo systemctl status nginx</code></pre>

<p>Linux biasanya menampilkan output melalui pager. Karena itu terminal tidak langsung balik ke prompt. Kalau sudah selesai membaca, cukup tekan:</p>
<pre><code>q</code></pre>

<p>Kalau ingin status tampil tanpa masuk ke tampilan pager, gunakan:</p>
<pre><code>sudo systemctl status nginx --no-pager</code></pre>

<h4>2. Pastikan Nginx benar-benar listen di port web</h4>
<p>Gunakan command berikut:</p>
<pre><code>sudo ss -tulpn | grep ':80\\|:443'</code></pre>

<p>Command ini membantu melihat apakah port HTTP atau HTTPS sedang dipakai, dan oleh proses apa.</p>

<h4>3. Pastikan dari dalam VPS sendiri, Nginx memang merespons</h4>
<pre><code>curl -I http://localhost</code></pre>

<p>Kalau hasilnya <code>HTTP/1.1 200 OK</code>, berarti Nginx di sisi internal VPS sebenarnya sudah bekerja dengan baik.</p>

<h4>4. Cek firewall Ubuntu</h4>
<pre><code>sudo ufw status</code></pre>

<p>Kalau port <code>80</code> dan <code>443</code> belum diizinkan, browser dari luar bisa gagal mengakses server walaupun Nginx sebenarnya aktif.</p>

<h4>5. Buka akses web di firewall</h4>
<pre><code>sudo ufw allow 'Nginx Full'</code></pre>

<p>Rule ini biasanya membuka port HTTP dan HTTPS untuk Nginx. Setelah itu, cek lagi:</p>
<pre><code>sudo ufw status</code></pre>

<p>Kalau sudah benar, coba buka lagi:</p>
<pre><code>http://IP_VPS_ANDA</code></pre>

<h3>Apakah perlu install browser di VPS?</h3>
<p>Tidak perlu. Yang kita uji di lesson ini adalah akses dari <strong>browser di komputer kita</strong> menuju VPS melalui jaringan internet.</p>

<p>Jadi tidak ada browser khusus yang perlu diinstall di Ubuntu server hanya untuk test ini.</p>

<h3>Verifikasi tambahan untuk intermediate dan expert</h3>
<p>Kalau ingin verifikasi dari sisi terminal server, Anda bisa cek apakah Nginx sedang listen di port HTTP:</p>
<pre><code>sudo ss -tulpn | grep ':80\\|:443'</code></pre>

<p>Kalau Nginx aktif, biasanya akan terlihat bahwa proses Nginx sedang listen di port <code>80</code>, dan nanti juga bisa di port <code>443</code> setelah SSL dipasang.</p>

<h3>Versi video</h3>
<p>Kalau ingin melihat materi pendamping dalam bentuk video, putar video berikut:</p>
<div class="lesson-video-embed">
  <iframe
    width="560"
    height="315"
    src="https://www.youtube.com/embed/uOeAt_woF_c?si=v5zNPGajvaOKYyrJ"
    title="Test Nginx di browser - video pendamping"
    loading="lazy"
    referrerpolicy="strict-origin-when-cross-origin"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
  ></iframe>
</div>

<div class="lesson-current-state-note"><strong>Catatan course:</strong> target lesson ini bukan sekadar melihat halaman Nginx muncul, tetapi memahami bahwa browser test adalah bukti bahwa web server sudah benar-benar bisa dijangkau dari luar. Ini sangat penting sebelum kita lanjut ke domain, reverse proxy, dan SSL.</div>

<h3>Ringkasan alur aman</h3>
<pre><code>sudo systemctl status nginx
q
sudo systemctl status nginx --no-pager
sudo nginx -t
sudo ss -tulpn | grep ':80\\|:443'
curl -I http://localhost
sudo ufw status
sudo ufw allow 'Nginx Full'
http://IP_VPS_ANDA</code></pre>

<h3>Kesimpulan lesson ini</h3>
<p>Kalau halaman default Nginx berhasil muncul di browser, berarti server web Anda sudah berada di jalur yang benar. Ini adalah checkpoint penting sebelum LMS benar-benar diarahkan ke domain dan aplikasi Node.js di belakang Nginx.</p>

<p>Dengan kata lain, lesson ini membantu kita memastikan bahwa <strong>Nginx bukan hanya terinstall, tetapi juga benar-benar hidup dan bisa diakses dari luar</strong>.</p>`, 
          },
        ],
      },
    ],
  },
  {
    id: "l2l-sec-4",
    title: "Module 4 — Deploying the LMS",
    summary:
      "Memindahkan source code dari localhost ke VPS dan menjalankannya pertama kali.",
    order: 4,
    lessons: [
      {
        id: "l2l-19",
        title: "Upload source code dari localhost",
        duration: "18 min",
        summary:
          "Memindahkan source code dari komputer lokal ke VPS dengan cara yang benar dan aman, termasuk verifikasi file, struktur folder, dan troubleshooting umum.",        
        order: 1,
        materials: [
          {
            id: "l2l-19-html",
            title: "Transfer Source Code",
            type: "html",
            description: "Pilihan umum untuk memindahkan source code ke VPS.",
            htmlContent: `<h2>Upload Source Code dari Localhost ke VPS</h2>

<p>Setelah server siap (Node.js dan Nginx sudah berjalan), langkah berikutnya adalah memindahkan source code aplikasi LMS dari komputer lokal ke VPS.</p>

<p>Untuk pemula, ini berarti: <strong>meng-copy project dari laptop ke server</strong>.</p>

<p>Untuk yang lebih advance, ini adalah bagian dari proses deployment: memindahkan codebase ke environment production.</p>

<h3>Kenapa perlu upload source code?</h3>
<ul>
  <li><strong>Aplikasi hanya bisa berjalan jika code ada di server</strong></li>
  <li><strong>Server tidak otomatis punya code dari localhost</strong></li>
  <li><strong>Langkah awal sebelum install dependency dan run aplikasi</strong></li>
</ul>

<h3>Metode upload yang umum</h3>
<ul>
  <li>SCP (Secure Copy)</li>
  <li>SFTP (via tools seperti WinSCP / FileZilla)</li>
  <li>Git clone (untuk workflow yang lebih advanced)</li>
</ul>

<p>Di lesson ini kita fokus ke metode yang paling mudah: <strong>SCP</strong>.</p>

<h3>Langkah 1: pastikan folder project di localhost</h3>
<p>Pastikan Anda tahu lokasi project di komputer Anda.</p>

<p>Contoh:</p>
<pre><code>C:\\projects\\lms</code></pre>

<h3>Langkah 2: upload menggunakan SCP</h3>
<p>Dari terminal lokal (bukan VPS), jalankan:</p>

<pre><code>scp -r ./lms deploy@IP_VPS_ANDA:/home/deploy/</code></pre>

<p>Penjelasan:</p>
<ul>
  <li><code>-r</code> → recursive (copy semua folder)</li>
  <li><code>./lms</code> → folder lokal</li>
  <li><code>deploy@IP</code> → user VPS</li>
  <li><code>/home/deploy</code> → tujuan di VPS</li>
</ul>

<h3>Flow 1: upload dengan password</h3>
<p>Kalau VPS Anda masih menggunakan login password biasa, saat menjalankan SCP biasanya Anda akan diminta memasukkan password user tujuan.</p>

<p>Contohnya:</p>
<pre><code>scp -r ./lms deploy@IP_VPS_ANDA:/home/deploy/</code></pre>

<p>Lalu terminal bisa menampilkan prompt seperti:</p>
<pre><code>deploy@IP_VPS_ANDA's password:</code></pre>

<p>Masukkan password user <code>deploy</code>, lalu proses upload akan berjalan.</p>

<p>Untuk pemula, ini normal. Jadi benar, walaupun command SCP tidak menuliskan password di dalam command, autentikasi tetap terjadi melalui password SSH.</p>

<h3>Flow 2: upload dengan SSH key</h3>
<p>Untuk workflow yang lebih aman dan lebih nyaman, kita bisa menggunakan <strong>SSH key</strong>. Dengan metode ini, SCP tidak perlu meminta password setiap kali, selama key sudah terpasang dengan benar di server.</p>

<p>Kalau key default Anda sudah aktif di sistem, biasanya cukup:</p>
<pre><code>scp -r ./lms deploy@IP_VPS_ANDA:/home/deploy/</code></pre>

<p>Kalau ingin menentukan file key secara eksplisit, gunakan:</p>
<pre><code>scp -i ~/.ssh/id_rsa -r ./lms deploy@IP_VPS_ANDA:/home/deploy/</code></pre>

<p>Di beberapa sistem modern, nama file key bisa juga berupa <code>id_ed25519</code>. Jadi sesuaikan dengan key yang Anda miliki.</p>

<p>Untuk learner yang sudah lebih advance, metode SSH key sangat direkomendasikan karena:</p>
<ul>
  <li>lebih aman dibanding password biasa,</li>
  <li>lebih cepat untuk workflow berulang,</li>
  <li>lebih cocok untuk deployment production.</li>
</ul>

<h3>Flow 3: upload jika SSH memakai port custom</h3>
<p>Dalam banyak VPS, SSH tidak selalu memakai port default <code>22</code>. Ada yang memakai port custom, misalnya <code>2203</code>.</p>

<p>Kalau SSH Anda memakai port custom, maka command SCP juga harus ikut memakai port tersebut.</p>

<p>Contohnya:</p>
<pre><code>scp -P 2203 -r ./lms deploy@IP_VPS_ANDA:/home/deploy/</code></pre>

<p>Perhatikan bahwa untuk SCP, option port menggunakan huruf besar <code>-P</code>, bukan huruf kecil.</p>

<p>Kalau Anda memakai SSH key sekaligus port custom, bentuknya bisa seperti ini:</p>
<pre><code>scp -P 2203 -i ~/.ssh/id_rsa -r ./lms deploy@IP_VPS_ANDA:/home/deploy/</code></pre>

<p>Ini adalah kombinasi yang sangat umum untuk server production.</p>

<h3>Kalau SCP belum ada?</h3>
<p>Di Linux dan macOS biasanya sudah ada.</p>

<p>Kalau di Windows:</p>
<ul>
  <li>Gunakan PowerShell modern</li>
  <li>Atau gunakan Git Bash</li>
</ul>

<h3>Cara cek dulu apakah koneksi SSH ke VPS sudah benar</h3>
<p>Sebelum upload dengan SCP, sangat disarankan untuk test koneksi SSH terlebih dahulu.</p>

<p>Kalau memakai port default:</p>
<pre><code>ssh deploy@IP_VPS_ANDA</code></pre>

<p>Kalau memakai port custom <code>2203</code>:</p>
<pre><code>ssh -p 2203 deploy@IP_VPS_ANDA</code></pre>

<p>Kalau SSH berhasil login, biasanya SCP juga akan jauh lebih mudah berhasil. Ini membantu kita memastikan bahwa user, password, key, dan port memang sudah benar sebelum mulai upload file.</p>

<h3>Langkah 3: verifikasi file di VPS</h3>
<p>Masuk ke VPS:</p>
<pre><code>ssh deploy@IP_VPS_ANDA</code></pre>

<p>Lalu cek folder:</p>
<pre><code>ls -la</code></pre>

<p>Masuk ke project:</p>
<pre><code>cd lms</code></pre>

<p>Cek isi folder:</p>
<pre><code>ls -la</code></pre>

<p>Kalau file muncul, berarti upload berhasil.</p>

<h3>Langkah 4: cek ukuran dan struktur (optional)</h3>
<pre><code>du -sh lms</code></pre>

<p>Ini membantu memastikan semua file ikut ter-copy.</p>

<h3>Troubleshooting umum</h3>

<h4>1. Permission denied</h4>
<p>Biasanya karena:</p>
<ul>
  <li>user salah</li>
  <li>password salah</li>
  <li>folder tujuan tidak punya izin tulis</li>
  <li>SSH key tidak cocok dengan server</li>
 </ul>
</ul>

<h4>2. Connection timeout</h4>
<p>Biasanya karena:</p>
<ul>
  <li>port SSH salah</li>
  <li>firewall blok</li>
  <li>IP VPS salah</li>
</ul>

<h4>3. SCP gagal karena SSH sebenarnya memakai port custom</h4>
<p>Ini kasus yang sangat sering terjadi. SSH bisa sukses di PuTTY karena Anda sudah mengisi port custom, misalnya <code>2203</code>, tetapi SCP gagal karena command masih mencoba port default <code>22</code>.</p>

<p>Solusinya, tambahkan port custom secara eksplisit:</p>
<pre><code>scp -P 2203 -r ./lms deploy@IP_VPS_ANDA:/home/deploy/</code></pre>

<h4>3. Upload sangat lama</h4>
<p>Biasanya karena:</p>
<ul>
  <li>banyak file kecil (node_modules)</li>
</ul>

<p>Solusi:</p>
<ul>
  <li>Jangan upload <code>node_modules</code></li>
  <li>Gunakan <code>.gitignore</code></li>
</ul>

<h4>4. Terminal meminta password terus walaupun merasa sudah pakai key</h4>
<p>Biasanya ini berarti key belum terbaca, nama file key salah, atau public key belum terpasang di server.</p>

<p>Coba tentukan key secara eksplisit:</p>
<pre><code>scp -i ~/.ssh/id_rsa -r ./lms deploy@IP_VPS_ANDA:/home/deploy/</code></pre>

<p>Kalau masih gagal, cek kembali konfigurasi SSH key di server.</p>
 
<h3>Best practice penting</h3>
<h3>Kenapa <code>node_modules</code> tidak boleh di-upload (real production rule)</h3>
<p>Ini adalah salah satu aturan penting dalam deployment Node.js yang sering dilewatkan pemula.</p>

<p>Saat kita bekerja di localhost, folder <code>node_modules</code> biasanya terbentuk setelah menjalankan <code>npm install</code>. Folder ini berisi semua dependency project. Walaupun terlihat praktis untuk langsung ikut di-copy ke VPS, dalam praktik production hal itu <strong>tidak disarankan</strong>.</p>

<p>Ada beberapa alasan penting:</p>
<ul>
  <li><strong>Environment lokal dan server bisa berbeda</strong> — misalnya localhost memakai Windows, sedangkan VPS memakai Ubuntu Linux. Beberapa package Node.js memiliki binary atau dependency native yang bisa berbeda antar sistem operasi.</li>
  <li><strong>Ukuran folder sangat besar</strong> — <code>node_modules</code> sering berisi ribuan file kecil. Ini membuat proses upload menjadi jauh lebih lama dan tidak efisien.</li>
  <li><strong>Lebih rawan error</strong> — dependency yang berhasil di localhost belum tentu sehat saat dipindahkan mentah-mentah ke server.</li>
  <li><strong>Bukan workflow production yang rapi</strong> — server seharusnya menginstall dependency sendiri berdasarkan <code>package.json</code> dan <code>package-lock.json</code>.</li>
</ul>

<p>Jadi, pola yang benar adalah:</p>
<ol>
  <li>Upload hanya source code project</li>
  <li>Jangan ikut upload <code>node_modules</code></li>
  <li>Masuk ke VPS</li>
  <li>Jalankan <code>npm install</code> langsung di VPS</li>
</ol>

<p>Contoh alur yang lebih tepat:</p>
<pre><code>scp -P 2203 -r ./lms deploy@IP_VPS_ANDA:/home/deploy/
ssh -p 2203 deploy@IP_VPS_ANDA
cd /home/deploy/lms
npm install</code></pre>

<p>Selain <code>node_modules</code>, biasanya folder hasil build seperti <code>.next</code>, <code>dist</code>, <code>build</code>, atau cache lain juga sebaiknya tidak ikut di-upload, kecuali memang ada workflow khusus yang sengaja mengharuskannya.</p>

<p>Untuk course ini, biasakan mindset berikut:</p>
<p><strong>Server bukan salinan mentah dari laptop kita. Server adalah environment baru yang harus menerima source code bersih, lalu membangun dependency sendiri.</strong></p>

<p>Itulah sebabnya rule <strong>“jangan upload node_modules”</strong> adalah salah satu kebiasaan penting yang membedakan workflow pemula dan workflow production yang lebih profesional.</p>

<h3>3 cara upload yang benar: SCP vs RSYNC vs ZIP</h3>
<p>Setelah memahami bahwa tidak semua file boleh ikut dikirim ke server, sekarang kita perlu mengenal tiga pendekatan upload yang paling umum. Ketiganya sama-sama bisa dipakai, tetapi masing-masing punya karakter yang berbeda.</p>

<h4>1. SCP — paling mudah untuk mulai</h4>
<p><strong>SCP</strong> adalah cara yang paling cepat dipahami oleh pemula. Konsepnya sederhana: copy folder atau file dari localhost ke VPS melalui koneksi SSH.</p>

<p>Contoh:</p>
<pre><code>scp -P 2203 -r ./lms deploy@IP_VPS_ANDA:/home/deploy/</code></pre>

<p>Kelebihan SCP:</p>
<ul>
  <li>mudah dipelajari,</li>
  <li>langsung tersedia di banyak sistem,</li>
  <li>cocok untuk upload awal yang sederhana.</li>
</ul>

<p>Kekurangan SCP:</p>
<ul>
  <li>tidak fleksibel untuk exclude file/folder tertentu,</li>
  <li>kurang efisien kalau project sering berubah,</li>
  <li>kurang nyaman untuk sinkronisasi berulang.</li>
</ul>

<h4>2. RSYNC — lebih rapi untuk workflow production</h4>
<p><strong>RSYNC</strong> sangat populer untuk deployment karena bisa melakukan sinkronisasi file dengan lebih efisien, termasuk mengecualikan folder seperti <code>node_modules</code> atau <code>.next</code>.</p>

<p>Contoh:</p>
<pre><code>rsync -avz -e "ssh -p 2203" \
  --exclude 'node_modules' \
  --exclude '.next' \
  --exclude 'dist' \
  ./lms/ deploy@IP_VPS_ANDA:/home/deploy/lms/</code></pre>

<p>Kelebihan RSYNC:</p>
<ul>
  <li>bisa exclude file/folder yang tidak perlu,</li>
  <li>lebih efisien untuk update berulang,</li>
  <li>lebih cocok untuk workflow production yang rapi.</li>
</ul>

<p>Kekurangan RSYNC:</p>
<ul>
  <li>sedikit lebih teknis untuk pemula,</li>
  <li>tidak selalu langsung tersedia di semua environment Windows tanpa tool tambahan.</li>
</ul>

<h4>3. ZIP — aman dan mudah dipahami</h4>
<p>Pendekatan ketiga adalah membuat arsip <code>.zip</code> dari source code yang sudah bersih, lalu mengupload satu file zip ke VPS, kemudian mengekstraknya di server.</p>

<p>Contoh alur:</p>
<pre><code>zip -r lms.zip lms -x "lms/node_modules/*" "lms/.next/*"
scp -P 2203 lms.zip deploy@IP_VPS_ANDA:/home/deploy/
ssh -p 2203 deploy@IP_VPS_ANDA
cd /home/deploy
unzip lms.zip</code></pre>

<p>Kelebihan ZIP:</p>
<ul>
  <li>lebih aman untuk pemula karena file yang dikirim hanya satu arsip,</li>
  <li>lebih mudah dikontrol isinya sebelum upload,</li>
  <li>cocok kalau ingin memastikan hanya source code bersih yang terkirim.</li>
</ul>

<p>Kekurangan ZIP:</p>
<ul>
  <li>butuh langkah tambahan zip dan unzip,</li>
  <li>kurang praktis untuk sinkronisasi berkali-kali.</li>
</ul>

<p>Untuk course ini, cara termudah untuk mulai adalah <strong>SCP</strong>. Tetapi untuk workflow yang lebih rapi dan lebih mendekati production, <strong>RSYNC</strong> biasanya lebih unggul. Sementara itu, <strong>ZIP</strong> adalah jalan tengah yang aman dan mudah dipahami oleh banyak learner.</p>

<h3>Daftar folder yang wajib di-exclude (Node.js &amp; Next.js)</h3>
<p>Setelah memahami cara upload yang benar, kita juga perlu tahu <strong>folder dan file mana yang sebaiknya tidak ikut dikirim ke VPS</strong>. Ini sangat penting agar upload tetap ringan, aman, dan sesuai workflow production.</p>

<h4>Minimal yang hampir selalu di-exclude</h4>
<p>Untuk project Node.js atau Next.js, tiga folder ini hampir selalu menjadi daftar paling dasar:</p>
<ul>
  <li><code>node_modules</code> — berisi dependency hasil <code>npm install</code> di lokal</li>
  <li><code>.next</code> — berisi hasil build Next.js</li>
  <li><code>dist</code> — berisi hasil build untuk beberapa jenis project</li>
</ul>

<p>Kenapa tiga folder ini sebaiknya tidak ikut di-upload?</p>
<ul>
  <li>ukurannya sering besar,</li>
  <li>isinya bisa berbeda antara Windows dan Linux,</li>
  <li>lebih aman dibangun ulang di VPS, bukan dipindahkan mentah dari localhost.</li>
</ul>

<h4>Daftar exclude yang sering direkomendasikan</h4>
<p>Selain tiga folder utama di atas, dalam banyak project production kita juga sering mengecualikan hal-hal berikut:</p>
<ul>
  <li><code>.git</code> — metadata repository Git, biasanya tidak dibutuhkan jika tidak deploy lewat Git langsung di server</li>
  <li><code>.env</code> — file sensitif yang sebaiknya dibuat langsung di server</li>
  <li><code>.env.local</code> dan file environment lokal lain — umumnya khusus untuk localhost</li>
  <li><code>coverage</code> — hasil test coverage, tidak dibutuhkan untuk runtime aplikasi</li>
  <li><code>.cache</code> — file cache lokal, tidak penting untuk deployment bersih</li>
  <li><code>logs</code> atau folder log lokal — tidak perlu ikut dari laptop ke server</li>
  <li><code>tmp</code> — folder sementara yang tidak perlu dibawa ke production</li>
  <li><code>out</code> — hasil output tertentu dari Next.js atau static export, tergantung workflow project</li>
</ul>

<p>Intinya, yang kita kirim ke VPS sebaiknya adalah <strong>source code bersih</strong>, bukan hasil build lokal, cache, atau file sensitif.</p>

<h4>Peran <code>.gitignore</code></h4>
<p>Dalam banyak project modern, file <code>.gitignore</code> bisa menjadi panduan awal yang sangat membantu untuk menentukan apa yang sebaiknya tidak ikut dikirim ke server.</p>

<p>Contoh isi <code>.gitignore</code> yang umum untuk project Node.js / Next.js:</p>
<pre><code>node_modules
.next
dist
.env
.env.local
coverage
.cache
logs
tmp
out</code></pre>

<p>Kalau suatu file atau folder sudah masuk ke <code>.gitignore</code>, itu sering menjadi sinyal bahwa item tersebut memang tidak perlu ikut ke VPS melalui workflow upload biasa.</p>

<p>Namun, ada satu hal penting: <strong>SCP tidak bisa membaca <code>.gitignore</code></strong>. Jadi walaupun project Anda sudah punya <code>.gitignore</code>, SCP tetap akan meng-copy semua file kecuali Anda sendiri yang membersihkannya atau memakai metode lain.</p>

<h4>Kalau ingin memakai rule dari <code>.gitignore</code>, gunakan apa?</h4>
<p>Kalau ingin pendekatan yang lebih production-grade, <strong>RSYNC</strong> jauh lebih cocok karena bisa membaca file exclude.</p>

<p>Contohnya:</p>
<pre><code>rsync -avz -e "ssh -p 2203" \
  --exclude-from='.gitignore' \
  ./lms/ deploy@IP_VPS_ANDA:/home/deploy/lms/</code></pre>

<p>Dengan pendekatan ini, learner tidak perlu menulis semua rule exclude satu per satu selama <code>.gitignore</code> project-nya memang sudah rapi.</p>

<h4>Rule sederhana yang mudah diingat</h4>
<p>Untuk lesson ini, biasakan prinsip berikut:</p>
<ul>
  <li><strong>Upload source code</strong></li>
  <li><strong>Jangan upload dependency lokal</strong></li>
  <li><strong>Jangan upload hasil build lokal</strong></li>
  <li><strong>Jangan upload file sensitif seperti <code>.env</code></strong></li>
  <li><strong>Gunakan <code>.gitignore</code> sebagai referensi awal</strong></li>
</ul>

<h3>Perbedaan command Linux vs PowerShell (multi-line rsync)</h3>
<p>Untuk learner yang menggunakan Windows + PuTTY, ada satu hal penting yang sering menyebabkan error saat menulis command panjang seperti <code>rsync</code>, yaitu perbedaan cara membuat multi-line command.</p>

<h4>Di Linux / macOS (bash)</h4>
<p>Pada terminal Linux atau macOS, kita bisa memecah command ke beberapa baris menggunakan karakter <code>\</code> di akhir baris.</p>

<pre><code>rsync -avz \\
  --exclude 'node_modules' \\
  --exclude '.next' \\
  --exclude 'dist' \\
  ./lms/ deploy@IP_VPS_ANDA:/home/deploy/lms/</code></pre>

<p>Karakter <code>\</code> ini berarti “lanjut ke baris berikutnya”.</p>

<h4>Di PowerShell (Windows)</h4>
<p>Di PowerShell, karakter <code>\</code> tidak berfungsi sebagai multi-line. Sebagai gantinya, PowerShell menggunakan <strong>backtick</strong>, yaitu karakter <code>&#96;</code>.</p>

<pre><code>rsync -avz -e "ssh -p 2203" &#96;
  --exclude "node_modules" &#96;
  --exclude ".next" &#96;
  --exclude "dist" &#96;
  ./lms/ deploy@IP_VPS_ANDA:/home/deploy/lms/</code></pre>

<p>Perhatikan hal penting berikut:</p>
<ul>
  <li>Backtick harus berada di akhir baris</li>
  <li>Tidak boleh ada spasi setelah backtick</li>
</ul>

<h4>Alternatif paling aman (satu baris)</h4>
<p>Kalau masih ragu atau sering error, gunakan command dalam satu baris:</p>

<pre><code>rsync -avz -e "ssh -p 2203" --exclude "node_modules" --exclude ".next" --exclude "dist" ./lms/ deploy@IP_VPS_ANDA:/home/deploy/lms/</code></pre>

<p>Ini biasanya lebih aman untuk pemula karena menghindari kesalahan format multi-line.</p>

<h4>Ringkasan perbedaan</h4>
<ul>
  <li><strong>Linux/macOS</strong> → gunakan <code>\</code> untuk multi-line</li>
  <li><strong>PowerShell</strong> → gunakan <code>&#96;</code> untuk multi-line</li>
  <li><strong>CMD Windows</strong> → tidak mendukung multi-line dengan cara ini</li>
</ul>

<p>Memahami perbedaan ini sangat penting agar command yang terlihat benar tidak gagal hanya karena perbedaan shell.</p>

<h3>Struktur folder yang benar di VPS untuk Node.js app</h3>
<p>Setelah source code berhasil dipindahkan ke server, kita juga perlu memahami <strong>di mana sebaiknya project disimpan</strong>. Ini terlihat sederhana, tetapi sangat berpengaruh pada kerapian deployment, permission, dan kemudahan maintenance.</p>

<h4>Pilihan yang aman untuk course ini</h4>
<p>Untuk workflow yang sedang kita bangun, lokasi yang aman dan natural adalah:</p>
<pre><code>/home/deploy/lms</code></pre>

<p>Kenapa ini pilihan yang baik?</p>
<ul>
  <li><strong>Sesuai dengan user yang dipakai</strong> — kita bekerja menggunakan user <code>deploy</code>, jadi project disimpan di home directory user tersebut.</li>
  <li><strong>Permission lebih aman</strong> — user <code>deploy</code> bisa membaca, menulis, dan menjalankan project tanpa harus memakai <code>sudo</code> terus-menerus.</li>
  <li><strong>Lebih rapi untuk maintenance</strong> — semua file aplikasi berada di tempat yang jelas.</li>
  <li><strong>Cocok untuk Node.js app</strong> — aplikasi tidak perlu dijalankan dari folder sistem sensitif.</li>
</ul>

<h4>Contoh struktur yang rapi</h4>
<pre><code>/home/deploy/
├── lms/
├── logs/
└── backups/</code></pre>

<p>Dengan pola seperti ini, learner bisa lebih mudah membedakan:</p>
<ul>
  <li>folder aplikasi utama,</li>
  <li>folder log,</li>
  <li>dan folder backup bila nanti dibutuhkan.</li>
</ul>

<h4>Kenapa tidak disarankan di <code>/root/</code>?</h4>
<p>Menyimpan aplikasi di <code>/root/</code> memang mungkin dilakukan, tetapi tidak disarankan untuk workflow normal. Folder ini milik user root dan terlalu sensitif untuk dipakai sebagai tempat kerja harian aplikasi.</p>

<p>Kalau aplikasi ditempatkan di sana, learner akan lebih sering tergoda memakai <code>sudo</code> atau bahkan menjalankan app sebagai root, padahal itu bukan kebiasaan yang baik untuk production.</p>

<h4>Kenapa tidak langsung di <code>/var/www/</code>?</h4>
<p>Folder <code>/var/www/</code> sering dipakai untuk website berbasis web server tradisional seperti Apache atau Nginx yang langsung melayani file web. Untuk Node.js app modern, terutama yang nanti dijalankan dengan process manager seperti PM2, menyimpan code di <code>/home/deploy/lms</code> biasanya terasa lebih natural dan lebih mudah dikelola.</p>

<h4>Rule sederhana yang mudah diingat</h4>
<ul>
  <li><strong>Jalankan app sebagai user biasa</strong>, bukan root</li>
  <li><strong>Simpan project di home directory user deploy</strong></li>
  <li><strong>Gunakan struktur folder yang mudah dipahami</strong></li>
</ul>

<p>Untuk course ini, kita gunakan pola yang sederhana dan aman:</p>
<pre><code>/home/deploy/lms</code></pre>

<p>Pola ini cukup bersih untuk belajar, cukup aman untuk production ringan, dan cukup rapi untuk dibawa ke workflow yang lebih enterprise di tahap berikutnya.</p>

<h3>Kenapa rsync tidak ada di Windows (dan solusinya)</h3>
<p>Saat mencoba menjalankan <code>rsync</code> di PowerShell, sebagian learner akan melihat error seperti:</p>
<pre><code>The term 'rsync' is not recognized as the name of a cmdlet</code></pre>

<p>Ini bukan kesalahan command. Di Windows, <strong>rsync memang tidak tersedia secara default</strong>. Berbeda dengan Linux atau macOS yang biasanya sudah memiliki <code>rsync</code> bawaan.</p>

<h4>Kenapa ini terjadi?</h4>
<ul>
  <li>PowerShell dan CMD tidak menyertakan <code>rsync</code> secara default</li>
  <li><code>rsync</code> adalah tool khas lingkungan Unix/Linux</li>
  <li>Karena itu, command yang valid di Linux bisa terlihat error di Windows</li>
</ul>

<h4>Solusi 1 — gunakan Git Bash (paling mudah)</h4>
<p>Jika Anda sudah menginstall Git di Windows, biasanya Anda juga memiliki Git Bash. Buka Git Bash, lalu jalankan:</p>
<pre><code>rsync -avz \\
  --exclude 'node_modules' \\
  --exclude '.next' \\
  ./lms/ deploy@IP_VPS_ANDA:/home/deploy/lms/</code></pre>

<p>Git Bash menyediakan environment yang lebih mirip Linux, sehingga command seperti <code>rsync</code> bisa digunakan dengan lebih natural.</p>

<h4>Solusi 2 — gunakan WSL (Windows Subsystem for Linux)</h4>
<p>Jika ingin environment yang benar-benar mirip server Linux, gunakan WSL. Setelah masuk ke WSL, install <code>rsync</code>:</p>
<pre><code>sudo apt update
sudo apt install rsync -y</code></pre>

<p>Setelah itu, jalankan command <code>rsync</code> seperti di Linux biasa.</p>

<h4>Solusi 3 — gunakan SCP (alternatif paling sederhana)</h4>
<p>Jika belum ingin menambah tool baru, gunakan <code>scp</code> yang sudah cukup untuk tahap awal:</p>
<pre><code>scp -P 2203 -r ./lms deploy@IP_VPS_ANDA:/home/deploy/</code></pre>

<p>Metode ini tidak sefleksibel <code>rsync</code>, tetapi cukup untuk upload pertama kali.</p>

<h4>Ringkasan pilihan</h4>
<ul>
  <li><strong>SCP</strong> → paling sederhana untuk mulai</li>
  <li><strong>Git Bash + rsync</strong> → lebih fleksibel tanpa setup berat</li>
  <li><strong>WSL + rsync</strong> → paling mendekati environment production</li>
</ul>

<p>Untuk learner Windows + PuTTY, memahami perbedaan ini sangat penting agar tidak merasa command salah, padahal sebenarnya hanya berbeda environment.</p>

<h3>Mapping path Windows ke WSL (biar tidak salah path)</h3>
<p>Saat menggunakan WSL, salah satu hal yang paling sering membuat learner bingung adalah perbedaan path antara Windows dan Linux.</p>

<h4>Contoh kasus</h4>
<p>Di Windows, project biasanya berada di:</p>
<pre><code>C:\\projects\\html\\lms</code></pre>

<p>Namun di dalam WSL, path tersebut berubah menjadi:</p>
<pre><code>/mnt/c/projects/html/lms</code></pre>

<p>Ini karena WSL melakukan mapping drive Windows ke dalam struktur Linux:</p>
<ul>
  <li><code>C:</code> → <code>/mnt/c</code></li>
  <li><code>D:</code> → <code>/mnt/d</code></li>
</ul>

<h4>Langkah yang benar sebelum menjalankan rsync</h4>
<p>Masuk ke folder project terlebih dahulu di WSL:</p>
<pre><code>cd /mnt/c/projects/html/lms</code></pre>

<p>Setelah itu, jalankan rsync dari dalam folder tersebut:</p>
<pre><code>rsync -avz \\
  --exclude 'node_modules' \\
  --exclude '.next' \\
  ./ deploy@IP_VPS_ANDA:/home/deploy/lms/</code></pre>

<h4>Alternatif tanpa cd</h4>
<p>Kalau tidak ingin berpindah folder, Anda juga bisa langsung menggunakan path lengkap:</p>
<pre><code>rsync -avz \\
  --exclude 'node_modules' \\
  /mnt/c/projects/html/lms/ \\
  deploy@IP_VPS_ANDA:/home/deploy/lms/</code></pre>

<h4>Kesalahan yang sering terjadi</h4>
<p>Banyak learner mencoba menggunakan path Windows langsung di WSL, seperti:</p>
<pre><code>C:\\projects\\html\\lms</code></pre>

<p>Ini tidak akan bekerja di WSL. Gunakan selalu format Linux seperti <code>/mnt/c/...</code>.</p>

<h4>Tips performa (optional)</h4>
<p>WSL tetap bisa membaca file dari <code>/mnt/c</code>, tetapi untuk project besar, akses bisa sedikit lebih lambat dibanding file yang berada langsung di dalam filesystem Linux WSL.</p>

<p>Untuk penggunaan lebih lanjut, Anda bisa mempertimbangkan menyimpan project di:</p>
<pre><code>/home/username/lms</code></pre>

<p>Namun untuk course ini, menggunakan <code>/mnt/c/projects/html/lms</code> sudah cukup aman dan mudah dipahami.</p>

<h4>Ringkasan mapping</h4>
<ul>
  <li><strong>Windows:</strong> <code>C:\\projects\\html\\lms</code></li>
  <li><strong>WSL:</strong> <code>/mnt/c/projects/html/lms</code></li>
</ul>

<p>Memahami mapping ini sangat penting agar command seperti <code>rsync</code> tidak gagal hanya karena salah path.</p>

<h3>Apakah folder tujuan perlu dibuat dulu?</h3>
<p>Saat menjalankan perintah seperti <code>rsync</code> atau <code>scp</code>, learner sering bertanya apakah folder tujuan di VPS harus dibuat terlebih dahulu.</p>

<h4>Jawaban singkat</h4>
<p><strong>Tidak wajib.</strong> Dalam banyak kasus, <code>rsync</code> akan otomatis membuat folder tujuan jika belum ada, selama user yang digunakan memiliki izin akses ke parent directory.</p>

<h4>Contoh kasus</h4>
<p>Jika Anda menjalankan:</p>
<pre><code>rsync -avz -e "ssh -p 2203" \
  --exclude-from='.gitignore' \
  ./ deploy@IP_VPS_ANDA:/home/deploy/lms/</code></pre>

<p>Jika folder <code>/home/deploy/lms</code> belum ada, maka biasanya akan dibuat otomatis oleh <code>rsync</code>, lalu file akan langsung di-copy ke dalamnya.</p>

<h4>Kapan bisa gagal?</h4>
<ul>
  <li>Jika user tidak memiliki izin ke folder parent (misalnya mencoba menulis ke <code>/root/</code>)</li>
  <li>Jika path tujuan salah atau tidak valid</li>
</ul>

<h4>Best practice</h4>
<p>Walaupun bisa otomatis, dalam workflow yang lebih rapi biasanya kita tetap membuat folder secara eksplisit agar struktur server lebih jelas.</p>

<pre><code>ssh -p 2203 deploy@IP_VPS_ANDA
mkdir -p /home/deploy/lms</code></pre>

<p>Setelah itu baru jalankan <code>rsync</code>. Cara ini membantu memastikan bahwa struktur folder di VPS sesuai dengan yang kita rencanakan.</p>

<p>Untuk course ini, kedua pendekatan aman digunakan, tetapi memahami perilaku otomatis <code>rsync</code> akan membantu learner menghindari kebingungan saat folder belum terlihat di server.</p>

<h3>Update code tanpa upload ulang (rsync workflow)</h3>
<p>Setelah upload pertama berhasil, learner sering bertanya: kalau nanti ada perubahan file, penambahan file, atau penghapusan file, apakah harus upload ulang semuanya dari awal?</p>

<h4>Jawaban singkat</h4>
<p><strong>Tidak perlu upload ulang semua file.</strong> Untuk workflow yang lebih rapi, gunakan <code>rsync</code> lagi. Tool ini dirancang untuk melakukan sinkronisasi perubahan, bukan sekadar copy ulang seluruh folder setiap saat.</p>

<h4>Apa yang dilakukan rsync saat dijalankan lagi?</h4>
<ul>
  <li><strong>File yang tidak berubah</strong> biasanya tidak dikirim ulang</li>
  <li><strong>File yang berubah</strong> akan dikirim ulang</li>
  <li><strong>File baru</strong> akan ikut ditambahkan ke VPS</li>
</ul>

<p>Ini membuat proses update jauh lebih efisien dibanding meng-copy ulang seluruh project dengan SCP setiap kali ada perubahan kecil.</p>

<h4>Contoh workflow update</h4>
<p>Kalau Anda sudah berada di folder project di WSL, misalnya:</p>
<pre><code>cd /mnt/c/projects/html/lms</code></pre>

<p>Lalu setelah mengubah source code di localhost, cukup jalankan lagi:</p>
<pre><code>rsync -avz -e "ssh -p 2203" \
  --exclude-from='.gitignore' \
  ./ deploy@IP_VPS_ANDA:/home/deploy/lms/</code></pre>

<p>Command ini bisa dipakai berulang kali setiap ada update.</p>

<h4>Bagaimana kalau ada file yang dihapus di localhost?</h4>
<p>Secara default, <code>rsync</code> tidak otomatis menghapus file di VPS hanya karena file tersebut sudah hilang di localhost. Jadi kalau Anda menghapus file di lokal, file lama itu bisa saja masih tertinggal di server.</p>

<p>Kalau memang ingin membuat VPS benar-benar mengikuti kondisi source terbaru di localhost, Anda bisa menambahkan option <code>--delete</code>:</p>
<pre><code>rsync -avz -e "ssh -p 2203" \
  --exclude-from='.gitignore' \
  --delete \
  ./ deploy@IP_VPS_ANDA:/home/deploy/lms/</code></pre>

<h4>Kenapa <code>--delete</code> perlu hati-hati?</h4>
<p>Karena option ini bisa menghapus file di VPS yang tidak ada lagi di folder lokal. Jadi kalau learner salah folder, salah path, atau salah project, file di server bisa ikut terhapus.</p>

<p>Karena itu, untuk pemula sangat disarankan melakukan preview terlebih dahulu dengan mode dry run:</p>
<pre><code>rsync -avzn -e "ssh -p 2203" \
  --exclude-from='.gitignore' \
  --delete \
  ./ deploy@IP_VPS_ANDA:/home/deploy/lms/</code></pre>

<p>Option <code>-n</code> berarti simulasi saja. Dengan ini learner bisa melihat apa yang akan berubah tanpa benar-benar menyalin atau menghapus file.</p>

<h4>Kapan setelah rsync perlu menjalankan langkah lain di VPS?</h4>
<p>Kalau perubahan Anda hanya pada file source biasa, sering kali cukup lanjut ke proses build atau restart aplikasi.</p>

<p>Namun kalau ada perubahan dependency, misalnya <code>package.json</code> atau <code>package-lock.json</code> ikut berubah, maka setelah rsync Anda biasanya perlu masuk ke VPS dan menjalankan:</p>
<pre><code>cd /home/deploy/lms
npm install</code></pre>

<p>Kalau project menggunakan build production, lanjutkan juga dengan build ulang sesuai kebutuhan project.</p>

<h4>Kenapa workflow ini lebih baik daripada upload ulang semua?</h4>
<ul>
  <li><strong>Lebih cepat</strong> karena hanya perubahan yang dikirim</li>
  <li><strong>Lebih hemat bandwidth</strong></li>
  <li><strong>Lebih rapi untuk maintenance</strong></li>
  <li><strong>Lebih mendekati workflow engineer di dunia nyata</strong></li>
</ul>

<p>Itulah sebabnya, setelah upload pertama selesai, <strong>rsync lebih cocok dipakai sebagai tool update berkala</strong>, bukan hanya sebagai tool upload awal.</p>

<h3>Best practice penting</h3>
<ul>
  <li>Jangan upload <code>node_modules</code></li>
  <li>Upload hanya source code</li>
  <li>Install dependency di VPS nanti</li>
  <li>Test SSH dulu sebelum SCP</li>
  <li>Kalau memakai port custom, biasakan selalu tulis <code>-P 2203</code></li>
  <li>Kalau memakai SSH key, simpan key dengan aman dan jangan dibagikan</li>
</ul>

<h3>Verifikasi tambahan</h3>
<p>Pastikan folder project bisa diakses:</p>
<pre><code>pwd</code></pre>

<p>Dan cek file utama:</p>
<pre><code>ls package.json</code></pre>

<p>Kalau file ini ada, berarti project siap untuk langkah berikutnya.</p>

<h3>Versi video</h3>
<div class="lesson-video-embed">
  <iframe
    width="560"
    height="315"
    src="https://www.youtube.com/embed/uOeAt_woF_c?si=v5zNPGajvaOKYyrJ"
    title="Upload source code ke VPS"
    loading="lazy"
    referrerpolicy="strict-origin-when-cross-origin"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
  ></iframe>
</div>

<div class="lesson-current-state-note">
<strong>Catatan course:</strong> tahap ini memastikan code sudah ada di server. Kita belum menjalankan aplikasi, hanya memastikan file sudah benar-benar berada di VPS.
</div>

<h3>Ringkasan alur aman</h3>
<pre><code>ssh -p 2203 deploy@IP_VPS
scp -P 2203 -r ./lms deploy@IP_VPS:/home/deploy/
scp -P 2203 -i ~/.ssh/id_rsa -r ./lms deploy@IP_VPS:/home/deploy/
ssh -p 2203 deploy@IP_VPS
ls -la
cd lms
ls -la
du -sh lms</code></pre>

<h3>Kesimpulan</h3>
<p>Upload source code adalah langkah penting sebelum menjalankan aplikasi di server.</p>

<p>Yang perlu dipahami bukan hanya cara upload, tetapi juga cara memilih flow yang tepat: <strong>password biasa</strong>, <strong>SSH key</strong>, atau <strong>port custom</strong> seperti <code>2203</code>. Dengan begitu learner tidak mudah stuck saat command SCP terlihat benar tetapi koneksi ternyata gagal karena detail autentikasi atau port.</p>
 
<p>Di lesson berikutnya, kita akan mulai menginstall dependency dan menjalankan aplikasi LMS di server.</p>`,  
          },
        ],
      },

      // =========================================================
      // NEW LESSON: Local → GitHub → VPS Workflow
      // =========================================================

      {
        id: "l2l-19a",
        title: "Setup GitHub dan Push Project dari Local",
        duration: "25 min",
        summary:
          "Membuat akun GitHub, repository, SSH key local, lalu push project LMS dari komputer local ke GitHub.",
        order: 2,
        materials: [
          {
            id: "l2l-19a-html",
            title: "Setup GitHub dan Push Project",
            type: "html",
            description:
              "Workflow lengkap dari local ke GitHub menggunakan SSH key.",
            htmlContent: `        
          <h2>🎯 Tujuan</h2>
          <p>Kita akan menghubungkan project local ke GitHub sebagai pusat source code.</p>

          <h3>1. Buat Account GitHub</h3>
          <p>Jika belum punya, daftar di https://github.com</p>

          <h3>2. Buat Repository</h3>
          <ul>
            <li>Nama: <b>lms</b></li>
            <li>Jangan centang README</li>
          </ul>

          <h3>3. Generate SSH Key (LOCAL)</h3>
          <p>Jalankan di komputer local:</p>
          <pre><code>ssh-keygen -t ed25519 -C "email_kamu@gmail.com"</code></pre>

          <p>Tekan Enter terus sampai selesai.</p>

          <h3>4. Copy SSH Key</h3>
          <pre><code>cat ~/.ssh/id_ed25519.pub</code></pre>

          <p>Copy hasilnya → masuk ke GitHub:</p>
          <ul>
            <li>Settings → SSH and GPG Keys</li>
            <li>New SSH Key → Paste</li>
          </ul>

          <h3>5. Test Koneksi</h3>
          <pre><code>ssh -T git@github.com</code></pre>

          <p>Jika sukses akan muncul pesan welcome.</p>

          <h3>6. Push Project ke GitHub</h3>
          <p><b>WAJIB dijalankan di folder project local:</b></p>
          <pre><code>cd /mnt/d/projects/html/lms</code></pre>

          <pre><code>git init
  git add .
  git commit -m "Initial LMS"
  git branch -M main
  git remote add origin git@github.com:USERNAME/lms.git
  git push -u origin main</code></pre>

          <h3>⚠️ Troubleshooting</h3>
          <ul>
            <li>❌ error repository name → pastikan pakai USERNAME GitHub, bukan email</li>
            <li>❌ file besar tidak hilang → cek recycle bin / gunakan rm permanent</li>
          </ul>
        `,
          },
        ],  
      },

      {
        id: "l2l-19b",
        title: "Clone Repository ke VPS (Posisi Folder yang Benar)",
        duration: "20 min",
        summary:
          "Menyiapkan SSH key di VPS, menghubungkannya ke GitHub, lalu clone repository ke folder /var/www/lms dengan struktur yang benar.",
        order: 3,
        materials: [
          {
            id: "l2l-19b-html",
            title: "Clone Repository ke VPS",
            type: "html",
            description:
              "Clone repository GitHub ke VPS tanpa salah posisi folder.",
            htmlContent: `      
          <h2>🎯 Tujuan</h2>
          <p>Menarik source code dari GitHub ke VPS dengan struktur folder yang benar.</p>

          <h3>1. Masuk ke VPS</h3>
          <pre><code>ssh deploy@IP_VPS</code></pre>

          <h3>2. Generate SSH Key di VPS</h3>
          <pre><code>ssh-keygen -t ed25519 -C "vps@email.com"</code></pre>

          <h3>3. Copy ke GitHub</h3>
          <pre><code>cat ~/.ssh/id_ed25519.pub</code></pre>

          <p>Tambahkan ke GitHub seperti sebelumnya.</p>

          <h3>4. Test</h3>
          <pre><code>ssh -T git@github.com</code></pre>

          <h3>5. Setup Folder</h3>
          <pre><code>cd /var/www
  mkdir lms
  cd lms</code></pre>

          <h3>6. Clone Repository</h3>
          <pre><code>git clone git@github.com:USERNAME/lms.git .</code></pre>

          <p><b>Perhatikan tanda titik (.)</b> → artinya clone ke folder saat ini.</p>

          <h3>⚠️ Troubleshooting REAL CASE</h3>

          <p><b>Case 1:</b></p>
          <pre><code>fatal: destination path '.' already exists</code></pre>
          <p>Solusi:</p>
          <pre><code>rm -rf *
  rm -rf .git</code></pre>

          <p><b>Case 2:</b> Folder jadi double</p>
          <pre><code>/var/www/lms/lms/frontend</code></pre>

          <p>Ini terjadi karena clone tanpa titik:</p>
          <pre><code>git clone repo</code></pre>

          <p>Solusi: gunakan titik (.)</p>

          <h3>Struktur yang BENAR</h3>
          <pre><code>/var/www/lms/frontend</code></pre>
        `,
          },
        ],
      },

      {
        id: "l2l-19c",
        title: "Workflow Update Code (Real Developer Workflow)",
        duration: "15 min",
        summary:
          "Workflow update harian dari local ke GitHub, lalu git pull dari VPS tanpa upload ulang manual.",
        order: 4,
        materials: [
          {
            id: "l2l-19c-html",
            title: "Workflow Update Code",
            type: "html",
            description:
              "Update code dari local ke GitHub lalu pull di VPS.",
            htmlContent: `         
          <h2>🎯 Tujuan</h2>
          <p>Memahami workflow update tanpa upload ulang.</p>

          <h3>Di Local</h3>
          <pre><code>cd /mnt/d/projects/html/lms
  git add .
  git commit -m "Update feature"
  git push</code></pre>

          <h3>Di VPS</h3>
          <pre><code>cd /var/www/lms
  git pull</code></pre>

          <h3>Jika ada dependency baru</h3>
          <pre><code>cd frontend
  npm install</code></pre>

          <h3>⚠️ Tips Penting</h3>
          <ul>
            <li>Tidak perlu upload ulang via SCP</li>
            <li>Gunakan git sebagai source of truth</li>
            <li>Selalu pastikan folder: /var/www/lms</li>
          </ul>
        `,
          },
        ],
      },      
      {
        id: "l2l-20",
        title: "Clone repository",
        duration: "20 min",
        summary:
          "Menarik source code LMS dari repository ke VPS dengan workflow yang aman, mudah diikuti oleh pemula, dan tetap relevan untuk learner yang sudah terbiasa memakai Git.",      
        order: 5,
        materials: [
          {
            id: "l2l-20-html",
            title: "Clone Repo LMS",
            type: "html",
            description: "Mengambil source code menggunakan Git.",
            htmlContent: `<h2>Clone Repo LMS</h2>

<p>Setelah folder project di VPS siap, salah satu cara paling rapi untuk mengambil source code LMS adalah dengan <strong>clone repository</strong> menggunakan Git.</p>

<p>Untuk learner yang masih baru, arti <strong>clone repo</strong> sangat sederhana: <strong>mengambil salinan project dari GitHub, GitLab, atau repository lain ke dalam server VPS</strong>.</p>

<p>Untuk learner yang sudah terbiasa dengan workflow development, langkah ini adalah bagian normal dari deployment berbasis version control, sehingga update code ke depannya juga akan jauh lebih mudah dibanding upload manual berulang-ulang.</p>

<h3>Kenapa clone repo lebih baik daripada upload manual?</h3>
<ul>
  <li><strong>Lebih rapi</strong> — source code di server terhubung langsung dengan repository aslinya.</li>
  <li><strong>Lebih mudah update</strong> — nanti perubahan bisa diambil lagi tanpa upload ulang semua file.</li>
  <li><strong>Lebih familiar untuk production</strong> — banyak workflow deploy modern memakai Git sebagai sumber utama code.</li>
  <li><strong>Lebih mudah dilacak</strong> — branch, commit, dan history project bisa dicek dengan jelas.</li>
</ul>

<h3>Kapan sebaiknya pakai clone repo?</h3>
<p>Gunakan metode ini jika project LMS Anda memang sudah tersimpan di GitHub, GitLab, Bitbucket, atau server Git internal.</p>

<p>Kalau source code Anda belum ada di repository dan masih hanya tersimpan di laptop lokal, maka lesson sebelumnya tentang upload source code tetap valid. Tetapi kalau repository sudah ada, maka <strong>clone repo biasanya menjadi pilihan yang lebih natural dan lebih profesional</strong>.</p>

<h3>Tujuan lesson ini</h3>
<p>Di lesson ini kita akan belajar:</p>
<ul>
  <li>cara memastikan Git sudah tersedia di VPS,</li>
  <li>cara install Git jika belum ada,</li>
  <li>cara masuk ke folder yang benar sebelum clone,</li>
  <li>cara clone repository dengan posisi folder yang benar dan hanya sekali,</li>
  <li>cara verifikasi hasil clone,</li>
  <li>dan cara mengatasi error-error yang paling sering muncul.</li>
</ul>

<h3>Workflow folder yang kita pakai di course ini</h3>
<p>Sebelumnya kita sudah menyiapkan struktur folder project. Agar konsisten dengan course ini, pola yang paling aman adalah bekerja dari folder:</p>

<pre><code>/var/www/lms</code></pre>

<p>Lalu repository LMS kita clone ke dalam folder <code>frontend</code>, sehingga hasil akhirnya menjadi seperti ini:</p>

<pre><code>/var/www/lms/frontend</code></pre>

<p>Dengan pola ini, struktur project tetap rapi dan sesuai dengan lesson-lesson berikutnya saat kita install dependency, build, dan menjalankan aplikasi.</p>

<h3>Langkah 1: pastikan Git sudah tersedia</h3>
<p>Sebelum clone repository, cek dulu apakah Git sudah terinstall di VPS.</p>

<pre><code>git --version</code></pre>

<p>Kalau Git sudah ada, biasanya akan muncul hasil seperti:</p>

<pre><code>git version 2.xx.x</code></pre>

<p>Anda juga bisa cek dengan command berikut:</p>

<pre><code>command -v git</code></pre>

<p>Kalau Git ada, biasanya output-nya mirip seperti:</p>

<pre><code>/usr/bin/git</code></pre>

<h3>Kalau Git belum ada</h3>
<p>Kalau saat menjalankan <code>git --version</code> muncul pesan seperti <code>command not found</code>, berarti Git belum terinstall.</p>

<p>Install Git dengan langkah berikut:</p>

<pre><code>sudo apt update
sudo apt install git -y</code></pre>

<p>Setelah selesai, verifikasi lagi:</p>

<pre><code>git --version</code></pre>

<h3>Kenapa verifikasi command itu penting?</h3>
<p>Dalam course ini, setiap kali kita memakai tool baru, biasakan cek dua hal:</p>
<ol>
  <li><strong>apakah tool-nya sudah ada</strong>,</li>
  <li><strong>dan apakah tool itu benar-benar bisa dijalankan</strong>.</li>
</ol>

<p>Kebiasaan kecil ini sangat membantu, terutama untuk learner pemula, karena banyak error deployment sebenarnya hanya terjadi karena command yang dipakai belum terinstall.</p>

<h3>Langkah 2: masuk ke folder project yang benar</h3>
<p>Sebelum clone, pindah dulu ke folder utama project LMS:</p>

<pre><code>cd /var/www/lms</code></pre>

<p>Lalu cek posisi kita sekarang:</p>

<pre><code>pwd</code></pre>

<p>Output yang diharapkan:</p>

<pre><code>/var/www/lms</code></pre>

<p>Setelah itu, lihat isi foldernya:</p>

<pre><code>ls -la</code></pre>

<p>Ini penting supaya kita tahu apakah folder <code>frontend</code> belum ada, sudah ada, atau justru sudah terisi file tertentu.</p>

<h3>Langkah 3: pilih pola clone yang sesuai</h3>
<p>Di course ini, kita pakai satu pola yang paling aman dan paling mudah dipahami learner pemula:</p> 

<pre><code>cd /var/www/lms
git clone &lt;repo-url&gt; frontend</code></pre>

<p>Artinya sangat penting:</p>
<ul>
  <li>command <code>git clone</code> dijalankan dari folder <code>/var/www/lms</code>,</li>
  <li>bukan dari <code>/var/www/lms/frontend</code>,</li>
  <li>karena folder <code>frontend</code> akan dibuat otomatis oleh Git saat proses clone berhasil.</li>
</ul>
<p>Contoh:</p>

<pre><code>cd /var/www/lms
git clone https://github.com/username/lms.git frontend</code></pre> 

<p>Setelah selesai, hasilnya akan berada di:</p>

<pre><code>/var/www/lms/frontend</code></pre>

<div class="lesson-current-state-note">
<strong>Aturan penting lesson ini:</strong> <code>git clone</code> hanya dijalankan <strong>satu kali saja</strong>, yaitu saat folder <code>frontend</code> belum ada.
</div>

<p>Kalau setelah dicek ternyata folder <code>frontend</code> sudah terbuat, maka <strong>jangan jalankan <code>git clone</code> lagi</strong>. Lanjutkan ke lesson atau langkah berikutnya yang bekerja di dalam folder <code>/var/www/lms/frontend</code>.</p>

<p>Kenapa tidak boleh clone lagi?</p>
<ul>
  <li>Karena folder project sudah ada.</li>
  <li>Clone ulang ke lokasi yang sama justru bisa memicu error atau membingungkan struktur folder.</li>
  <li>Di workflow normal, <code>git clone</code> dipakai hanya untuk pengambilan source code pertama kali.</li>
</ul>

<p>Jadi, keputusan sederhananya seperti ini:</p>
<pre><code>Kalau /var/www/lms/frontend belum ada  → jalankan git clone sekali
Kalau /var/www/lms/frontend sudah ada → jangan clone lagi, lanjut ke lesson berikutnya</code></pre>
 
<h3>Langkah 4: verifikasi hasil clone</h3>
<p>Setelah clone selesai, cek isi folder utama:</p>

<pre><code>ls -la /var/www/lms</code></pre>

<p>Lalu masuk ke folder project:</p>

<pre><code>cd /var/www/lms/frontend</code></pre>

<p>Cek lagi isi project:</p>

<pre><code>ls -la</code></pre>

<p>Anda seharusnya mulai melihat file seperti:</p>
<ul>
  <li><code>package.json</code></li>
  <li><code>src</code></li>
  <li><code>public</code></li>
  <li><code>.git</code></li>
</ul>

<p>Kalau folder <code>frontend</code> sudah ada sejak awal dan Anda memang tidak melakukan clone lagi, Anda tetap bisa masuk ke folder tersebut untuk lanjut bekerja:</p>

<pre><code>cd /var/www/lms/frontend
ls -la</code></pre>

<p>Kalau isi project sudah terlihat normal, berarti lesson ini selesai dan Anda bisa lanjut ke lesson berikutnya.</p>

<p>Kalau folder <code>.git</code> ada, itu pertanda bahwa hasil clone benar-benar terhubung dengan repository Git.</p>

<h3>Verifikasi tambahan untuk intermediate dan expert</h3>
<p>Kalau ingin lebih yakin, jalankan:</p>

<pre><code>git remote -v</code></pre>

<p>Command ini menunjukkan repository asal yang terhubung ke project.</p>

<p>Anda juga bisa cek branch:</p>

<pre><code>git branch -a</code></pre>

<p>Dan melihat commit terbaru:</p>

<pre><code>git log --oneline -n 5</code></pre>

<p>Untuk learner yang sudah expert, langkah ini membantu memastikan bahwa branch dan commit yang masuk ke server memang sesuai harapan.</p>

<h3>Bagaimana jika repository private?</h3>
<p>Kalau repository bersifat private, clone tetap bisa dilakukan, tetapi Anda harus lolos autentikasi.</p>

<p>Secara umum ada dua cara yang paling sering dipakai:</p>
<ul>
  <li><strong>HTTPS + credential / token</strong></li>
  <li><strong>SSH key</strong></li>
</ul>

<h4>Opsi 1 — clone via HTTPS</h4>
<pre><code>git clone https://github.com/username/lms.git frontend</code></pre>

<p>Pada beberapa platform, password biasa sudah tidak dipakai lagi untuk Git operation. Sebagai gantinya, Anda mungkin perlu memakai <strong>Personal Access Token (PAT)</strong>.</p>

<h4>Opsi 2 — clone via SSH</h4>
<pre><code>git clone git@github.com:username/lms.git frontend</code></pre>

<p>Cara ini biasanya lebih nyaman untuk workflow jangka panjang, tetapi membutuhkan SSH key yang sudah diset di server Git dan di VPS.</p>

<h3>Kalau ingin clone branch tertentu</h3>
<p>Kalau repository punya banyak branch dan Anda ingin langsung mengambil branch tertentu, gunakan:</p>

<pre><code>git clone -b &lt;branch-name&gt; &lt;repo-url&gt; frontend</code></pre>

<p>Contoh:</p>

<pre><code>git clone -b main https://github.com/username/lms.git frontend</code></pre>

<p>Kalau branch default repository memang <code>main</code>, command biasa tanpa <code>-b</code> biasanya juga sudah cukup.</p>

<h3>Workflow paling sederhana untuk pemula</h3>
<p>Kalau Anda ingin versi yang paling mudah diingat, alurnya seperti ini:</p>

<pre><code>git --version
cd /var/www/lms
pwd
ls -la
git clone &lt;repo-url&gt; frontend
cd frontend
ls -la</code></pre>

<p>Itu sudah cukup untuk menyelesaikan langkah clone secara aman.</p>

<h3>Troubleshooting umum</h3>

<h4>1. Error: git: command not found</h4>
<p>Artinya Git belum terinstall.</p>

<pre><code>sudo apt update
sudo apt install git -y
git --version</code></pre>

<h4>2. Error: Permission denied saat membuat folder atau menulis file</h4>
<p>Biasanya ini berarti ownership folder belum benar. Cek dulu:</p>

<pre><code>ls -ld /var/www/lms</code></pre>

<p>Kalau owner belum <code>deploy</code>, perbaiki dengan:</p>

<pre><code>sudo chown -R deploy:deploy /var/www/lms</code></pre>

<p>Lalu coba clone lagi.</p>

<h4>3. Error: destination path 'frontend' already exists and is not an empty directory</h4>
<p>Artinya folder tujuan sudah ada dan tidak kosong.</p>

<p>Cek dulu isinya:</p>

<pre><code>ls -la /var/www/lms/frontend</code></pre>

<p>Kalau folder itu memang sisa percobaan gagal sebelumnya dan aman untuk dihapus:</p>

<pre><code>rm -rf /var/www/lms/frontend</code></pre>

<p>Lalu clone ulang.</p>

<p><strong>Jangan asal hapus</strong> kalau Anda belum yakin folder itu tidak berisi data penting.</p>

<h4>4. Error: Repository not found</h4>
<p>Biasanya ada beberapa kemungkinan:</p>
<ul>
  <li>URL repository salah,</li>
  <li>repository private tetapi Anda belum punya akses,</li>
  <li>atau autentikasi gagal.</li>
</ul>

<p>Cek lagi URL repo yang dipakai, lalu pastikan akun/token/SSH key memang punya akses ke repository tersebut.</p>

<h4>5. Error: Authentication failed</h4>
<p>Ini sering terjadi saat clone via HTTPS ke repo private.</p>

<p>Solusinya biasanya:</p>
<ul>
  <li>gunakan Personal Access Token jika platform tidak menerima password biasa,</li>
  <li>atau pindah ke metode SSH key.</li>
</ul>

<h4>6. Error: Permission denied (publickey)</h4>
<p>Ini biasanya muncul saat clone via SSH, tetapi SSH key di VPS belum terpasang atau belum didaftarkan ke GitHub/GitLab.</p>

<p>Cek dulu apakah key ada:</p>

<pre><code>ls -la ~/.ssh</code></pre>

<p>Kalau belum ada, berarti Anda memang perlu menyiapkan SSH key terlebih dahulu sebelum clone via SSH.</p>

<h4>7. Clone sangat lambat atau terputus</h4>
<p>Bisa disebabkan koneksi VPS, jaringan menuju provider Git, atau repository terlalu besar.</p>

<p>Untuk test cepat, Anda bisa pastikan VPS masih punya koneksi internet:</p>

<pre><code>ping -c 4 github.com</code></pre>

<p>Kalau ping gagal, masalahnya bisa jadi bukan pada Git, tetapi pada koneksi server.</p>

<h3>Tips untuk learner expert</h3>
<p>Kalau Anda sudah terbiasa dengan Git, beberapa verifikasi tambahan yang sering dipakai adalah:</p>
<ul>
  <li>cek branch aktif dengan <code>git branch --show-current</code>,</li>
  <li>cek commit aktif dengan <code>git rev-parse --short HEAD</code>,</li>
  <li>cek status working tree dengan <code>git status</code>.</li>
</ul>

<p>Tetapi untuk course ini, learner pemula tidak wajib menghafal semua itu. Fokus utamanya adalah memastikan source code berhasil masuk ke VPS dengan struktur yang benar.</p>

<h3>Versi video</h3>
<p>Kalau ingin melihat penjelasan visual dalam bentuk video, putar materi pendamping berikut:</p>
<div class="lesson-video-embed">
  <iframe
    width="560"
    height="315"
    src="https://www.youtube.com/embed/uOeAt_woF_c?si=v5zNPGajvaOKYyrJ"
    title="Clone Repo LMS - video pendamping"
    loading="lazy"
    referrerpolicy="strict-origin-when-cross-origin"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
  ></iframe>
</div>

<div class="lesson-current-state-note">
<strong>Catatan course:</strong> lesson ini fokus memastikan source code LMS berhasil ditarik dari repository ke VPS. Kita belum install dependency dan belum menjalankan aplikasi. Target tahap ini adalah: <strong>folder project benar, isi code lengkap, dan repository berhasil masuk ke server</strong>.
</div>

<h3>Ringkasan alur aman</h3>
<pre><code>git --version
command -v git
sudo apt update
sudo apt install git -y
cd /var/www/lms
pwd
ls -la
git clone &lt;repo-url&gt; frontend
cd /var/www/lms/frontend
ls -la
git remote -v
git branch -a
git log --oneline -n 5</code></pre>

<h3>Kesimpulan lesson ini</h3>
<p><strong>Clone repository adalah cara yang rapi dan profesional untuk mengambil source code LMS ke VPS.</strong> Dengan Git, project di server menjadi lebih mudah dikelola, lebih mudah diverifikasi, dan lebih siap untuk workflow update berikutnya.</p>

<p>Untuk learner pemula, cukup pahami bahwa kita sedang “mengambil project dari repository ke server”. Untuk learner yang lebih advance, lesson ini adalah fondasi workflow deploy berbasis Git yang nanti akan sangat membantu saat update code, rollback, atau tracking branch dan commit.</p>

<p>Di lesson berikutnya, kita akan masuk ke tahap berikutnya: <strong>menginstall dependency project</strong> agar LMS benar-benar siap dibuild dan dijalankan di VPS.</p>`,
       
          },
        ],
      },
      {
        id: "l2l-21",
        title: "Install dependency",
        duration: "18 min",
        summary:
          "Menginstall seluruh dependency frontend dengan aman, memahami fungsi npm install, memastikan Node.js dan npm siap, serta menyiapkan project sebelum build production.",      
        order: 6,
        materials: [
          {
            id: "l2l-21-html",
            title: "Install Dependency LMS",
            type: "html",
            description: "Panduan lengkap menjalankan npm install pada project frontend LMS di VPS.",           
            htmlContent:
              `<h2>Install dependency LMS</h2>

<p>Setelah repository LMS berhasil di-clone dan folder <code>/var/www/lms/frontend</code> sudah ada, langkah berikutnya adalah <strong>menginstall seluruh dependency project</strong>.</p>

<p>Di lesson ini kita akan bahas bukan hanya command <code>npm install</code>, tetapi juga:</p>
<ul>
  <li>apa sebenarnya dependency itu,</li>
  <li>kenapa Next.js membutuhkannya,</li>
  <li>di folder mana command harus dijalankan,</li>
  <li>cara mengecek apakah <code>node</code> dan <code>npm</code> sudah tersedia,</li>
  <li>cara install jika ternyata belum ada,</li>
  <li>dan troubleshooting jika proses install gagal.</li>
</ul>

<h3>Apa itu dependency?</h3>
<p>Untuk learner pemula, dependency bisa dibayangkan sebagai <strong>bahan-bahan dan alat bantu</strong> yang dibutuhkan project agar bisa dijalankan dengan normal.</p>

<p>Pada project LMS berbasis Next.js, dependency biasanya berisi:</p>
<ul>
  <li>framework utama seperti <code>next</code>,</li>
  <li>library pendukung seperti <code>react</code> dan <code>react-dom</code>,</li>
  <li>package tambahan lain yang dipakai project,</li>
  <li>serta tools build yang dibutuhkan saat deploy.</li>
</ul>

<p>Semua daftar dependency ini biasanya didefinisikan di file <code>package.json</code>.</p>

<h3>Kenapa lesson ini penting?</h3>
<p>Walaupun source code sudah berhasil masuk ke VPS, aplikasi belum bisa langsung dijalankan begitu saja. Server masih perlu mengunduh semua package yang dibutuhkan oleh project.</p>

<p>Jadi secara sederhana:</p>
<ul>
  <li><strong>clone repo</strong> = mengambil source code,</li>
  <li><strong>npm install</strong> = mengambil semua bahan yang dibutuhkan source code itu agar bisa diproses dan dijalankan.</li>
</ul>

<h3>Posisi folder yang benar sebelum menjalankan command</h3>
<p>Command utama lesson ini dijalankan dari folder project frontend:</p>

<pre><code>cd /var/www/lms/frontend</code></pre>

<p>Untuk memastikan Anda benar-benar sedang berada di folder yang tepat, cek dengan:</p>

<pre><code>pwd</code></pre>

<p>Output yang diharapkan:</p>

<pre><code>/var/www/lms/frontend</code></pre>

<p>Kalau belum berada di situ, pindah dulu ke folder tersebut sebelum melanjutkan.</p>

<div class="lesson-current-state-note">
<strong>Catatan penting:</strong> <code>npm install</code> dijalankan di folder yang berisi <code>package.json</code>, yaitu <code>/var/www/lms/frontend</code>. Jangan jalankan dari <code>/var/www/lms</code> jika file <code>package.json</code> ada di dalam folder <code>frontend</code>.
</div>

<h3>Langkah 1: pastikan folder frontend memang sudah ada</h3>
<p>Sebelum install dependency, cek dulu apakah folder project hasil clone memang ada:</p>

<pre><code>ls -la /var/www/lms
ls -la /var/www/lms/frontend</code></pre>

<p>Kalau folder <code>/var/www/lms/frontend</code> belum ada, berarti Anda belum bisa lanjut ke lesson ini. Selesaikan dulu lesson clone repo sebelumnya.</p>

<h3>Langkah 2: cek apakah file package.json ada</h3>
<p>Masuk ke folder frontend lalu cek isi project:</p>

<pre><code>cd /var/www/lms/frontend
ls -la</code></pre>

<p>Pastikan ada file seperti:</p>
<ul>
  <li><code>package.json</code></li>
  <li><code>package-lock.json</code> atau lock file sejenis</li>
  <li>folder source project seperti <code>src</code>, <code>public</code>, dan lain-lain</li>
</ul>

<p>Kalau <code>package.json</code> tidak ada, maka <code>npm install</code> tidak akan berjalan sebagaimana mestinya.</p>

<h3>Langkah 3: cek status Node.js dan npm</h3>
<p>Sebelum memakai command baru seperti <code>npm install</code>, kita perlu memastikan bahwa runtime Node.js dan npm memang sudah tersedia di VPS.</p>

<p>Jalankan dari mana saja boleh, tetapi agar konsisten dengan workflow lesson ini, Anda bisa menjalankannya dari folder project:</p>

<pre><code>cd /var/www/lms/frontend
node -v
npm -v
command -v node
command -v npm</code></pre>

<p>Interpretasinya:</p>
<ul>
  <li>Kalau <code>node -v</code> menampilkan versi, berarti Node.js sudah ada.</li>
  <li>Kalau <code>npm -v</code> menampilkan versi, berarti npm juga sudah ada.</li>
  <li>Kalau <code>command -v</code> mengembalikan path seperti <code>/usr/bin/node</code> atau <code>/usr/bin/npm</code>, berarti command tersedia di sistem.</li>
</ul>

<h3>Kalau node atau npm belum ada</h3>
<p>Kalau salah satu command gagal atau muncul error seperti <code>command not found</code>, install dulu Node.js LTS.</p>

<p>Command install ini bisa dijalankan dari folder mana saja karena sifatnya adalah instalasi sistem. Agar aman, jalankan dari home user <code>deploy</code> atau tetap dari session biasa Anda:</p>

<pre><code>curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
sudo apt install nodejs -y</code></pre>

<p>Kalau <code>curl</code> belum ada, install dulu:</p>

<pre><code>sudo apt update
sudo apt install curl -y</code></pre>

<p>Setelah instalasi selesai, cek ulang:</p>

<pre><code>node -v
npm -v</code></pre>

<h3>Langkah 4: jalankan npm install di folder frontend</h3>
<p>Kalau semua syarat sudah siap, masuk ke folder project lalu jalankan:</p>

<pre><code>cd /var/www/lms/frontend
npm install</code></pre>

<p>Command ini akan membaca <code>package.json</code>, lalu mengunduh seluruh dependency yang dibutuhkan project LMS Anda.</p>

<p>Setelah berhasil, biasanya akan terbentuk folder:</p>

<pre><code>node_modules</code></pre>

<p>Anda bisa verifikasi dengan:</p>

<pre><code>cd /var/www/lms/frontend
ls -la
ls -ld node_modules</code></pre>

<h3>Apa yang dilakukan npm install di balik layar?</h3>
<p>Untuk learner yang lebih advanced, secara umum <code>npm install</code> akan:</p>
<ul>
  <li>membaca dependency dari <code>package.json</code>,</li>
  <li>mengacu ke lock file jika ada,</li>
  <li>mengunduh package yang diperlukan,</li>
  <li>menyusun folder <code>node_modules</code>,</li>
  <li>dan menyiapkan project agar bisa dibuild.</li>
</ul>

<h3>Kapan npm install dijalankan?</h3>
<p>Dalam workflow normal, <code>npm install</code> biasanya dijalankan:</p>
<ul>
  <li>saat project pertama kali selesai di-clone,</li>
  <li>saat ada perubahan dependency di <code>package.json</code> atau lock file,</li>
  <li>atau saat environment baru perlu menyiapkan ulang dependency project.</li>
</ul>

<p>Kalau tidak ada perubahan dependency, Anda tidak harus menjalankannya berulang-ulang tanpa alasan.</p>

<h3>Troubleshooting yang paling sering terjadi</h3>

<h4>1. Error: npm: command not found</h4>
<p>Artinya npm belum ada atau instalasi Node.js belum benar.</p>
<p>Solusi:</p>
<pre><code>node -v
npm -v
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
sudo apt install nodejs -y</code></pre>

<h4>2. Error: node: command not found</h4>
<p>Artinya runtime Node.js belum tersedia.</p>
<p>Solusinya sama: install Node.js LTS terlebih dahulu, lalu verifikasi ulang.</p>

<h4>3. Error: package.json not found</h4>
<p>Biasanya ini terjadi karena command dijalankan di folder yang salah.</p>
<p>Cek folder aktif:</p>
<pre><code>pwd
ls -la</code></pre>
<p>Kalau ternyata Anda belum berada di <code>/var/www/lms/frontend</code>, pindah dulu:</p>
<pre><code>cd /var/www/lms/frontend</code></pre>

<h4>4. Error: EACCES / permission denied saat npm install</h4>
<p>Biasanya owner folder tidak sesuai atau folder project bukan milik user <code>deploy</code>.</p>
<p>Cek ownership:</p>
<pre><code>ls -ld /var/www/lms
ls -ld /var/www/lms/frontend</code></pre>
<p>Kalau perlu, perbaiki dengan:</p>
<pre><code>sudo chown -R deploy:deploy /var/www/lms</code></pre>
<p>Lalu ulangi:</p>
<pre><code>cd /var/www/lms/frontend
npm install</code></pre>

<h4>5. Install sangat lama atau seperti berhenti</h4>
<p>Sering kali ini terkait koneksi internet VPS yang lambat atau repository package yang sedang lambat diakses.</p>
<p>Anda bisa cek koneksi dasar misalnya dengan:</p>
<pre><code>ping -c 4 registry.npmjs.org</code></pre>

<h4>6. Ada warning dependency</h4>
<p>Tidak semua warning berarti gagal. Fokus dulu apakah proses install benar-benar selesai dan prompt terminal kembali normal tanpa status error fatal.</p>

<h4>7. Error karena lock file atau sisa install sebelumnya</h4>
<p>Untuk learner expert, kadang ada kasus dependency bentrok atau sisa install lama. Salah satu langkah yang biasa dipakai adalah membersihkan dependency lalu install ulang:</p>

<pre><code>cd /var/www/lms/frontend
rm -rf node_modules
rm -f package-lock.json
npm install</code></pre>

<p><strong>Catatan:</strong> langkah ini sebaiknya dilakukan dengan sadar, terutama jika project Anda memang mengandalkan lock file tertentu.</p>

<h3>Verifikasi akhir setelah install</h3>
<p>Setelah <code>npm install</code> selesai, cek beberapa hal berikut:</p>

<pre><code>cd /var/www/lms/frontend
ls -ld node_modules
npm list --depth=0</code></pre>

<p>Untuk pemula, tidak perlu memahami semua isi output <code>npm list</code>. Cukup tahu bahwa command tersebut membantu memastikan package utama memang sudah terpasang.</p>

<h3>Versi video</h3>
<p>Kalau ingin melihat materi pendamping dalam bentuk video, putar video berikut:</p>
<div class="lesson-video-embed">
  <iframe
    width="560"
    height="315"
    src="https://www.youtube.com/embed/uOeAt_woF_c?si=v5zNPGajvaOKYyrJ"
    title="Install Dependency LMS - video pendamping"
    loading="lazy"
    referrerpolicy="strict-origin-when-cross-origin"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
  ></iframe>
</div>

<div class="lesson-current-state-note">
<strong>Target akhir lesson ini:</strong> user <code>deploy</code> berada di folder <code>/var/www/lms/frontend</code>, <code>node</code> dan <code>npm</code> tersedia, <code>npm install</code> berhasil dijalankan, dan project siap masuk ke tahap <strong>build production</strong>.
</div>

<h3>Ringkasan alur aman</h3>
<pre><code>cd /var/www/lms/frontend
pwd
ls -la
node -v
npm -v
command -v node
command -v npm
npm install
ls -ld node_modules</code></pre>

<h3>Kesimpulan lesson ini</h3>
<p><strong>npm install</strong> adalah langkah yang mengubah source code hasil clone menjadi project yang benar-benar siap diproses di server.</p>
<p>Tanpa dependency yang terinstall, LMS belum bisa dibuild dan belum bisa dijalankan sebagai aplikasi live. Karena itu, lesson ini adalah jembatan penting antara tahap clone source code dan tahap build production.</p>`,
   
          },
        ],
      },
      {
        id: "l2l-22",
        title: "Build production",
        duration: "28 min",
        summary:
          "Menjalankan build production Next.js dari folder frontend LMS, mengecek hasil build, memahami error umum, dan memastikan aplikasi siap masuk tahap test run production.",  
        order: 4,
        materials: [
          {
            id: "l2l-22-html",
            title: "Build LMS Production",
            type: "html",
            description:
              "Panduan lengkap build production untuk frontend LMS di VPS Ubuntu.",    
            htmlContent:
              `<h2>Build LMS Production</h2>
<p>Setelah source code sudah berada di VPS dan dependency sudah diinstall, langkah berikutnya adalah melakukan <strong>build production</strong>.</p>

<p>Build production adalah proses menyiapkan aplikasi Next.js agar siap dijalankan dalam mode production. Pada tahap ini, Next.js akan memeriksa source code, melakukan optimasi, membuat file build, dan menyiapkan output yang nanti akan dijalankan oleh server.</p>

<div class="lesson-current-state-note">
  <strong>Target lesson ini:</strong> kita menjalankan <code>npm run build</code> dari folder <code>/var/www/lms/frontend</code>, memastikan folder build terbentuk, dan memahami troubleshooting jika build gagal.
</div>

<h3>Kenapa build production diperlukan?</h3>
<p>Di komputer local, kita biasanya menjalankan aplikasi dengan mode development. Mode development cocok untuk coding karena cepat reload dan mudah debug.</p>

<p>Namun untuk VPS production, kita perlu build agar aplikasi:</p>

<ul>
  <li>lebih siap dijalankan secara stabil,</li>
  <li>lebih optimal untuk diakses user,</li>
  <li>bisa dijalankan dengan <code>npm run start</code>,</li>
  <li>dan siap disambungkan ke PM2 serta Nginx.</li>
</ul>

<h3>Folder tempat menjalankan command</h3>
<p>Command build <strong>wajib dijalankan dari folder frontend</strong>, bukan dari <code>/var/www</code> dan bukan dari <code>/var/www/lms</code>.</p>

<pre><code>cd /var/www/lms/frontend</code></pre>

<p>Cek posisi folder:</p>

<pre><code>pwd</code></pre>

<p>Output yang benar kira-kira:</p>

<pre><code>/var/www/lms/frontend</code></pre>

<p>Cek isi folder:</p>

<pre><code>ls -la</code></pre>

<p>Pastikan kita melihat file penting seperti:</p>

<ul>
  <li><code>package.json</code></li>
  <li><code>package-lock.json</code> jika ada</li>
  <li><code>src</code></li>
  <li><code>next.config</code> jika ada</li>
  <li><code>node_modules</code> setelah dependency diinstall</li>
</ul>

<h3>Cek Node.js dan npm</h3>
<p>Sebelum build, cek dulu apakah Node.js dan npm tersedia.</p>

<pre><code>node -v</code></pre>

<pre><code>npm -v</code></pre>

<p>Jika muncul nomor versi, berarti Node.js dan npm sudah tersedia.</p>

<p>Untuk melihat lokasi binary Node.js dan npm:</p>

<pre><code>command -v node</code></pre>

<pre><code>command -v npm</code></pre>

<h3>Jika Node.js belum ada</h3>
<p>Kalau command <code>node -v</code> atau <code>npm -v</code> tidak dikenali, berarti Node.js belum terinstall atau belum terbaca di PATH.</p>

<p>Install Node.js LTS sesuai lesson sebelumnya. Contoh pola umum di Ubuntu:</p>

<pre><code>node -v
npm -v</code></pre>

<p>Jika masih belum ada, kembali ke lesson <strong>Install Node.js LTS</strong> terlebih dahulu sebelum melanjutkan build.</p>

<h3>Cek dependency sudah terinstall</h3>
<p>Masih dari folder:</p>

<pre><code>cd /var/www/lms/frontend</code></pre>

<p>Cek apakah folder <code>node_modules</code> sudah ada:</p>

<pre><code>ls -ld node_modules</code></pre>

<p>Jika folder belum ada, jalankan:</p>

<pre><code>npm install</code></pre>

<p>Setelah selesai, cek lagi:</p>

<pre><code>ls -ld node_modules</code></pre>

<h3>Jalankan build production</h3>
<p>Jika posisi folder sudah benar dan dependency sudah tersedia, jalankan:</p>

<pre><code>npm run build</code></pre>

<p>Command ini membaca script <code>build</code> dari file <code>package.json</code>. Pada project Next.js, biasanya script tersebut menjalankan:</p>

<pre><code>next build</code></pre>

<h3>Cara cek apakah script build tersedia</h3>
<p>Masih dari folder <code>/var/www/lms/frontend</code>, jalankan:</p>

<pre><code>cat package.json</code></pre>

<p>Cari bagian <code>scripts</code>. Contoh yang benar:</p>

<pre><code>"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start"
}</code></pre>

<p>Kalau <code>build</code> belum ada, berarti <code>npm run build</code> tidak bisa dijalankan sebelum script tersebut ditambahkan.</p>

<h3>Cek hasil build</h3>
<p>Jika build berhasil, Next.js biasanya membuat folder:</p>

<pre><code>.next</code></pre>

<p>Cek dengan command:</p>

<pre><code>ls -la .next</code></pre>

<p>Jika folder <code>.next</code> ada dan berisi file hasil build, berarti aplikasi sudah berhasil dibuild.</p>

<h3>Video pendamping</h3>
<p>Video berikut bisa dipakai sebagai pendamping visual agar learner langsung memahami proses build production.</p>

<div class="lesson-video-embed">
  <iframe
    width="560"
    height="315"
    src="https://www.youtube.com/embed/uOeAt_woF_c?si=v5zNPGajvaOKYyrJ"
    title="Build LMS Production"
    loading="lazy"
    referrerpolicy="strict-origin-when-cross-origin"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
  ></iframe>
</div>

<h3>Troubleshooting umum</h3>

<h4>1. Error: npm: command not found</h4>
<p>Artinya npm belum tersedia atau Node.js belum terinstall dengan benar.</p>

<pre><code>node -v
npm -v
command -v node
command -v npm</code></pre>

<p>Solusi: kembali ke lesson install Node.js LTS, lalu pastikan versi Node.js dan npm muncul.</p>

<h4>2. Error: missing script: build</h4>
<p>Artinya di file <code>package.json</code> belum ada script <code>build</code>.</p>

<pre><code>cat package.json</code></pre>

<p>Pastikan bagian scripts memiliki <code>"build": "next build"</code>.</p>

<h4>3. Error: module not found</h4>
<p>Biasanya dependency belum lengkap atau ada import file yang salah.</p>

<pre><code>npm install
npm run build</code></pre>

<p>Jika masih error, baca nama module atau file yang disebutkan pada pesan error.</p>

<h4>4. Error karena posisi folder salah</h4>
<p>Jika menjalankan <code>npm run build</code> dari folder yang salah, npm bisa tidak menemukan <code>package.json</code>.</p>

<p>Pastikan posisi folder:</p>

<pre><code>cd /var/www/lms/frontend
pwd
ls -la</code></pre>

<h4>5. Build lama atau server terasa berat</h4>
<p>Build production bisa memakan resource CPU dan RAM. Untuk VPS kecil, proses build mungkin terasa lebih lama.</p>

<p>Cek penggunaan resource:</p>

<pre><code>free -h
df -h
top</code></pre>

<p>Jika RAM sangat kecil, build bisa gagal. Solusinya bisa dengan mengurangi beban service lain, menambah swap, atau memakai VPS dengan RAM lebih besar.</p>

<h3>Ringkasan command lesson ini</h3>

<pre><code>cd /var/www/lms/frontend
pwd
ls -la
node -v
npm -v
ls -ld node_modules
npm install
npm run build
ls -la .next</code></pre>

<h3>Kesimpulan</h3>
<p><strong>Build production</strong> adalah titik validasi penting sebelum LMS dijalankan secara live. Kalau build berhasil, berarti source code, dependency, dan konfigurasi dasar frontend sudah cukup siap untuk masuk ke tahap berikutnya, yaitu test run aplikasi.</p>

<p>Jika build gagal, jangan langsung panik. Baca pesan error paling bawah, cek posisi folder, cek dependency, cek script di <code>package.json</code>, lalu ulangi proses build setelah masalah diperbaiki.</p>`,
          },
          {
            id: "l2l-22-video",
            title: "Video Build LMS Production",
            type: "video",
            description:
              "Video pendamping untuk memahami proses build production LMS.",
            url: "https://youtu.be/uOeAt_woF_c?si=v5zNPGajvaOKYyrJ",
            duration: "28 min",       
          },
        ],
      },
      {
        id: "l2l-23",
        title: "Menjalankan LMS",
        duration: "30 min",
        summary:
          "Menjalankan LMS secara manual dari folder frontend, mengecek port aktif, membuka aplikasi dari browser, dan memahami troubleshooting sebelum masuk ke PM2.",   
        order: 5,
        materials: [
          {
            id: "l2l-23-html",
            title: "Menjalankan LMS",
            type: "html",
            description:
              "Panduan menjalankan LMS secara manual di VPS sebelum memakai PM2.", 
            htmlContent:
              `<h2>Menjalankan LMS</h2>
<p>Setelah proses <strong>build production</strong> berhasil, langkah berikutnya adalah menjalankan LMS secara manual terlebih dahulu.</p>

<p>Tahap ini penting karena sebelum kita memakai PM2, Nginx, domain, dan SSL, kita perlu memastikan aplikasi Next.js benar-benar bisa hidup di VPS.</p>

<div class="lesson-current-state-note">
  <strong>Target lesson ini:</strong> menjalankan LMS dengan <code>npm run start</code>, memastikan port <code>3000</code> aktif, lalu melakukan troubleshooting jika aplikasi belum bisa dibuka.
</div>

<h3>Folder tempat menjalankan command</h3>
<p>Semua command utama di lesson ini dijalankan dari folder frontend LMS:</p>

<pre><code>cd /var/www/lms/frontend</code></pre>

<p>Cek posisi folder:</p>

<pre><code>pwd</code></pre>

<p>Output yang benar:</p>

<pre><code>/var/www/lms/frontend</code></pre>

<p>Cek isi folder:</p>

<pre><code>ls -la</code></pre>

<p>Pastikan ada file dan folder penting berikut:</p>

<ul>
  <li><code>package.json</code></li>
  <li><code>node_modules</code></li>
  <li><code>.next</code></li>
  <li><code>src</code></li>
</ul>

<h3>Pastikan build sudah berhasil</h3>
<p>Sebelum menjalankan LMS mode production, folder <code>.next</code> harus sudah ada.</p>

<pre><code>ls -la .next</code></pre>

<p>Jika folder <code>.next</code> belum ada, jalankan build terlebih dahulu:</p>

<pre><code>npm run build</code></pre>

<h3>Cek script start di package.json</h3>
<p>Command <code>npm run start</code> hanya bisa berjalan jika di <code>package.json</code> ada script <code>start</code>.</p>

<pre><code>cat package.json</code></pre>

<p>Pastikan bagian <code>scripts</code> kurang lebih seperti ini:</p>

<pre><code>"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start"
}</code></pre>

<h3>Jalankan LMS</h3>
<p>Dari folder:</p>

<pre><code>cd /var/www/lms/frontend</code></pre>

<p>Jalankan aplikasi:</p>

<pre><code>npm run start</code></pre>

<p>Jika berhasil, biasanya muncul informasi bahwa aplikasi berjalan di port <code>3000</code>.</p>

<pre><code>Local: http://localhost:3000</code></pre>

<h3>Catatan penting untuk pemula</h3>
<p>Saat menjalankan <code>npm run start</code>, terminal akan terlihat seperti “tertahan” dan tidak kembali ke prompt biasa. Ini normal.</p>

<p>Artinya aplikasi sedang berjalan aktif di terminal tersebut. Jangan langsung ditutup jika masih ingin mengetes aplikasi.</p>

<p>Untuk menghentikan aplikasi, tekan:</p>

<pre><code>CTRL + C</code></pre>

<h3>Cek apakah port 3000 aktif</h3>
<p>Buka terminal VPS lain, atau hentikan dulu aplikasi jika ingin menjalankan pengecekan dari terminal yang sama.</p>

<p>Cek apakah port <code>3000</code> sedang dipakai:</p>

<pre><code>ss -tulpn | grep 3000</code></pre>

<p>Jika command <code>ss</code> tidak tersedia, install package berikut:</p>

<pre><code>sudo apt update
sudo apt install iproute2 -y</code></pre>

<p>Lalu ulangi:</p>

<pre><code>ss -tulpn | grep 3000</code></pre>

<h3>Cek dari dalam VPS menggunakan curl</h3>
<p>Masih dari VPS, kita bisa mengetes aplikasi dengan:</p>

<pre><code>curl http://localhost:3000</code></pre>

<p>Jika <code>curl</code> belum ada, install dulu:</p>

<pre><code>sudo apt update
sudo apt install curl -y</code></pre>

<p>Lalu ulangi:</p>

<pre><code>curl http://localhost:3000</code></pre>

<p>Jika keluar HTML, berarti aplikasi sudah hidup dari sisi server.</p>

<h3>Apakah aplikasi langsung bisa dibuka dari browser?</h3>
<p>Pada tahap ini, aplikasi biasanya baru berjalan di <code>localhost:3000</code> di dalam VPS.</p>

<p>Artinya, dari browser laptop kita belum tentu bisa langsung membuka:</p>

<pre><code>http://IP_VPS:3000</code></pre>

<p>Karena akses port <code>3000</code> bisa saja diblokir firewall atau memang belum kita expose ke public. Nanti akses public yang benar akan dibuat melalui Nginx reverse proxy di port <code>80</code> dan <code>443</code>.</p>

<h3>Jika ingin test sementara dari browser</h3>
<p>Untuk test sementara, pastikan aplikasi berjalan di host yang benar.</p>

<pre><code>npm run start -- -H 0.0.0.0</code></pre>

<p>Lalu cek firewall:</p>

<pre><code>sudo ufw status</code></pre>

<p>Jika UFW aktif dan kita ingin membuka port 3000 sementara:</p>

<pre><code>sudo ufw allow 3000/tcp</code></pre>

<p>Setelah testing selesai, lebih aman tutup lagi port 3000:</p>

<pre><code>sudo ufw delete allow 3000/tcp</code></pre>

<p>Untuk production, akses public sebaiknya tetap lewat Nginx, bukan membuka port 3000 terus-menerus.</p>

<h3>Video pendamping</h3>
<p>Video berikut bisa dipakai sebagai pendamping visual agar learner langsung memahami proses menjalankan LMS.</p>

<div class="lesson-video-embed">
  <iframe
    width="560"
    height="315"
    src="https://www.youtube.com/embed/uOeAt_woF_c?si=v5zNPGajvaOKYyrJ"
    title="Menjalankan LMS"
    loading="lazy"
    referrerpolicy="strict-origin-when-cross-origin"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
  ></iframe>
</div>

<h3>Troubleshooting umum</h3>

<h4>1. Error: missing script: start</h4>
<p>Artinya di <code>package.json</code> belum ada script <code>start</code>.</p>

<pre><code>cat package.json</code></pre>

<p>Pastikan ada:</p>

<pre><code>"start": "next start"</code></pre>

<h4>2. Error: Could not find a production build</h4>
<p>Artinya aplikasi belum dibuild atau folder <code>.next</code> belum ada.</p>

<pre><code>cd /var/www/lms/frontend
npm run build
npm run start</code></pre>

<h4>3. Error: port 3000 already in use</h4>
<p>Artinya port <code>3000</code> sedang dipakai proses lain.</p>

<pre><code>ss -tulpn | grep 3000</code></pre>

<p>Jika terlihat ada proses Node.js lama, hentikan prosesnya dengan hati-hati. Contoh:</p>

<pre><code>ps aux | grep node</code></pre>

<p>Lalu hentikan PID yang sesuai:</p>

<pre><code>kill PID_NUMBER</code></pre>

<h4>4. Browser tidak bisa membuka IP VPS:3000</h4>
<p>Kemungkinan penyebab:</p>

<ul>
  <li>aplikasi hanya listen di localhost,</li>
  <li>port 3000 belum dibuka firewall,</li>
  <li>provider VPS memblokir port tertentu,</li>
  <li>atau memang belum saatnya akses via port 3000 karena nanti akan lewat Nginx.</li>
</ul>

<p>Cek dari dalam VPS terlebih dahulu:</p>

<pre><code>curl http://localhost:3000</code></pre>

<h4>5. Terminal tertahan setelah npm run start</h4>
<p>Ini bukan error. Aplikasi sedang berjalan. Untuk keluar, tekan:</p>

<pre><code>CTRL + C</code></pre>

<h3>Ringkasan command lesson ini</h3>

<pre><code>cd /var/www/lms/frontend
pwd
ls -la
ls -la .next
cat package.json
npm run start
ss -tulpn | grep 3000
curl http://localhost:3000</code></pre>

<h3>Kesimpulan</h3>
<p>Pada lesson ini, kita menjalankan LMS secara manual untuk memastikan aplikasi benar-benar hidup setelah proses build production.</p>

<p>Kalau <code>npm run start</code> berhasil dan <code>curl http://localhost:3000</code> mengembalikan HTML, berarti LMS sudah berjalan dari sisi VPS.</p>

<p>Langkah berikutnya adalah membuat LMS tetap hidup di background menggunakan PM2, lalu menghubungkannya ke public melalui Nginx reverse proxy.</p>`,
          },
          {
            id: "l2l-23-video",
            title: "Video Menjalankan LMS",
            type: "video",
            description:
              "Video pendamping untuk memahami cara menjalankan LMS setelah build production.",
            url: "https://youtu.be/uOeAt_woF_c?si=v5zNPGajvaOKYyrJ",
            duration: "30 min",  
          },
        ],
      },
    ],
  },
  {
    id: "l2l-sec-5",
    title: "Module 5 — Configuring Domain dan SSL",
    summary:
      "Menghubungkan domain, reverse proxy Nginx, dan HTTPS agar LMS siap publik.",
    order: 5,
    lessons: [
      {
        id: "l2l-24",
        title: "Point domain ke VPS",
        duration: "28 min",
        summary:
          "Memahami DNS, A record, IP public VPS, cara mengecek propagasi domain, serta troubleshooting saat domain belum mengarah ke server.", 
        order: 1,
        materials: [
          {
            id: "l2l-24-html",
            title: "DNS ke VPS",
            type: "html",
            description: "Konsep dasar A record untuk LMS.",
            htmlContent:
              `<h2>DNS ke VPS</h2>
<p>Pada lesson ini, kita akan menghubungkan domain ke VPS agar LMS bisa diakses memakai nama domain, bukan hanya IP address.</p>

<h3>Apa itu DNS?</h3>
<p><strong>DNS</strong> adalah sistem yang menerjemahkan nama domain menjadi IP address server.</p>
<p>Contoh sederhananya:</p>
<ul>
  <li><code>lmsdomainkita.com</code> adalah nama yang mudah dibaca manusia.</li>
  <li><code>38.47.180.238</code> adalah alamat IP VPS yang dipahami komputer.</li>
</ul>

<h3>Apa itu A Record?</h3>
<p><strong>A record</strong> adalah record DNS yang mengarahkan domain atau subdomain ke IP address server.</p>
<p>Untuk LMS kita, biasanya yang dibuat adalah:</p>
<ul>
  <li><code>@</code> atau root domain → mengarah ke IP VPS</li>
  <li><code>www</code> → mengarah ke IP VPS</li>
  <li>atau subdomain seperti <code>lms</code> → mengarah ke IP VPS</li>
</ul>

<h3>Contoh kebutuhan DNS LMS</h3>
<table>
  <thead>
    <tr>
      <th>Target</th>
      <th>Type</th>
      <th>Name / Host</th>
      <th>Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Domain utama</td>
      <td>A</td>
      <td>@</td>
      <td>IP VPS kita</td>
    </tr>
    <tr>
      <td>WWW</td>
      <td>A</td>
      <td>www</td>
      <td>IP VPS kita</td>
    </tr>
    <tr>
      <td>Subdomain LMS</td>
      <td>A</td>
      <td>lms</td>
      <td>IP VPS kita</td>
    </tr>
  </tbody>
</table>

<h3>Folder kerja command</h3>
<p>Untuk lesson DNS, sebagian besar proses dilakukan di <strong>DNS panel domain</strong>, bukan di folder project.</p>
<p>Namun untuk command pengecekan di VPS, kita bisa menjalankannya dari folder mana saja. Supaya konsisten, gunakan folder project LMS:</p>

<pre><code>cd /var/www/lms
pwd</code></pre>

<p>Jika folder belum ada, berarti project LMS belum berada di lokasi tersebut. Cek dulu:</p>

<pre><code>ls -la /var/www</code></pre>

<h3>Langkah 1 — Cek IP public VPS</h3>
<p>Command ini dijalankan di <strong>VPS</strong>, dari folder mana saja. Supaya konsisten:</p>

<pre><code>cd /var/www/lms
curl ifconfig.me</code></pre>

<p>Jika <code>curl</code> belum ada, install dulu:</p>

<pre><code>sudo apt update
sudo apt install curl -y</code></pre>

<p>Cek lagi:</p>

<pre><code>curl ifconfig.me</code></pre>

<p>Catat IP yang muncul. IP inilah yang akan dipasang di DNS panel.</p>

<h3>Langkah 2 — Masuk ke DNS panel domain</h3>
<p>Masuk ke panel tempat domain dibeli atau dikelola. Contohnya bisa di provider domain, Cloudflare, Niagahoster, IDCloudHost, Rumahweb, Namecheap, GoDaddy, dan sejenisnya.</p>
<p>Cari menu seperti:</p>
<ul>
  <li>DNS Management</li>
  <li>Manage DNS</li>
  <li>Zone Editor</li>
  <li>DNS Records</li>
</ul>

<h3>Langkah 3 — Buat atau edit A Record</h3>
<p>Tambahkan record berikut:</p>

<pre><code>Type  : A
Name  : @
Value : IP_PUBLIC_VPS
TTL   : Auto / Default</code></pre>

<p>Jika ingin memakai <code>www</code>, tambahkan juga:</p>

<pre><code>Type  : A
Name  : www
Value : IP_PUBLIC_VPS
TTL   : Auto / Default</code></pre>

<p>Jika ingin memakai subdomain seperti <code>lms.domainkita.com</code>, tambahkan:</p>

<pre><code>Type  : A
Name  : lms
Value : IP_PUBLIC_VPS
TTL   : Auto / Default</code></pre>

<h3>Langkah 4 — Tunggu propagasi DNS</h3>
<p>Setelah DNS disimpan, perubahan tidak selalu langsung aktif. Biasanya bisa beberapa menit, tetapi kadang bisa lebih lama tergantung provider dan cache DNS.</p>

<h3>Langkah 5 — Cek DNS dari komputer lokal</h3>
<p>Command ini dijalankan dari <strong>komputer kita</strong>, bukan dari folder project. Di Windows bisa pakai Command Prompt atau PowerShell:</p>

<pre><code>nslookup domainkita.com</code></pre>

<p>Untuk subdomain:</p>

<pre><code>nslookup lms.domainkita.com</code></pre>

<p>Jika hasilnya sudah menampilkan IP VPS, berarti DNS sudah mengarah dengan benar.</p>

<h3>Alternatif cek DNS dari VPS</h3>
<p>Command ini dijalankan di <strong>VPS</strong>. Foldernya bebas, tetapi kita gunakan:</p>

<pre><code>cd /var/www/lms
nslookup domainkita.com</code></pre>

<p>Jika <code>nslookup</code> belum tersedia, install package berikut:</p>

<pre><code>sudo apt update
sudo apt install dnsutils -y</code></pre>

<p>Cek ulang:</p>

<pre><code>nslookup domainkita.com</code></pre>

<h3>Cek menggunakan dig</h3>
<p><code>dig</code> juga tersedia dari package <code>dnsutils</code>.</p>

<pre><code>dig domainkita.com</code></pre>

<p>Untuk melihat jawaban ringkas:</p>

<pre><code>dig +short domainkita.com</code></pre>

<p>Jika hasilnya adalah IP VPS, DNS sudah benar.</p>

<h3>Apakah setelah DNS diarahkan, LMS langsung bisa dibuka?</h3>
<p>Belum tentu. DNS hanya membuat domain mengarah ke VPS. Agar domain benar-benar menampilkan LMS, kita masih perlu memastikan:</p>
<ul>
  <li>LMS berjalan di VPS, misalnya di port <code>3000</code>.</li>
  <li>Nginx sudah menjadi reverse proxy dari domain ke port internal LMS.</li>
  <li>Firewall membuka port <code>80</code> dan nanti <code>443</code>.</li>
  <li>SSL sudah dipasang untuk HTTPS.</li>
</ul>

<div class="lesson-current-state-note">
  <strong>Catatan penting:</strong> DNS bukan pengganti Nginx. DNS hanya mengarahkan domain ke IP VPS. Nginx yang nanti mengatur request domain masuk ke aplikasi LMS.
</div>

<h3>Cek port web di VPS</h3>
<p>Command ini dijalankan di <strong>VPS</strong>, dari folder mana saja. Supaya konsisten:</p>

<pre><code>cd /var/www/lms
sudo ufw status</code></pre>

<p>Jika UFW belum ada:</p>

<pre><code>sudo apt update
sudo apt install ufw -y</code></pre>

<p>Untuk membuka akses HTTP dan HTTPS:</p>

<pre><code>sudo ufw allow 80
sudo ufw allow 443
sudo ufw status</code></pre>

<h3>Troubleshooting</h3>

<h4>1. nslookup masih menampilkan IP lama</h4>
<p>Kemungkinan DNS masih propagasi atau record lama masih tersimpan di cache.</p>
<p>Solusi:</p>
<ul>
  <li>Tunggu beberapa menit lalu cek ulang.</li>
  <li>Pastikan record A sudah benar.</li>
  <li>Pastikan tidak ada record lain yang bentrok.</li>
</ul>

<h4>2. Domain sudah mengarah ke IP VPS, tetapi browser timeout</h4>
<p>Ini biasanya bukan masalah DNS lagi. Kemungkinan port web belum terbuka, Nginx belum aktif, atau aplikasi belum berjalan.</p>
<p>Cek firewall:</p>

<pre><code>sudo ufw status</code></pre>

<p>Cek apakah Nginx aktif:</p>

<pre><code>sudo systemctl status nginx</code></pre>

<p>Jika Nginx belum ada, install:</p>

<pre><code>sudo apt update
sudo apt install nginx -y</code></pre>

<p>Aktifkan dan cek statusnya:</p>

<pre><code>sudo systemctl enable nginx
sudo systemctl start nginx
sudo systemctl status nginx</code></pre>

<h4>3. Domain mengarah benar, tetapi yang muncul halaman default Nginx</h4>
<p>Artinya domain sudah sampai ke VPS, tetapi konfigurasi reverse proxy untuk LMS belum dibuat atau belum aktif.</p>
<p>Ini akan kita bahas di lesson berikutnya tentang Nginx reverse proxy.</p>

<h4>4. Menggunakan Cloudflare tetapi IP tidak sama</h4>
<p>Jika Cloudflare proxy aktif, hasil DNS bisa menampilkan IP Cloudflare, bukan IP VPS. Ini normal jika proxy berwarna orange cloud.</p>
<p>Untuk testing awal, kita bisa set DNS menjadi DNS only terlebih dahulu agar pengecekan lebih mudah.</p>

<h4>5. Salah mengisi Name / Host</h4>
<p>Beberapa provider memakai format berbeda. Biasanya:</p>
<ul>
  <li><code>@</code> berarti domain utama.</li>
  <li><code>www</code> berarti <code>www.domainkita.com</code>.</li>
  <li><code>lms</code> berarti <code>lms.domainkita.com</code>.</li>
</ul>

<h3>Ringkasan command lesson ini</h3>

<pre><code>cd /var/www/lms
curl ifconfig.me
nslookup domainkita.com
dig +short domainkita.com
sudo ufw status
sudo ufw allow 80
sudo ufw allow 443
sudo systemctl status nginx</code></pre>

<h3>Kesimpulan</h3>
<p>Pada lesson ini, kita menghubungkan domain ke IP public VPS menggunakan A record.</p>
<p>Jika hasil <code>nslookup</code> atau <code>dig +short</code> sudah menampilkan IP VPS, berarti DNS sudah benar.</p>
<p>Langkah berikutnya adalah menyiapkan Nginx reverse proxy agar request dari domain bisa diteruskan ke LMS yang berjalan di port internal seperti <code>3000</code>.</p>`,
          },
          {
            id: "l2l-24-video",
            title: "Video DNS ke VPS",
            type: "video",
            description:
              "Video pendamping untuk memahami cara mengarahkan domain ke IP public VPS.",
            url: "https://youtu.be/uOeAt_woF_c?si=v5zNPGajvaOKYyrJ",
            duration: "28 min",         
          },
        ],
      },
      {
        id: "l2l-25",
        title: "Setup Nginx reverse proxy",
        duration: "35 min",
        summary:
          "Menghubungkan domain publik ke aplikasi LMS yang berjalan di port internal seperti 3000 menggunakan Nginx reverse proxy.", 
        order: 2,
        materials: [
          {
            id: "l2l-25-html",
            title: "Nginx Reverse Proxy",
            type: "html",
            description:
              "Konfigurasi Nginx sebagai reverse proxy dari domain ke aplikasi LMS di port internal.",   
            htmlContent:
              `<h2>Nginx Reverse Proxy</h2>
<p>Pada lesson ini, kita akan membuat domain publik mengarah ke aplikasi LMS yang berjalan di dalam VPS.</p>
<p>Contoh kondisi kita:</p>
<ul>
  <li>Domain: <code>domainkita.com</code></li>
  <li>IP VPS: sudah diarahkan lewat DNS A Record</li>
  <li>Aplikasi LMS berjalan di port internal: <code>3000</code></li>
  <li>Nginx menerima request dari browser lewat port <code>80</code></li>
</ul>

<h3>Apa itu Reverse Proxy?</h3>
<p><strong>Reverse proxy</strong> adalah pola di mana Nginx menerima request dari user, lalu meneruskannya ke aplikasi internal.</p>
<p>Jadi user cukup membuka:</p>

<pre><code>http://domainkita.com</code></pre>

<p>Padahal aplikasi LMS sebenarnya berjalan di:</p>

<pre><code>http://localhost:3000</code></pre>

<p>Dengan cara ini, port <code>3000</code> tidak perlu dibuka untuk publik. Yang dibuka cukup port web standar, yaitu <code>80</code> dan nanti <code>443</code> untuk HTTPS.</p>

<h3>Folder kerja command</h3>
<p>Untuk pengecekan project LMS, gunakan folder project:</p>

<pre><code>cd /var/www/lms
pwd</code></pre>

<p>Untuk konfigurasi Nginx, file akan dibuat di folder sistem Nginx:</p>

<pre><code>/etc/nginx/sites-available/</code></pre>

<p>Jadi command edit Nginx boleh dijalankan dari folder mana saja, tetapi pada materi ini kita tetap mulai dari folder project agar learner tidak bingung.</p>

<h3>Langkah 1 — Pastikan aplikasi LMS berjalan</h3>
<p>Command ini dijalankan di <strong>VPS</strong>, di folder project LMS:</p>

<pre><code>cd /var/www/lms
npm run start</code></pre>

<p>Jika aplikasi sudah berjalan, biasanya akan muncul informasi bahwa server aktif di port <code>3000</code>.</p>

<p>Jika ingin mengecek dari terminal lain di VPS:</p>

<pre><code>curl http://localhost:3000</code></pre>

<p>Jika <code>curl</code> belum tersedia:</p>

<pre><code>sudo apt update
sudo apt install curl -y</code></pre>

<p>Cek ulang:</p>

<pre><code>curl http://localhost:3000</code></pre>

<h3>Langkah 2 — Cek apakah Nginx sudah terinstall</h3>
<p>Command ini dijalankan di VPS. Folder bebas, tetapi kita gunakan folder project:</p>

<pre><code>cd /var/www/lms
nginx -v</code></pre>

<p>Jika muncul versi Nginx, berarti Nginx sudah ada.</p>
<p>Jika muncul command not found, install dulu:</p>

<pre><code>sudo apt update
sudo apt install nginx -y</code></pre>

<p>Setelah install, cek status Nginx:</p>

<pre><code>sudo systemctl status nginx</code></pre>

<p>Jika belum aktif, jalankan:</p>

<pre><code>sudo systemctl enable nginx
sudo systemctl start nginx
sudo systemctl status nginx</code></pre>

<h3>Langkah 3 — Pastikan port 80 dibuka</h3>
<p>Command ini dijalankan di VPS:</p>

<pre><code>sudo ufw status</code></pre>

<p>Jika <code>ufw</code> belum tersedia:</p>

<pre><code>sudo apt update
sudo apt install ufw -y</code></pre>

<p>Buka port HTTP:</p>

<pre><code>sudo ufw allow 80
sudo ufw status</code></pre>

<p>Nanti saat HTTPS sudah dipasang, kita juga akan membuka port <code>443</code>.</p>

<h3>Langkah 4 — Buat file konfigurasi Nginx</h3>
<p>Command ini dijalankan di VPS. Kita akan membuat file config baru di <code>sites-available</code>.</p>

<pre><code>sudo nano /etc/nginx/sites-available/lms</code></pre>

<p>Isi dengan konfigurasi berikut. Ganti <code>domainkita.com</code> dan <code>www.domainkita.com</code> sesuai domain kita.</p>

<pre><code>server {
  listen 80;
  listen [::]:80;

  server_name domainkita.com www.domainkita.com;

  location / {
    proxy_pass http://127.0.0.1:3000;
    proxy_http_version 1.1;

    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection "upgrade";
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;

    proxy_cache_bypass $http_upgrade;
  }
}</code></pre>

<p>Simpan file di nano dengan:</p>
<ul>
  <li><code>CTRL + O</code> lalu Enter untuk save</li>
  <li><code>CTRL + X</code> untuk keluar</li>
</ul>

<h3>Langkah 5 — Aktifkan konfigurasi site</h3>
<p>Command ini dijalankan di VPS:</p>

<pre><code>sudo ln -s /etc/nginx/sites-available/lms /etc/nginx/sites-enabled/lms</code></pre>

<p>Jika muncul error bahwa file sudah ada, artinya link sudah pernah dibuat. Kita bisa cek:</p>

<pre><code>ls -la /etc/nginx/sites-enabled/</code></pre>

<h3>Langkah 6 — Test konfigurasi Nginx</h3>
<p>Sebelum reload, selalu test syntax Nginx:</p>

<pre><code>sudo nginx -t</code></pre>

<p>Jika hasilnya seperti ini, berarti aman:</p>

<pre><code>syntax is ok
test is successful</code></pre>

<p>Jika ada error, jangan reload dulu. Baca pesan error-nya, biasanya ada info file dan nomor baris yang bermasalah.</p>

<h3>Langkah 7 — Reload Nginx</h3>
<p>Jika test sudah berhasil:</p>

<pre><code>sudo systemctl reload nginx</code></pre>

<p>Cek statusnya:</p>

<pre><code>sudo systemctl status nginx</code></pre>

<h3>Langkah 8 — Test dari browser</h3>
<p>Buka dari browser di PC kita:</p>

<pre><code>http://domainkita.com</code></pre>

<p>Jika berhasil, LMS akan tampil melalui domain tanpa perlu menulis port <code>:3000</code>.</p>

<h3>Langkah 9 — Test dari VPS</h3>
<p>Command ini dijalankan di VPS:</p>

<pre><code>curl -I http://domainkita.com</code></pre>

<p>Jika berhasil, biasanya akan muncul response header seperti <code>HTTP/1.1 200 OK</code>, <code>301</code>, atau response lain dari aplikasi.</p>

<h3>Troubleshooting</h3>

<h4>1. Browser menampilkan halaman default Nginx</h4>
<p>Artinya domain sudah masuk ke VPS, tetapi config site LMS belum aktif atau masih kalah dengan default site.</p>
<p>Cek file aktif:</p>

<pre><code>ls -la /etc/nginx/sites-enabled/</code></pre>

<p>Jika default masih aktif dan mengganggu, nonaktifkan:</p>

<pre><code>sudo rm /etc/nginx/sites-enabled/default
sudo nginx -t
sudo systemctl reload nginx</code></pre>

<h4>2. Muncul 502 Bad Gateway</h4>
<p>Artinya Nginx aktif, tetapi aplikasi di belakangnya tidak bisa diakses.</p>
<p>Cek apakah LMS berjalan:</p>

<pre><code>cd /var/www/lms
curl http://localhost:3000</code></pre>

<p>Jika tidak ada response, jalankan ulang aplikasi:</p>

<pre><code>cd /var/www/lms
npm run start</code></pre>

<h4>3. Domain timeout</h4>
<p>Kemungkinan port <code>80</code> belum dibuka di firewall VPS atau security group provider.</p>
<p>Cek UFW:</p>

<pre><code>sudo ufw status</code></pre>

<p>Buka port 80:</p>

<pre><code>sudo ufw allow 80</code></pre>

<h4>4. sudo nginx -t error</h4>
<p>Jangan reload Nginx sebelum error diperbaiki.</p>
<p>Cek pesan error, lalu buka file config:</p>

<pre><code>sudo nano /etc/nginx/sites-available/lms</code></pre>

<p>Kesalahan paling umum:</p>
<ul>
  <li>Kurang titik koma <code>;</code></li>
  <li>Kurung kurawal <code>{ }</code> tidak lengkap</li>
  <li>Domain salah tulis</li>
  <li>File symlink dobel</li>
</ul>

<h4>5. curl localhost:3000 berhasil, tetapi domain tidak tampil</h4>
<p>Berarti aplikasi LMS berjalan, tetapi jalur domain ke Nginx masih bermasalah.</p>
<p>Cek DNS:</p>

<pre><code>nslookup domainkita.com 8.8.8.8</code></pre>

<p>Cek Nginx:</p>

<pre><code>sudo nginx -t
sudo systemctl status nginx</code></pre>

<h3>Ringkasan command</h3>

<pre><code>cd /var/www/lms
npm run start
curl http://localhost:3000
nginx -v
sudo systemctl status nginx
sudo ufw status
sudo ufw allow 80
sudo nano /etc/nginx/sites-available/lms
sudo ln -s /etc/nginx/sites-available/lms /etc/nginx/sites-enabled/lms
sudo nginx -t
sudo systemctl reload nginx
curl -I http://domainkita.com</code></pre>

<h3>Kesimpulan</h3>
<p>Nginx reverse proxy membuat LMS bisa diakses lewat domain normal tanpa membuka port <code>3000</code> ke publik.</p>
<p>Setelah tahap ini berhasil, domain seperti <code>domainkita.com</code> akan meneruskan request ke aplikasi LMS di <code>localhost:3000</code>.</p>
<p>Langkah berikutnya adalah mengaktifkan konfigurasi dengan lebih rapi, memastikan reload aman, lalu melanjutkan ke HTTPS/SSL.</p>`,
          },
          {
            id: "l2l-25-video",
            title: "Video Nginx Reverse Proxy",
            type: "video",
            description:
              "Video pendamping untuk memahami Nginx reverse proxy dari domain ke aplikasi LMS.",
            url: "https://youtu.be/uOeAt_woF_c?si=v5zNPGajvaOKYyrJ",
            duration: "35 min",
          },
        ],
      },
      {
        id: "l2l-26",
        title: "Enable config dan reload Nginx",
        duration: "30 min",
        summary:
          "Mengaktifkan konfigurasi site Nginx, melakukan validasi syntax, reload service dengan aman, dan mengecek hasilnya dari VPS maupun browser.",     
        order: 3,
        materials: [
          {
            id: "l2l-26-html",
            title: "Enable Site Config",
            type: "html",
            description:
              "Langkah aman mengaktifkan site config Nginx, test syntax, reload, dan troubleshooting error umum.", 
            htmlContent:
              `<h2>Enable Site Config</h2>
<p>Pada lesson ini, kita akan mengaktifkan konfigurasi Nginx yang sudah dibuat pada lesson sebelumnya.</p>
<p>Tujuannya adalah agar domain publik seperti <code>domainkita.com</code> benar-benar memakai konfigurasi reverse proxy menuju aplikasi LMS di <code>localhost:3000</code>.</p>

<h3>Apa arti enable site config?</h3>
<p>Di Ubuntu, konfigurasi Nginx biasanya disimpan di dua folder penting:</p>
<ul>
  <li><code>/etc/nginx/sites-available/</code> → tempat menyimpan file konfigurasi site.</li>
  <li><code>/etc/nginx/sites-enabled/</code> → tempat konfigurasi yang benar-benar aktif.</li>
</ul>

<p>File di <code>sites-available</code> belum otomatis aktif. Supaya aktif, kita membuat symbolic link ke <code>sites-enabled</code>.</p>

<h3>Folder kerja command</h3>
<p>Untuk konfigurasi Nginx, command boleh dijalankan dari folder mana saja karena file yang diedit berada di folder sistem.</p>
<p>Namun supaya konsisten dengan course ini, mulai dari folder project LMS:</p>

<pre><code>cd /var/www/lms
pwd</code></pre>

<p>Jika folder belum ada, cek dulu:</p>

<pre><code>ls -la /var/www</code></pre>

<h3>Langkah 1 — Cek apakah file config sudah ada</h3>
<p>Command ini dijalankan di <strong>VPS</strong>:</p>

<pre><code>ls -la /etc/nginx/sites-available/</code></pre>

<p>Pastikan ada file config yang sudah kita buat, misalnya:</p>

<pre><code>lms</code></pre>

<p>Jika belum ada, berarti kita perlu kembali ke lesson sebelumnya dan membuat file config:</p>

<pre><code>sudo nano /etc/nginx/sites-available/lms</code></pre>

<h3>Langkah 2 — Cek isi file config</h3>
<p>Sebelum diaktifkan, cek dulu isi file config:</p>

<pre><code>sudo cat /etc/nginx/sites-available/lms</code></pre>

<p>Pastikan bagian <code>server_name</code> sudah sesuai domain kita, misalnya:</p>

<pre><code>server_name domainkita.com www.domainkita.com;</code></pre>

<p>Pastikan juga <code>proxy_pass</code> mengarah ke port aplikasi LMS:</p>

<pre><code>proxy_pass http://127.0.0.1:3000;</code></pre>

<h3>Langkah 3 — Aktifkan site config</h3>
<p>Command ini membuat symbolic link dari <code>sites-available</code> ke <code>sites-enabled</code>:</p>

<pre><code>sudo ln -s /etc/nginx/sites-available/lms /etc/nginx/sites-enabled/lms</code></pre>

<p>Setelah itu, cek apakah link sudah aktif:</p>

<pre><code>ls -la /etc/nginx/sites-enabled/</code></pre>

<p>Jika berhasil, akan terlihat link seperti:</p>

<pre><code>lms -&gt; /etc/nginx/sites-available/lms</code></pre>

<h3>Jika muncul error file already exists</h3>
<p>Jika muncul pesan seperti <code>File exists</code>, artinya site config sudah pernah diaktifkan.</p>
<p>Cek saja dengan:</p>

<pre><code>ls -la /etc/nginx/sites-enabled/lms</code></pre>

<p>Jika link sudah benar, tidak perlu dibuat ulang.</p>

<h3>Langkah 4 — Nonaktifkan default site jika mengganggu</h3>
<p>Kadang domain masih menampilkan halaman default Nginx karena default site masih aktif.</p>
<p>Cek dulu:</p>

<pre><code>ls -la /etc/nginx/sites-enabled/</code></pre>

<p>Jika ada file atau link bernama <code>default</code>, kita boleh menonaktifkannya:</p>

<pre><code>sudo rm /etc/nginx/sites-enabled/default</code></pre>

<p>Perintah ini tidak menghapus file konfigurasi original di <code>sites-available</code>. Ia hanya menghapus link aktifnya.</p>

<h3>Langkah 5 — Test syntax Nginx</h3>
<p>Ini langkah wajib sebelum reload:</p>

<pre><code>sudo nginx -t</code></pre>

<p>Jika konfigurasi benar, hasilnya biasanya seperti:</p>

<pre><code>nginx: the configuration file /etc/nginx/nginx.conf syntax is ok
nginx: configuration file /etc/nginx/nginx.conf test is successful</code></pre>

<p>Jika hasilnya error, jangan reload Nginx dulu. Perbaiki error sampai <code>nginx -t</code> sukses.</p>

<h3>Langkah 6 — Reload Nginx</h3>
<p>Jika test syntax sudah sukses, reload Nginx:</p>

<pre><code>sudo systemctl reload nginx</code></pre>

<p>Reload lebih aman daripada restart karena Nginx membaca ulang konfigurasi tanpa mematikan service secara penuh.</p>

<h3>Langkah 7 — Cek status Nginx</h3>
<p>Command ini dijalankan di VPS:</p>

<pre><code>sudo systemctl status nginx</code></pre>

<p>Jika statusnya <code>active (running)</code>, berarti Nginx berjalan.</p>

<p>Jika Nginx belum aktif, jalankan:</p>

<pre><code>sudo systemctl start nginx
sudo systemctl status nginx</code></pre>

<p>Jika ingin Nginx otomatis aktif setelah VPS reboot:</p>

<pre><code>sudo systemctl enable nginx</code></pre>

<h3>Langkah 8 — Test dari VPS</h3>
<p>Command ini dijalankan di VPS:</p>

<pre><code>curl -I http://domainkita.com</code></pre>

<p>Jika <code>curl</code> belum ada, install dulu:</p>

<pre><code>sudo apt update
sudo apt install curl -y</code></pre>

<p>Cek ulang:</p>

<pre><code>curl -I http://domainkita.com</code></pre>

<p>Jika berhasil, kita akan melihat response header dari server.</p>

<h3>Langkah 9 — Test dari browser</h3>
<p>Buka dari browser di PC:</p>

<pre><code>http://domainkita.com</code></pre>

<p>Jika benar, halaman LMS akan tampil tanpa perlu menulis <code>:3000</code>.</p>

<h3>Langkah 10 — Cek apakah port 80 aktif</h3>
<p>Jika domain belum bisa dibuka, cek firewall:</p>

<pre><code>sudo ufw status</code></pre>

<p>Jika port 80 belum terbuka:</p>

<pre><code>sudo ufw allow 80
sudo ufw status</code></pre>

<h3>Troubleshooting</h3>

<h4>1. Error: File exists saat membuat symbolic link</h4>
<p>Artinya link sudah ada. Cek:</p>

<pre><code>ls -la /etc/nginx/sites-enabled/lms</code></pre>

<p>Jika link sudah mengarah ke file yang benar, lanjut ke test syntax:</p>

<pre><code>sudo nginx -t</code></pre>

<h4>2. sudo nginx -t gagal</h4>
<p>Jangan reload Nginx. Baca pesan error yang muncul.</p>
<p>Biasanya error menunjukkan file dan nomor baris, misalnya:</p>

<pre><code>/etc/nginx/sites-enabled/lms:12</code></pre>

<p>Buka file config:</p>

<pre><code>sudo nano /etc/nginx/sites-available/lms</code></pre>

<p>Kesalahan umum:</p>
<ul>
  <li>Kurang tanda titik koma <code>;</code></li>
  <li>Kurung kurawal <code>{ }</code> tidak lengkap</li>
  <li>Salah menulis directive Nginx</li>
  <li>Domain di <code>server_name</code> salah ketik</li>
</ul>

<h4>3. Browser masih menampilkan Welcome to Nginx</h4>
<p>Kemungkinan default site masih aktif atau config LMS belum terbaca.</p>
<p>Cek site aktif:</p>

<pre><code>ls -la /etc/nginx/sites-enabled/</code></pre>

<p>Jika ada default:</p>

<pre><code>sudo rm /etc/nginx/sites-enabled/default
sudo nginx -t
sudo systemctl reload nginx</code></pre>

<h4>4. Muncul 502 Bad Gateway</h4>
<p>Artinya Nginx sudah aktif, tetapi aplikasi LMS di port <code>3000</code> belum berjalan atau tidak bisa diakses.</p>
<p>Cek dari VPS:</p>

<pre><code>cd /var/www/lms
curl http://localhost:3000</code></pre>

<p>Jika tidak ada response, jalankan aplikasi:</p>

<pre><code>cd /var/www/lms
npm run start</code></pre>

<h4>5. Domain timeout</h4>
<p>Kemungkinan firewall belum membuka port <code>80</code>, DNS belum benar, atau provider VPS memiliki firewall tambahan.</p>
<p>Cek DNS dari PC:</p>

<pre><code>nslookup domainkita.com 8.8.8.8</code></pre>

<p>Cek firewall VPS:</p>

<pre><code>sudo ufw status</code></pre>

<p>Buka port 80:</p>

<pre><code>sudo ufw allow 80</code></pre>

<h4>6. Nginx tidak ditemukan</h4>
<p>Jika command <code>nginx</code> belum tersedia, install Nginx:</p>

<pre><code>sudo apt update
sudo apt install nginx -y</code></pre>

<p>Lalu cek:</p>

<pre><code>nginx -v
sudo systemctl status nginx</code></pre>

<h3>Ringkasan command</h3>

<pre><code>cd /var/www/lms
ls -la /etc/nginx/sites-available/
sudo cat /etc/nginx/sites-available/lms
sudo ln -s /etc/nginx/sites-available/lms /etc/nginx/sites-enabled/lms
ls -la /etc/nginx/sites-enabled/
sudo rm /etc/nginx/sites-enabled/default
sudo nginx -t
sudo systemctl reload nginx
sudo systemctl status nginx
curl -I http://domainkita.com
sudo ufw status
sudo ufw allow 80</code></pre>

<h3>Kesimpulan</h3>
<p>Pada lesson ini, kita mengaktifkan site config Nginx dengan symbolic link, melakukan validasi syntax, lalu reload Nginx dengan aman.</p>
<p>Urutan aman yang harus selalu diingat adalah:</p>

<pre><code>enable config
test syntax
reload nginx
test domain</code></pre>

<p>Jika domain sudah menampilkan LMS tanpa port <code>:3000</code>, berarti reverse proxy sudah bekerja.</p>`,
          },
          {
            id: "l2l-26-video",
            title: "Video Enable Site Config",
            type: "video",
            description:
              "Video pendamping untuk memahami cara mengaktifkan konfigurasi Nginx, test syntax, dan reload service.",
            url: "https://youtu.be/uOeAt_woF_c?si=v5zNPGajvaOKYyrJ",
            duration: "30 min", 
          },
        ],
      },
      {
        id: "l2l-27",
        title: "Install Certbot",
        duration: "30 min",
        summary:
          "Menyiapkan Certbot dan plugin Nginx untuk membuat sertifikat SSL gratis dari Let's Encrypt agar LMS bisa memakai HTTPS.",      
        order: 4,
        materials: [
          {
            id: "l2l-27-html",
            title: "Install Certbot",
            type: "html",
            description:
              "Install Certbot, cek status Nginx, cek domain, dan siapkan server sebelum generate SSL.",  
            htmlContent:
              `<h2>Install Certbot</h2>
<p>Pada lesson ini, kita akan menginstall <strong>Certbot</strong>, yaitu tool yang membantu kita membuat sertifikat SSL gratis dari Let's Encrypt.</p>
<p>Setelah SSL aktif, LMS kita bisa diakses menggunakan HTTPS:</p>

<pre><code>https://domainkita.com</code></pre>

<h3>Apa itu Certbot?</h3>
<p><strong>Certbot</strong> adalah tool command line yang digunakan untuk meminta, memasang, dan memperpanjang sertifikat SSL dari Let's Encrypt.</p>
<p>Dengan Certbot, kita tidak perlu membeli SSL manual untuk kebutuhan dasar website. Certbot juga bisa membantu mengubah konfigurasi Nginx agar mendukung HTTPS.</p>

<h3>Kenapa HTTPS penting?</h3>
<ul>
  <li>Browser tidak menampilkan warning “Not Secure”.</li>
  <li>Login LMS lebih aman karena data dikirim lewat koneksi terenkripsi.</li>
  <li>Website terlihat lebih profesional.</li>
  <li>Banyak fitur modern web lebih cocok berjalan di HTTPS.</li>
</ul>

<h3>Folder kerja command</h3>
<p>Install Certbot dilakukan di level sistem VPS, jadi command boleh dijalankan dari folder mana saja.</p>
<p>Namun agar course ini konsisten, kita mulai dari folder project LMS:</p>

<pre><code>cd /var/www/lms
pwd</code></pre>

<p>Jika folder belum ada, cek dulu:</p>

<pre><code>ls -la /var/www</code></pre>

<h3>Langkah 1 — Pastikan domain sudah mengarah ke VPS</h3>
<p>Sebelum install SSL, domain harus sudah mengarah ke IP VPS.</p>
<p>Command ini bisa dijalankan dari PC lokal atau dari VPS:</p>

<pre><code>nslookup domainkita.com 8.8.8.8</code></pre>

<p>Hasil yang benar harus menampilkan IP public VPS.</p>
<p>Contoh:</p>

<pre><code>Name: domainkita.com
Address: 38.47.180.238</code></pre>

<p>Jika <code>nslookup</code> belum tersedia di VPS, install dulu:</p>

<pre><code>sudo apt update
sudo apt install dnsutils -y</code></pre>

<p>Lalu cek ulang:</p>

<pre><code>nslookup domainkita.com 8.8.8.8</code></pre>

<h3>Langkah 2 — Pastikan Nginx sudah aktif</h3>
<p>Certbot akan membaca konfigurasi Nginx. Jadi Nginx harus sudah terinstall dan berjalan.</p>

<pre><code>nginx -v</code></pre>

<p>Jika Nginx belum ada:</p>

<pre><code>sudo apt update
sudo apt install nginx -y</code></pre>

<p>Cek status Nginx:</p>

<pre><code>sudo systemctl status nginx</code></pre>

<p>Jika belum aktif:</p>

<pre><code>sudo systemctl enable nginx
sudo systemctl start nginx
sudo systemctl status nginx</code></pre>

<h3>Langkah 3 — Pastikan konfigurasi Nginx valid</h3>
<p>Sebelum memasang SSL, test dulu syntax Nginx:</p>

<pre><code>sudo nginx -t</code></pre>

<p>Jika sukses, hasilnya seperti ini:</p>

<pre><code>nginx: the configuration file /etc/nginx/nginx.conf syntax is ok
nginx: configuration file /etc/nginx/nginx.conf test is successful</code></pre>

<p>Jika masih error, perbaiki konfigurasi Nginx terlebih dahulu sebelum lanjut ke Certbot.</p>

<h3>Langkah 4 — Pastikan port 80 dan 443 dibuka</h3>
<p>Command ini dijalankan di VPS:</p>

<pre><code>sudo ufw status</code></pre>

<p>Jika UFW belum tersedia:</p>

<pre><code>sudo apt update
sudo apt install ufw -y</code></pre>

<p>Buka port HTTP dan HTTPS:</p>

<pre><code>sudo ufw allow 80
sudo ufw allow 443
sudo ufw status</code></pre>

<p>Port <code>80</code> dibutuhkan untuk proses verifikasi Let's Encrypt. Port <code>443</code> dibutuhkan untuk akses HTTPS.</p>

<h3>Langkah 5 — Install Certbot dan plugin Nginx</h3>
<p>Command ini dijalankan di VPS:</p>

<pre><code>sudo apt update
sudo apt install certbot python3-certbot-nginx -y</code></pre>

<p>Package <code>certbot</code> adalah tool utamanya, sedangkan <code>python3-certbot-nginx</code> adalah plugin agar Certbot bisa membaca dan mengubah konfigurasi Nginx.</p>

<h3>Langkah 6 — Cek versi Certbot</h3>
<p>Setelah install selesai, cek apakah Certbot sudah tersedia:</p>

<pre><code>certbot --version</code></pre>

<p>Jika muncul versi Certbot, berarti instalasi berhasil.</p>

<h3>Langkah 7 — Cek plugin Nginx Certbot</h3>
<p>Untuk memastikan plugin Nginx tersedia, jalankan:</p>

<pre><code>certbot plugins</code></pre>

<p>Cari plugin yang berhubungan dengan Nginx. Jika plugin Nginx tampil, berarti Certbot siap digunakan dengan Nginx.</p>

<h3>Langkah 8 — Cek domain dari browser</h3>
<p>Sebelum generate SSL, pastikan domain sudah bisa dibuka melalui HTTP:</p>

<pre><code>http://domainkita.com</code></pre>

<p>Jika domain belum bisa dibuka lewat HTTP, jangan lanjut dulu ke SSL. Perbaiki DNS, Nginx, firewall, atau aplikasi LMS terlebih dahulu.</p>

<h3>Langkah 9 — Cek dari VPS menggunakan curl</h3>
<p>Command ini dijalankan di VPS:</p>

<pre><code>curl -I http://domainkita.com</code></pre>

<p>Jika <code>curl</code> belum tersedia:</p>

<pre><code>sudo apt update
sudo apt install curl -y</code></pre>

<p>Cek ulang:</p>

<pre><code>curl -I http://domainkita.com</code></pre>

<p>Jika domain sudah merespons, kita siap lanjut ke lesson berikutnya untuk generate SSL.</p>

<h3>Catatan penting tentang email Certbot</h3>
<p>Saat generate SSL nanti, Certbot biasanya meminta email.</p>
<p>Email ini digunakan untuk notifikasi penting, misalnya jika sertifikat hampir expired atau ada perubahan dari Let's Encrypt.</p>

<h3>Troubleshooting</h3>

<h4>1. certbot: command not found</h4>
<p>Artinya Certbot belum terinstall atau instalasi gagal.</p>

<pre><code>sudo apt update
sudo apt install certbot python3-certbot-nginx -y
certbot --version</code></pre>

<h4>2. python3-certbot-nginx tidak ditemukan</h4>
<p>Pastikan repository Ubuntu sudah update:</p>

<pre><code>sudo apt update</code></pre>

<p>Lalu install ulang:</p>

<pre><code>sudo apt install certbot python3-certbot-nginx -y</code></pre>

<h4>3. Nginx belum aktif</h4>
<p>Cek status:</p>

<pre><code>sudo systemctl status nginx</code></pre>

<p>Jika belum aktif:</p>

<pre><code>sudo systemctl start nginx
sudo systemctl status nginx</code></pre>

<h4>4. sudo nginx -t gagal</h4>
<p>Jangan lanjut ke SSL sebelum konfigurasi Nginx valid.</p>
<p>Buka file config LMS:</p>

<pre><code>sudo nano /etc/nginx/sites-available/lms</code></pre>

<p>Kesalahan umum:</p>
<ul>
  <li>Kurang tanda titik koma <code>;</code></li>
  <li>Kurung kurawal <code>{ }</code> tidak lengkap</li>
  <li><code>server_name</code> salah ketik</li>
  <li><code>proxy_pass</code> salah port</li>
</ul>

<h4>5. Domain belum bisa dibuka lewat HTTP</h4>
<p>SSL tidak akan berhasil jika domain belum bisa diakses lewat HTTP.</p>
<p>Cek DNS:</p>

<pre><code>nslookup domainkita.com 8.8.8.8</code></pre>

<p>Cek firewall:</p>

<pre><code>sudo ufw status</code></pre>

<p>Cek Nginx:</p>

<pre><code>sudo systemctl status nginx
sudo nginx -t</code></pre>

<h4>6. Port 80 tertutup</h4>
<p>Let's Encrypt membutuhkan akses ke port <code>80</code> untuk proses verifikasi HTTP challenge.</p>

<pre><code>sudo ufw allow 80
sudo ufw status</code></pre>

<p>Jika provider VPS memiliki firewall tambahan di dashboard, pastikan port <code>80</code> dan <code>443</code> juga dibuka dari dashboard provider.</p>

<h3>Ringkasan command</h3>

<pre><code>cd /var/www/lms
nslookup domainkita.com 8.8.8.8
nginx -v
sudo systemctl status nginx
sudo nginx -t
sudo ufw status
sudo ufw allow 80
sudo ufw allow 443
sudo apt update
sudo apt install certbot python3-certbot-nginx -y
certbot --version
certbot plugins
curl -I http://domainkita.com</code></pre>

<h3>Kesimpulan</h3>
<p>Pada lesson ini, kita belum membuat sertifikat SSL. Kita baru menyiapkan tool-nya, yaitu Certbot dan plugin Nginx.</p>
<p>Jika Certbot sudah terinstall, Nginx aktif, DNS benar, dan domain bisa dibuka lewat HTTP, maka kita siap lanjut ke lesson berikutnya: generate SSL dan mengaktifkan HTTPS.</p>`,
          },
          {
            id: "l2l-27-video",
            title: "Video Install Certbot",
            type: "video",
            description:
              "Video pendamping untuk memahami instalasi Certbot dan persiapan SSL Let's Encrypt untuk LMS.",
            url: "https://youtu.be/uOeAt_woF_c?si=v5zNPGajvaOKYyrJ",
            duration: "30 min",     
          },
        ],
      },
      {
        id: "l2l-28",
        title: "Generate SSL",
        duration: "35 min",
        summary:
          "Generate sertifikat SSL Let's Encrypt dengan Certbot, mengaktifkan HTTPS, redirect otomatis, dan mengecek auto-renewal.",  
        order: 5,
        materials: [
          {
            id: "l2l-28-html",
            title: "Aktifkan HTTPS",
            type: "html",
            description:
              "Generate sertifikat SSL, aktifkan HTTPS, cek konfigurasi Nginx, dan troubleshooting error Certbot.",  
            htmlContent:
              `<h2>Aktifkan HTTPS</h2>
<p>Pada lesson ini, kita akan mengaktifkan HTTPS untuk domain LMS menggunakan Certbot dan Let's Encrypt.</p>
<p>Jika berhasil, LMS bisa dibuka dengan alamat aman seperti:</p>

<pre><code>https://domainkita.com</code></pre>

<h3>Kenapa HTTPS penting?</h3>
<ul>
  <li>Browser tidak menampilkan label <strong>Not Secure</strong>.</li>
  <li>Login dan data user lebih aman karena koneksi terenkripsi.</li>
  <li>Website terlihat lebih profesional.</li>
  <li>HTTPS adalah standar wajib untuk aplikasi production.</li>
</ul>

<h3>Folder kerja command</h3>
<p>Command Certbot bekerja di level sistem VPS, jadi sebenarnya boleh dijalankan dari folder mana saja.</p>
<p>Namun supaya konsisten dengan course ini, kita mulai dari folder project LMS:</p>

<pre><code>cd /var/www/lms
pwd</code></pre>

<h3>Langkah 1 — Pastikan domain sudah resolve ke VPS</h3>
<p>Command ini bisa dijalankan dari PC lokal atau dari VPS:</p>

<pre><code>nslookup domainkita.com 8.8.8.8
nslookup www.domainkita.com 8.8.8.8</code></pre>

<p>Hasil yang benar harus menampilkan IP public VPS.</p>

<h3>Langkah 2 — Pastikan Nginx aktif dan valid</h3>
<p>Command ini dijalankan di VPS:</p>

<pre><code>sudo systemctl status nginx
sudo nginx -t</code></pre>

<p>Jika Nginx belum terinstall:</p>

<pre><code>sudo apt update
sudo apt install nginx -y</code></pre>

<p>Jika Nginx belum aktif:</p>

<pre><code>sudo systemctl enable nginx
sudo systemctl start nginx
sudo systemctl status nginx</code></pre>

<h3>Langkah 3 — Pastikan port 80 dan 443 terbuka</h3>
<p>Command ini dijalankan di VPS:</p>

<pre><code>sudo ufw status</code></pre>

<p>Jika port belum dibuka:</p>

<pre><code>sudo ufw allow 80
sudo ufw allow 443
sudo ufw status</code></pre>

<h3>Langkah 4 — Pastikan Certbot sudah terinstall</h3>
<p>Cek versi Certbot:</p>

<pre><code>certbot --version</code></pre>

<p>Jika belum ada:</p>

<pre><code>sudo apt update
sudo apt install certbot python3-certbot-nginx -y</code></pre>

<p>Cek ulang:</p>

<pre><code>certbot --version
certbot plugins</code></pre>

<h3>Langkah 5 — Generate SSL dengan Certbot</h3>
<p>Command ini dijalankan di VPS. Ganti domain sesuai domain kita:</p>

<pre><code>sudo certbot --nginx -d domainkita.com -d www.domainkita.com</code></pre>

<p>Saat proses berjalan, Certbot biasanya akan meminta:</p>
<ul>
  <li>Email untuk notifikasi SSL.</li>
  <li>Persetujuan Terms of Service.</li>
  <li>Pilihan redirect HTTP ke HTTPS.</li>
</ul>

<p>Jika ada pilihan redirect, pilih opsi redirect agar semua akses HTTP otomatis diarahkan ke HTTPS.</p>

<h3>Langkah 6 — Cek hasil HTTPS</h3>
<p>Dari browser PC, buka:</p>

<pre><code>https://domainkita.com</code></pre>

<p>Dari VPS, cek dengan:</p>

<pre><code>curl -I https://domainkita.com</code></pre>

<p>Jika <code>curl</code> belum ada:</p>

<pre><code>sudo apt update
sudo apt install curl -y</code></pre>

<h3>Langkah 7 — Cek konfigurasi Nginx setelah SSL</h3>
<p>Setelah Certbot berhasil, test ulang Nginx:</p>

<pre><code>sudo nginx -t
sudo systemctl reload nginx
sudo systemctl status nginx</code></pre>

<h3>Langkah 8 — Cek auto-renewal SSL</h3>
<p>Sertifikat Let's Encrypt memiliki masa berlaku terbatas, jadi renewal otomatis sangat penting.</p>
<p>Cek timer renewal:</p>

<pre><code>systemctl list-timers | grep certbot</code></pre>

<p>Test simulasi renewal:</p>

<pre><code>sudo certbot renew --dry-run</code></pre>

<p>Jika dry-run sukses, berarti sistem renewal SSL sudah aman.</p>

<h3>Troubleshooting</h3>

<h4>1. Certbot gagal karena domain belum mengarah ke VPS</h4>
<p>Cek DNS:</p>

<pre><code>nslookup domainkita.com 8.8.8.8
nslookup www.domainkita.com 8.8.8.8</code></pre>

<p>Pastikan hasilnya adalah IP public VPS.</p>

<h4>2. Error connection refused atau timeout</h4>
<p>Kemungkinan port 80 atau 443 belum terbuka.</p>

<pre><code>sudo ufw status
sudo ufw allow 80
sudo ufw allow 443</code></pre>

<p>Jika provider VPS punya firewall tambahan di dashboard, buka juga port 80 dan 443 dari dashboard provider.</p>

<h4>3. Error Nginx config invalid</h4>
<p>Jangan lanjut sebelum Nginx valid.</p>

<pre><code>sudo nginx -t</code></pre>

<p>Buka file config:</p>

<pre><code>sudo nano /etc/nginx/sites-available/lms</code></pre>

<p>Perbaiki error seperti tanda titik koma hilang, kurung kurawal tidak lengkap, atau server_name salah.</p>

<h4>4. HTTPS berhasil tetapi aplikasi menampilkan 502 Bad Gateway</h4>
<p>Artinya SSL dan Nginx sudah aktif, tetapi aplikasi LMS di port 3000 belum berjalan.</p>

<pre><code>cd /var/www/lms
curl http://localhost:3000
npm run start</code></pre>

<h4>5. Browser masih membuka HTTP</h4>
<p>Coba cek redirect:</p>

<pre><code>curl -I http://domainkita.com</code></pre>

<p>Jika belum redirect ke HTTPS, jalankan ulang Certbot:</p>

<pre><code>sudo certbot --nginx -d domainkita.com -d www.domainkita.com</code></pre>

<p>Lalu pilih opsi redirect.</p>

<h4>6. Terlalu sering gagal generate SSL</h4>
<p>Let's Encrypt memiliki limit percobaan. Jangan menjalankan perintah berkali-kali tanpa memperbaiki penyebab error.</p>
<p>Gunakan pengecekan ini dulu:</p>

<pre><code>sudo nginx -t
sudo systemctl status nginx
sudo ufw status
nslookup domainkita.com 8.8.8.8</code></pre>

<h3>Ringkasan command</h3>

<pre><code>cd /var/www/lms
nslookup domainkita.com 8.8.8.8
nslookup www.domainkita.com 8.8.8.8
sudo systemctl status nginx
sudo nginx -t
sudo ufw status
sudo ufw allow 80
sudo ufw allow 443
certbot --version
sudo apt install certbot python3-certbot-nginx -y
sudo certbot --nginx -d domainkita.com -d www.domainkita.com
curl -I https://domainkita.com
sudo certbot renew --dry-run</code></pre>

<h3>Kesimpulan</h3>
<p>Pada lesson ini, kita mengaktifkan HTTPS menggunakan Certbot dan Let's Encrypt.</p>
<p>Jika proses berhasil, LMS sudah bisa diakses dengan koneksi aman melalui <code>https://domainkita.com</code>.</p>
<p>Setelah HTTPS aktif, tahap berikutnya adalah menstandarkan canonical domain dengan redirect non-www ke www.</p>`,
          },
          {
            id: "l2l-28-video",
            title: "Video Aktifkan HTTPS",
            type: "video",
            description:
              "Video pendamping untuk memahami cara mengaktifkan HTTPS dengan Certbot dan Let's Encrypt.",
            url: "https://youtu.be/uOeAt_woF_c?si=v5zNPGajvaOKYyrJ",
            duration: "35 min",   
          },
        ],          
      },
      {
        id: "l2l-28b",
        title: "Redirect non-www ke www",
        duration: "35 min",
        summary:
          "Menstandarkan domain production agar semua akses dari domain tanpa www otomatis diarahkan ke www menggunakan Nginx redirect 301.",
        order: 6,
        materials: [
          {
            id: "l2l-28b-html",
            title: "Redirect non-www ke www",
            type: "html",
            description:
              "Materi lengkap tentang perbedaan DNS dan redirect, konfigurasi Nginx non-www ke www, validasi, dan troubleshooting production domain.",
            htmlContent:
              `<h2>Redirect non-www ke www</h2>
<p>Pada lesson ini, kita akan membuat domain LMS lebih konsisten untuk production.</p>
<p>Target akhirnya:</p>

<pre><code>https://domainkita.com
→ otomatis menjadi
https://www.domainkita.com</code></pre>

<p>Jadi user boleh mengetik domain dengan atau tanpa <code>www</code>, tetapi sistem tetap mengarahkan ke satu alamat utama, yaitu versi <code>www</code>.</p>

<h3>Apa maksud non-www dan www?</h3>
<p><strong>Non-www</strong> adalah domain tanpa awalan <code>www</code>, misalnya:</p>

<pre><code>domainkita.com</code></pre>

<p><strong>www</strong> adalah domain dengan awalan <code>www</code>, misalnya:</p>

<pre><code>www.domainkita.com</code></pre>

<p>Secara teknis, keduanya bisa dianggap sebagai host yang berbeda. Karena itu, walaupun isi websitenya sama, browser dan mesin pencari tetap bisa melihatnya sebagai dua alamat berbeda.</p>

<h3>Apakah cukup setting di Domain Management?</h3>
<p>Tidak cukup. DNS atau Domain Management hanya mengarahkan nama domain ke IP VPS.</p>
<p>Contoh DNS yang benar:</p>

<pre><code>domainkita.com      → IP VPS
www.domainkita.com  → IP VPS</code></pre>

<p>Artinya, kedua alamat tersebut sudah sampai ke server. Tetapi DNS tidak otomatis menyuruh browser pindah dari <code>domainkita.com</code> ke <code>www.domainkita.com</code>.</p>

<div class="lesson-current-state-note">
  <strong>Catatan penting:</strong> DNS adalah penunjuk alamat. Redirect adalah instruksi dari web server. Untuk redirect non-www ke www, kita perlu konfigurasi di Nginx.
</div>

<h3>Kenapa redirect ini penting?</h3>
<ul>
  <li><strong>Konsistensi URL:</strong> user selalu berakhir di satu alamat utama.</li>
  <li><strong>SEO lebih rapi:</strong> menghindari duplicate content antara non-www dan www.</li>
  <li><strong>Cookie dan session lebih konsisten:</strong> terutama untuk aplikasi login seperti LMS.</li>
  <li><strong>Analytics lebih bersih:</strong> traffic tidak terpecah antara dua host.</li>
  <li><strong>Production lebih profesional:</strong> domain terlihat punya canonical host yang jelas.</li>
</ul>

<h3>Gambaran alur setelah redirect</h3>

<pre><code>http://domainkita.com
→ https://www.domainkita.com

https://domainkita.com
→ https://www.domainkita.com

http://www.domainkita.com
→ https://www.domainkita.com

https://www.domainkita.com
→ tampilkan LMS</code></pre>

<h3>Folder kerja command</h3>
<p>Command pengecekan project LMS dijalankan dari folder project:</p>

<pre><code>cd /var/www/lms
pwd</code></pre>

<p>File konfigurasi Nginx berada di folder sistem:</p>

<pre><code>/etc/nginx/sites-available/lms</code></pre>

<p>Jadi untuk mengubah konfigurasi, kita tetap pakai editor dengan <code>sudo</code>.</p>

<h3>Langkah 1 — Pastikan DNS untuk non-www dan www sudah benar</h3>
<p>Jalankan dari VPS atau dari komputer lokal:</p>

<pre><code>nslookup domainkita.com 8.8.8.8
nslookup www.domainkita.com 8.8.8.8</code></pre>

<p>Hasil yang benar: keduanya mengarah ke IP public VPS.</p>

<p>Jika <code>nslookup</code> belum tersedia di VPS, install dulu:</p>

<pre><code>sudo apt update
sudo apt install dnsutils -y</code></pre>

<h3>Langkah 2 — Pastikan SSL sudah terbit untuk dua domain</h3>
<p>Cek daftar sertifikat Certbot:</p>

<pre><code>sudo certbot certificates</code></pre>

<p>Pastikan sertifikat mencakup:</p>

<pre><code>domainkita.com
www.domainkita.com</code></pre>

<p>Jika baru salah satu yang ada, jalankan ulang Certbot dengan dua domain:</p>

<pre><code>sudo certbot --nginx -d domainkita.com -d www.domainkita.com</code></pre>

<p>Jika Certbot belum ada:</p>

<pre><code>sudo apt update
sudo apt install certbot python3-certbot-nginx -y</code></pre>

<h3>Langkah 3 — Backup konfigurasi Nginx sebelum edit</h3>
<p>Sebelum mengubah Nginx, buat backup dulu:</p>

<pre><code>sudo cp /etc/nginx/sites-available/lms /etc/nginx/sites-available/lms.backup-before-www-redirect</code></pre>

<p>Cek file backup:</p>

<pre><code>ls -la /etc/nginx/sites-available/</code></pre>

<h3>Langkah 4 — Edit konfigurasi Nginx</h3>
<p>Buka file konfigurasi LMS:</p>

<pre><code>sudo nano /etc/nginx/sites-available/lms</code></pre>

<p>Konsep konfigurasi finalnya adalah:</p>
<ul>
  <li>server block untuk <code>domainkita.com</code> hanya bertugas redirect ke <code>www.domainkita.com</code>.</li>
  <li>server block untuk <code>www.domainkita.com</code> bertugas menampilkan aplikasi LMS.</li>
</ul>

<h3>Contoh konfigurasi Nginx setelah SSL aktif</h3>
<p>Sesuaikan <code>domainkita.com</code>, <code>www.domainkita.com</code>, dan port aplikasi jika berbeda.</p>

<pre><code>server {
    listen 80;
    server_name domainkita.com;

    return 301 https://www.domainkita.com$request_uri;
}

server {
    listen 80;
    server_name www.domainkita.com;

    return 301 https://www.domainkita.com$request_uri;
}

server {
    listen 443 ssl http2;
    server_name domainkita.com;

    ssl_certificate /etc/letsencrypt/live/domainkita.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/domainkita.com/privkey.pem;

    return 301 https://www.domainkita.com$request_uri;
}

server {
    listen 443 ssl http2;
    server_name www.domainkita.com;

    ssl_certificate /etc/letsencrypt/live/domainkita.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/domainkita.com/privkey.pem;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;

        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;

        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
    }
}</code></pre>

<div class="lesson-current-state-note">
  <strong>Catatan:</strong> Path sertifikat bisa berbeda jika Certbot membuat folder live dengan nama lain. Cek path yang benar menggunakan <code>sudo certbot certificates</code>.
</div>

<h3>Langkah 5 — Test konfigurasi Nginx</h3>
<p>Jangan reload Nginx sebelum test config berhasil.</p>

<pre><code>sudo nginx -t</code></pre>

<p>Jika hasilnya sukses, reload Nginx:</p>

<pre><code>sudo systemctl reload nginx
sudo systemctl status nginx</code></pre>

<h3>Langkah 6 — Test redirect dari VPS</h3>
<p>Jalankan command berikut:</p>

<pre><code>curl -I http://domainkita.com
curl -I https://domainkita.com
curl -I http://www.domainkita.com
curl -I https://www.domainkita.com</code></pre>

<p>Hasil yang diharapkan:</p>
<ul>
  <li><code>http://domainkita.com</code> memberi status <code>301</code> ke <code>https://www.domainkita.com</code>.</li>
  <li><code>https://domainkita.com</code> memberi status <code>301</code> ke <code>https://www.domainkita.com</code>.</li>
  <li><code>http://www.domainkita.com</code> memberi status <code>301</code> ke <code>https://www.domainkita.com</code>.</li>
  <li><code>https://www.domainkita.com</code> memberi status <code>200</code> atau response aplikasi LMS.</li>
</ul>

<p>Untuk melihat alur redirect lengkap:</p>

<pre><code>curl -IL http://domainkita.com</code></pre>

<h3>Langkah 7 — Test dari browser</h3>
<p>Buka alamat berikut satu per satu:</p>

<pre><code>http://domainkita.com
https://domainkita.com
http://www.domainkita.com
https://www.domainkita.com</code></pre>

<p>Semuanya harus berakhir di:</p>

<pre><code>https://www.domainkita.com</code></pre>

<h3>Bagaimana jika kita ingin kebalikannya: www ke non-www?</h3>
<p>Bisa juga. Prinsipnya sama, hanya host utama yang dipilih berbeda.</p>
<p>Jika ingin domain utama tanpa <code>www</code>, maka redirect diarahkan ke:</p>

<pre><code>https://domainkita.com</code></pre>

<p>Yang penting bukan harus selalu <code>www</code>, tetapi harus memilih satu canonical domain dan konsisten.</p>

<h3>Troubleshooting</h3>

<h4>1. sudo nginx -t gagal</h4>
<p>Jangan reload Nginx. Perbaiki dulu error yang muncul.</p>

<pre><code>sudo nginx -t
sudo nano /etc/nginx/sites-available/lms</code></pre>

<p>Kesalahan umum:</p>
<ul>
  <li>Kurang tanda titik koma <code>;</code>.</li>
  <li>Kurung kurawal <code>{ }</code> tidak lengkap.</li>
  <li>Salah ketik variable Nginx, misalnya <code>$remote_add</code> harusnya <code>$remote_addr</code>.</li>
  <li>Salah ketik <code>$proxy_add_x_forwarded_for</code>.</li>
  <li>Salah path sertifikat SSL.</li>
</ul>

<h4>2. Redirect tidak jalan, domain tetap non-www</h4>
<p>Cek server block untuk <code>domainkita.com</code>. Pastikan isinya hanya redirect:</p>

<pre><code>server_name domainkita.com;
return 301 https://www.domainkita.com$request_uri;</code></pre>

<p>Lalu test dan reload:</p>

<pre><code>sudo nginx -t
sudo systemctl reload nginx</code></pre>

<h4>3. Browser masih menampilkan hasil lama</h4>
<p>Redirect 301 bisa tersimpan di cache browser.</p>
<p>Solusi:</p>
<ul>
  <li>Coba Incognito / Private Window.</li>
  <li>Coba browser lain.</li>
  <li>Cek dengan <code>curl -I</code> karena lebih objektif.</li>
</ul>

<h4>4. HTTPS non-www error certificate warning</h4>
<p>Berarti sertifikat belum mencakup domain non-www.</p>

<pre><code>sudo certbot certificates
sudo certbot --nginx -d domainkita.com -d www.domainkita.com</code></pre>

<p>Setelah itu test ulang:</p>

<pre><code>curl -I https://domainkita.com</code></pre>

<h4>5. Setelah redirect, muncul 502 Bad Gateway</h4>
<p>Redirect sudah bekerja, tetapi aplikasi LMS belum berjalan di port internal.</p>

<pre><code>cd /var/www/lms
curl http://127.0.0.1:3000
pm2 status</code></pre>

<p>Jika PM2 belum dipakai, jalankan sementara:</p>

<pre><code>npm run start</code></pre>

<p>Jika sudah memakai PM2, restart proses LMS:</p>

<pre><code>pm2 restart lms
pm2 status</code></pre>

<h4>6. Error too many redirects</h4>
<p>Biasanya terjadi karena konfigurasi redirect saling memutar.</p>
<p>Pastikan hanya non-www yang redirect ke www, dan block www tidak redirect balik ke non-www.</p>

<pre><code>curl -IL http://domainkita.com</code></pre>

<p>Jika terlihat redirect berulang, review semua server block:</p>

<pre><code>sudo nginx -T | grep -n "server_name"</code></pre>

<h4>7. File konfigurasi salah dan ingin rollback</h4>
<p>Kembalikan dari file backup:</p>

<pre><code>sudo cp /etc/nginx/sites-available/lms.backup-before-www-redirect /etc/nginx/sites-available/lms
sudo nginx -t
sudo systemctl reload nginx</code></pre>

<h3>Ringkasan command</h3>

<pre><code>cd /var/www/lms
nslookup domainkita.com 8.8.8.8
nslookup www.domainkita.com 8.8.8.8
sudo certbot certificates
sudo cp /etc/nginx/sites-available/lms /etc/nginx/sites-available/lms.backup-before-www-redirect
sudo nano /etc/nginx/sites-available/lms
sudo nginx -t
sudo systemctl reload nginx
curl -I http://domainkita.com
curl -I https://domainkita.com
curl -I http://www.domainkita.com
curl -I https://www.domainkita.com
curl -IL http://domainkita.com</code></pre>

<h3>Kesimpulan</h3>
<p>Pada lesson ini, kita menstandarkan domain production agar semua akses masuk ke satu canonical domain.</p>
<p>DNS tetap dibutuhkan untuk mengarahkan <code>domainkita.com</code> dan <code>www.domainkita.com</code> ke VPS, tetapi redirect-nya dilakukan oleh Nginx.</p>
<p>Setelah redirect non-www ke www aktif, LMS lebih rapi untuk production, SEO, analytics, cookie, session, dan pengalaman user.</p>
<p>Langkah berikutnya adalah menjalankan LMS secara stabil di background menggunakan PM2.</p>`,
          },
          {
            id: "l2l-28b-video",
            title: "Video Redirect non-www ke www",
            type: "video",
            description:
              "Video pendamping untuk memahami redirect non-www ke www menggunakan Nginx pada VPS production.",
            url: "https://youtu.be/uOeAt_woF_c?si=v5zNPGajvaOKYyrJ",
            duration: "35 min",
          },
        ],
      },  
    ],
  },      
  {
    id: "l2l-sec-6",
    title: "Module 6 — Running with PM2",
    summary:
          "Menginstall PM2 sebagai process manager agar aplikasi LMS Node.js bisa berjalan stabil di background pada VPS.",  
    order: 6,
    lessons: [
      {
        id: "l2l-29",
        title: "Install PM2",
        duration: "30 min",
        summary:
          "Memasang process manager untuk menjaga aplikasi tetap aktif.",
        order: 1,
        materials: [
          {
            id: "l2l-29-html",
            title: "Install PM2",
            type: "html",
            description:
              "Memahami fungsi PM2, cara install, cek status, dan troubleshooting instalasi PM2 untuk aplikasi LMS production.",   
            htmlContent:
              `<h2>Install PM2</h2>
<p>Pada lesson ini, kita akan menginstall <strong>PM2</strong>, yaitu process manager untuk aplikasi Node.js.</p>
<p>PM2 membantu aplikasi LMS tetap berjalan di background walaupun terminal PuTTY ditutup.</p>

<h3>Apa itu PM2?</h3>
<p><strong>PM2</strong> adalah tool untuk menjalankan, memonitor, restart, dan menjaga aplikasi Node.js tetap hidup di server.</p>
<p>Tanpa PM2, jika kita menjalankan LMS dengan <code>npm run start</code>, aplikasi hanya berjalan selama terminal masih aktif.</p>
<p>Dengan PM2, aplikasi bisa tetap berjalan di background seperti service production.</p>

<h3>Kenapa PM2 penting?</h3>
<ul>
  <li>Aplikasi tetap berjalan walaupun PuTTY ditutup.</li>
  <li>Bisa melihat status aplikasi dengan mudah.</li>
  <li>Bisa melihat log error.</li>
  <li>Bisa restart aplikasi tanpa menjalankan command panjang.</li>
  <li>Bisa disiapkan agar otomatis hidup setelah VPS reboot.</li>
</ul>

<h3>Folder kerja command</h3>
<p>Install PM2 dilakukan secara global di VPS, jadi command install boleh dijalankan dari folder mana saja.</p>
<p>Namun agar course ini konsisten, kita mulai dari folder project LMS:</p>

<pre><code>cd /var/www/lms
pwd</code></pre>

<p>Jika folder belum ada, cek dulu:</p>

<pre><code>ls -la /var/www</code></pre>

<h3>Langkah 1 — Pastikan Node.js tersedia</h3>
<p>PM2 membutuhkan Node.js dan npm. Cek dulu:</p>

<pre><code>node -v
npm -v</code></pre>

<p>Jika versi Node.js dan npm muncul, berarti aman.</p>
<p>Jika belum tersedia, install Node.js LTS terlebih dahulu sesuai lesson sebelumnya.</p>

<h3>Langkah 2 — Install PM2 secara global</h3>
<p>Command ini dijalankan di VPS:</p>

<pre><code>sudo npm install -g pm2</code></pre>

<p>Flag <code>-g</code> berarti PM2 diinstall secara global, sehingga command <code>pm2</code> bisa dipakai dari folder mana saja.</p>

<h3>Langkah 3 — Cek versi PM2</h3>
<p>Setelah install selesai, cek apakah PM2 sudah aktif:</p>

<pre><code>pm2 -v</code></pre>

<p>Jika muncul nomor versi, berarti instalasi berhasil.</p>

<h3>Langkah 4 — Cek status PM2</h3>
<p>Untuk melihat daftar aplikasi yang dikelola PM2:</p>

<pre><code>pm2 status</code></pre>

<p>Jika belum ada aplikasi yang dijalankan, tabel PM2 bisa kosong. Itu normal.</p>

<h3>Langkah 5 — Cek lokasi command PM2</h3>
<p>Untuk memastikan command PM2 dikenali oleh sistem:</p>

<pre><code>which pm2</code></pre>

<p>Jika muncul path seperti <code>/usr/bin/pm2</code> atau path lain, berarti PM2 sudah dikenali.</p>

<h3>Langkah 6 — Test bantuan command PM2</h3>
<p>Command ini berguna untuk melihat daftar perintah PM2:</p>

<pre><code>pm2 --help</code></pre>

<p>Untuk keluar dari tampilan panjang di terminal, tekan <code>q</code> jika terminal masuk ke mode viewer.</p>

<h3>Langkah 7 — Pastikan aplikasi LMS bisa dibuild dan distart</h3>
<p>Sebelum menjalankan aplikasi dengan PM2, pastikan aplikasi bisa berjalan normal.</p>
<p>Command ini dijalankan di folder project LMS:</p>

<pre><code>cd /var/www/lms
npm install
npm run build
npm run start</code></pre>

<p>Jika <code>npm run start</code> berhasil, hentikan dulu dengan <code>CTRL + C</code>. Pada lesson berikutnya, kita akan menjalankannya dengan PM2.</p>

<h3>Catatan untuk pemula</h3>
<p>PM2 bukan pengganti Nginx.</p>
<p>PM2 bertugas menjaga aplikasi Node.js tetap hidup. Nginx bertugas menerima request dari domain dan meneruskannya ke aplikasi.</p>

<h3>Alur production yang kita bangun</h3>

<pre><code>Browser
  ↓
Domain + HTTPS
  ↓
Nginx Reverse Proxy
  ↓
PM2
  ↓
LMS Next.js di localhost:3000</code></pre>

<h3>Troubleshooting</h3>

<h4>1. npm: command not found</h4>
<p>Artinya Node.js/npm belum terinstall.</p>
<p>Cek:</p>

<pre><code>node -v
npm -v</code></pre>

<p>Jika tidak muncul versi, install Node.js LTS terlebih dahulu.</p>

<h4>2. pm2: command not found setelah install</h4>
<p>Coba cek lokasi global npm:</p>

<pre><code>npm root -g
npm bin -g</code></pre>

<p>Lalu coba install ulang:</p>

<pre><code>sudo npm install -g pm2
pm2 -v</code></pre>

<h4>3. Permission denied saat install PM2</h4>
<p>Gunakan <code>sudo</code> karena PM2 diinstall secara global:</p>

<pre><code>sudo npm install -g pm2</code></pre>

<h4>4. Versi Node.js terlalu lama</h4>
<p>Jika aplikasi Next.js tidak kompatibel, cek versi Node.js:</p>

<pre><code>node -v</code></pre>

<p>Gunakan Node.js LTS yang sesuai kebutuhan project.</p>

<h4>5. npm install gagal</h4>
<p>Pastikan command dijalankan di folder project:</p>

<pre><code>cd /var/www/lms
ls -la</code></pre>

<p>Pastikan ada file <code>package.json</code>.</p>

<h4>6. npm run build gagal</h4>
<p>Build error biasanya berasal dari source code aplikasi, dependency, atau environment variable yang belum lengkap.</p>
<p>Cek error paling atas dan paling bawah di terminal, lalu perbaiki sesuai pesan error.</p>

<h3>Ringkasan command</h3>

<pre><code>cd /var/www/lms
node -v
npm -v
sudo npm install -g pm2
pm2 -v
pm2 status
which pm2
pm2 --help
npm install
npm run build
npm run start</code></pre>

<h3>Kesimpulan</h3>
<p>Pada lesson ini, kita menginstall PM2 sebagai process manager untuk aplikasi LMS.</p>
<p>PM2 akan membantu aplikasi berjalan lebih stabil di VPS dan tidak bergantung pada terminal PuTTY yang sedang terbuka.</p>
<p>Di lesson berikutnya, kita akan menjalankan LMS menggunakan PM2.</p>`,
          },
          {
            id: "l2l-29-video",
            title: "Video Install PM2",
            type: "video",
            description:
              "Video pendamping untuk memahami instalasi PM2 sebagai process manager aplikasi LMS di VPS.",
            url: "https://youtu.be/uOeAt_woF_c?si=v5zNPGajvaOKYyrJ",
            duration: "30 min", 
          },
        ],
      },
      {
        id: "l2l-30",
        title: "Run app dengan PM2",
        duration: "35 min",
        summary:
          "Menjalankan LMS dengan PM2 dari folder frontend agar aplikasi tetap aktif di background, bisa dicek statusnya, dan tidak mati saat PuTTY ditutup.",  
        order: 2,
        materials: [
          {
            id: "l2l-30-html",
            title: "Run LMS via PM2",
            type: "html",
            description:
              "Menjalankan aplikasi LMS Next.js menggunakan PM2, mengecek status, log, restart, stop, dan troubleshooting error umum.",  
            htmlContent:
              `<h2>Run LMS via PM2</h2>
<p>Pada lesson ini, kita akan menjalankan LMS menggunakan <strong>PM2</strong> agar aplikasi tetap hidup di background.</p>
<p>Dengan PM2, kita tidak perlu membiarkan terminal PuTTY terus terbuka hanya untuk menjaga aplikasi tetap berjalan.</p>

<h3>Target lesson ini</h3>
<ul>
  <li>Menjalankan LMS dengan PM2.</li>
  <li>Memberi nama process agar mudah dikenali.</li>
  <li>Mengecek status aplikasi.</li>
  <li>Melihat log jika terjadi error.</li>
  <li>Restart atau stop aplikasi dengan aman.</li>
</ul>

<h3>Folder tempat menjalankan command</h3>
<p>Command PM2 untuk menjalankan LMS wajib dijalankan dari folder <strong>frontend</strong>, karena file <code>package.json</code> aplikasi berada di sana.</p>

<pre><code>cd /var/www/lms/frontend
pwd</code></pre>

<p>Cek isi folder:</p>

<pre><code>ls -la</code></pre>

<p>Pastikan ada file:</p>
<ul>
  <li><code>package.json</code></li>
  <li><code>package-lock.json</code> jika memakai npm lock file</li>
  <li>folder <code>.next</code> jika build production sudah pernah dijalankan</li>
</ul>

<h3>Langkah 1 — Pastikan PM2 sudah terinstall</h3>
<p>Command ini boleh dijalankan dari folder mana saja, tetapi kita tetap dari folder frontend:</p>

<pre><code>cd /var/www/lms/frontend
pm2 -v</code></pre>

<p>Jika muncul versi PM2, berarti PM2 sudah siap.</p>
<p>Jika muncul <code>pm2: command not found</code>, install dulu:</p>

<pre><code>sudo npm install -g pm2</code></pre>

<p>Cek ulang:</p>

<pre><code>pm2 -v</code></pre>

<h3>Langkah 2 — Pastikan aplikasi sudah bisa jalan manual</h3>
<p>Sebelum masuk PM2, pastikan aplikasi bisa dijalankan manual.</p>

<pre><code>cd /var/www/lms/frontend
npm run build
npm run start</code></pre>

<p>Jika berhasil, hentikan dengan:</p>

<pre><code>CTRL + C</code></pre>

<p>Setelah itu baru kita jalankan dengan PM2.</p>

<h3>Langkah 3 — Jalankan LMS dengan PM2</h3>
<p>Command ini dijalankan dari folder frontend:</p>

<pre><code>cd /var/www/lms/frontend
pm2 start npm --name lms -- start</code></pre>

<p>Penjelasan command:</p>
<ul>
  <li><code>pm2 start npm</code> artinya PM2 menjalankan perintah npm.</li>
  <li><code>--name lms</code> memberi nama process menjadi <code>lms</code>.</li>
  <li><code>-- start</code> berarti menjalankan script <code>start</code> dari <code>package.json</code>.</li>
</ul>

<h3>Langkah 4 — Cek status aplikasi</h3>
<p>Setelah dijalankan, cek status PM2:</p>

<pre><code>pm2 status</code></pre>

<p>Jika berhasil, akan muncul process bernama <code>lms</code> dengan status <code>online</code>.</p>

<h3>Langkah 5 — Cek apakah port 3000 aktif</h3>
<p>Command ini dijalankan di VPS:</p>

<pre><code>ss -tulpn | grep 3000</code></pre>

<p>Jika command <code>ss</code> belum tersedia, install tool jaringan berikut:</p>

<pre><code>sudo apt update
sudo apt install iproute2 -y</code></pre>

<p>Cek ulang:</p>

<pre><code>ss -tulpn | grep 3000</code></pre>

<h3>Langkah 6 — Test aplikasi dari VPS</h3>
<p>Command ini dijalankan di VPS:</p>

<pre><code>curl http://localhost:3000</code></pre>

<p>Jika <code>curl</code> belum ada:</p>

<pre><code>sudo apt update
sudo apt install curl -y</code></pre>

<p>Jika output HTML muncul, aplikasi LMS sudah berjalan.</p>

<h3>Langkah 7 — Test dari domain</h3>
<p>Jika Nginx reverse proxy dan HTTPS sudah aktif, buka dari browser PC:</p>

<pre><code>https://domainkita.com</code></pre>

<p>Jika halaman LMS tampil, berarti alurnya sudah lengkap:</p>

<pre><code>Browser
  ↓
Domain + HTTPS
  ↓
Nginx
  ↓
PM2
  ↓
LMS di localhost:3000</code></pre>

<h3>Langkah 8 — Melihat log aplikasi</h3>
<p>Jika aplikasi error atau tidak tampil, lihat log PM2:</p>

<pre><code>pm2 logs lms</code></pre>

<p>Untuk keluar dari tampilan log, tekan:</p>

<pre><code>CTRL + C</code></pre>

<h3>Langkah 9 — Restart aplikasi</h3>
<p>Jika kita baru melakukan perubahan code atau rebuild, restart process:</p>

<pre><code>pm2 restart lms</code></pre>

<p>Cek lagi:</p>

<pre><code>pm2 status</code></pre>

<h3>Langkah 10 — Stop aplikasi jika diperlukan</h3>
<p>Jika ingin menghentikan aplikasi sementara:</p>

<pre><code>pm2 stop lms</code></pre>

<p>Untuk menjalankan lagi:</p>

<pre><code>pm2 start lms</code></pre>

<h3>Langkah 11 — Hapus process jika salah konfigurasi</h3>
<p>Jika process PM2 dibuat dari folder yang salah atau command salah, hapus dulu:</p>

<pre><code>pm2 delete lms</code></pre>

<p>Lalu jalankan ulang dari folder yang benar:</p>

<pre><code>cd /var/www/lms/frontend
pm2 start npm --name lms -- start</code></pre>

<h3>Catatan penting</h3>
<p>PM2 menjaga aplikasi tetap berjalan, tetapi pada lesson ini kita belum mengatur auto-start setelah reboot.</p>
<p>Artinya, jika VPS direstart, process PM2 perlu disiapkan agar otomatis hidup kembali. Itu akan dibahas di lesson berikutnya.</p>

<h3>Troubleshooting</h3>

<h4>1. Error: package.json tidak ditemukan</h4>
<p>Artinya command dijalankan dari folder yang salah.</p>

<pre><code>cd /var/www/lms/frontend
ls -la</code></pre>

<p>Pastikan file <code>package.json</code> ada di folder tersebut.</p>

<h4>2. PM2 status menunjukkan errored</h4>
<p>Lihat log:</p>

<pre><code>pm2 logs lms</code></pre>

<p>Biasanya penyebabnya adalah build belum dibuat, dependency belum lengkap, port bentrok, atau environment variable belum tersedia.</p>

<h4>3. Port 3000 sudah dipakai</h4>
<p>Cek process yang memakai port 3000:</p>

<pre><code>ss -tulpn | grep 3000</code></pre>

<p>Jika ada process lama, stop dari PM2:</p>

<pre><code>pm2 status
pm2 stop lms</code></pre>

<p>Jika process bukan dari PM2, cek PID-nya dari output <code>ss</code>, lalu tangani dengan hati-hati.</p>

<h4>4. 502 Bad Gateway dari Nginx</h4>
<p>Artinya Nginx aktif, tetapi aplikasi LMS di belakangnya tidak berjalan atau tidak bisa diakses.</p>

<pre><code>pm2 status
curl http://localhost:3000
pm2 logs lms</code></pre>

<p>Jika process belum online:</p>

<pre><code>cd /var/www/lms/frontend
pm2 restart lms</code></pre>

<h4>5. Setelah PuTTY ditutup, aplikasi masih jalan atau tidak?</h4>
<p>Jika dijalankan dengan PM2 dan statusnya <code>online</code>, aplikasi tetap berjalan walaupun PuTTY ditutup.</p>

<pre><code>pm2 status</code></pre>

<h4>6. npm run build gagal</h4>
<p>PM2 tidak akan menyelesaikan error build. Build harus diperbaiki dulu.</p>

<pre><code>cd /var/www/lms/frontend
npm run build</code></pre>

<p>Baca error paling atas dan paling bawah, lalu perbaiki source code atau dependency sesuai pesan error.</p>

<h3>Ringkasan command</h3>

<pre><code>cd /var/www/lms/frontend
pm2 -v
sudo npm install -g pm2
npm run build
pm2 start npm --name lms -- start
pm2 status
ss -tulpn | grep 3000
curl http://localhost:3000
pm2 logs lms
pm2 restart lms
pm2 stop lms
pm2 start lms
pm2 delete lms</code></pre>

<h3>Kesimpulan</h3>
<p>Pada lesson ini, kita menjalankan LMS menggunakan PM2 agar aplikasi tetap hidup di background.</p>
<p>Jika <code>pm2 status</code> menunjukkan process <code>lms</code> dengan status <code>online</code>, maka aplikasi sudah berjalan dengan benar.</p>
<p>Langkah berikutnya adalah membuat process PM2 otomatis hidup kembali saat VPS reboot.</p>`,
          },
          {
            id: "l2l-30-video",
            title: "Video Run LMS via PM2",
            type: "video",
            description:
              "Video pendamping untuk memahami cara menjalankan aplikasi LMS dengan PM2 di VPS.",
            url: "https://youtu.be/uOeAt_woF_c?si=v5zNPGajvaOKYyrJ",
            duration: "35 min",     
          },
        ],
      },
      {
        id: "l2l-31",
        title: "Auto start saat reboot",
        duration: "32 min",
        summary:
          "Mengatur PM2 startup agar process LMS otomatis hidup kembali setelah VPS restart atau reboot.",     
        order: 3,
        materials: [
          {
            id: "l2l-31-html",
            title: "PM2 Startup",
            type: "html",
            description:
              "Mengaktifkan PM2 startup service, menyimpan process list, mengecek status systemd, dan troubleshooting auto-start.",    
            htmlContent:
              `<h2>PM2 Startup</h2>
<p>Pada lesson ini, kita akan mengatur agar aplikasi LMS yang dijalankan dengan PM2 bisa otomatis hidup kembali setelah VPS restart atau reboot.</p>
<p>Ini penting karena server production tidak boleh bergantung pada kita untuk menjalankan ulang aplikasi secara manual.</p>

<h3>Kenapa PM2 Startup penting?</h3>
<p>Ketika VPS reboot, semua process yang berjalan di memory akan berhenti. Jika PM2 belum dikonfigurasi untuk startup otomatis, aplikasi LMS bisa mati setelah server restart.</p>
<p>Dengan PM2 Startup, flow production kita menjadi lebih aman:</p>

<pre><code>VPS reboot
  ↓
systemd menjalankan PM2
  ↓
PM2 restore process list
  ↓
LMS hidup kembali otomatis</code></pre>

<h3>Folder kerja command</h3>
<p>Command <code>pm2 startup</code> dan <code>pm2 save</code> boleh dijalankan dari folder mana saja, karena ini mengatur service PM2 di level sistem.</p>
<p>Namun agar konsisten dengan course ini, kita mulai dari folder frontend LMS:</p>

<pre><code>cd /var/www/lms/frontend
pwd</code></pre>

<p>Jika folder belum ada, cek struktur project:</p>

<pre><code>ls -la /var/www/lms
ls -la /var/www/lms/frontend</code></pre>

<h3>Langkah 1 — Pastikan PM2 sudah terinstall</h3>
<p>Command ini dijalankan di VPS:</p>

<pre><code>pm2 -v</code></pre>

<p>Jika muncul versi PM2, berarti PM2 sudah tersedia.</p>
<p>Jika muncul <code>pm2: command not found</code>, install dulu:</p>

<pre><code>sudo npm install -g pm2</code></pre>

<p>Lalu cek ulang:</p>

<pre><code>pm2 -v</code></pre>

<h3>Langkah 2 — Pastikan process LMS sudah online</h3>
<p>Sebelum menyimpan startup, pastikan aplikasi LMS sudah berjalan di PM2.</p>

<pre><code>pm2 status</code></pre>

<p>Pastikan ada process bernama <code>lms</code> dengan status <code>online</code>.</p>

<p>Jika belum ada process LMS, jalankan dari folder frontend:</p>

<pre><code>cd /var/www/lms/frontend
pm2 start npm --name lms -- start
pm2 status</code></pre>

<h3>Langkah 3 — Generate command startup PM2</h3>
<p>Jalankan command berikut di VPS:</p>

<pre><code>pm2 startup</code></pre>

<p>PM2 akan menampilkan command lanjutan yang biasanya diawali dengan <code>sudo env</code>.</p>
<p>Contohnya seperti ini:</p>

<pre><code>sudo env PATH=$PATH:/usr/bin pm2 startup systemd -u deploy --hp /home/deploy</code></pre>

<p><strong>Penting:</strong> command yang muncul bisa berbeda tergantung user dan lokasi Node.js di VPS kita. Jadi jangan asal copy dari contoh. Copy command yang benar-benar muncul di terminal kita.</p>

<h3>Langkah 4 — Jalankan command yang diberikan PM2</h3>
<p>Copy command hasil dari <code>pm2 startup</code>, lalu jalankan.</p>
<p>Contoh:</p>

<pre><code>sudo env PATH=$PATH:/usr/bin pm2 startup systemd -u deploy --hp /home/deploy</code></pre>

<p>Jika berhasil, PM2 akan membuat service systemd agar PM2 bisa hidup otomatis saat server boot.</p>

<h3>Langkah 5 — Simpan process list PM2</h3>
<p>Setelah startup dibuat, simpan daftar process yang sedang berjalan:</p>

<pre><code>pm2 save</code></pre>

<p>Command ini menyimpan process list saat ini. Jadi ketika VPS reboot, PM2 tahu process apa saja yang harus dihidupkan kembali.</p>

<h3>Langkah 6 — Cek service PM2 di systemd</h3>
<p>Nama service biasanya mengikuti user yang menjalankan PM2, misalnya <code>pm2-deploy</code>.</p>

<pre><code>systemctl list-units | grep pm2</code></pre>

<p>Jika terlihat service seperti <code>pm2-deploy.service</code>, cek statusnya:</p>

<pre><code>sudo systemctl status pm2-deploy</code></pre>

<p>Jika user VPS kita bukan <code>deploy</code>, nama service bisa berbeda, misalnya <code>pm2-root</code> atau <code>pm2-username</code>.</p>

<h3>Langkah 7 — Test reboot secara hati-hati</h3>
<p>Jika semua sudah siap, kita bisa test dengan reboot VPS.</p>
<p>Sebelum reboot, pastikan kita masih punya akses login ke VPS.</p>

<pre><code>sudo reboot</code></pre>

<p>Setelah VPS hidup kembali, login ulang via PuTTY, lalu cek:</p>

<pre><code>pm2 status
curl http://localhost:3000
sudo systemctl status nginx</code></pre>

<p>Jika LMS tetap online, berarti PM2 Startup berhasil.</p>

<h3>Langkah 8 — Test dari browser</h3>
<p>Buka domain dari browser PC:</p>

<pre><code>https://domainkita.com</code></pre>

<p>Jika LMS tampil setelah reboot, berarti alur production sudah berjalan baik.</p>

<h3>Perbedaan pm2 startup dan pm2 save</h3>
<table>
  <thead>
    <tr>
      <th>Command</th>
      <th>Fungsi</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>pm2 startup</code></td>
      <td>Membuat service agar PM2 hidup saat VPS boot.</td>
    </tr>
    <tr>
      <td><code>pm2 save</code></td>
      <td>Menyimpan daftar process yang harus dihidupkan kembali.</td>
    </tr>
  </tbody>
</table>

<h3>Troubleshooting</h3>

<h4>1. Setelah reboot, PM2 hidup tetapi process LMS tidak muncul</h4>
<p>Kemungkinan kita belum menjalankan <code>pm2 save</code>.</p>

<pre><code>pm2 status
cd /var/www/lms/frontend
pm2 start npm --name lms -- start
pm2 save</code></pre>

<h4>2. pm2 startup meminta command sudo yang panjang</h4>
<p>Itu normal. Jalankan command yang diberikan oleh PM2, bukan command contoh secara sembarangan.</p>

<pre><code>pm2 startup</code></pre>

<p>Lalu copy command yang muncul di terminal.</p>

<h4>3. systemctl status pm2-deploy tidak ditemukan</h4>
<p>Nama service bisa berbeda tergantung user.</p>

<pre><code>systemctl list-units | grep pm2</code></pre>

<p>Gunakan nama service yang muncul dari hasil command tersebut.</p>

<h4>4. 502 Bad Gateway setelah reboot</h4>
<p>Artinya Nginx aktif, tetapi aplikasi LMS belum hidup atau belum listen di port 3000.</p>

<pre><code>pm2 status
pm2 logs lms
curl http://localhost:3000</code></pre>

<p>Jika process belum ada:</p>

<pre><code>cd /var/www/lms/frontend
pm2 start npm --name lms -- start
pm2 save</code></pre>

<h4>5. PM2 memakai user yang salah</h4>
<p>Sebaiknya PM2 untuk aplikasi dijalankan oleh user deploy, bukan root, agar lebih rapi dan aman.</p>
<p>Cek user aktif:</p>

<pre><code>whoami</code></pre>

<p>Jika ternyata sedang login sebagai root, pertimbangkan login ulang sebagai user deploy lalu setup PM2 dari user deploy.</p>

<h4>6. Aplikasi tidak otomatis update setelah git pull</h4>
<p>PM2 startup hanya menghidupkan process. Ia tidak otomatis menjalankan <code>git pull</code>, <code>npm install</code>, atau <code>npm run build</code>.</p>
<p>Setelah update code, workflow manual umumnya:</p>

<pre><code>cd /var/www/lms/frontend
git pull
npm install
npm run build
pm2 restart lms
pm2 save</code></pre>

<h3>Ringkasan command</h3>

<pre><code>cd /var/www/lms/frontend
pm2 -v
pm2 status
pm2 startup
# jalankan command sudo yang diberikan oleh PM2
pm2 save
systemctl list-units | grep pm2
sudo systemctl status pm2-deploy
sudo reboot
pm2 status
curl http://localhost:3000
sudo systemctl status nginx</code></pre>

<h3>Kesimpulan</h3>
<p>Pada lesson ini, kita mengatur PM2 agar otomatis hidup setelah VPS reboot.</p>
<p>Dua command paling penting adalah:</p>

<pre><code>pm2 startup
pm2 save</code></pre>

<p>Jika setelah reboot <code>pm2 status</code> masih menunjukkan process <code>lms</code> dalam keadaan <code>online</code>, berarti konfigurasi startup berhasil.</p>`,
          },
          {
            id: "l2l-31-video",
            title: "Video PM2 Startup",
            type: "video",
            description:
              "Video pendamping untuk memahami cara membuat PM2 otomatis menjalankan LMS setelah VPS reboot.",
            url: "https://youtu.be/uOeAt_woF_c?si=v5zNPGajvaOKYyrJ",
            duration: "32 min",  
          },
        ],
      },
      {
        id: "l2l-32",
        title: "Monitoring process PM2",
        duration: "32 min",
        summary:
          "Melihat status, log, resource usage, restart history, dan error runtime aplikasi LMS yang berjalan melalui PM2.",     
        order: 4,
        materials: [
          {
            id: "l2l-32-html",
            title: "Monitoring PM2",
            type: "html",
            description:
              "Monitoring aplikasi LMS dengan PM2 status, logs, monit, restart, flush log, dan troubleshooting error runtime.",  
            htmlContent:
              `<h2>Monitoring PM2</h2>
<p>Pada lesson ini, kita akan belajar memonitor aplikasi LMS yang berjalan menggunakan PM2.</p>
<p>Monitoring penting karena aplikasi production tidak cukup hanya “berjalan”. Kita juga perlu tahu apakah statusnya online, error, restart berulang, atau memakan resource terlalu besar.</p>

<h3>Kenapa monitoring PM2 penting?</h3>
<ul>
  <li>Mengetahui apakah LMS masih berjalan atau mati.</li>
  <li>Melihat error runtime dari aplikasi.</li>
  <li>Mengetahui apakah aplikasi restart berulang.</li>
  <li>Mengecek penggunaan CPU dan memory.</li>
  <li>Membantu mencari penyebab <code>502 Bad Gateway</code>.</li>
</ul>

<h3>Folder kerja command</h3>
<p>Command monitoring PM2 seperti <code>pm2 status</code>, <code>pm2 logs</code>, dan <code>pm2 monit</code> boleh dijalankan dari folder mana saja.</p>
<p>Namun agar konsisten dengan course ini, kita mulai dari folder frontend LMS:</p>

<pre><code>cd /var/www/lms/frontend
pwd</code></pre>

<p>Jika folder belum ada, cek struktur project:</p>

<pre><code>ls -la /var/www/lms
ls -la /var/www/lms/frontend</code></pre>

<h3>Langkah 1 — Cek apakah PM2 tersedia</h3>
<p>Command ini dijalankan di VPS:</p>

<pre><code>pm2 -v</code></pre>

<p>Jika muncul versi PM2, berarti PM2 sudah tersedia.</p>
<p>Jika muncul <code>pm2: command not found</code>, install dulu:</p>

<pre><code>sudo npm install -g pm2</code></pre>

<p>Lalu cek ulang:</p>

<pre><code>pm2 -v</code></pre>

<h3>Langkah 2 — Cek status process</h3>
<p>Command paling dasar untuk monitoring PM2 adalah:</p>

<pre><code>pm2 status</code></pre>

<p>Jika LMS berjalan normal, kita akan melihat process bernama <code>lms</code> dengan status <code>online</code>.</p>

<p>Status yang umum:</p>
<ul>
  <li><code>online</code> — aplikasi berjalan.</li>
  <li><code>stopped</code> — aplikasi berhenti.</li>
  <li><code>errored</code> — aplikasi gagal berjalan.</li>
  <li><code>launching</code> — aplikasi sedang proses start.</li>
</ul>

<h3>Langkah 3 — Melihat log aplikasi</h3>
<p>Untuk melihat log aplikasi LMS:</p>

<pre><code>pm2 logs lms</code></pre>

<p>Jika ingin melihat semua log dari semua process PM2:</p>

<pre><code>pm2 logs</code></pre>

<p>Untuk keluar dari mode log, tekan:</p>

<pre><code>CTRL + C</code></pre>

<h3>Langkah 4 — Melihat log dalam jumlah terbatas</h3>
<p>Jika log terlalu panjang, gunakan jumlah baris tertentu:</p>

<pre><code>pm2 logs lms --lines 100</code></pre>

<p>Command ini menampilkan sekitar 100 baris log terakhir.</p>

<h3>Langkah 5 — Monitoring resource realtime</h3>
<p>PM2 menyediakan dashboard sederhana di terminal:</p>

<pre><code>pm2 monit</code></pre>

<p>Di sini kita bisa melihat CPU, memory, dan log secara realtime.</p>
<p>Untuk keluar dari tampilan monitoring, tekan:</p>

<pre><code>CTRL + C</code></pre>

<h3>Langkah 6 — Cek detail process LMS</h3>
<p>Untuk melihat detail process tertentu:</p>

<pre><code>pm2 show lms</code></pre>

<p>Informasi yang bisa dilihat antara lain:</p>
<ul>
  <li>Status process</li>
  <li>Script path</li>
  <li>Working directory</li>
  <li>Restart count</li>
  <li>Log path</li>
  <li>Environment</li>
</ul>

<h3>Langkah 7 — Cek apakah port 3000 aktif</h3>
<p>PM2 bisa online, tetapi kita tetap perlu memastikan aplikasi benar-benar listen di port yang benar.</p>

<pre><code>ss -tulpn | grep 3000</code></pre>

<p>Jika command <code>ss</code> belum tersedia:</p>

<pre><code>sudo apt update
sudo apt install iproute2 -y</code></pre>

<p>Lalu cek ulang:</p>

<pre><code>ss -tulpn | grep 3000</code></pre>

<h3>Langkah 8 — Test aplikasi dari VPS</h3>
<p>Command ini dijalankan di VPS:</p>

<pre><code>curl http://localhost:3000</code></pre>

<p>Jika <code>curl</code> belum tersedia:</p>

<pre><code>sudo apt update
sudo apt install curl -y</code></pre>

<p>Jika output HTML muncul, aplikasi berjalan di port internal.</p>

<h3>Langkah 9 — Test dari domain</h3>
<p>Jika Nginx dan HTTPS sudah aktif, cek domain:</p>

<pre><code>curl -I https://domainkita.com</code></pre>

<p>Dari browser PC, buka:</p>

<pre><code>https://domainkita.com</code></pre>

<h3>Langkah 10 — Restart aplikasi dari PM2</h3>
<p>Jika aplikasi error, kita bisa restart process:</p>

<pre><code>pm2 restart lms</code></pre>

<p>Lalu cek status:</p>

<pre><code>pm2 status
pm2 logs lms --lines 50</code></pre>

<h3>Langkah 11 — Membersihkan log lama</h3>
<p>Jika log sudah terlalu panjang, kita bisa membersihkan log PM2:</p>

<pre><code>pm2 flush</code></pre>

<p>Setelah itu, log akan mulai mencatat dari kondisi baru.</p>

<h3>Langkah 12 — Simpan process list setelah perubahan</h3>
<p>Jika kita melakukan perubahan penting pada process PM2, simpan process list:</p>

<pre><code>pm2 save</code></pre>

<p>Ini membantu PM2 mengingat process yang harus di-restore setelah reboot.</p>

<h3>Troubleshooting</h3>

<h4>1. pm2 status kosong</h4>
<p>Artinya belum ada process yang dijalankan oleh PM2 untuk user saat ini.</p>

<pre><code>cd /var/www/lms/frontend
pm2 start npm --name lms -- start
pm2 status
pm2 save</code></pre>

<h4>2. Process lms statusnya errored</h4>
<p>Lihat log error:</p>

<pre><code>pm2 logs lms --lines 100</code></pre>

<p>Penyebab umum:</p>
<ul>
  <li><code>npm run build</code> belum dijalankan.</li>
  <li>Dependency belum lengkap.</li>
  <li>Environment variable belum disiapkan.</li>
  <li>Port 3000 sudah dipakai process lain.</li>
  <li>Command dijalankan dari folder yang salah.</li>
</ul>

<h4>3. 502 Bad Gateway di browser</h4>
<p>Biasanya Nginx aktif, tetapi LMS tidak aktif di port <code>3000</code>.</p>

<pre><code>pm2 status
curl http://localhost:3000
pm2 logs lms --lines 100</code></pre>

<p>Jika process mati, jalankan ulang:</p>

<pre><code>cd /var/www/lms/frontend
pm2 restart lms</code></pre>

<h4>4. Port 3000 tidak muncul</h4>
<p>Cek apakah aplikasi benar-benar berjalan:</p>

<pre><code>pm2 status
ss -tulpn | grep 3000</code></pre>

<p>Jika tidak ada output dari <code>ss</code>, lihat log PM2:</p>

<pre><code>pm2 logs lms --lines 100</code></pre>

<h4>5. Restart count terus naik</h4>
<p>Ini tanda aplikasi crash lalu dicoba hidup kembali oleh PM2.</p>

<pre><code>pm2 show lms
pm2 logs lms --lines 150</code></pre>

<p>Fokus pada error paling awal sebelum crash. Biasanya itulah akar masalahnya.</p>

<h4>6. Memory terlalu tinggi</h4>
<p>Cek realtime:</p>

<pre><code>pm2 monit</code></pre>

<p>Jika memory terus naik, kemungkinan ada memory leak atau traffic terlalu berat. Untuk tahap awal, restart process bisa menjadi solusi sementara:</p>

<pre><code>pm2 restart lms</code></pre>

<h4>7. Log terlalu ramai</h4>
<p>Batasi tampilan log:</p>

<pre><code>pm2 logs lms --lines 50</code></pre>

<p>Jika perlu membersihkan log:</p>

<pre><code>pm2 flush</code></pre>

<h3>Ringkasan command</h3>

<pre><code>cd /var/www/lms/frontend
pm2 -v
pm2 status
pm2 logs lms
pm2 logs lms --lines 100
pm2 monit
pm2 show lms
ss -tulpn | grep 3000
curl http://localhost:3000
curl -I https://domainkita.com
pm2 restart lms
pm2 flush
pm2 save</code></pre>

<h3>Kesimpulan</h3>
<p>Pada lesson ini, kita belajar memonitor LMS yang berjalan menggunakan PM2.</p>
<p>Command paling penting untuk harian adalah:</p>

<pre><code>pm2 status
pm2 logs lms
pm2 monit</code></pre>

<p>Jika aplikasi tidak bisa diakses, cek urutannya: PM2 status, log aplikasi, port 3000, lalu Nginx/domain.</p>`,
          },
          {
            id: "l2l-32-video",
            title: "Video Monitoring PM2",
            type: "video",
            description:
              "Video pendamping untuk memahami cara monitoring aplikasi LMS dengan PM2 di VPS.",
            url: "https://youtu.be/uOeAt_woF_c?si=v5zNPGajvaOKYyrJ",
            duration: "32 min", 
          },
        ],
      },
    ],
  },
  {
    id: "l2l-sec-7",
    title: "Module 7 — Production Optimization",
    summary:
      "Melakukan optimasi dasar agar LMS lebih aman, cepat, dan rapi di production.",
    order: 7,
    lessons: [
      {
        id: "l2l-33",
        title: "Enable Gzip",
        duration: "28 min",
        summary:
          "Mengaktifkan Gzip compression di Nginx agar response HTML, CSS, JavaScript, JSON, dan SVG lebih ringan saat dikirim ke browser.",  
        order: 1,
        materials: [
          {
            id: "l2l-33-html",
            title: "Gzip Compression",
            type: "html",
            description:
              "Mengaktifkan Gzip di Nginx, validasi konfigurasi, cek header Content-Encoding, dan troubleshooting compression.", 
            htmlContent:
              `<h2>Gzip Compression</h2>
<p>Pada lesson ini, kita akan mengaktifkan <strong>Gzip compression</strong> di Nginx agar response website menjadi lebih kecil sebelum dikirim ke browser.</p>
<p>Materi Nginx, HTTPS, dan PM2 sudah dibahas sebelumnya. Di lesson ini kita hanya fokus pada optimasi compression.</p>

<h3>Apa itu Gzip?</h3>
<p><strong>Gzip</strong> adalah metode kompresi yang membuat file berbasis teks menjadi lebih kecil saat dikirim dari server ke browser.</p>
<p>Contoh file yang biasanya cocok dikompresi:</p>
<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
  <li>JSON</li>
  <li>XML</li>
  <li>SVG</li>
</ul>

<h3>Kenapa Gzip penting?</h3>
<ul>
  <li>Ukuran response lebih kecil.</li>
  <li>Halaman terasa lebih cepat dimuat.</li>
  <li>Bandwidth server lebih hemat.</li>
  <li>User dengan koneksi lambat lebih terbantu.</li>
  <li>Optimasi dasar yang umum dipakai di production.</li>
</ul>

<h3>Folder kerja command</h3>
<p>Konfigurasi Gzip berada di level Nginx, jadi command boleh dijalankan dari folder mana saja.</p>
<p>Namun agar konsisten dengan course ini, kita mulai dari folder project LMS:</p>

<pre><code>cd /var/www/lms
pwd</code></pre>

<p>Jika folder belum ada, cek:</p>

<pre><code>ls -la /var/www</code></pre>

<h3>Langkah 1 — Pastikan Nginx tersedia</h3>
<p>Command ini dijalankan di VPS:</p>

<pre><code>nginx -v</code></pre>

<p>Jika Nginx belum tersedia, install dulu:</p>

<pre><code>sudo apt update
sudo apt install nginx -y</code></pre>

<p>Cek status Nginx:</p>

<pre><code>sudo systemctl status nginx</code></pre>

<p>Jika belum aktif:</p>

<pre><code>sudo systemctl enable nginx
sudo systemctl start nginx
sudo systemctl status nginx</code></pre>

<h3>Langkah 2 — Backup konfigurasi sebelum edit</h3>
<p>Sebelum mengubah konfigurasi Nginx, buat backup dulu.</p>

<pre><code>sudo cp /etc/nginx/nginx.conf /etc/nginx/nginx.conf.backup-before-gzip</code></pre>

<p>Cek backup:</p>

<pre><code>ls -la /etc/nginx/</code></pre>

<h3>Langkah 3 — Cek apakah Gzip sudah aktif</h3>
<p>Cek konfigurasi global Nginx:</p>

<pre><code>sudo grep -n "gzip" /etc/nginx/nginx.conf</code></pre>

<p>Jika terlihat <code>gzip on;</code>, berarti Gzip mungkin sudah aktif. Namun kita tetap perlu memastikan tipe file yang dikompresi sudah cukup lengkap.</p>

<h3>Langkah 4 — Edit konfigurasi Nginx</h3>
<p>Buka file konfigurasi utama Nginx:</p>

<pre><code>sudo nano /etc/nginx/nginx.conf</code></pre>

<p>Cari blok <code>http { ... }</code>, lalu tambahkan atau rapikan konfigurasi Gzip di dalam blok <code>http</code>.</p>

<pre><code>gzip on;
gzip_comp_level 5;
gzip_min_length 1024;
gzip_vary on;
gzip_proxied any;
gzip_disable "msie6";

gzip_types
    text/plain
    text/css
    text/xml
    text/javascript
    application/json
    application/javascript
    application/xml
    application/xml+rss
    application/xhtml+xml
    application/rss+xml
    image/svg+xml
    font/ttf
    font/otf
    application/vnd.ms-fontobject;</code></pre>

<p>Simpan file di nano:</p>
<ul>
  <li><code>CTRL + O</code> lalu Enter untuk save</li>
  <li><code>CTRL + X</code> untuk keluar</li>
</ul>

<h3>Langkah 5 — Test syntax Nginx</h3>
<p>Jangan reload Nginx sebelum test syntax berhasil.</p>

<pre><code>sudo nginx -t</code></pre>

<p>Jika hasilnya sukses, lanjut reload:</p>

<pre><code>sudo systemctl reload nginx
sudo systemctl status nginx</code></pre>

<h3>Langkah 6 — Test Gzip dari VPS</h3>
<p>Gunakan header <code>Accept-Encoding: gzip</code> agar browser/server tahu bahwa client menerima response gzip.</p>

<pre><code>curl -I -H "Accept-Encoding: gzip" https://domainkita.com</code></pre>

<p>Jika <code>curl</code> belum tersedia:</p>

<pre><code>sudo apt update
sudo apt install curl -y</code></pre>

<p>Hasil yang kita cari adalah header seperti:</p>

<pre><code>Content-Encoding: gzip</code></pre>

<h3>Langkah 7 — Test file asset</h3>
<p>Kadang halaman utama belum terlihat compressed karena ukuran response kecil. Test juga file CSS atau JavaScript yang ukurannya lebih besar.</p>

<pre><code>curl -I -H "Accept-Encoding: gzip" https://domainkita.com</code></pre>

<p>Jika kita tahu path file asset tertentu, bisa cek langsung:</p>

<pre><code>curl -I -H "Accept-Encoding: gzip" https://domainkita.com/path-ke-file.js</code></pre>

<h3>Langkah 8 — Test dari browser</h3>
<p>Buka website dari browser:</p>

<pre><code>https://domainkita.com</code></pre>

<p>Lalu buka Developer Tools → Network → pilih request HTML/CSS/JS → cek Response Headers.</p>
<p>Jika aktif, biasanya akan terlihat:</p>

<pre><code>content-encoding: gzip</code></pre>

<h3>Catatan penting</h3>
<p>Gzip biasanya tidak perlu diterapkan ke file gambar seperti JPG, PNG, atau WebP karena format tersebut sudah compressed.</p>
<p>Jadi fokus Gzip adalah file berbasis teks seperti HTML, CSS, JS, JSON, XML, dan SVG.</p>

<h3>Troubleshooting</h3>

<h4>1. sudo nginx -t gagal</h4>
<p>Jangan reload Nginx. Baca pesan error yang muncul, biasanya ada nomor baris.</p>

<pre><code>sudo nginx -t
sudo nano /etc/nginx/nginx.conf</code></pre>

<p>Kesalahan umum:</p>
<ul>
  <li>Konfigurasi Gzip diletakkan di luar blok <code>http</code>.</li>
  <li>Kurang tanda titik koma <code>;</code>.</li>
  <li>Ada typo pada directive Nginx.</li>
</ul>

<h4>2. Header Content-Encoding gzip tidak muncul</h4>
<p>Kemungkinan response terlalu kecil, tipe file belum masuk <code>gzip_types</code>, atau request tidak mengirim header <code>Accept-Encoding</code>.</p>

<pre><code>curl -I -H "Accept-Encoding: gzip" https://domainkita.com</code></pre>

<p>Pastikan juga konfigurasi sudah direload:</p>

<pre><code>sudo nginx -t
sudo systemctl reload nginx</code></pre>

<h4>3. Website tetap bisa dibuka tapi tidak terasa lebih cepat</h4>
<p>Gzip hanya salah satu optimasi. Kecepatan website juga dipengaruhi ukuran image, JavaScript, database/API, cache, dan koneksi user.</p>
<p>Lesson ini hanya fokus compression. Cache akan dibahas terpisah agar tidak overlap.</p>

<h4>4. Browser menampilkan 502 Bad Gateway setelah reload</h4>
<p>Gzip biasanya bukan penyebab 502. Cek PM2 dan port aplikasi:</p>

<pre><code>pm2 status
curl http://localhost:3000
pm2 logs lms --lines 50</code></pre>

<h4>5. Ingin rollback konfigurasi</h4>
<p>Jika konfigurasi bermasalah, restore backup:</p>

<pre><code>sudo cp /etc/nginx/nginx.conf.backup-before-gzip /etc/nginx/nginx.conf
sudo nginx -t
sudo systemctl reload nginx</code></pre>

<h3>Ringkasan command</h3>

<pre><code>cd /var/www/lms
nginx -v
sudo systemctl status nginx
sudo cp /etc/nginx/nginx.conf /etc/nginx/nginx.conf.backup-before-gzip
sudo grep -n "gzip" /etc/nginx/nginx.conf
sudo nano /etc/nginx/nginx.conf
sudo nginx -t
sudo systemctl reload nginx
curl -I -H "Accept-Encoding: gzip" https://domainkita.com</code></pre>

<h3>Kesimpulan</h3>
<p>Pada lesson ini, kita mengaktifkan Gzip compression di Nginx untuk membuat response berbasis teks lebih ringan.</p>
<p>Jika test header menampilkan <code>Content-Encoding: gzip</code>, berarti compression sudah aktif.</p>
<p>Langkah berikutnya adalah membahas cache dasar Nginx agar asset statis bisa dilayani lebih efisien.</p>`,
          },
          {
            id: "l2l-33-video",
            title: "Video Gzip Compression",
            type: "video",
            description:
              "Video pendamping untuk memahami Gzip compression pada Nginx agar response LMS lebih ringan.",
            url: "https://youtu.be/uOeAt_woF_c?si=v5zNPGajvaOKYyrJ",
            duration: "28 min",    
          },
        ],
      },
      {
        id: "l2l-34",
        title: "Basic Nginx cache",
        duration: "30 min",
        summary:
          "Memahami caching dasar untuk asset statis LMS di Nginx agar file seperti CSS, JavaScript, gambar, font, dan favicon lebih efisien dilayani browser.",  
        order: 2,
        materials: [
          {
            id: "l2l-34-html",
            title: "Caching Dasar",
            type: "html",
            description:
              "Konfigurasi cache dasar Nginx untuk asset statis, cara validasi header Cache-Control, dan troubleshooting cache yang belum aktif.",  
            htmlContent:
              `<h2>Caching Dasar</h2>
<p>Pada lesson ini, kita akan membahas caching dasar di Nginx untuk file statis LMS.</p>
<p>Materi Gzip sudah dibahas sebelumnya. Gzip mengecilkan ukuran response, sedangkan cache membantu browser menyimpan file agar tidak perlu download ulang terus-menerus.</p>

<h3>Apa itu caching?</h3>
<p><strong>Caching</strong> adalah proses menyimpan sementara file yang sering dipakai agar akses berikutnya menjadi lebih cepat.</p>
<p>Contoh file yang cocok diberi cache:</p>
<ul>
  <li>CSS</li>
  <li>JavaScript</li>
  <li>Image seperti JPG, PNG, WebP, SVG</li>
  <li>Font seperti WOFF dan WOFF2</li>
  <li>Favicon</li>
</ul>

<h3>Kenapa caching penting?</h3>
<ul>
  <li>Loading halaman berikutnya lebih cepat.</li>
  <li>Bandwidth VPS lebih hemat.</li>
  <li>Browser tidak perlu download asset yang sama berkali-kali.</li>
  <li>Website terasa lebih ringan untuk user.</li>
</ul>

<h3>Folder kerja command</h3>
<p>Konfigurasi caching dilakukan di file Nginx, jadi command boleh dijalankan dari folder mana saja.</p>
<p>Namun agar konsisten dengan course ini, kita mulai dari folder project LMS:</p>

<pre><code>cd /var/www/lms
pwd</code></pre>

<p>Jika folder belum ada, cek:</p>

<pre><code>ls -la /var/www</code></pre>

<h3>Langkah 1 — Pastikan Nginx aktif</h3>
<p>Command ini dijalankan di VPS:</p>

<pre><code>nginx -v
sudo systemctl status nginx</code></pre>

<p>Jika Nginx belum tersedia:</p>

<pre><code>sudo apt update
sudo apt install nginx -y</code></pre>

<p>Jika Nginx belum aktif:</p>

<pre><code>sudo systemctl enable nginx
sudo systemctl start nginx
sudo systemctl status nginx</code></pre>

<h3>Langkah 2 — Backup config site LMS</h3>
<p>Kita akan mengubah config site LMS, jadi buat backup dulu.</p>

<pre><code>sudo cp /etc/nginx/sites-available/lms /etc/nginx/sites-available/lms.backup-before-cache</code></pre>

<p>Cek backup:</p>

<pre><code>ls -la /etc/nginx/sites-available/</code></pre>

<h3>Langkah 3 — Buka file config site</h3>
<p>Command ini dijalankan di VPS:</p>

<pre><code>sudo nano /etc/nginx/sites-available/lms</code></pre>

<p>Tambahkan blok cache berikut di dalam blok <code>server { ... }</code>, sejajar dengan blok <code>location / { ... }</code>.</p>

<pre><code>location ~* \\.(?:css|js|jpg|jpeg|gif|png|webp|ico|svg|woff|woff2|ttf|otf)$ {
  expires 30d;
  add_header Cache-Control "public, max-age=2592000, immutable";
  access_log off;

  proxy_pass http://127.0.0.1:3000;
  proxy_http_version 1.1;
  proxy_set_header Host $host;
  proxy_set_header X-Real-IP $remote_addr;
  proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
  proxy_set_header X-Forwarded-Proto $scheme;
}</code></pre>

<p>Untuk Next.js, asset build biasanya berada di path <code>/_next/static/</code>. Kita bisa memberi cache lebih panjang untuk path ini:</p>

<pre><code>location /_next/static/ {
  expires 1y;
  add_header Cache-Control "public, max-age=31536000, immutable";
  access_log off;

  proxy_pass http://127.0.0.1:3000;
  proxy_http_version 1.1;
  proxy_set_header Host $host;
  proxy_set_header X-Real-IP $remote_addr;
  proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
  proxy_set_header X-Forwarded-Proto $scheme;
}</code></pre>

<h3>Langkah 4 — Jangan cache halaman dinamis terlalu agresif</h3>
<p>Untuk halaman utama dan halaman yang mungkin berubah, biarkan tetap lewat reverse proxy normal seperti yang sudah dibuat sebelumnya.</p>

<pre><code>location / {
  proxy_pass http://127.0.0.1:3000;
  proxy_http_version 1.1;
  proxy_set_header Upgrade $http_upgrade;
  proxy_set_header Connection "upgrade";
  proxy_set_header Host $host;
  proxy_set_header X-Real-IP $remote_addr;
  proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
  proxy_set_header X-Forwarded-Proto $scheme;
  proxy_cache_bypass $http_upgrade;
}</code></pre>

<p>Intinya, cache agresif cocok untuk asset statis, bukan untuk halaman login, dashboard, atau konten dinamis.</p>

<h3>Langkah 5 — Test syntax Nginx</h3>
<p>Setelah edit file, jangan langsung reload. Test dulu:</p>

<pre><code>sudo nginx -t</code></pre>

<p>Jika sukses, reload Nginx:</p>

<pre><code>sudo systemctl reload nginx
sudo systemctl status nginx</code></pre>

<h3>Langkah 6 — Test header cache</h3>
<p>Gunakan <code>curl -I</code> untuk melihat response header.</p>

<pre><code>curl -I https://domainkita.com</code></pre>

<p>Untuk asset statis, gunakan path file asset yang benar. Contoh:</p>

<pre><code>curl -I https://domainkita.com/favicon.ico</code></pre>

<p>Jika punya path asset Next.js, cek seperti ini:</p>

<pre><code>curl -I https://domainkita.com/_next/static/contoh-file.js</code></pre>

<p>Header yang kita cari:</p>

<pre><code>Cache-Control: public, max-age=2592000, immutable</code></pre>

<p>atau untuk asset <code>/_next/static/</code>:</p>

<pre><code>Cache-Control: public, max-age=31536000, immutable</code></pre>

<h3>Langkah 7 — Test dari browser</h3>
<p>Buka website dari browser:</p>

<pre><code>https://domainkita.com</code></pre>

<p>Lalu buka Developer Tools → Network → pilih file CSS/JS/image → cek Response Headers.</p>
<p>Jika cache aktif, akan terlihat header <code>cache-control</code>.</p>

<h3>Catatan untuk pemula</h3>
<p>Cache bukan berarti server tidak bekerja sama sekali. Cache hanya membantu browser menyimpan file tertentu agar tidak perlu download ulang.</p>
<p>Untuk file yang sering berubah, jangan beri cache terlalu panjang.</p>

<h3>Catatan untuk yang sudah advanced</h3>
<p>Next.js biasanya sudah memberi fingerprint pada asset build di <code>/_next/static/</code>. Karena nama file berubah saat build baru, path ini relatif aman diberi cache panjang dengan <code>immutable</code>.</p>
<p>Namun untuk file publik seperti <code>/favicon.ico</code> atau image yang namanya tidak berubah, gunakan cache lebih hati-hati karena browser bisa menyimpan versi lama.</p>

<h3>Troubleshooting</h3>

<h4>1. sudo nginx -t gagal</h4>
<p>Jangan reload Nginx. Baca pesan error yang muncul.</p>

<pre><code>sudo nginx -t
sudo nano /etc/nginx/sites-available/lms</code></pre>

<p>Kesalahan umum:</p>
<ul>
  <li>Blok <code>location</code> diletakkan di luar blok <code>server</code>.</li>
  <li>Kurang tanda titik koma <code>;</code>.</li>
  <li>Kurung kurawal <code>{ }</code> tidak seimbang.</li>
  <li>Regex location salah escape.</li>
</ul>

<h4>2. Header Cache-Control tidak muncul</h4>
<p>Pastikan kita mengecek file statis, bukan halaman HTML utama.</p>

<pre><code>curl -I https://domainkita.com/favicon.ico</code></pre>

<p>Pastikan Nginx sudah reload:</p>

<pre><code>sudo nginx -t
sudo systemctl reload nginx</code></pre>

<h4>3. Website masih menampilkan asset lama</h4>
<p>Ini efek normal dari cache. Untuk testing, lakukan hard refresh di browser:</p>

<pre><code>CTRL + F5</code></pre>

<p>Atau buka Developer Tools → Network → centang Disable cache saat testing.</p>

<h4>4. Setelah reload muncul 502 Bad Gateway</h4>
<p>Biasanya bukan karena cache, tetapi aplikasi LMS di PM2 tidak berjalan.</p>

<pre><code>pm2 status
curl http://localhost:3000
pm2 logs lms --lines 50</code></pre>

<h4>5. Ingin rollback config cache</h4>
<p>Restore file backup:</p>

<pre><code>sudo cp /etc/nginx/sites-available/lms.backup-before-cache /etc/nginx/sites-available/lms
sudo nginx -t
sudo systemctl reload nginx</code></pre>

<h3>Ringkasan command</h3>

<pre><code>cd /var/www/lms
nginx -v
sudo systemctl status nginx
sudo cp /etc/nginx/sites-available/lms /etc/nginx/sites-available/lms.backup-before-cache
sudo nano /etc/nginx/sites-available/lms
sudo nginx -t
sudo systemctl reload nginx
curl -I https://domainkita.com
curl -I https://domainkita.com/favicon.ico
pm2 status
curl http://localhost:3000</code></pre>

<h3>Kesimpulan</h3>
<p>Pada lesson ini, kita menambahkan caching dasar untuk asset statis LMS.</p>
<p>Gzip membantu mengecilkan response, sedangkan cache membantu browser menyimpan file agar loading berikutnya lebih cepat.</p>
<p>Jika header <code>Cache-Control</code> muncul pada asset statis, berarti caching dasar sudah aktif.</p>`,
          },
          {
            id: "l2l-34-video",
            title: "Video Caching Dasar",
            type: "video",
            description:
              "Video pendamping untuk memahami caching dasar asset statis LMS di Nginx.",
            url: "https://youtu.be/uOeAt_woF_c?si=v5zNPGajvaOKYyrJ",
            duration: "30 min",      
          },
        ],
      },
      {
        id: "l2l-35",
        title: "Security headers",
        duration: "32 min",
        summary:
          "Menambahkan HTTP security headers dasar di Nginx untuk membantu melindungi LMS dari risiko clickjacking, MIME sniffing, referrer leak, dan akses browser-side yang tidak perlu.", 
        order: 3,
        materials: [
          {
            id: "l2l-35-html",
            title: "HTTP Security Headers",
            type: "html",
            description:
              "Menambahkan header keamanan dasar di Nginx, validasi header dengan curl, dan troubleshooting jika header belum muncul.",  
            htmlContent:
              `<h2>HTTP Security Headers</h2>
<p>Pada lesson ini, kita akan menambahkan <strong>HTTP Security Headers</strong> pada Nginx.</p>
<p>Materi HTTPS, Gzip, dan caching sudah dibahas sebelumnya. Di lesson ini kita fokus pada header keamanan yang dikirim server ke browser.</p>

<h3>Apa itu HTTP Security Headers?</h3>
<p>HTTP Security Headers adalah instruksi tambahan dari server kepada browser untuk membantu meningkatkan keamanan website.</p>
<p>Header ini tidak menggantikan secure coding, validasi input, authentication, atau HTTPS. Tetapi header ini menjadi lapisan perlindungan tambahan untuk aplikasi production.</p>

<h3>Kenapa security headers penting?</h3>
<ul>
  <li>Mengurangi risiko website ditampilkan di iframe berbahaya.</li>
  <li>Mencegah browser menebak tipe file secara sembarangan.</li>
  <li>Mengontrol informasi referrer yang dikirim ke website lain.</li>
  <li>Membatasi fitur browser tertentu seperti camera, microphone, dan geolocation.</li>
  <li>Membantu website terlihat lebih siap untuk production.</li>
</ul>

<h3>Folder kerja command</h3>
<p>Konfigurasi security headers dilakukan di file Nginx, jadi command boleh dijalankan dari folder mana saja.</p>
<p>Namun agar konsisten dengan course ini, kita mulai dari folder project LMS:</p>

<pre><code>cd /var/www/lms
pwd</code></pre>

<p>Jika folder belum ada, cek:</p>

<pre><code>ls -la /var/www</code></pre>

<h3>Langkah 1 — Pastikan Nginx aktif</h3>
<p>Command ini dijalankan di VPS:</p>

<pre><code>nginx -v
sudo systemctl status nginx</code></pre>

<p>Jika Nginx belum tersedia:</p>

<pre><code>sudo apt update
sudo apt install nginx -y</code></pre>

<p>Jika Nginx belum aktif:</p>

<pre><code>sudo systemctl enable nginx
sudo systemctl start nginx
sudo systemctl status nginx</code></pre>

<h3>Langkah 2 — Backup config site LMS</h3>
<p>Sebelum mengubah konfigurasi, buat backup dulu.</p>

<pre><code>sudo cp /etc/nginx/sites-available/lms /etc/nginx/sites-available/lms.backup-before-security-headers</code></pre>

<p>Cek backup:</p>

<pre><code>ls -la /etc/nginx/sites-available/</code></pre>

<h3>Langkah 3 — Buka config Nginx LMS</h3>
<p>Command ini dijalankan di VPS:</p>

<pre><code>sudo nano /etc/nginx/sites-available/lms</code></pre>

<p>Tambahkan header berikut di dalam blok <code>server { ... }</code>. Letakkan di atas blok <code>location</code> agar berlaku untuk response dari server tersebut.</p>

<pre><code>add_header X-Frame-Options "SAMEORIGIN" always;
add_header X-Content-Type-Options "nosniff" always;
add_header Referrer-Policy "strict-origin-when-cross-origin" always;
add_header Permissions-Policy "camera=(), microphone=(), geolocation=()" always;
add_header X-XSS-Protection "0" always;</code></pre>

<h3>Langkah 4 — Tambahkan HSTS hanya jika HTTPS sudah aktif</h3>
<p>Jika HTTPS sudah aktif dan domain sudah stabil, kita bisa menambahkan HSTS:</p>

<pre><code>add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;</code></pre>

<p><strong>Penting:</strong> jangan aktifkan HSTS terlalu cepat jika HTTPS belum benar-benar stabil. HSTS membuat browser memaksa domain memakai HTTPS selama masa <code>max-age</code>.</p>

<h3>Contoh posisi dalam server block</h3>

<pre><code>server {
  listen 443 ssl;
  listen [::]:443 ssl;

  server_name domainkita.com www.domainkita.com;

  add_header X-Frame-Options "SAMEORIGIN" always;
  add_header X-Content-Type-Options "nosniff" always;
  add_header Referrer-Policy "strict-origin-when-cross-origin" always;
  add_header Permissions-Policy "camera=(), microphone=(), geolocation=()" always;
  add_header X-XSS-Protection "0" always;
  add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;

  location / {
    proxy_pass http://127.0.0.1:3000;
    proxy_http_version 1.1;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
  }
}</code></pre>

<p>Sesuaikan dengan konfigurasi Nginx yang sudah dibuat oleh Certbot. Jangan menghapus baris SSL yang dibuat Certbot.</p>

<h3>Langkah 5 — Test syntax Nginx</h3>
<p>Jangan reload sebelum test syntax sukses.</p>

<pre><code>sudo nginx -t</code></pre>

<p>Jika sukses, reload Nginx:</p>

<pre><code>sudo systemctl reload nginx
sudo systemctl status nginx</code></pre>

<h3>Langkah 6 — Cek header dari VPS</h3>
<p>Gunakan <code>curl -I</code> untuk melihat response header.</p>

<pre><code>curl -I https://domainkita.com</code></pre>

<p>Jika <code>curl</code> belum tersedia:</p>

<pre><code>sudo apt update
sudo apt install curl -y</code></pre>

<p>Header yang ingin kita lihat:</p>

<pre><code>X-Frame-Options: SAMEORIGIN
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: camera=(), microphone=(), geolocation=()
Strict-Transport-Security: max-age=31536000; includeSubDomains</code></pre>

<h3>Langkah 7 — Cek dari browser</h3>
<p>Buka website:</p>

<pre><code>https://domainkita.com</code></pre>

<p>Lalu buka Developer Tools → Network → pilih request utama document → cek Response Headers.</p>

<h3>Penjelasan singkat setiap header</h3>
<table>
  <thead>
    <tr>
      <th>Header</th>
      <th>Fungsi</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>X-Frame-Options</code></td>
      <td>Membatasi website agar tidak mudah dimasukkan ke iframe pihak lain.</td>
    </tr>
    <tr>
      <td><code>X-Content-Type-Options</code></td>
      <td>Mencegah browser menebak tipe file di luar header yang dikirim server.</td>
    </tr>
    <tr>
      <td><code>Referrer-Policy</code></td>
      <td>Mengatur seberapa banyak informasi URL asal dikirim ke website lain.</td>
    </tr>
    <tr>
      <td><code>Permissions-Policy</code></td>
      <td>Membatasi fitur browser seperti kamera, mikrofon, dan lokasi.</td>
    </tr>
    <tr>
      <td><code>Strict-Transport-Security</code></td>
      <td>Memaksa browser memakai HTTPS untuk domain tersebut selama periode tertentu.</td>
    </tr>
  </tbody>
</table>

<h3>Catatan tentang Content-Security-Policy</h3>
<p><code>Content-Security-Policy</code> atau CSP sangat powerful, tetapi juga mudah membuat website error jika terlalu ketat.</p>
<p>Untuk tahap dasar, kita belum memasang CSP penuh di lesson ini supaya tidak merusak asset Next.js, script, style, atau resource eksternal. CSP bisa dibahas sebagai lesson advanced terpisah.</p>

<h3>Troubleshooting</h3>

<h4>1. sudo nginx -t gagal</h4>
<p>Jangan reload Nginx. Baca pesan error dan cek file config.</p>

<pre><code>sudo nginx -t
sudo nano /etc/nginx/sites-available/lms</code></pre>

<p>Kesalahan umum:</p>
<ul>
  <li>Kurang tanda titik koma <code>;</code>.</li>
  <li>Header diletakkan di luar blok <code>server</code>.</li>
  <li>Tanda kutip tidak lengkap.</li>
  <li>Kurung kurawal <code>{ }</code> tidak seimbang.</li>
</ul>

<h4>2. Header tidak muncul saat dicek curl</h4>
<p>Pastikan Nginx sudah reload dan cek domain HTTPS yang benar.</p>

<pre><code>sudo nginx -t
sudo systemctl reload nginx
curl -I https://domainkita.com</code></pre>

<p>Pastikan juga directive memakai <code>always</code>, supaya header tetap dikirim pada berbagai response.</p>

<h4>3. Setelah ditambah HSTS, browser memaksa HTTPS</h4>
<p>Itu memang fungsi HSTS. Karena itu HSTS hanya disarankan setelah HTTPS benar-benar stabil.</p>
<p>Untuk tahap testing, kita bisa memakai <code>max-age</code> pendek lebih dulu, misalnya:</p>

<pre><code>add_header Strict-Transport-Security "max-age=300" always;</code></pre>

<h4>4. Website tampil error setelah menambahkan CSP</h4>
<p>Jika menambahkan CSP sendiri dan website rusak, hapus dulu CSP tersebut lalu test ulang.</p>

<pre><code>sudo nano /etc/nginx/sites-available/lms
sudo nginx -t
sudo systemctl reload nginx</code></pre>

<p>Lesson ini memang tidak memasang CSP penuh agar tidak mengganggu aplikasi.</p>

<h4>5. Ingin rollback konfigurasi</h4>
<p>Gunakan file backup:</p>

<pre><code>sudo cp /etc/nginx/sites-available/lms.backup-before-security-headers /etc/nginx/sites-available/lms
sudo nginx -t
sudo systemctl reload nginx</code></pre>

<h4>6. Muncul 502 Bad Gateway setelah reload</h4>
<p>Security headers biasanya bukan penyebab 502. Cek PM2 dan aplikasi LMS:</p>

<pre><code>pm2 status
curl http://localhost:3000
pm2 logs lms --lines 50</code></pre>

<h3>Ringkasan command</h3>

<pre><code>cd /var/www/lms
nginx -v
sudo systemctl status nginx
sudo cp /etc/nginx/sites-available/lms /etc/nginx/sites-available/lms.backup-before-security-headers
sudo nano /etc/nginx/sites-available/lms
sudo nginx -t
sudo systemctl reload nginx
curl -I https://domainkita.com
pm2 status
curl http://localhost:3000</code></pre>

<h3>Kesimpulan</h3>
<p>Pada lesson ini, kita menambahkan HTTP Security Headers dasar di Nginx.</p>
<p>Header ini membantu memberi instruksi keamanan tambahan kepada browser, seperti membatasi iframe, mencegah MIME sniffing, mengatur referrer, dan membatasi fitur browser yang tidak diperlukan.</p>
<p>Jika <code>curl -I https://domainkita.com</code> menampilkan header yang kita pasang, berarti konfigurasi sudah aktif.</p>`,
          },
          {
            id: "l2l-35-video",
            title: "Video HTTP Security Headers",
            type: "video",
            description:
              "Video pendamping untuk memahami HTTP security headers dasar pada Nginx untuk LMS production.",
            url: "https://youtu.be/uOeAt_woF_c?si=v5zNPGajvaOKYyrJ",
            duration: "32 min",      
          },
        ],
      },
      {
        id: "l2l-36",
        title: "Next.js production environment",
        duration: "30 min",
        summary:
          "Mengelola environment variable production Next.js agar konfigurasi domain, API URL, mode aplikasi, dan secret tidak ditulis langsung di source code.",    
        order: 4,
        materials: [
          {
            id: "l2l-36-html",
            title: "Environment Production",
            type: "html",
            description:
              "Menyiapkan file environment production, mengecek variable, rebuild aplikasi, restart PM2, dan troubleshooting env yang belum terbaca.",   
            htmlContent:
              `<h2>Environment Production</h2>
<p>Pada lesson ini, kita akan menyiapkan environment production untuk LMS berbasis Next.js.</p>
<p>Materi Nginx, HTTPS, PM2, Gzip, caching, dan security headers sudah dibahas sebelumnya. Di lesson ini kita fokus pada pengelolaan konfigurasi aplikasi agar tidak hardcode di source code.</p>

<h3>Apa itu environment variable?</h3>
<p><strong>Environment variable</strong> adalah nilai konfigurasi yang dibaca aplikasi dari environment, bukan ditulis langsung di source code.</p>
<p>Contoh yang biasanya disimpan sebagai environment variable:</p>
<ul>
  <li>URL aplikasi production</li>
  <li>URL API backend</li>
  <li>Mode aplikasi</li>
  <li>Token atau secret tertentu</li>
  <li>Konfigurasi integrasi pihak ketiga</li>
</ul>

<h3>Kenapa environment production penting?</h3>
<ul>
  <li>Konfigurasi local dan production bisa dipisahkan.</li>
  <li>Secret tidak perlu ditulis langsung di source code.</li>
  <li>Deployment lebih rapi dan mudah dipindah server.</li>
  <li>Perubahan domain atau API URL lebih mudah dikelola.</li>
  <li>Project lebih siap untuk production.</li>
</ul>

<h3>Folder kerja command</h3>
<p>File environment untuk frontend Next.js biasanya berada di folder frontend, tempat file <code>package.json</code> berada.</p>
<p>Untuk project LMS kita, command dijalankan dari folder:</p>

<pre><code>cd /var/www/lms/frontend
pwd</code></pre>

<p>Cek isi folder:</p>

<pre><code>ls -la</code></pre>

<p>Pastikan ada file <code>package.json</code>. Jika tidak ada, berarti kita sedang berada di folder yang salah.</p>

<h3>Langkah 1 — Cek file env yang sudah ada</h3>
<p>Command ini dijalankan di folder frontend:</p>

<pre><code>cd /var/www/lms/frontend
ls -la | grep env</code></pre>

<p>File yang mungkin muncul:</p>
<ul>
  <li><code>.env</code></li>
  <li><code>.env.local</code></li>
  <li><code>.env.production</code></li>
  <li><code>.env.example</code></li>
</ul>

<h3>Langkah 2 — Buat file .env.production</h3>
<p>Untuk production, kita bisa memakai file <code>.env.production</code>.</p>

<pre><code>cd /var/www/lms/frontend
nano .env.production</code></pre>

<p>Contoh isi dasar:</p>

<pre><code>NODE_ENV=production
NEXT_PUBLIC_APP_URL=https://domainkita.com
NEXT_PUBLIC_SITE_NAME=OdooCamp LMS
NEXT_PUBLIC_API_BASE_URL=https://domainkita.com/api</code></pre>

<p>Simpan file di nano:</p>
<ul>
  <li><code>CTRL + O</code> lalu Enter untuk save</li>
  <li><code>CTRL + X</code> untuk keluar</li>
</ul>

<h3>Langkah 3 — Pahami perbedaan public dan private env</h3>
<p>Di Next.js, variable yang diawali <code>NEXT_PUBLIC_</code> bisa ikut masuk ke browser.</p>
<p>Artinya, jangan taruh secret, password, private key, atau token sensitif di variable yang memakai awalan <code>NEXT_PUBLIC_</code>.</p>

<table>
  <thead>
    <tr>
      <th>Jenis env</th>
      <th>Contoh</th>
      <th>Boleh terlihat di browser?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Public</td>
      <td><code>NEXT_PUBLIC_APP_URL</code></td>
      <td>Ya</td>
    </tr>
    <tr>
      <td>Private</td>
      <td><code>DATABASE_URL</code></td>
      <td>Tidak</td>
    </tr>
    <tr>
      <td>Private</td>
      <td><code>JWT_SECRET</code></td>
      <td>Tidak</td>
    </tr>
  </tbody>
</table>

<h3>Langkah 4 — Buat .env.example untuk dokumentasi</h3>
<p>File <code>.env.production</code> biasanya tidak dimasukkan ke Git jika berisi konfigurasi khusus server.</p>
<p>Agar developer lain tahu variable apa saja yang dibutuhkan, buat file contoh:</p>

<pre><code>cd /var/www/lms/frontend
nano .env.example</code></pre>

<p>Contoh isi:</p>

<pre><code>NODE_ENV=production
NEXT_PUBLIC_APP_URL=https://your-domain.com
NEXT_PUBLIC_SITE_NAME=Your LMS Name
NEXT_PUBLIC_API_BASE_URL=https://your-domain.com/api</code></pre>

<h3>Langkah 5 — Pastikan file env production tidak ikut Git jika berisi secret</h3>
<p>Cek file <code>.gitignore</code>:</p>

<pre><code>cd /var/www/lms/frontend
cat .gitignore</code></pre>

<p>Jika belum ada aturan env, tambahkan:</p>

<pre><code>nano .gitignore</code></pre>

<p>Contoh aturan:</p>

<pre><code>.env
.env.local
.env.production
!.env.example</code></pre>

<p>Artinya file env asli tidak ikut commit, tetapi file contoh tetap boleh ikut Git.</p>

<h3>Langkah 6 — Rebuild aplikasi setelah env berubah</h3>
<p>Untuk variable <code>NEXT_PUBLIC_</code>, perubahan biasanya perlu build ulang agar terbaca di bundle frontend.</p>

<pre><code>cd /var/www/lms/frontend
npm run build</code></pre>

<p>Jika build berhasil, restart aplikasi di PM2:</p>

<pre><code>pm2 restart lms
pm2 status</code></pre>

<h3>Langkah 7 — Cek log PM2</h3>
<p>Jika setelah restart aplikasi error, lihat log:</p>

<pre><code>pm2 logs lms --lines 100</code></pre>

<p>Untuk keluar dari log:</p>

<pre><code>CTRL + C</code></pre>

<h3>Langkah 8 — Test aplikasi dari VPS dan browser</h3>
<p>Cek dari VPS:</p>

<pre><code>curl http://localhost:3000
curl -I https://domainkita.com</code></pre>

<p>Cek dari browser PC:</p>

<pre><code>https://domainkita.com</code></pre>

<h3>Langkah 9 — Cek env yang tersedia di shell</h3>
<p>Untuk melihat variable environment di shell saat ini:</p>

<pre><code>printenv | grep NEXT_PUBLIC</code></pre>

<p>Namun perlu dipahami: variable di file <code>.env.production</code> dibaca oleh Next.js saat build/runtime sesuai mekanisme framework, bukan selalu tampil di <code>printenv</code>.</p>

<h3>Catatan penting untuk production</h3>
<ul>
  <li>Jangan commit file env yang berisi secret.</li>
  <li>Gunakan <code>.env.example</code> sebagai dokumentasi.</li>
  <li>Setelah mengubah env public, lakukan <code>npm run build</code> ulang.</li>
  <li>Setelah build, restart process PM2.</li>
  <li>Pastikan domain di env sesuai dengan domain production.</li>
</ul>

<h3>Troubleshooting</h3>

<h4>1. File package.json tidak ditemukan</h4>
<p>Artinya kita berada di folder yang salah.</p>

<pre><code>cd /var/www/lms/frontend
ls -la</code></pre>

<p>Pastikan file <code>package.json</code> ada di folder tersebut.</p>

<h4>2. Env sudah diubah tetapi website belum berubah</h4>
<p>Untuk variable <code>NEXT_PUBLIC_</code>, lakukan build ulang dan restart PM2:</p>

<pre><code>cd /var/www/lms/frontend
npm run build
pm2 restart lms</code></pre>

<h4>3. Build gagal setelah menambah env</h4>
<p>Cek pesan error:</p>

<pre><code>cd /var/www/lms/frontend
npm run build</code></pre>

<p>Kesalahan umum:</p>
<ul>
  <li>Nama variable salah ketik.</li>
  <li>Value mengandung spasi atau karakter khusus tanpa format yang benar.</li>
  <li>Kode aplikasi memanggil env yang belum didefinisikan.</li>
</ul>

<h4>4. Secret terlihat di browser</h4>
<p>Jika secret memakai awalan <code>NEXT_PUBLIC_</code>, berarti secret tersebut berisiko terekspos ke browser.</p>
<p>Solusi: pindahkan secret ke variable tanpa awalan <code>NEXT_PUBLIC_</code> dan hanya gunakan di server-side code.</p>

<h4>5. PM2 online tetapi env lama masih terbaca</h4>
<p>Restart PM2 setelah build:</p>

<pre><code>pm2 restart lms
pm2 logs lms --lines 50</code></pre>

<p>Jika masih belum berubah, lakukan build ulang:</p>

<pre><code>cd /var/www/lms/frontend
npm run build
pm2 restart lms</code></pre>

<h4>6. Tidak sengaja commit file .env.production</h4>
<p>Tambahkan file env ke <code>.gitignore</code>, lalu hentikan tracking Git jika sudah terlanjur ter-track:</p>

<pre><code>cd /var/www/lms/frontend
git rm --cached .env.production
git status</code></pre>

<p>Setelah itu commit perubahan <code>.gitignore</code>. Jika file berisi secret pernah masuk Git, anggap secret tersebut bocor dan ganti nilainya.</p>

<h3>Ringkasan command</h3>

<pre><code>cd /var/www/lms/frontend
ls -la
ls -la | grep env
nano .env.production
nano .env.example
cat .gitignore
nano .gitignore
npm run build
pm2 restart lms
pm2 status
pm2 logs lms --lines 100
curl http://localhost:3000
curl -I https://domainkita.com
printenv | grep NEXT_PUBLIC</code></pre>

<h3>Kesimpulan</h3>
<p>Pada lesson ini, kita memisahkan konfigurasi production ke file environment.</p>
<p>Environment variable membantu kita mengelola domain, API URL, mode aplikasi, dan konfigurasi lain tanpa hardcode langsung di source code.</p>
<p>Setiap kali env public berubah, ingat workflow penting ini:</p>

<pre><code>edit env
npm run build
pm2 restart lms
test domain</code></pre>`,
          },
          {
            id: "l2l-36-video",
            title: "Video Environment Production",
            type: "video",
            description:
              "Video pendamping untuk memahami pengelolaan environment production pada LMS Next.js.",
            url: "https://youtu.be/uOeAt_woF_c?si=v5zNPGajvaOKYyrJ",
            duration: "30 min",   
          },
        ],
      },
      {
        id: "l2l-37",
        title: "Basic performance tuning",
        duration: "8 min",
        summary:
          "Review optimasi sederhana sebelum LMS dipakai lebih luas.",
        order: 5,
        materials: [
          {
            id: "l2l-37-html",
            title: "Performance Review",
            type: "html",
            description: "Checklist performa dasar setelah deploy.",
            htmlContent:
              "<h2>Basic performance tuning</h2><p>Cek ukuran image, hasil build, port internal, response time, dan penggunaan memory agar deployment lebih stabil.</p>",
          },
        ],
      },
    ],
  },
  {
    id: "l2l-sec-8",
    title: "Module 8 — Backup dan Monitoring",
    summary:
      "Menyiapkan backup, monitoring, dan pola update course berdasarkan real error di VPS.",
    order: 8,
    lessons: [
      {
        id: "l2l-38",
        title: "Backup source code",
        duration: "7 min",
        summary:
          "Mempersiapkan pola backup project agar perubahan penting tidak hilang.",
        order: 1,
        materials: [
          {
            id: "l2l-38-html",
            title: "Backup Source",
            type: "html",
            description: "Strategi backup source code LMS.",
            htmlContent:
              "<h2>Backup source code</h2><p>Minimal, source code harus aman di Git. Untuk server, kita juga bisa membuat backup manual atau snapshot berkala.</p>",
          },
        ],
      },
      {
        id: "l2l-39",
        title: "Backup database (jika nanti ada)",
        duration: "7 min",
        summary:
          "Mempersiapkan mindset backup untuk fase LMS berikutnya ketika backend database sudah aktif.",
        order: 2,
        materials: [
          {
            id: "l2l-39-html",
            title: "Database Backup Planning",
            type: "html",
            description: "Persiapan backup ketika nanti LMS memakai database nyata.",
            htmlContent:
              "<h2>Backup database</h2><p>Untuk frontend statis/SSR saja belum banyak yang perlu dibackup selain source dan env. Tetapi saat backend/database masuk, backup database menjadi wajib.</p>",
          },
        ],
      },
      {
        id: "l2l-40",
        title: "Monitoring uptime",
        duration: "6 min",
        summary: "Memantau apakah LMS tetap online setelah deployment.",
        order: 3,
        materials: [
          {
            id: "l2l-40-html",
            title: "Uptime Monitoring",
            type: "html",
            description: "Monitoring dasar setelah website live.",
            htmlContent:
              "<h2>Monitoring uptime</h2><p>Gunakan pengecekan manual maupun uptime monitor eksternal untuk memastikan domain LMS selalu bisa diakses.</p>",
          },
        ],
      },
      {
        id: "l2l-41",
        title: "Restore scenario",
        duration: "7 min",
        summary:
          "Memikirkan langkah pemulihan saat server atau aplikasi bermasalah.",
        order: 4,
        materials: [
          {
            id: "l2l-41-html",
            title: "Restore Dasar",
            type: "html",
            description: "Pola berpikir recovery setelah incident.",
            htmlContent:
              "<h2>Restore scenario</h2><p>Backup hanya berguna kalau kita tahu cara restore. Buat checklist sederhana: source, env, service, Nginx, SSL, dan process app.</p>",
          },
        ],
      },
      {
        id: "l2l-42",
        title: "Handling real-world deployment errors",
        duration: "10 min",
        summary:
          "Menjadikan course ini sebagai living course yang akan terus diupdate berdasarkan error nyata di VPS.",
        order: 5,
        materials: [
          {
            id: "l2l-42-html",
            title: "Living Course Notes",
            type: "html",
            description: "Catatan filosofi course yang akan selalu diupdate.",
            htmlContent:
              "<h2>Handling real-world deployment errors</h2><p>Course ini bersifat living course. Jika nanti kita menemui error nyata saat deploy LMS di VPS, maka materi, lesson, dan solusi di course ini harus ikut diperbarui agar tetap sesuai pengalaman real deployment.</p>",
          },
        ],
      },
    ],
  },
];

const fleetoneCurriculumSeed = [
  ["fleetone_base", "Core Foundation", "Foundational setup, core references, and system framework."],
  ["fleetone_security", "Core Foundation", "Users, roles, permissions, and access control."],
  ["fleetone_vendor", "Core Foundation", "Vendor master and supplier operations."],
  ["fleetone_cost", "Core Foundation", "Fleet operating cost structures."],
  ["fleetone_vehicle", "Core Foundation", "Vehicle master and unit operations."],
  ["fleetone_component", "Master Assets & Driver Management", "Vehicle component lifecycle."],
  ["fleetone_driver", "Master Assets & Driver Management", "Driver operations and assignments."],
  ["fleetone_license_cert", "Master Assets & Driver Management", "Driver certification management."],
  ["fleetone_license", "Master Assets & Driver Management", "Vehicle license administration."],
  ["fleetone_documents", "Master Assets & Driver Management", "Document control and expirations."],
  ["fleetone_tracker", "Tracking & Metering", "Tracking and unit movement."],
  ["fleetone_meter", "Tracking & Metering", "Meter operations and readings."],
  ["fleetone_inventory", "Inventory & Logistics", "Parts inventory."],
  ["fleetone_fluid", "Inventory & Logistics", "Fluid management."],
  ["fleetone_fuel", "Inventory & Logistics", "Fuel operations."],
  ["fleetone_transfer", "Inventory & Logistics", "Inventory transfers."],
  ["fleetone_supplies", "Inventory & Logistics", "Supplies issuance."],
  ["fleetone_purchase", "Inventory & Logistics", "Purchasing workflow."],
  ["fleetone_tire", "Inventory & Logistics", "Tire lifecycle management."],
  ["fleetone_pm", "Maintenance & Workshop", "Preventive maintenance."],
  ["fleetone_tickler", "Maintenance & Workshop", "Inspection findings."],
  ["fleetone_repair", "Maintenance & Workshop", "Repair operations."],
  ["fleetone_workshop", "Maintenance & Workshop", "Workshop management."],
  ["fleetone_maintenance_history", "Maintenance & Workshop", "Maintenance history."],
  ["fleetone_recall", "Maintenance & Workshop", "Recall campaigns."],
  ["fleetone_assignment", "Operations", "Vehicle assignments."],
  ["fleetone_trip", "Operations", "Trip operations."],
  ["fleetone_payroll_time", "HR & Support Assets", "Time and productivity."],
  ["fleetone_violation", "HR & Support Assets", "Driver violations."],
  ["fleetone_tool_inventory", "HR & Support Assets", "Tool inventory."],
  ["fleetone_tool", "HR & Support Assets", "Tool assignment."],
  ["fleetone_contract", "Governance & Risk", "Contracts."],
  ["fleetone_insurance", "Governance & Risk", "Insurance."],
  ["fleetone_compliance", "Governance & Risk", "Compliance management."],
  ["fleetone_alerts", "Monitoring & Intelligence", "Alerts and notifications."],
  ["fleetone_reporting", "Monitoring & Intelligence", "Operational reporting."],
  ["fleetone_dashboard", "Monitoring & Intelligence", "Fleet KPIs."],
  ["fleetone_integration", "Monitoring & Intelligence", "External integrations."],
  ["fleetone_mobile", "Monitoring & Intelligence", "Mobile operations."],
  ["fleetone_ai_predictive", "Monitoring & Intelligence", "Predictive intelligence."],
] as const;

const fleetoneCurriculum: CurriculumSection[] = fleetoneCurriculumSeed.map(
  ([title, phase, description], index) => ({
    id: `fleetone-sec-${index + 1}`,
    title,
    summary: `${phase}. ${description}`,
    order: index + 1,
    lessons: [],
  })
);

export function getCourseImageBySlug(slug: string) {
  if (slug === "python-basic") {
    return "/images/course-python-card.png";
  }

  if (slug === "odoo-development") {
    return "/images/course-odoo-card.png";
  }

  if (slug === "fleetone-academy") {
    return "/images/course-odoo-card.png";
  }

  if (slug === "from-localhost-to-live-lms") {
    return "/images/course-odoo-card.png";
  }

  return "/images/course-prompt-card.png";
}

export const courses: Course[] = [
  {
    id: "1",
    slug: "python-basic",
    title: "Python Basic",
    price: 49,
    accessType: "paid",
    level: "Beginner",
    totalDuration: "1h 10m",
    shortDescription: "Python fundamentals for new developers.",
    description: "Learn Python fundamentals from zero to solid foundation.",
    curriculum: pythonCurriculum,
    lessons: flattenCurriculum(pythonCurriculum),
  },
  {
    id: "2",
    slug: "odoo-development",
    title: "Odoo Development",
    price: 89,
    accessType: "paid",
    level: "Beginner",
    totalDuration: "1h 31m",
    shortDescription: "Build real Odoo modules step by step.",
    description: "Build real modules and customize Odoo step by step.",
    curriculum: odooCurriculum,
    lessons: flattenCurriculum(odooCurriculum),
  },
  {
    id: "3",
    slug: "prompt-engineering",
    title: "Prompt Engineering",
    price: null,
    accessType: "free",
    level: "Beginner",
    totalDuration: "1h 08m",
    shortDescription: "A free flagship course with mixed lesson materials.",
    description:
      "Learn effective prompting for productivity, content creation, and development workflows.",
    curriculum: promptCurriculum,
    lessons: flattenCurriculum(promptCurriculum),
  },
  {
    id: "4",
    slug: "fleetone-academy",
    title: "FleetOne Academy",
    price: null,
    accessType: "free",
    level: "Beginner",
    totalDuration: "40 Sections",
    shortDescription: "Operate FleetOne module-by-module while the platform is being built.",
    description:
      "Operate FleetOne module-by-module while the platform is being built.",
    curriculum: fleetoneCurriculum,
    lessons: flattenCurriculum(fleetoneCurriculum),
  },
  {
    id: "5",
    slug: "from-localhost-to-live-lms",
    title: "From Localhost to Live LMS",
    price: null,
    accessType: "free",
    level: "Beginner",
    totalDuration: "8 Modules • 42 Lessons",
    shortDescription:
      "Deploy LMS production-ready dari localhost ke Ubuntu VPS 22.04 menggunakan PuTTY, Nginx, SSL, dan PM2.",
    description:
      "Deploying a Production-Ready Learning Platform on Ubuntu VPS. Course gratis ini membahas perjalanan nyata dari localhost ke live server menggunakan Ubuntu 22.04, akses PuTTY, Nginx, SSL, PM2, dan pola deployment yang akan terus diperbarui mengikuti error nyata yang kita temui di VPS.",
    curriculum: localhostToLiveCurriculum,
    lessons: flattenCurriculum(localhostToLiveCurriculum),
  },
];
