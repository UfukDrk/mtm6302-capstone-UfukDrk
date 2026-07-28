# mtm6302-capstone-UfukDrk

Name: Ufuk Doruk  
Student Number: 041176659  
Project Name: APOD Search

## Low-Fidelity Wireframe
This is the low-fidelity wireframe for the project.

![Low-Fidelity Wireframe](docs/Low-Fidelity%20Wireframe.jpeg)

## Assignment 2: Visual Mockup

A high-level visual mockup was created for the Low-Keyframes project. The mockup includes desktop, tablet, and mobile layouts, as well as a style guide for colours, typography, and branding.

[View Visual Mockup PDF](visual-mockup.pdf)

### Design Choices

The design uses a clean and simple layout to make the website easy to understand. The navigation is placed at the top, the main project message is shown clearly in the hero section, and the feature cards highlight the main functions of the website.

### Colour and Font Selection

The colour palette uses strong contrast to make the design clear and readable. Dark colours are used for the header and footer, brighter colours are used for buttons and feature cards, and lighter background colours help the content stand out.

The selected font is simple and readable, which helps keep the website clean and easy to use.

### Layout and Responsiveness Decisions

The mockup includes desktop, tablet, and mobile layouts. The desktop layout uses a wider horizontal design, the tablet layout adjusts the spacing and content size, and the mobile layout stacks the content vertically for easier scrolling on small screens.

### Usability and User Experience

The mockup improves usability by keeping the navigation simple, placing the main button near the top, and organizing the content into clear sections. The responsive layouts make the website easier to use on different screen sizes.

## Assignment 3: APOD Search Prototype Report

For Assignment 3, I updated the prototype to match the APOD Search project requirements. The main application was created using index.html, style.css, and script.js. The layout still follows the original low-fidelity wireframe structure with a header, navigation, hero section, form area, result/preview area, card section, and footer.

The homepage allows users to choose a non-future date and search for NASA’s Astronomy Picture of the Day using the NASA APOD API. The result displays the image, title, date, and explanation. If the APOD is an image, users can click the image to open the high-definition version in a new tab.

I also added favourites functionality using JavaScript and local storage. Users can save an APOD image as a favourite, view saved favourites on the page, and delete favourites. The app uses JavaScript event listeners for form submission, saving favourites, and deleting favourites. No inline event attributes were used.

The design was updated with a space-themed visual style. I used custom CSS for the layout, colours, spacing, responsive design, result cards, form styling, and favourites section. I did not use Bootstrap, Tailwind, or any other CSS framework.

The resources used for this prototype include NASA’s APOD API and space-themed images used for the page visuals. The project uses a system font stack: Arial, Helvetica, sans-serif.

One challenge was changing the original prototype idea into the APOD Search application while keeping the same low-fidelity wireframe structure. Another challenge was adding the required JavaScript features, including Fetch API requests, local storage, favourites, and delete functionality, while keeping the code simple and organized.

## Capstone Project - Part 4 Report

For Part 4, I updated the APOD Search project into a fully functional web application using HTML, CSS, and JavaScript. The application uses one `index.html` file, one `style.css` file, and one `script.js` file.

The page includes a date search form where users can choose a non-future date. When the form is submitted, the app uses the Fetch API to request data from NASA’s Astronomy Picture of the Day API. The result displays the APOD image, title, date, and explanation. When the displayed image is clicked, the high-definition version is shown on the same page.

I also added a favourites section. Users can save APOD images as favourites, view saved favourites on the page, and delete them. The favourites are stored in the browser using localStorage, so they remain available after the page is refreshed.

The design was updated with a space-themed style using custom CSS. I did not use Bootstrap, Tailwind, or any other CSS framework. The layout is responsive and works on desktop, tablet, and mobile screen sizes.

All DOM events are handled with JavaScript event listeners. I did not use inline events. I also used `const` and `let` instead of `var`, and I used the Fetch API instead of XMLHttpRequest or jQuery ajax.

Resources used for this project include NASA’s APOD API, NASA/APOD-related references, and space-themed images used for the visual design. The project uses a system font stack: Arial, Helvetica, sans-serif.

I used AI assistance to help review parts of my code when something displayed incorrectly on the website. I wrote and updated the code myself, then used AI to ask questions about errors, layout issues, and possible fixes.

One challenge was changing the project into a fully functional single-page application while keeping the structure close to the original wireframe. Another challenge was making the favourites system work correctly with localStorage and making sure the page did not refresh when the form was submitted.
