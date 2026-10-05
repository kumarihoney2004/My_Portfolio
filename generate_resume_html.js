const fs = require('fs');
const path = require('path');

const htmlContent = `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
  @page { size: A4; margin: 15mm 20mm; }
  body { font-family: 'Times New Roman', Times, serif; color: #111; line-height: 1.35; margin: 0; padding: 15px 25px; font-size: 10.5pt; }
  .name { text-align: center; font-size: 22pt; font-weight: bold; letter-spacing: 0.5px; margin-bottom: 4px; text-transform: uppercase; }
  .contact { text-align: center; font-size: 9.5pt; margin-bottom: 14px; color: #222; }
  .contact a { color: #111; text-decoration: none; }
  .section-title { font-size: 11pt; font-weight: bold; letter-spacing: 0.5px; border-bottom: 1.5px solid #000; padding-bottom: 2px; margin-top: 14px; margin-bottom: 8px; text-transform: uppercase; }
  .summary { text-align: justify; margin-bottom: 10px; font-size: 10pt; line-height: 1.4; }
  .item-header { display: flex; justify-content: space-between; font-weight: bold; }
  .item-sub { font-style: italic; margin-bottom: 5px; }
  .edu-block { margin-bottom: 6px; }
  .skills-line { margin-bottom: 4px; font-size: 10pt; }
  .skills-label { font-weight: bold; }
  ul { margin: 3px 0 8px 18px; padding: 0; }
  li { margin-bottom: 3px; text-align: justify; font-size: 10pt; }
  .exp-title { font-weight: bold; }
  .exp-meta { float: right; font-weight: normal; }
  .clearfix::after { content: ""; clear: both; display: table; }
</style>
</head>
<body>
  <div class="name">HONEY KUMARI</div>
  <div class="contact">Bengaluru, Karnataka | +91-7857818410 | kumarihoney170.08@gmail.com | github.com/kumarihoney2004</div>
  
  <div class="section-title">PROFESSIONAL SUMMARY</div>
  <div class="summary">
    BCA graduate and Full Stack Developer with hands-on experience building web applications and RESTful APIs using Node.js, React.js, JavaScript (ES6+), and SQL databases (PostgreSQL, MySQL). Experienced in integrating frontend interfaces with backend APIs, debugging, and testing, with a strong foundation in OOP and data structures. Currently learning React Native and Socket.IO to build real-time web and mobile experiences. Eager to contribute to scalable frontend, mobile, and backend features within agile, cross-functional engineering teams.
  </div>

  <div class="section-title">EDUCATION</div>
  <div class="edu-block">
    <div class="item-header"><span>Bachelor of Computer Applications (BCA)</span><span>2023 – 2026</span></div>
    <div class="item-sub">Netaji Subhas University, Jamshedpur</div>
  </div>
  <div class="edu-block">
    <div class="item-header"><span>Senior Secondary – 12th Grade (CBSE)</span><span>2021 – 2023</span></div>
    <div class="item-sub">DBMS Kadma High School, Jamshedpur</div>
  </div>
  <div class="edu-block">
    <div class="item-header"><span>Secondary – 10th Grade (CBSE)</span><span>2020 – 2021</span></div>
    <div class="item-sub">DBMS Kadma High School, Jamshedpur</div>
  </div>

  <div class="section-title">TECHNICAL SKILLS</div>
  <div class="skills-line"><span class="skills-label">Languages:</span> Java, JavaScript, Python, C++, C</div>
  <div class="skills-line"><span class="skills-label">Frontend:</span> React.js, React Native (learning), JavaScript (ES6+), HTML5, CSS3, Responsive Web Design</div>
  <div class="skills-line"><span class="skills-label">Backend:</span> Node.js, Socket.IO (learning), RESTful API Design &amp; Integration, MVC Architecture</div>
  <div class="skills-line"><span class="skills-label">Database &amp; Storage:</span> PostgreSQL, MySQL</div>
  <div class="skills-line"><span class="skills-label">Frameworks &amp; Tools:</span> Spring Framework (Spring Boot – learning), Git, GitHub, Postman, VS Code</div>
  <div class="skills-line"><span class="skills-label">Core Concepts:</span> OOP, Data Structures, Debugging &amp; API Testing, Agile Development</div>

  <div class="section-title">EXPERIENCE</div>
  <div style="margin-bottom:6px;">
    <div class="exp-title clearfix">Web Development Intern | Tata Steel Ltd. <span class="exp-meta">1 Month | Jamshedpur</span></div>
    <ul>
      <li>Built an internal Resume Builder using ASP.NET and HTML/CSS, enabling staff to generate structured, downloadable resumes via a dynamic 5-section web form.</li>
      <li>Shipped a production-ready tool within a 1-month timeline, adopted by HR staff for ongoing documentation.</li>
    </ul>
  </div>
  <div>
    <div class="exp-title clearfix">Server-Side Development Intern | Stack Infotech Pvt. Ltd. <span class="exp-meta">3 Months | Jamshedpur</span></div>
    <ul>
      <li>Integrated RESTful APIs to fetch and display dynamic data on web interfaces, improving data accessibility for end users.</li>
      <li>Tested and debugged API integrations using Postman and browser developer tools to ensure reliable data flow between frontend and backend.</li>
      <li>Collaborated with senior developers on real-world tasks, gaining hands-on experience in professional software workflows and Git version control.</li>
    </ul>
  </div>

  <div class="section-title">PROJECTS</div>
  <div style="margin-bottom:6px;">
    <div class="exp-title">E-Commerce Website</div>
    <ul>
      <li>Built a fully functional full-stack e-commerce web application using HTML, CSS, JavaScript, and MySQL.</li>
      <li>Implemented RESTful API calls to handle product listing, user authentication, and order management workflows.</li>
      <li>Used Fetch API to connect the frontend with backend endpoints, enabling dynamic content loading without page refreshes.</li>
      <li>Applied clean MVC-style project structure, improving code maintainability and scalability.</li>
    </ul>
  </div>
  <div>
    <div class="exp-title">Karyamitra – Service Provider Platform (Backend Update)</div>
    <ul>
      <li>Worked on a backend update for Karyamitra, a service-provider platform connecting users with local service professionals.</li>
      <li>Designed and implemented RESTful APIs to support core platform features and improve backend data handling.</li>
      <li>Collaborated with the existing codebase to integrate new endpoints while maintaining consistency with established architecture.</li>
    </ul>
  </div>
</body>
</html>`;

fs.writeFileSync('resume.html', htmlContent);
console.log('resume.html generated');
