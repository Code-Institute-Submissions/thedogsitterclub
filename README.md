# The Dogsitter Club

The Dogsitter club is a platform where dog owners can share informations about themselves and request dogsitters to dogsit their dogs. Users are able to leave to reviews on other users' profiles once they have at least one booking. 

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

1. As a **user** I can **fill in a booking request form and target it to a specific user** so that **they can receive the booking request**.
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

- **Profile page** - Viewing another user's profile page, the user will be able to see the same information as on the profiles page, along with any reviews they might have received. From the profile page you'll also be able to request a booking. Viewing their own profile page, the user will also see button with a link to edit their profile information and image.

- **Bookings page** - Here the user will see a clear overview of their bookings, and they'll be able to edit or cancel their booking.

- **Alerts** - I implemented flexible alerts using the Bootstrap toolkit to provide contextual feedback to users whenever they perform an action for which feedback might be appreciated, or when an error occurs. For example, if a user logs in or creates/deletes a booking, or when they try to log in with an empty form field. the appropriate notification will appear.

- **Features to implement** - 

## Testing

### Lighthouse testing

I ran Lighthouse tests on Chrome to check the performance, quality and correctness of this web app. I generated reports for mobile and desktop devices which gave the following results;

## Desktop

## Mobile

### CSS testing

### JavaScript testing

### Python testing


| Function| Test case | Result |                                                          
|---------|-----------|--------|
| Sign up form | Form checks if username exists | Pass
| Sign up form | Form checks if username is valid | Pass
| Sign up form | Form checks if password is valid | Pass
| Sign up form | Form checks if both password fields match | Pass
| Sign up form | User successfully signed up | Pass
| Sign in form | Form checks if username exists | Pass
| Sign in form | Form checks if password is correct | Pass
| Navigation | Nav bar accessible on every page | Pass
| Navigation | Search bar for keyword search | Pass
| Profiles page | Display all profiles | Pass
| Profiles page | Profiles are ordered by date created | Pass
| Profile page | Profile page loads | Pass
| Bookings | Booking form loads | Pass
| Bookings | Booking form validates input fields and dislays alerts | Pass
| Bookings | Booking is sent on submit | Pass
| Reviews | Reviews are available once a booking has been accepted | Pass
| Reviews | Reviews are displayed on profile page | Pass
| Reviews | Review can be edited or deleted by author | Pass
| Logout | User can logout | Pass

# DRF API


## Deployment

### Front end

After creating a React app on gitpod, I set up an initial deployment on Heroku, which is a cloud application platform for developers to build, run and operate their applications.;

1. Log into Heroku.com and select 'Create new app' on user dashboard.
2. Choose a name and closest region and click 'Create app'.
3. Navigate to the “Deploy” tab of my app.
4. In the deployment method section, select 'Connect to GitHub'.
5. Search for my repo and click 'Connect'.
6. I enabled 'Automatic Deploys' so that every push to the main branch will deploy a new version of the app.
8. Click 'Deploy branch' to start the build process.

### Back end

As Heroku is no longer offering multiple free databases to their free tier users, I used a separate free database service called ElephantSQL to host my PostgreSQL database. First I created my ElephantSQL account;

1. Navigate to the ElephantSQL website and click 'Get a managed database today'.
2. Select 'Try now for FREE' in the TINY TURTLE database plan.
3. Select 'Log in with GitHub' and authorize ElephantSQL with my selected GitHub account
4. Create a new team. (I am the team!)

After setting up my account, I created the database;

1. In the top right-hand corner of my account dashboard, click 'Create New Instance'
2. Set up my plan.
3. Select region and data center.
4. Click 'Review'
5. Check details and click 'Create instance'
6. Return to the ElephantSQL dashboard and click on the database instance name for my project.
7. In the URL section, click the copy icon to copy the database URL to my clipboard.

After creating the database and configuring my Gitpod code for Heroku, I was ready to deploy my project. I already had a Heroku account from a previous project, so setting up for deployment was next;

1. Log into Heroku.com and select 'Create new app' on user dashboard.
2. Choose a name and closest region and click 'Create app'.
3. Go to the settings tab of my app.
4. Click 'Reveal Config Vars'.
5. Copy the database URL from ElephantSQL.
6. Add a Config Var called 'DATABASE_URL' and paste my ElephantSQL database URL in as the value, click 'Add'.
7. Add each of my other environment variables except DEVELOPMENT and DB_URL from the env.py file as a config var.

Ready for deployment;

1. Navigate to the “Deploy” tab of my app.
2. In the deployment method section, select 'Connect to GitHub'.
3. Search for my repo and click 'Connect'.
4. I enabled 'Automatic Deploys' so that every push to the main branch will deploy a new version of the app.
5. DEBUG mode set to 'False'.
6. Click 'Deploy branch' to start the build process.

## Credits

### Code

 Thank you to Devspeed Vision who supported me on Slack with various coding issues. 

### Content

- [Balsamiq](https://balsamiq.com) for wireframes.
- [Lucidchart](https://www.lucidchart.com) for entity relationship model.
- [StackOverflow](https://stackoverflow.com) for help with code-related issues.
- [Bootstrap](https://getbootstrap.com) for app layout and components.
- [Bootstrap](https://react-bootstrap.github.io/) for styling.
- [Heroku](https://dashboard.heroku.com/apps) for cloud platform.
- [ElephantSQL](https://www.elephantsql.com/) for hosting the database.
- [Code Institute](https://learn.codeinstitute.net/dashboard) for course material.


### Media

- [Pexels.com](https://www.pexels.com/) for images.
- [Google Fonts](https://fonts.google.com/knowledge) for the 'Roboto' font.
- [Font Awesome](https://fontawesome.com/) for icons.
