# Family Tree

## _Share your memories...for Generations._

Family Tree allows family members to safely share, via the internet and cloud storage, digitalized memories (photos, texts, small videos) with other family members for generations to come, in a easy to use interface.

## General Information

This is the application diagram.

![App Diagram](/public/mainpage.png "Application Diagram")

## Technologies Used

- NEXT JS
- HTML/JSX/TAILWIND/JAVASCRIPT
- POSTEGRESQL/PRISMA
- VERCEL
- GITHUB/GITHUB ACTIONS

## Setup

To run the application locally, you must access the repository on GitHub and clone it to your computer.

After, access the main directory on the terminal

```sh
npm install
run npm run dev
```

Open <http://localhost:3000> to view it in your browser.

For the app to run properly, the .env must be created on the root folder of the app with the following variables:

> DATABASE_URL
> SHADOW_DATABASE_URL
> GITHUB_ID
> GITHUB_SECRET
> NEXTAUTH_URL=http://localhost:3001/api/auth
> NEXTAUTH_SECRET
> CLOUDINARY_CLOUD_NAME
> CLOUDINARY_API_KEY
> CLOUDINARY_API_SECRET
> SERVER_PATH = http://localhost:3001/

*** The variables will be sent through a message on Slack.**

Notice that the NEXTAUTH_URL annd the SERVER_PATH are configured to the port 3000. If the app is open on another door at your local system, the variables must be updated accordingly.

The page will reload when you make changes.

### Important info

 1) From November 28 on, many HEROKU products, including the Heroku PostgreSQL db service, will become paid. Any problem due to this service change cannot be foreseen and, in case you have any problem, let me know and I will get in touch with them and fix it as soon as possible.

 2) If the OAuth login fails with the message "try signing in with a different account", run:

 ```sh
heroku pg:killall postgresql-clean-41943
```

This will kill all active connections and allow the user to enter the website.

3) Due to last minute add, some fields on the profile page are not fully editable (lacks button to db connection). The UI, DB and Prisma Schema are ready, though. To test the connection between the editable forms with and the DB, one can run ```sh run npx prisma studio```. Access the studio link provided on the terminal and click on the User table. Click over the available user row (you) and add the About field text. Click outside the row to keep the text and the green button "Save" will be enabled. Do the same with the Phone or Name. After, click the mentioned Save button. The profile page will have its data updated accordingly.  

## Application diagram

![App Diagram](/public/diagram.png "Application Diagram")

## Using the application

Click on the top right button "Access". Log in using you GitHub credentials (API / Authentication).

After loggin in, the Memories button will be shown on the navigation bar (Authorization).

On the Memories page, you can see the photos that are stored in Cloudinary (API).

In the bottom of the page there is a Load More button that will load another set of images (Pagination).

The profile page and loggout button can be accessed on the top right side of the page.

The profile page is created with the data obtained from the OAuth Authentication and saved on the PostgreSQL database. The DB is managed with PRISMA OEM.

## Database

The Database (DB) used is PostgreSQL and managed with PRISMA ORM.

The Prisma DB schema is located on the schema.prisma inside the Prisma folder, from the application root directory.

To access Prisma Studio tool and visualize the data on the browser, run:

```sh
npm run prisma studio
```

After changing the DB schema, it is necessary to update the Database by running:

```sh
npm run prisma db push
```

![Database Diagram](/public/db_diagram.png "Database Diagram")

![Next-Auth Database Diagram](/public/nextauth_dbdiagram.png "Next-Auth Database Diagram")

### User

The User model is used to save user information.

Considering the user first sign in with OAuth, their email address is automatically inserted using the one from their OAuth profile. This is useful, for the user be abble to have access to their account and service, in case they dont have more access to the OAuth provider.

The user is automatically created in the database after first sign in.

Additional fields are ID (connected to the Session id and Session's userId), image for future avatar picture, accounts and albums.

### Album

The album model is used to save an specific user album. It has an title, the content itself, which will be saved on the database as an url string from the Cloudinary service, the date of publishing and the authorId. One user can have many albums.

### Account

It contains information about OAuth accounts associated with a User. It will usually contain access_token, id_token and other OAuth specific data. Theoretically, according to the Next Auth documentation, "a single User can have multiple Accounts, but each Account can only have one User.

Linking Accounts to Users happen automatically, only when they have the same e-mail address, and the user is currently signed in."

### Session

The Session model is used for database sessions. "It is not used if JSON Web Tokens are enabled. Keep in mind, that you can use a database to persist Users and Accounts, and still use JWT for sessions.

A single User can have multiple Sessions, each Session can only have one User.

When a Session is read, we check if it's expires field indicates an invalid session, and delete it from the database."

### Verification Token

The Verification Token model is used to store tokens for passwordless sign in. "NextAuth.js makes sure that every token is usable only once, and by default has a short (1 day, can be configured by maxAge) lifetime."

## Testing

The testing framework used is Cypress, which has a robust documentation and user friendly UI.

There are 8 UI related tests implemented and they run automatically on the CI/CD pipeline edited on GitHub Actions.

To run the tests locally, type the followinng command:

```sh
npm run test
```

## Security

### What is threat modeling?  

“It is the process of analyzing various business and technical requirements of a system, identifying the potential threats, and documenting how vulnerable these threats make the system. A threat refers to any instance where an unauthorized party accesses sensitive information, applications, or network of an organization”.

What are the steps necessary for a successful Threat Modeling Process?

![Model threat steps](/public/modelthreat.png "Model Threat Steps")

In this project, I am going to focus on the four initial phases, indicating what have been done in the app (or is planned to do in the future, i.e., Sucuri subscription).

1.Objectives (What do we want to accomplish?)
User Confidentiality to protect data against unauthorized disclosure (memories and personal data, like family members and access that each has).
Integrity to prevent unauthorized information changes (one cannot change configuration or delete files from another user).
Ability to render required services even while the system is under attack.

2.Visualize (What are we building?)
See application diagram above.

3.Identify threats (What can go wrong?) (Includes step 4, with indication of what have been done to mitigate the problem
According to the Microsoft Stride Framework and considering that this is an initial project and, also, that the threat model is an ever evolving tool, the initial protection plan is listed as follow (STRIDE):

- Spoofed Identity – Authentication

- Tampering with Input – Validation (Next-Auth and Next-JS); photos uploads limited for some specific formats (HTML Security pattern – coming soon with the upload photo page); No-cached data allowed.

- Repudiation of Action – Authorization (Next-Auth)

- Information Disclosure – Encryption (Vercel); Authorization (Next-Auth).

- Denial of Service – Scalable DDOS protection (Vercel)

- Elevation of Privilege – Authorization (Next-Auth)

Besides the STRIDE anagram above, the following security implementations will be implemented):

- Data Lost, Corruption or Stolen – Cloudinary/AWS/Vercel – Backup

- Client Side Protection - HTTP Headers

- Encryption - HTTPS and SSL protocols (Vercel – TLS Certificate issued by Let’s Encrypt)

- WAF – Website Application Firewall (DDOS, Malware and Hack Tracking and remove)– Sukuri.net Basic Plan (planned, to be purchased).

- OAuth Authentication – No password processed or stored.

- API Protection – Secure authenticated request (Stripe and Cloudinary)

- Code/Development Protection – Team stores development passwords on Tokens

- SQL Injection - PRISMA ORM – No SQL code on the files.

- GDPR and SOC2 Compliant (Vercel and Self)

- Password protected Deployments (Vercel)

Regarding HTTPS Headers, the following are active on the website (all pages):

- Strict-Transport-Security
- X-Frame-Options
- X-Content-Type-Options
- Referrer-Policy
- Permissions-Policy
- X-DNS-Prefetch-Control

## Continuous Integration / Continuous Delivery System Analysis

Continuous integration and delivery, also known as CI/CD, is a set of principles and practices used in modern development to merge code from multiple engineers/developers to the principal repository and automatically run builds and tests. Theoretically, it is aligned with the Agile mindset, and the core idea is to make software better and available faster by defining parameterized pipelines that avoid publishing non-working features.

On the Family Tree website, we considered the two most effective tools available to implement the desired pipeline, Gitlab and GitHub Actions; we chose the last one since the version control is already made using GitHub. Access to this tool is realized through the Microsoft Visual Studio CODE Editor, whose terminal is the main access point to interact with the CI/CD system, allowing a seamless and fast experience. The task management and assignments are realized on the Linear App.

The initial step in this process is to check Linear to visualize the tasks attributed, their priority, and the time/cycle to complete them. The branch name should be copied directly from Linear, which standardizes the text and puts the last name of the contributor at the start of the branch's name.

After, the code creation or editing phase begins with the branch creation, and when it is ready, the content is staged, committed with a clear message, and pushed to the GitHub repository. Small increments on the code base are essential; multiple commits are indicated throughout the day to avoid conflicts with the main branch and fast resource delivery.

On GitHub, a pipeline was created to check the branch automatically. This action is usually configured to be triggered by the "git push" command and has multiple workflows with multiple jobs.

The workflow is a set of actions called "jobs" that aggregates correlated actions. It can be located and edited on the source code from the root folder inside ".github/workflow".

The main workflow is located on the "node.js.yml" file. It creates a build using the latest version of Ubuntu and installs Node JS versions 14 and 16 in a matrix strategy, the dependencies indicated on the "package.json" file, and, after, it creates the build. If the build succeeds, the linting process will start, and the testing framework will finally be initialized.

The second workflow is on the file "isStaled.yml". It is triggered on a defined schedule and will set to stale all repository activities without any input for more than 30 days. The activity will be automatically closed if a team member does not remove the stale label or comment.

The third workflow is the "isVulnerable.yml" file. It scans the website for publicly known JavaScript vulnerabilities, so the team can be notified in case any critical update in a dependency is necessary. This activity is used neglected by many software teams, and to have it automated is an essential step to maintain the security standards defined in the Treat Model document.

The code will be available for the assigned reviewer if the pipeline actions succeed. At this moment, starts the Code Reviewing phase.

The reviewer is responsible for checking the Clean Code principles, the functionality, and the logic created. If something must be changed, it will be marked/commented on, and the responsible engineer will be notified for it to work on the matter.

 If the committed branch conflicts with the main branch on the merging phase, the "github rebase" command must be run to set the to be applied over the latest build. Eventual further divergences must be solved manually by visualizing them on Visual Studio Code.

With the reviewer's approval, the branch is deleted by the pipeline itself, and its content is submitted to Vercel, a Next JS platform that uses Amazon Web Services for Storage.

Although the system demonstrated here involves multiple tools and services (Linear, VS Code, Github, Github Actions, and Vercel), it is set and organized in a streamlined and automatized way while also prioritizing the safety of the build by limiting the merge request by the approval of the reviewer. The approval might be unnecessary for specific users whose work has been proven reliable. However, code reviews are intrinsic to the Continuous Integration and Delivery system.

The system described allows the team to work together seamlessly, integrating the Application base code faster, publishing features with confidence, and minimizing errors.

## TROUBLESHOOTING

ERROR LOGGIN IN
MESSAGE: "try to sign in with a different user"

SOLUTION:

This error connects due to the Heroku PostgreSQL 20 connections limit. To deal with this, Prisma is instantiated on Next JS and exported as a global variable. This variable is, then, imported throughout the app.
Even so, if the error occurs, run:

```sh
heroku pg:killall postgresql-clean-41943
```

This will kill all active connections and allow the user to enter the website.

## License

This project idea and its code is not open source and are property of Jhonathan Campos.

## About

Jhonathan Campos, 4th Gen student at CODE University of Applied Sciences - Berlin.
