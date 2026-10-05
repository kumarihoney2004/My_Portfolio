const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');

function generatePDF(outputPath) {
  const doc = new PDFDocument({
    size: 'A4',
    margin: 40,
  });

  const stream = fs.createWriteStream(outputPath);
  doc.pipe(stream);

  const pageWidth = doc.page.width - doc.options.margin * 2;
  const leftMargin = doc.options.margin;

  // Header: Name
  doc
    .font('Helvetica-Bold')
    .fontSize(22)
    .text('HONEY KUMARI', { align: 'center' });

  doc.moveDown(0.2);

  // Subheader: Contact Details
  doc
    .font('Helvetica')
    .fontSize(9.5)
    .fillColor('#222222')
    .text('Bengaluru, Karnataka | +91-7857818410 | kumarihoney170.08@gmail.com | github.com/kumarihoney2004', { align: 'center' });

  doc.moveDown(0.5);

  function sectionHeading(title) {
    doc.moveDown(0.4);
    doc
      .font('Helvetica-Bold')
      .fontSize(11)
      .fillColor('#000000')
      .text(title.toUpperCase());

    const y = doc.y + 2;
    doc
      .moveTo(leftMargin, y)
      .lineTo(leftMargin + pageWidth, y)
      .lineWidth(0.8)
      .strokeColor('#000000')
      .stroke();

    doc.y = y + 4;
  }

  // 1. PROFESSIONAL SUMMARY
  sectionHeading('PROFESSIONAL SUMMARY');
  doc
    .font('Helvetica')
    .fontSize(9.5)
    .fillColor('#111111')
    .text(
      'BCA graduate and Full Stack Developer with hands-on experience building web applications and RESTful APIs using Node.js, React.js, JavaScript (ES6+), and SQL databases (PostgreSQL, MySQL). Experienced in integrating frontend interfaces with backend APIs, debugging, and testing, with a strong foundation in OOP and data structures. Currently learning React Native and Socket.IO to build real-time web and mobile experiences. Eager to contribute to scalable frontend, mobile, and backend features within agile, cross-functional engineering teams.',
      { align: 'justify', lineGap: 2 }
    );

  // 2. EDUCATION
  sectionHeading('EDUCATION');
  
  function eduItem(degree, years, school) {
    const y = doc.y;
    doc.font('Helvetica-Bold').fontSize(10).fillColor('#000000').text(degree, leftMargin, y);
    doc.font('Helvetica-Bold').fontSize(10).text(years, leftMargin, y, { align: 'right', width: pageWidth });
    doc.font('Helvetica-Oblique').fontSize(9.5).fillColor('#333333').text(school);
    doc.moveDown(0.3);
  }

  eduItem('Bachelor of Computer Applications (BCA)', '2023 – 2026', 'Netaji Subhas University, Jamshedpur');
  eduItem('Senior Secondary – 12th Grade (CBSE)', '2021 – 2023', 'DBMS Kadma High School, Jamshedpur');
  eduItem('Secondary – 10th Grade (CBSE)', '2020 – 2021', 'DBMS Kadma High School, Jamshedpur');

  // 3. TECHNICAL SKILLS
  sectionHeading('TECHNICAL SKILLS');

  function skillItem(label, text) {
    doc.font('Helvetica-Bold').fontSize(9.5).fillColor('#000000').text(label + ': ', { continued: true });
    doc.font('Helvetica').fontSize(9.5).fillColor('#111111').text(text, { lineGap: 1.5 });
  }

  skillItem('Languages', 'Java, JavaScript, Python, C++, C');
  skillItem('Frontend', 'React.js, React Native (learning), JavaScript (ES6+), HTML5, CSS3, Responsive Web Design');
  skillItem('Backend', 'Node.js, Socket.IO (learning), RESTful API Design & Integration, MVC Architecture');
  skillItem('Database & Storage', 'PostgreSQL, MySQL');
  skillItem('Frameworks & Tools', 'Spring Framework (Spring Boot – learning), Git, GitHub, Postman, VS Code');
  skillItem('Core Concepts', 'OOP, Data Structures, Debugging & API Testing, Agile Development');

  // 4. EXPERIENCE
  sectionHeading('EXPERIENCE');

  function expHeader(role, company, meta) {
    const y = doc.y;
    doc.font('Helvetica-Bold').fontSize(10).fillColor('#000000').text(`${role} | ${company}`, leftMargin, y);
    doc.font('Helvetica').fontSize(9.5).fillColor('#333333').text(meta, leftMargin, y, { align: 'right', width: pageWidth });
  }

  function bullet(text) {
    doc
      .font('Helvetica')
      .fontSize(9.5)
      .fillColor('#111111')
      .text('• ', leftMargin + 10, doc.y, { continued: true, lineGap: 2 })
      .text(text, { align: 'justify', indent: 0, lineGap: 2 });
  }

  expHeader('Web Development Intern', 'Tata Steel Ltd.', '1 Month | Jamshedpur');
  doc.moveDown(0.2);
  bullet('Built an internal Resume Builder using ASP.NET and HTML/CSS, enabling staff to generate structured, downloadable resumes via a dynamic 5-section web form.');
  bullet('Shipped a production-ready tool within a 1-month timeline, adopted by HR staff for ongoing documentation.');

  doc.moveDown(0.4);
  expHeader('Server-Side Development Intern', 'Stack Infotech Pvt. Ltd.', '3 Months | Jamshedpur');
  doc.moveDown(0.2);
  bullet('Integrated RESTful APIs to fetch and display dynamic data on web interfaces, improving data accessibility for end users.');
  bullet('Tested and debugged API integrations using Postman and browser developer tools to ensure reliable data flow between frontend and backend.');
  bullet('Collaborated with senior developers on real-world tasks, gaining hands-on experience in professional software workflows and Git version control.');

  // 5. PROJECTS
  sectionHeading('PROJECTS');

  function projectHeader(title) {
    doc.font('Helvetica-Bold').fontSize(10).fillColor('#000000').text(title);
  }

  projectHeader('E-Commerce Website');
  doc.moveDown(0.2);
  bullet('Built a fully functional full-stack e-commerce web application using HTML, CSS, JavaScript, and MySQL.');
  bullet('Implemented RESTful API calls to handle product listing, user authentication, and order management workflows.');
  bullet('Used Fetch API to connect the frontend with backend endpoints, enabling dynamic content loading without page refreshes.');
  bullet('Applied clean MVC-style project structure, improving code maintainability and scalability.');

  doc.moveDown(0.4);
  projectHeader('Karyamitra – Service Provider Platform (Backend Update)');
  doc.moveDown(0.2);
  bullet('Worked on a backend update for Karyamitra, a service-provider platform connecting users with local service professionals.');
  bullet('Designed and implemented RESTful APIs to support core platform features and improve backend data handling.');
  bullet('Collaborated with the existing codebase to integrate new endpoints while maintaining consistency with established architecture.');

  doc.end();

  return new Promise((resolve, reject) => {
    stream.on('finish', resolve);
    stream.on('error', reject);
  });
}

const clientPDF = path.join(__dirname, 'client', 'public', 'Honey_Kumari_CV.pdf');
const serverPDF = path.join(__dirname, 'server', 'assets', 'Honey_Kumari_CV.pdf');

Promise.all([
  generatePDF(clientPDF),
  generatePDF(serverPDF)
]).then(() => {
  console.log('PDF files generated successfully!');
}).catch((err) => {
  console.error('Error generating PDFs:', err);
});
