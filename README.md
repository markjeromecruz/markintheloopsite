# Mark in the Loop Website

This repository contains the source code for the "Mark in the Loop" website, a single-page application designed to make complex technology topics, starting with AI, simple and accessible. The site features a dynamic Three.js animated background, responsive design, and interactive content sections.

This project was built with an AI-assisted workflow, demonstrating how to rapidly prototype and build a modern web presence by focusing on high-level direction and leveraging AI for implementation.

## Features

*   **Dynamic Hero Section:** A fullscreen hero section with a captivating Three.js animation.
*   **Interactive Content:**
    *   **Series Cards:** Expandable cards to show related resources for each video series.
    *   **Filterable Resources:** A grid of resources that can be filtered by category.
    *   **Prompt Modals:** Pop-up modals to easily copy and use AI prompts.
*   **Responsive Design:** A mobile-first approach ensures the site looks great on all devices, including a hamburger menu for navigation on smaller screens.
*   **Smooth Scrolling & Animations:** Subtle scroll-based animations and smooth navigation between sections.

## Tech Stack

*   **Frontend:** HTML5, CSS3, JavaScript (ES6+)
*   **3D Graphics:** [Three.js](https://threejs.org/)
*   **Fonts:** Google Fonts (Montserrat & Lato)

## File Structure

*   `index.html`: The main and only HTML file containing the structure, styling, and scripts for the entire website.
*   `MJC LOGO-white.png`: The primary logo file used in the header and hero section.
*   `MJC LOGO-black.png`: The black version of the logo (currently unused).
*   `README.md`: This file.

## Getting Started

To view or work on the website, simply clone the repository and open the `index.html` file in a modern web browser that supports WebGL.

```bash
git clone <repository-url>
cd <repository-directory>
# Open index.html in your browser
```

## How to Customize

All content, styles, and scripts are located within `index.html`.

*   **Content:** To change text or links, find the relevant section (e.g., `#series`, `#resources`, `#about`) and edit the HTML directly.
*   **Styling:** All CSS is located within the `<style>` tags in the `<head>` of the document.
*   **Scripts:** All JavaScript logic, including the Three.js animations and UI interactions, is located within the `<script>` tags at the bottom of the `<body>`. 