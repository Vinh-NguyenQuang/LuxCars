# LuxCars

Create a luxury and sports cars dealership website.

## Features Implemented
1. **Showcase Inventory**  
   Display luxury, vintage, and exotic cars with high-quality images and details.
2. **Vehicle Sourcing**  
   Offer personalized sourcing for rare and high-demand vehicles globally.
3. **Client Consultation**  
   Provide tailored advice based on the client's taste, needs, and lifestyle.
4. **Import/Export Support**  
   Assist with international vehicle trading, shipping, and compliance.
5. **Registration Guidance**  
   Help clients with local registration and ownership processes.
6. **Collector & Investor Network**  
   Connect with car enthusiasts, collectors, and investors worldwide.
7. **Trade-In & Consignment**  
   Allow clients to sell or trade their vehicles through the platform.
8. **News & Updates (Optional Blog)**  
   Share updates, market trends, and spotlight rare vehicles.

## Navigation Bar Enhancements
- **Log In and Sign Up Buttons**: Added "Log In" and "Sign Up" buttons to the navigation bar on both the home page (`index.html`) and the inventory page (`inventory.html`). These buttons link to the new authentication pages, providing users with easy access to account management.

## New Authentication Pages
- **Login Page (`login.html`)**: A clean, modern login form that allows users to enter their email and password. The page includes a link to the signup page for new users.
- **Signup Page (`signup.html`)**: A user-friendly signup form that collects the user's full name, email, password, and password confirmation. The page includes a link back to the login page for existing users.
- **CSS Implementation (Authentication Pages Only)**: The styles for the login and signup pages are embedded directly within the HTML files using a `<style>` block. This approach was chosen for these pages only, to:
  - Isolate and scope styles unique to authentication pages
  - Allow rapid prototyping and easy adjustments
  - Reduce HTTP requests for these small, self-contained pages
  - Prevent unintended style conflicts with the main site

## Future Considerations
As the project grows, consider refactoring the embedded styles into a separate CSS file (e.g., `auth.css`) to maintain a consistent styling approach across the entire site.

## Getting Started
1. Clone the repository.
2. Open `index.html` in your browser to view the home page.
3. Navigate to `inventory.html` to explore the car inventory.
4. Use the "Log In" and "Sign Up" buttons to access the authentication pages.

## Technologies Used
- HTML5
- CSS3
- JavaScript
- Font Awesome for icons
