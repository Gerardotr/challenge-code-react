# React + Vite

// Author: Gerardo Tobar
// Date of Development: 01/06/2023
// Purpose of Script: Show a onsole.log with the only active records with the Name, date, Favorite movie of each person

#Script to test the backend. You can test it on this website: https://www.typescriptlang.org/

interface Member {
  Name: string;
  FavoriteFood: string;
  FavoriteMovie: string;
  Status: string;
  Date?: string; // Optional property
}

let rockyObj: Member = {
  Name: 'Rocky',
  FavoriteFood: 'Sushi',
  FavoriteMovie: 'Back to The Future',
  Status: 'Inactive',
};
let miroslavObj: Member = {
  Name: 'Miroslav',
  FavoriteFood: 'Sushi',
  FavoriteMovie: 'American Psycho',
  Status: 'Active',
};
let donnyObj: Member = {
  Name: 'Donny',
  FavoriteFood: 'Singapore chow mei fun',
  FavoriteMovie: 'The Princess Bride',
  Status: 'Inactive',
};
let mattObj: Member = {
  Name: 'Matt',
  FavoriteFood: 'Brisket Tacos',
  FavoriteMovie: 'The Princess Bride',
  Status: 'Active',
};

// Team member objects
let teamMembers: Member[] = [rockyObj, miroslavObj, donnyObj, mattObj];

// Add the current date to each object
function addCurrentDateToObject(obj: Member) {
  obj.Date = new Date().toLocaleDateString();
}

// Add the current date to each object
teamMembers.forEach((member) => addCurrentDateToObject(member));

// Display active records
function displayActiveRecords(arr: Member[]) {
  let activeRecords = arr.filter((member) => member.Status === 'Active');
  if (activeRecords.length > 0) {
    activeRecords.forEach((member) =>
      console.log(
        `Name: ${member.Name}, Date: ${member.Date}, Favorite Movie: ${member.FavoriteMovie}`
      )
    );
  } else {
    console.log('No active records found.');
  }
}

// Sort the output by object property (by 'Name' in this case) or by any property that you want
function sortOutputByProperty(arr: Member[], property: keyof Member) {
   arr.sort((a, b) => {
    if (a[property] && b[property]) {
      return a[property]! > b[property]! ? 1 : -1;
    }
    return 0;
  });
  console.log('sorted result:');
  arr.forEach((item) => {
    console.log(`${property}: ${item[property]}`);
  });
}

// Call the function to display active records Note: should be showing active objects
displayActiveRecords(teamMembers);

console.log('-------------------- ### ------------------------')

// Call the function to sort the output by 'Name' or any property that you want
sortOutputByProperty(teamMembers, 'Name');


This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
