# 🚀 ImpactCV - Create Resumes That Make an Impact

[![GitHub Stars](https://img.shields.io/github/stars/asfand-dev/impact-cv?style=social)](https://github.com/asfand-dev/impact-cv)
[![GitHub Forks](https://img.shields.io/github/forks/asfand-dev/impact-cv?style=social)](https://github.com/asfand-dev/impact-cv)
[![License](https://img.shields.io/github/license/asfand-dev/impact-cv)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-brightgreen.svg)](https://github.com/asfand-dev/impact-cv/pulls)
[![Built with Vite](https://img.shields.io/badge/Built%20with-Vite-blueviolet)](https://vitejs.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-%23007ACC.svg?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-%2338B2AC.svg?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Radix UI](https://img.shields.io/badge/Radix_UI-%23161618.svg?style=flat&logoColor=%23fff)](https://www.radix-ui.com/)

## ✨ Overview

**ImpactCV** is a modern, intuitive, and user-friendly web application designed to empower you to create professional and **impactful** resumes (CVs) with ease. Whether you're just starting your career or looking to make a change, ImpactCV provides the tools and flexibility you need to showcase your skills and experience effectively.

Forget tedious formatting and generic templates. ImpactCV offers a streamlined experience with real-time previews, customizable themes, and even AI-powered job tailoring to optimize your resume for both recruiters and Applicant Tracking Systems (ATS) to help you easily land your dream role.

## ⚙️ Key Features

### Intuitive Interface

-   **Real-Time Preview:** Instantly visualize changes.
-   **Drag-and-Drop Sections:** Customize your CV layout effortlessly.
-   **Editable Section Titles:** Personalize headings to match your unique style.

### Comprehensive Configuration

-   **Basic Information:** Name, role, location, contact details, and social links.
-   **Professional Summary:** Craft compelling professional summaries.
-   **Experience & Education:** Clearly structure professional history and educational background.
-   **Skills & Projects:** Highlight expertise and showcase impactful projects.

### AI-Powered Job Tailoring 🤖

-   **"Tailor for Job Description" Button:** Let OpenAI automatically optimize your CV content based on specific job roles, ensuring maximum compatibility with ATS and increased recruiter visibility.

### Beautiful & Distinctive Themes 🎨

-   Choose from **20 unique themes** including Basic, Casual, Professional, Creative, Modern, Business, and many more, each transforming your CV into a visually compelling document.

### Photo Integration 📸

-   Optional profile photo upload feature dynamically adjusts your CV layout.

### Import & Export Options 📁

-   **JSON Import/Export:** Quickly import or export your CV configuration.
-   **HTML Export:** Self-contained HTML file ready to host or share.
-   **PDF Export:** Simple, high-quality print or PDF generation.

## 🚀 Technology Stack

-   **Frontend:** React, TypeScript, Vite, Tailwind CSS
-   **Components:** Radix UI, Lucide Icons
-   **Utilities:** Date-fns, UUID, clsx, Sonner
-   **AI Integration:** OpenAI API

## 🏗️ Architecture

ImpactCV follows a modern frontend architecture, primarily built with React components. The application is structured with:

* **Left Sidebar Panel:** Houses all the configuration options, organized into logical sections using Radix UI Accordion components for a clean and collapsible interface. Each section contains React forms managed by React Hook Form for efficient data handling.
* **Main Preview Area:** A dedicated React component that dynamically renders the CV based on the configuration state. It updates in real-time as users modify the input fields in the sidebar.
* **Theming System:** Implemented using `next-themes`, allowing users to switch between different visual themes. Each theme likely defines a set of CSS variables or Tailwind CSS configurations.
* **State Management:** React's built-in state management (likely using `useState` and `useContext` or potentially a more advanced state management solution if the application grows significantly) is used to manage the CV data and UI state.
* **AI Integration:** The "Tailor for Job Description" feature interacts with the OpenAI API through an asynchronous function call. The API response (in JSON format) is then used to update the application's state, effectively modifying the CV content.
* **Import/Export Logic:** Functions are implemented to handle the reading and writing of CV data in JSON format. The HTML export functionality likely involves dynamically generating HTML markup based on the current CV data and embedding the necessary CSS inline. PDF export leverages the browser's print functionality.

## 🚀 Getting Started

To run ImpactCV locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/asfand-dev/impact-cv.git
    cd impact-cv
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

3.  **Start the development server:**
    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    ```

    This will start the application on a local development server (`http://localhost:3000`).


## 📸 Screenshots

Here are some screenshots showcasing the ImpactCV interface and its features:

<table style="width:100%">
  <tr>
    <td style="text-align:center">
      <img src="./documentation/screenshots/ui-1.png" alt="Main Layout 1" style="border: 1px solid #ddd; border-radius: 5px; padding: 5px; width: 100%;">
      <p style="text-align: center;">Main Layout 1</p>
    </td>
    <td style="text-align:center">
      <img src="./documentation/screenshots/ui-2.png" alt="Main Layout 2" style="border: 1px solid #ddd; border-radius: 5px; padding: 5px; width: 100%;">
      <p style="text-align: center;">Main Layout 2</p>
    </td>
  </tr>
  <tr>
    <td style="text-align:center">
      <img src="./documentation/screenshots/ui-3.png" alt="Main Layout 3" style="border: 1px solid #ddd; border-radius: 5px; padding: 5px; width: 100%;">
      <p style="text-align: center;">Main Layout 3</p>
    </td>
    <td style="text-align:center">
      <img src="./documentation/screenshots/ui-configure-section.png" alt="Configure Sections" style="border: 1px solid #ddd; border-radius: 5px; padding: 5px; width: 100%;">
      <p style="text-align: center;">Configure Sections</p>
    </td>
  </tr>
  <tr>
    <td style="text-align:center">
      <img src="./documentation/screenshots/ui-add-section.png" alt="Add Section" style="border: 1px solid #ddd; border-radius: 5px; padding: 5px; width: 100%;">
      <p style="text-align: center;">Add Section</p>
    </td>
    <td style="text-align:center">
      <img src="./documentation/screenshots/ui-tailor-cv.png" alt="Tailor for Job Description" style="border: 1px solid #ddd; border-radius: 5px; padding: 5px; width: 100%;">
      <p style="text-align: center;">Tailor for Job Description</p>
    </td>
  </tr>
</table>

## 🎨 Supported Themes

<table style="width:100%">
  <tr>
    <td style="text-align:center">
      <img src="./documentation/screenshots/basic.png" style="border: 1px solid #ddd; border-radius: 5px; padding: 5px; width: 100%;">
      <p style="text-align: center;">Basic</p>
    </td>
    <td style="text-align:center">
      <img src="./documentation/screenshots/gradient.png" style="border: 1px solid #ddd; border-radius: 5px; padding: 5px; width: 100%;">
      <p style="text-align: center;">Gradient</p>
    </td>
    <td style="text-align:center">
      <img src="./documentation/screenshots/professional.png" style="border: 1px solid #ddd; border-radius: 5px; padding: 5px; width: 100%;">
      <p style="text-align: center;">Professional</p>
    </td>
  </tr>
  <tr>
    <td style="text-align:center">
      <img src="./documentation/screenshots/creative.png" style="border: 1px solid #ddd; border-radius: 5px; padding: 5px; width: 100%;">
      <p style="text-align: center;">Creative</p>
    </td>
    <td style="text-align:center">
      <img src="./documentation/screenshots/artistic.png" style="border: 1px solid #ddd; border-radius: 5px; padding: 5px; width: 100%;">
      <p style="text-align: center;">Artistic</p>
    </td>
    <td style="text-align:center">
      <img src="./documentation/screenshots/business.png" style="border: 1px solid #ddd; border-radius: 5px; padding: 5px; width: 100%;">
      <p style="text-align: center;">Business</p>
    </td>
  </tr>
  <tr>
    <td style="text-align:center">
      <img src="./documentation/screenshots/digital.png" style="border: 1px solid #ddd; border-radius: 5px; padding: 5px; width: 100%;">
      <p style="text-align: center;">Digital</p>
    </td>
    <td style="text-align:center">
      <img src="./documentation/screenshots/elegant.png" style="border: 1px solid #ddd; border-radius: 5px; padding: 5px; width: 100%;">
      <p style="text-align: center;">Elegant</p>
    </td>
    <td style="text-align:center">
      <img src="./documentation/screenshots/technical.png" style="border: 1px solid #ddd; border-radius: 5px; padding: 5px; width: 100%;">
      <p style="text-align: center;">Technical</p>
    </td>
  </tr>
  <tr>
    <td style="text-align:center">
      <img src="./documentation/screenshots/vibrant.png" style="border: 1px solid #ddd; border-radius: 5px; padding: 5px; width: 100%;">
      <p style="text-align: center;">Vibrant</p>
    </td>
    <td style="text-align:center">
      <img src="./documentation/screenshots/nordic.png" style="border: 1px solid #ddd; border-radius: 5px; padding: 5px; width: 100%;">
      <p style="text-align: center;">Nordic</p>
    </td>
    <td style="text-align:center">
      <img src="./documentation/screenshots/blueprint.png" style="border: 1px solid #ddd; border-radius: 5px; padding: 5px; width: 100%;">
      <p style="text-align: center;">Blueprint</p>
    </td>
  </tr>
  <tr>
    <td style="text-align:center">
      <img src="./documentation/screenshots/casual.png" style="border: 1px solid #ddd; border-radius: 5px; padding: 5px; width: 100%;">
      <p style="text-align: center;">Casual</p>
    </td>
    <td style="text-align:center">
      <img src="./documentation/screenshots/retro.png" style="border: 1px solid #ddd; border-radius: 5px; padding: 5px; width: 100%;">
      <p style="text-align: center;">Retro</p>
    </td>
    <td style="text-align:center">
      <img src="./documentation/screenshots/academic.png" style="border: 1px solid #ddd; border-radius: 5px; padding: 5px; width: 100%;">
      <p style="text-align: center;">Academic</p>
    </td>
  </tr>
  <tr>
    <td style="text-align:center">
      <img src="./documentation/screenshots/corporate.png" style="border: 1px solid #ddd; border-radius: 5px; padding: 5px; width: 100%;">
      <p style="text-align: center;">Corporate</p>
    </td>
    <td style="text-align:center">
      <img src="./documentation/screenshots/modern.png" style="border: 1px solid #ddd; border-radius: 5px; padding: 5px; width: 100%;">
      <p style="text-align: center;">Modern</p>
    </td>
    <td style="text-align:center">
      <img src="./documentation/screenshots/classic.png" style="border: 1px solid #ddd; border-radius: 5px; padding: 5px; width: 100%;">
      <p style="text-align: center;">Classic</p>
    </td>
  </tr>
  <tr>
    <td style="text-align:center">
      <img src="./documentation/screenshots/minimal.png" style="border: 1px solid #ddd; border-radius: 5px; padding: 5px; width: 100%;">
      <p style="text-align: center;">Minimal</p>
    </td>
    <td style="text-align:center">
      <img src="./documentation/screenshots/futuristic.png" style="border: 1px solid #ddd; border-radius: 5px; padding: 5px; width: 100%;">
      <p style="text-align: center;">Futuristic</p>
    </td>
    <td style="text-align:center">
      <img src="./documentation/screenshots/without-photo-1.png" style="border: 1px solid #ddd; border-radius: 5px; padding: 5px; width: 100%;">
      <p style="text-align: center;">Without Photo</p>
    </td>
  </tr>
</table>

## ✍️ Usage

1.  **Navigate the Left Sidebar:** Use the clearly separated sections in the left sidebar to input your information.
2.  **Real-time Preview:** Observe the main preview area to see your CV take shape as you type.
3.  **Configure Sections:** Customize section titles, toggle visibility, and reorder sections using the "Configure Sections" panel.
4.  **Upload Photo (Optional):** Add a professional touch by uploading your profile photo.
5.  **Choose a Theme:** Select from a variety of visually appealing themes to match your style.
6.  **Tailor for Job:** Utilize the AI-powered job tailoring feature to optimize your CV for specific job applications.
7.  **Import/Export:** Import existing configurations or export your current CV data as JSON.
8.  **Download:** Export your finalized CV as an HTML file or generate a PDF for sharing and applying.

## 💡 Contributing

We welcome contributions from the community! If you'd like to contribute to ImpactCV, please follow these guidelines:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Make your changes and ensure proper testing.
4.  Submit a pull request with a clear description of your changes.

Please adhere to the project's coding standards and best practices.

## 💬 Support

If you encounter any issues or have suggestions for improvement, please feel free to:

* Open an issue on GitHub: [https://github.com/asfand-dev/impact-cv/issues](https://github.com/asfand-dev/impact-cv/issues)
* Reach out via asfand.dev@gmail.com

## 📄 License

This project is licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute it as per the terms of the license.

