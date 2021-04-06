const inquirer = require('inquirer');
// const fs = require('fs');
// const generatePage = require('./src/page-template.js');
// const pageHTML = generatePage(name, github);
// const [name, github] = profileDataArgs


// fs.writeFile('./index.html', pageHTML, err => {
//   if (err) throw new Error(err);

//   console.log('Portfolio complete! Check out index.html to see the output!')
// })


// const printProfileData = profileDataArr => {
//   // this ...
//   for(let i = 0; i < profileDataArr.length; i++) {
//     console.log(profileDataArr[i]);
//   }
//   console.log('====================');

//   // Is the same as this....
//   profileDataArr.forEach((profileItem) => console.log(profileItem));

// };

// printProfileData(profileDataArgs);

inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?'
    }
  ])
  .then(answers => console.log(answers));
