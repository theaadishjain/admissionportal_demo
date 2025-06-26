# College Admissions Portal (Express.js, No Database)

A beautiful, responsive admissions web application built with Express.js. Users can fill out a student enrollment form and receive a personalized confirmation message—no database required!

## Features
- Responsive, modern admission form (HTML/CSS)
- Collects: Full Name, Email, Phone, Course Selection
- Express.js backend with in-memory storage
- Personalized confirmation page after submission
- Subtle animations, focus/hover states, and mobile-friendly design

## File Structure
```
server.js              # Express server setup and route logic
public/
  admission.html       # Admission form (frontend)
  style.css            # Styling for form and confirmation page
README.md              # Instructions
```

## Getting Started

1. **Clone the repository**
   ```
   git clone <repo-url>
   cd express_project
   ```

2. **Install dependencies**
   ```
   npm install express body-parser
   ```

3. **Run the server**
   ```
   node server.js
   ```

4. **Open in your browser**
   - Visit [http://localhost:3000/admission](http://localhost:3000/admission)

## Notes
- All submissions are stored in-memory (lost on server restart).
- To apply again, use the "Apply for another" link on the confirmation page.

## Preview
Add a screenshot as `public/preview.png` (optional). 