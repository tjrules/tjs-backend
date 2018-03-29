# Welcome to TJ's Blog App

Thanks for checking it out. This was my final project for General Assembly's Web Development Immersive course. The blog was actually designed for generic development for customization for specific purposes. I updated this from a previous version that I had developed in EJS. The new version was created in React with a Node backend. It also uses Passport which allows for an admin page where the admin can manipulate his/her posts however they see fit. It also is styled and structured on the front-end with Bootstrap.

# To Run
- fork and clone this repo on your local machine.
- Run npm install
- create your own database using PostgreSQL
- modify  db/config.js on line 14 and change the database name to match your own.
- go to db/migrations and for each migration file add \c your_db_name; to the top of each file
- in the terminal run psql -d your_db_name -f db/migrations/users_table.sql first and the same command for the posts_table.sql
- in the terminal type in 'npm run dev'
- finally in the terminal type in 'npm run build'
- you should now be able to run the app on localhost:3000 in your browser window

#Challenges

As with the building of any project there were several challenges that I faced with this.

-First I had a hard time learning the use of passport through sessions and cookies. I still have some edits to make to the admin platform regarding the use of cookies to conditionally render the login/logout buttons of the navigation bar.

- I also could have used a ternary operator in my blog post controller to enable users read-only privileges for other people's posts. Instead  

- Finally, I didn't realize that React-Router doesn't create static routes so you can't type in the navigation bar to the link you want to find. I found a solution that shows the fix herehttps://github.com/mars/create-react-app-buildpack basically I just need to create a static.json file that implements a fix for this problem.

#Future of TJ's Blog App

My plans for this are to create a full-stack portfolio/blog website for my own personal use, as well as to be copied for others to customize to their own liking. The admin page will be able to add my other projects to my database and display them similar to my blog posts. Additionally I would like to use it for my photography portfolio as I am also a semi-pro photographer. It would also be nice to integrate some social media posting abilities where I create a new post on all my accounts when I showcase something new on my website.

Thanks for taking a look!
