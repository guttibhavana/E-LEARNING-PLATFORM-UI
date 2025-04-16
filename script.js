const courses = [
  {
    title: "Introduction to Python",
    progress: 70,
    video: "https://www.youtube.com/embed/rfscVS0vtbw"
  },
  {
    title: "React.js for Beginners",
    progress: 40,
    video: "https://www.youtube.com/embed/bMknfKXIFA8"
  },
  {
    title: "Web Development Essentials",
    progress: 90,
    video: "https://www.youtube.com/embed/ZxKM3DCV2kE"
  },
  {
    title: "Mastering HTML & CSS",
    progress: 100,
    video: "https://www.youtube.com/embed/mU6anWqZJcc"
  },
  {
    title: "JavaScript Fundamentals",
    progress: 55,
    video: "https://www.youtube.com/embed/hdI2bqOjy3c"
  },
  {
    title: "Building APIs with Node.js",
    progress: 25,
    video: "https://www.youtube.com/embed/Oe421EPjeBE"
  },
  {
    title: "SQL for Beginners",
    progress: 60,
    video: "https://www.youtube.com/embed/27axs9dO7AE"
  },
  {
    title: "UI/UX Design Basics",
    progress: 10,
    video: "https://www.youtube.com/embed/3Y1H1WokbwM"
  }
];

  
  let selectedTab = 'courses';
  
  document.addEventListener('DOMContentLoaded', () => {
    renderCourses();
    renderProgress();
  
    document.querySelectorAll('.sidebar nav a').forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        document.querySelectorAll('.sidebar nav a').forEach(a => a.classList.remove('active'));
        e.target.classList.add('active');
      });
    });
  
    document.getElementById('theme-toggle').addEventListener('change', (e) => {
      document.body.classList.toggle('dark', e.target.checked);
    });
  });
  
  function showTab(id) {
    document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    selectedTab = id;
  }
  
  function renderCourses(filtered = courses) {
    const list = document.getElementById('course-list');
    list.innerHTML = '';
    filtered.forEach((course, index) => {
      const div = document.createElement('div');
      div.className = `course ${course.progress >= 100 ? 'completed' : ''}`;
      div.innerHTML = `
        <h3>${course.title}</h3>
        <div class="progress-bar"><div style="width: ${course.progress}%;"></div></div>
      `;
      div.onclick = () => selectCourse(index);
      list.appendChild(div);
    });
  }
  
  function renderProgress() {
    const container = document.getElementById('progress-overview');
    container.innerHTML = '';
    courses.forEach(course => {
      const div = document.createElement('div');
      div.innerHTML = `
        <strong>${course.title}</strong>
        <div class="progress-bar"><div style="width: ${course.progress}%;"></div></div>
        <br />
      `;
      container.appendChild(div);
    });
  }
  
  function selectCourse(index) {
    const course = courses[index];
    document.getElementById('video-title').textContent = course.title;
    document.getElementById('video-frame').src = course.video;
    showTab('video');
  }
  
  function filterCourses() {
    const query = document.getElementById('search').value.toLowerCase();
    const filtered = courses.filter(course => course.title.toLowerCase().includes(query));
    renderCourses(filtered);
  }
  