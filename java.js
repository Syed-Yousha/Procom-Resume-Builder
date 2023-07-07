const form = document.querySelector('#resume-form');
const output = document.querySelector('#resume-output');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const phone = document.querySelector('#phone').value;
    const address = document.querySelector('#address').value;
    const summary = document.querySelector('#summary').value;
    const education = document.querySelector('#education').value;
    const experience = document.querySelector('#experience').value;

    const resume = `
        <h2>${name}</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Address:</strong> ${address}</p>
        <hr>
        <h3>Summary</h3>
        <p>${summary}</p>
        <hr>
        <h3>Education</h3>
        <p>${education}</p>
        <hr>
        <h3>Experience</h3>
        <p>${experience}</p>
    `;
    output.innerHTML = resume;
});