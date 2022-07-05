const { Schema, model } = require('mongoose');
//const{isEmail} = require('validator');

// Schema to create User model
const userSchema = new Schema(
  {
    first: String,
    last: String,
      // Unique: true,
      // Required: true,
      // Trimmed: true,
    //},
    // email: {
    //   type: String,
    //   Unique: true,
    //   Required: true,
    //   validate: isEmail,

    // },
    
    thought: [
      {
        type: Schema.Types.ObjectId,
        ref: 'thought',
      },
    ],

    friends: [{type: Schema.Types.ObjectId, ref: 'user'}]
  },
  {
    // Schema options to transform Objects after querying MongoDb to JSON and virtuals.
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// Create a virtual property `friendCount` that gets the amount of friend's thought.
userSchema
  .virtual('friendCount')
  // Getter
  .get(function () {
    return this.friends.length;
  })
  

// Initialize our User model
const User = model('user', userSchema);

module.exports = User;
