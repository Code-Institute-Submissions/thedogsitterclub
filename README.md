# The Dogsitter Club

The Dogsitter club is a platform where dog owners can request dogsitters to dogsit their dogs.

# UX

## User stories

I considered how this software application may be useful to a user before beginning this project. Using agile methodology, I came up with a list of user stories, which I then documented using GitHub projects. I tagged them as either "must have" (meaning that they are features that my app must have) or "could have" (meaning that they would be a nice feature).

### Navigation & Authentication

1. Navigation: As a **user** I can **view a navbar from every page** so that **I can navigate easily between pages**.
2. Routing: As a **user** I can **navigate through pages quickly** so that I can **view content seamlessly without page refresh**.
3. Authentication - Sign up: As a **user** I can **create a new account** so that **I can access all the features for signed up users**.
4. Authentication - Sign in: As a **user** I can **sign in to the app** so that **I can access functionality for logged in users**.
5. Authentication - Logged in status: As a **user** I can **tell if I am logged in or not** so that **I can log in if I need to**.
6. Authentication - Refreshing access tokens: As a **user** I can **maintain my logged-in status until I choose to log out** so that **my user experience is not compromised**.
7. Navigation - Conditional rendering: As a **logged out user** I can **see sign in and sign up options** so that **I can sign in/sign up**.

### The Profiles Page

1. As a **user** I can **view a list of all profiles** so that **I can get a clear overview of options**.
2. As a **user** I can **click on any profile** so that **I can inspect their profile and information**.
3. As a **user** my own profile won’t be visible in the profiles page. 

### The Profile Page

1. As a **user** I can **view individual profiles** so that **I can learn more about them**.
2. As a **user** I can **make a booking request to the profile owner** so that **they can choose to accept or decline the request**.
3. As a **user** I can **view my own profile page** so that **I can see what it looks like**.
4. As a **user** I can **edit my profile** so that **I can change my profile picture and information**.
5. As a **user** I can **update my username and password** so that **I can my display name and keep my profile secure**.

### The Bookings Page

1. As a **user** I can *fill in a booking request form and target it to a specific user* so that **they can receive the booking request**.
2. As a **user** I can **have a clear oversight of my bookings** so that **I can check their status and dates**. 
3. As a **user** I can **cancel my booking request** so that the **booking will be cancelled if it's no longer required**.

### The Reviews Page

1. As a **user** I can **view other users’ reviews on their profile pages** so that **I can see how reliable they are**.
2. As a **user** I can **view my reviews on my profile page** so that **I have a clear overview of how I’m doing**.
3. As a **user** I can **write reviews of users once they have accepted my request** so that **I can give them feedback**.
6. As a **user** I can **edit reviews that I’m the author of** so that **I can fix or update my existing review**.
7. As a **user** I can **delete reviews of which I’m the author** so that **I can control removal of my reviews from the application**.

### Admin

1. As a **site admin** I can **have a clear overview of all users registered to the site along with their account information**.
2. As a **site admin** I can **delete all users' blog posts**.
3. As a **site admin** I can **delete user accounts**.

## Design

### General, colour, font

This app was built and styled using React Bootstrap. The colour scheme was inspired by an image which I like which matched the type of style i wanted for this project. I kept the design fairly straightforward, emphasizing usability and functionality. I used 'Roboto' as the main font and 'Sans-Serif' as a backup in case the primary font is unable to load.

### Wireframes

I created a low-fidelity wireframe using Balsamiq to help me design my app. I created a mock-up of each page;

**Home page**

**Login/register page**

**Profiles page**

**Profile page**

**Booking page**

## Entity relationship Model

I added a graphical representation in the form of an entity-relationship model to depict the relationship between entities within my models. I used Lucidchart to design it.

## Features

I set to create a simple app that anyone who has a dog can engage with, providing an easy way for people in the dog community to have access to dogsitters. A simple user to user booking system is implemented, and for interactivaty and validity, users are able to leave reviews on bookings. Users are able to update their profile and profile image, keeping the profiles list up to date.

- **Nav bar** - My app has a responsive nav bar which allows the user to seamlesly navigate between pages. The nav bar will show appropriate navigation options depending on whether the user is authenticated. It also includes the app logo, which links the user back to the landing page from any page. Going by Bootstrap's 'mobile first' approach, the navbar menu automatically renders as collapsed on smaller screen sizes, and can be toggled by a hamburger button.

- **Login / registration** - The login/registration forms are presented on the landing page. A first-time user will be required to register before they can to use the app. To register, a user just needs to provide a username, password and password confirmation. Once registered, they can then use their username to log in. A user cannot log in or register if they leave a field empty or enter invalid data.

- **Profiles page** - The profiles page features a list of all profiles registered with the app. Each profile is contained in a card and includes all of that profile's information. Each profile card has a button that will link to that profile's page, and also a button to request to book. Profiles are ordered so that the last created or profile will appear on the top of the list. 

- **Profile page** - On the the profile page, you can see the same information as on the profiles page, along with any reviews that user might have received. From the profile page you'll also be able to request a booking. 