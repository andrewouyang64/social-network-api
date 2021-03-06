const { Schema, model } = require('mongoose');
const{isEmail} = require('validator');

// Schema to create User model
const userSchema = new Schema(
  {
    username: {
      type: String,
      Unique: true,
      Required: true,
      Trimmed: true
    },

    email: {
      type: String,
      Unique: true,
      Required: true,
      Validate: isEmail

    },
    
    thoughts: [
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

// Create a virtual property `friendCount` that gets the number of friend's thought.
userSchema
  .virtual('friendCount')
  // Getter
  .get(function () {
    return this.friends.length;
  })
  

// Initialize our User model
const User = model('user', userSchema);

module.exports = User;
