# Family Tree

## _Share your memories...for Generations._

Family Tree allows family members to safely share, via the internet and cloud storage, digitalized memories (photos, texts, small videos) with other family members for generations to come, in a easy to use interface.

# General Information

## Technologies Used 

- NEXT JS 
- HTML/JSX/TAILWIND/JAVASCRIPT 
- POSTEGRESQL/PRISMA 
- VERCEL 
- GITHUB/GITHUB ACTIONS

## Setup

After cloning the project from github, access the main directory on the terminal 
```sh
npm install
run npm run dev
```

Open http://localhost:3000 to view it in your browser.

The page will reload when you make changes.

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

## Application diagram:

![App Diagram](public/logo.png)

## Usage

Click on the top right button "Access". Log in using you GitHub credentials (API / Authentication).

After loggin in, the Memories button will be shown on the navigation bar (Authorization).

On the Memories page, you can see the photos that are stored in Cloudinary (API).

In the bottom of the page there is a Load More button that will load another set of images (Pagination).

The profile page and loggout button can be accessed on the top right side of the page.

The profile page is created with the data obtained from the OAuth Authentication and saved on the PostgreSQL database. The DB is managed with PRISMA OEM.

## Database

## Security

## Continuous Integration / Continuous Delivery System

## License

This project idea and its code is not open source and are property of Jhonathan Campos.

## About

Jhonathan Campos, 4th Gen student at CODE University of Applied Sciences - Berlin.
