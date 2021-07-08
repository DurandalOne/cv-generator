# React/react-to-print API 

A web application which generates and prints a CV using user entered data. Features controlled forms and Hooks. Prints out a copy of the user's entered information with minimal styling. There's lots of solutions out there that allow for extensive styling options, the idea is to create a clean CV quickly and with little fuss.

## Lessons Learned

My first real React project after putting the mandatory to do list together. Started off using scattered pieces of state in class based components, I had an idea of what I wanted to achieve but not exacly how I wanted to achieve it. Decided to go away and spend a few days really learning hooks and state. After getting to grips with how it all works I really came to apreaciate how much cleaner state management solutions are. 

Learnt how to print a specific div using the react-to-print API. Had a look at other solutions, such as using javascript fuctions that print a specific part of the DOM, but found react-to-print and much easier solution.

Actually got a really good grasp of array methods from using this project (like map, filter, reduce) - one of the main reasons I like working with React is because it does make you a better JavaScript developer overall.

## Potential Future Features

- Add a colour picker so that the user can customise the form a bit further. As the aim was to create a minimalist form, there would only be a small selection of styling choices.

- Make the page more mobile friendly. Though the page is responsive, the CV section doesn't display well below tablet size.

## Deployment

Deployed with [github pages](https://pages.github.com/).

## Get started

From your command line, first clone this repo:

```bash
# Clone this repository
$ git clone https://github.com/DurandalOne/cv-generator

# Go into the repository
$ cd cv-generator

# Remove current origin repository
$ git remote remove origin
```
Then you can install the dependencies using NPM:

Using NPM:

```bash
# Install dependencies
$ npm install

# Start development server
$ npm start
```
You should now have a development server running in your default browser.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
