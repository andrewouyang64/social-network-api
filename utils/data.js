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
    'Awesome ideas',
    'Sounds like a good plan to me',
    'We all should not take it for granted'
  ];
  
 
  // Get a random item / index from given an array
  const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
  const genRandomIndex = (arr) => Math.floor(Math.random() * arr.length);
  

  // Function to generate random thoughts that we can add to the database. Includes firend's reactions.
  const getRandomThoughts = (int) => {
    let results = [];
    for (let i = 0; i < int; i++) {
      
      results.push({
       
        thoughtText: getRandomArrItem(thoughts),
        reactions: [...getRandomReactions(2)],
        username: getRandomArrItem(usersData).username
      });
    }
    return results;
  };
  
  //Create the reactions that will be added to each thought
   const getRandomReactions = (index1) => {
    //  if (int === 1) {
    //    return getRandomArrItem(reactions);
    //  }
     let results = [];
     for (let i = 0; i < index1; i++) {
     
       results.push({
         reactionBody: getRandomArrItem(reactions),
         username: getRandomArrItem(usersData).username,
       });
     }
     return results;
   };

  const thoughtsArr = getRandomThoughts(6);


  // Get user array
  const getUser = (num) => {
    let results = [];
    for (let i = 0; i < num; i++) {
    const index = genRandomIndex(usersData);
    const username = usersData[index].username;
    const email = usersData[index].email;
     results.push({
                username,
                email,
                thoughts:[],
                friends: []
                //thoughts: [getRandomArrItem(thoughtsArr)._id],
                //friends: [getRandomArrItem(usersData).username._id]
              });
          }
        return results  
    };

  const usersArr = getUser(6);
  console.log('My log is ==================' + usersArr[0].thoughts)

  // Export the functions for use in seed.js
  module.exports = { usersArr, thoughtsArr};
  