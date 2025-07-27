// emailTemplates.js

const emails = [
  { name: "Bipin Singh", email: "bipin@example.com", topic: "System Design" },
  { name: "John Doe", email: "john@example.com", topic: "Backend Interview" },
  { name: "Jane Smith", email: "jane@example.com", topic: "QA Automation" },
  { name: "Bipin Singh", email: "bipin.stu2909@gmail.com", topic: "SDE" },
];

function getEmailTemplate(user) {
  return {
    subject: `Hey ${user.name}, here's your update on ${user.topic}`,
    html: `
      <h2>Hello ${user.name},</h2>
      <p>Hope you're doing great!</p>
      <p>Here's your hourly curated content on <strong>${user.topic}</strong>.</p>
      <p>Stay consistent. You're gonna kill it 💪</p>
      <br/>
      <small>This is an automated mail. Peace ✌️</small>
    `
  };
}

module.exports = { emails, getEmailTemplate };
