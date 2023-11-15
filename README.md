# Jobly React Application

Jobly is a React-based frontend application that interacts with the Jobly backend, providing a platform for users to explore companies and job listings. The backend is built on Express and can be found in the [express-jobly repository](https://github.com/yourusername/express-jobly).

## Setup
1. Clone the repository.
2. Set up the Jobly backend using the provided `jobly.sql` file.
3. Create a new React project.
4. Start the backend (default port: 3001) and frontend (default port: 3000).

## Design Component Hierarchy
- App
  - NavBar
  - Routes
    - Home
    - CompanyList
      - CompanyCard
    - CompanyDetail
    - JobList
    - LoginForm
    - SignUpForm
    - ProfileForm

## API Helper
The `JoblyApi` class in `api.js` centralizes API calls, providing helper methods for frontend components to interact with the backend.

## Routes
- `/`: Homepage
- `/companies`: List all companies
- `/companies/:handle`: View details of a company
- `/jobs`: List all jobs
- `/login`: Login/signup
- `/signup`: Signup form
- `/profile`: Edit profile page

## Companies & Company Detail
Components for showing details on a company, listing all companies, and displaying simple info about a company on the list.

## Jobs
Components for listing all jobs and displaying information about a single job. The "apply" button functionality will be added later.

## Current User
User authentication features for logging in, signing up, and logging out. The homepage displays different messages based on the user's authentication status.

## Using localStorage and Protecting Routes
User authentication token is stored in localStorage. Certain views are protected, and users need to be logged in to access companies, jobs, or company details.

## Profile Page
Users can edit their profiles. Changes made to the profile are reflected throughout the app.

## Job Applications
Users can apply for jobs, and the app tracks whether a user has already applied to a particular job.

Feel free to add additional sections or customize the content based on your specific implementation details.
