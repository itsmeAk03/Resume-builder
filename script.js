// script.js
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('resume-form');
    const previewContainer = document.getElementById('resume-preview');
    const downloadButton = document.getElementById('download-resume');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const formData = new FormData(form);
      const name = formData.get('name');
      const email = formData.get('email');
      const title = formData.get('title');
      const experience = formData.get('experience');
      const education = formData.get('education');
      const skills = formData.get('skills');
      const template = formData.get('template');
  
      generateResume(name, email, title, experience, education, skills, template);
    });
    downloadButton.addEventListener('click', function() {
        const resumeContent = previewContainer.innerHTML;
        const blob = new Blob([resumeContent], { type: 'text/html' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'resume.html';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    });
    // downloadButton.addEventListener('click', function() {
    //     const resumeContent = previewContainer.innerHTML;

    //     // Create a new jsPDF instance
    //     const pdf = new jsPDF();

    //     // Add HTML content to PDF
    //     pdf.fromHTML(resumeContent, 15, 15);

    //     // Download the PDF file
    //     pdf.save('resume.pdf');
    // });
  
    function generateResume(name, email, title, experience, education, skills, template) {
      previewContainer.innerHTML = '';
  
      // Create a new div element for the resume
      const resumeDiv = document.createElement('div');
      resumeDiv.classList.add('resume');
  
      // Add content to the resume based on the selected template
      if (template === 'template1') {
        resumeDiv.innerHTML = `
          <h2>${name}</h2>
          <p>${title}</p>
          <p>${email}</p>
          <h3>Experience</h3>
          <p>${experience}</p>
          <h3>Education</h3>
          <p>${education}</p>
          <h3>Skills</h3>
          <p>${skills}</p>
        `;
      } else if (template === 'template2') {
        // Add code for template2
        resumeDiv.innerHTML = `
        <div class="header">
          <h1>${name}</h1>
          <p>${title}</p>
          <p>${email}</p>
        </div>
        <div class="section">
          <h2>Experience</h2>
          <p>${experience}</p>
        </div>
        <div class="section">
          <h2>Education</h2>
          <p>${education}</p>
        </div>
        <div class="section">
          <h2>Skills</h2>
          <p>${skills}</p>
        </div>
      `;
      } else if (template === 'template3') {
        // Add code for template3
        resumeDiv.innerHTML = `
        <div class="left-column">
          <h2>${name}</h2>
          <p>${title}</p>
          <p>${email}</p>
        </div>
        <div class="right-column">
          <div class="section">
            <h3>Experience</h3>
            <p>${experience}</p>
          </div>
          <div class="section">
            <h3>Education</h3>
            <p>${education}</p>
          </div>
          <div class="section">
            <h3>Skills</h3>
            <p>${skills}</p>
          </div>
        </div>
      `;
      }
  
      previewContainer.appendChild(resumeDiv);
    }
  });
  