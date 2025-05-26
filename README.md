1. Design Choices

Responsive Grid Layout: The gallery uses a CSS Grid layout to ensure images adapt to different screen sizes, giving a clean and modern look across devices.

Modal Viewer: Clicking an image opens it in a full-screen modal. This creates a focused viewing experience without navigating away from the page.

Hover Effects: A slight zoom effect on hover makes the gallery feel interactive and responsive.

Separation of Concerns: HTML, CSS, and JavaScript are kept in separate files for clarity and maintainability.


2. Tools & Technologies Used

HTML5: For the structure of the web page.

CSS3: For styling the layout, responsiveness, and modal effects.

JavaScript (Vanilla JS): To dynamically load images and handle interactivity such as the modal opening and closing.

Local Image Support: The gallery was designed to allow images to be loaded from a local folder (images/), making it easy to manage offline or custom content.


3. Challenges Faced

Modal Responsiveness: Ensuring the modal image scales correctly across screen sizes required careful use of max-width and max-height.

Image Loading Errors: If the file names or paths are incorrect (especially with local images), the gallery won’t display them. To prevent this, I emphasized correct folder structure and file extensions.

Browser File Access Restrictions: Some browsers block local JavaScript-based interactions (like loading images) when you open the HTML file directly. Running a local server (like python -m http.server) solved this issue
