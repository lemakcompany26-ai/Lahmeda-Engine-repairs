
# LAHMEDA Mechanical Engineering

**Fix Today. Power Tomorrow.**

A modern, responsive business website for LAHMEDA Mechanical Engineering, providing mechanical, electrical, electronics, generator, motorcycle and household appliance repair services.

## About the Project

LAHMEDA Mechanical Engineering is a professional engineering and repair services company. This website provides customers with information about available services, company details, and a convenient way to request repairs and quotations.

The website is designed with a modern dark navy and yellow visual identity, responsive layouts and WhatsApp integration.

## Features

### 1. Home Page
- Professional hero section.
- Company branding and tagline.
- Service highlights.
- Direct WhatsApp contact.
- Book a service button.

### 2. Services
The website showcases the following services:

- Generator repair and maintenance.
- Motorcycle repairs.
- Electronics repair.
- Home appliance repairs.
- Electrical wiring and installation.
- General mechanical equipment maintenance.

### 3. About Us
- Company introduction.
- Business objectives.
- Engineering services overview.

### 4. Why Choose Us
- Reliable workmanship.
- Skilled technical services.
- Efficient response.
- Affordable service quotations.

### 5. Project Gallery
- Engineering project images.
- Mechanical repair illustrations.
- Electrical installation images.

### 6. Contact and Quote Request
- Customer name.
- Phone number.
- Service selection.
- Problem description.
- WhatsApp quote request integration.

### 7. Responsive Design
- Desktop support.
- Tablet support.
- Android and iPhone browser support.
- Mobile navigation menu.

## Technology Stack

| Technology | Purpose |
|---|---|
| React.js | Frontend framework |
| JavaScript | Application functionality |
| CSS3 | Styling and responsive layouts |
| Lucide React | Icons |
| Vite | Development and build tool |
| WhatsApp API | Customer enquiries |
| Vercel | Website hosting |

## Project Structure

```text
lahmeda-mechanical/
│
├── public/
│   └── favicon.ico
│
├── src/
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
│
├── index.html
├── package.json
├── package-lock.json
└── README.md
```

## Installation and Setup

### Requirements

- Node.js 18 or later.
- npm.
- Visual Studio Code.

### Step 1: Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### Step 2: Enter the project folder

```bash
cd lahmeda-mechanical
```

### Step 3: Install dependencies

```bash
npm install
```

Install Lucide React:

```bash
npm install lucide-react
```

### Step 4: Start the development server

```bash
npm run dev
```

Open the local URL provided by Vite, usually:

```text
http://localhost:5173
```

## Business Configuration

Open `src/App.jsx` and update the BUSINESS configuration:

```javascript
const BUSINESS = {
  name: "LAHMEDA",
  phone: "2349064471571",
  displayPhone: "+234 9064471571",
  email: "rasak2916@gmail.com",
  location: "No 26 Ayepe Zone d Ayegbami Off new ife road oyo state, Nigeria",
};
```

Replace the sample information with the company's actual contact details.

## Build for Production

Run:

```bash
npm run build
```

Vite generates the production website inside:

```text
dist/
```

Preview the production build:

```bash
npm run preview
```

## Deployment

### Deploy with Vercel

1. Push the project to GitHub.
2. Sign in to Vercel.
3. Import the GitHub repository.
4. Select Vite as the framework.
5. Set the build command to `npm run build`.
6. Set the output directory to `dist`.
7. Deploy the project.
8. Connect the company's custom domain.

## Brand Identity

**Company:** LAHMEDA Mechanical Engineering

**Tagline:** Fix Today. Power Tomorrow.

**Primary Colours:**
- Navy Blue: `#071B35`
- Yellow: `#FFC400`
- White: `#FFFFFF`
- Orange: `#F28C00`

## Important Notes

- Update all placeholder contact information before deployment.
- Replace demonstration gallery images with genuine company project photographs.
- Ensure all external images are properly licensed.
- Test WhatsApp links on mobile devices.
- Confirm the company's actual service coverage and business address.
- Use HTTPS for the production website.

## Future Improvements

- Online appointment booking.
- Customer service dashboard.
- Online repair quotation management.
- Customer testimonials.
- Service request tracking.
- Email notifications.
- Admin content management system.
- Customer reviews and ratings.

## License

Copyright © 2026 LAHMEDA Mechanical Engineering.

All rights reserved.

---

**LAHMEDA Mechanical Engineering**

Professional Mechanical, Electrical and Electronics Repair Services.

**Fix Today. Power Tomorrow.**

