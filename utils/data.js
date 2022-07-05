const usersData = [
  { username:'Abdallah', 
  email: 'Abdallah@hotmail.com'},
  { username: 'David', 
  email: 'david@hotmail.com'},
  { username: 'John', 
  email: 'John@hotmail.com'},
  { username: 'Jessica', 
  email: 'jassica@hotmail.com'},
  { username: 'Debbie', 
  email: 'debbie@hotmail.com'},
  { username: 'Christine', 
  email: 'christine@hotmail.com'},
  { username: 'Jenny', 
  email: 'jenny@hotmail.com'},
  { username: 'Robert', 
  email: 'robert@hotmail.com'},
  { username: 'Andrew', 
  email: 'andrew@hotmail.com'},
  { username: 'Kent', 
  email: 'kent@hotmail.com'},
  { username: 'Tom', 
  email: 'tom@hotmail.com'}  
];

  
  const thoughts = [
    'Your post is funny',
    'I could not agree more, my friend',
    'I see your point there',
    'Oneday we may have dinner together',
    'Very useful tips, thanks!',
    'Awesome idea!',
    'The new movie is fantistic',
    'The current weather is terrible',
    'What would be an alternative?',
    'Things are different now',
    'Some guys just can not get that.',
  ];
  
  const reactions = [
    'I disagree!',
    'I tried your algorithm, here were the results',
    'This was awesome',
    'Thank you for the great content',
    'Please check out my response',
    'Like and subscribe to my channel please',
    'Reply: The side effects of in app purchases on digital marketplaces',
  ];
  
 
  // Get a random item given an array
  const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
  
  // Gets a random full name
  //const getRandomNameAndEmail = () =>
    //`${getRandomArrItem(names[username])} ${getRandomArrItem(names[email])}`;
  
  // Function to generate random thoughts that we can add to the database. Includes firend's reactions.
  const getRandomThoughts = (int) => {
    let results = [];
    for (let i = 0; i < int; i++) {
      results.push({
       
        thoughtBody: getRandomArrItem(thoughts),
        //advertiserFriendly: Math.random() < 0.5,
        //reactions: [...getRandomReactions(3)],
      });
    }
    return results;
  };
  
  // Create the reactions that will be added to each thought
  // const getRandomReactions = (int) => {
  //   if (int === 1) {
  //     return getRandomArrItem(reactions);
  //   }
  //   let results = [];
  //   for (let i = 0; i < int; i++) {
  //     results.push({
  //       reactionBody: getRandomArrItem(reactions),
  //       username: usersData[i].username,
  //     });
  //   }
  //   return results;
  // };
  
  // Export the functions for use in seed.js
  module.exports = { usersData, getRandomThoughts};
  