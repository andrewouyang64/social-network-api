const names = [
    'Aaran',
    'Aaren',
    'Aarez',
    'Aarman',
    'Aaron',
    'Aaron-James',
    'Aarron',
    'Aaryan',
    'Aaryn',
    'Aayan',
    'Aazaan',
    'Abaan',
    'Abbas',
    'Abdallah',
    'Abdalroof',
    'Abdihakim',
    'Abdirahman',
    'Abdisalam',
    'Abdul',
    'Abdul-Aziz',
    'Abdulbasir',
    'Abdulkadir',
    'Abdulkarem',
    'Ze',
    'Zechariah',
    'Zeek',
    'Zeeshan',
    'Zeid',
    'Zein',
    'Zen',
    'Zendel',
    'Zenith',
    'Zennon',
    'Zeph',
    'Zerah',
    'Zhen',
    'Zhi',
    'Zhong',
    'Zhuo',
    'Zi',
    'Zidane',
    'Zijie',
    'Zinedine',
    'Zion',
    'Zishan',
    'Ziya',
    'Ziyaan',
    'Zohaib',
    'Zohair',
    'Zoubaeir',
    'Zubair',
    'Zubayr',
    'Zuriel',
    ``,
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
  
  const users = [];
  
  // Get a random item given an array
  const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
  
  // Gets a random full name
  const getRandomNames = () =>
    `${getRandomArrItem(names)} ${getRandomArrItem(names)}`;
  
  // Function to generate random thoughts that we can add to the database. Includes firend's reactions.
  const getRandomThoughts = (int) => {
    let results = [];
    for (let i = 0; i < int; i++) {
      results.push({
        //published: Math.random() < 0.5,
        thoughtBody: getRandomArrItem(thoughts),
        //advertiserFriendly: Math.random() < 0.5,
        reactions: [...getThoughtReactions(3)],
      });
    }
    return results;
  };
  
  // Create the reactions that will be added to each thought
  const getRandomReactions = (int) => {
    if (int === 1) {
      return getRandomArrItem(reactions);
    }
    let results = [];
    for (let i = 0; i < int; i++) {
      results.push({
        reactionBody: getRandomArrItem(reactions),
        username: getRandomNames(),
      });
    }
    return results;
  };
  
  // Export the functions for use in seed.js
  module.exports = { getRandomNames, getRandomThoughts, getRandomReactions };
  