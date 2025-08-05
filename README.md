# _Gleeful_Clay_

#### By _**Jacob Wilson**_

## Description

A portfolio designed for Toni Lima's pottery projects

## Setup/Installation Requirements

Step1: Clone the project.
* _You can find the github repository [here](https://github.com/JLEWilson/GleefulClay)_
* _Click the code button, and copy the https link_
* _In your in git bash or your preferred git terminal navigate to the directory you would like to store the project_
* _Enter: `git clone` followed by the https link_
* _Now that the repository is cloned to your computer open it in your preferred code editor_
Step2: Install Dependencies.
* _Now type `npm install` in your terminal to install the packages used in the project_
* _You can now view the project by typing `npm run start` in your terminal_


* _OR_
* _You can find the deployed portfolio [here](www.gleefulclay.com)

## Adding Images (For Jackson)
<details>
  <summary>Click to expand</summary>
  When making changes it is generally best to make a new git branch off of the main branch, so if the changes break some things we can undo them before adding them to the main project. For adding images this is likely unecessary, but just in case you want to try something new heres how:

  ### Getting changes from Github
  If I have made changes this is how you can get them locally without needing to get the whole project every time
  - git status (will tell you if there are any changes to the remote repository)
  - git pull (will grab the changes from the remote repository and update your local machine to match)
  

  If there are issues pulling, for instance if you have local changes that conflict you can break up the retrieval.
  git pull is a mixture of the following steps:
  - git fetch (will grab the changes but not integrate them so you can review and fix conflicts)
  - git merge (will add the changes to your local machine)

  ### Making a new branch
  From the main branch:
  - git checkout -b {branchName} (without the brackets, will make a new branch and move you to that branch)
    
  ### Adding Changes to Github
  After you add, delete or edit files this is how we can make sure that things don't break when we arent working together. You already know this just adding it here so it's together.
  - git add {file name} (stages the file changes) OR git add . (stage all file)
  - git commit -m "message about changes" (add/delete etc)
  - git push origin {branch name}

  ### Adding Images
  To add an image into one of the collections there are a few steps:
  - Add the image into the project folder: src/images/{FolderName}/image.png
  - Import the image into the photoGroups.ts file
  - Add the imported image into the collection you want to see it in. The first item in the array will be the one that determines the image used when you are viewing the collections.

  ### Adding Collections
  To add a new collection:
  - Make a new folder in the images directory
  - In photoGroups.ts add a new key/value pair to the COLLECTIONS object. The key will be used as the title of the collection, the value will be an array
  - Import the images you want to use and place them in the array (steps in adding images)

  ### Adding Changes to Github

  


</details>

## Known Bugs

* _No known bugs_

## License - [MIT](https://opensource.org/licenses/MIT)

_If you run into any problems or find a bug, would like to reach me for a separate reason, feel free to send me an email @jacobleeeugenewilson@gmail.com with details of your issue._

Copyright (c) _03/10/2022_ _Jacob Wilson_
