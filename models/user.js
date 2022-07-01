const { Schema, model } = require('mongoose');
const{isEmail} = require('validator');

// Schema to create User model
const userSchema = new Schema(
  {
    username: {
      TYPE:String,
      Unique: true,
      Required: true,
      Trimmed: true,
    },
    email: {
      type: String,
      Unique: true,
      Required: true,
      validate: isEmail,

    },
    
    thought: [
      {
        type: Schema.Types.ObjectId,
        ref: 'thought',
      },
    ],

    friend: [{type: userSchema, ref: 'user'}]
  },
  {
    // Mongoose supports two Schema options to transform Objects after querying MongoDb: toJSON and toObject.
    // Here we are indicating that we want virtuals to be included with our response, overriding the default behavior
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// Create a virtual property `fullName` that gets and sets the user's full name
userSchema
  .virtual('friendCount')
  // Getter
  .get(function () {
    return `friendCount`;
  })
  // Setter to set the first and last name
  .set(function (friend) {
    let friendCount=0
    if(friend){
      friendCount+=1;
      this.set(friendCount);
    }
    
  });

// Initialize our User model
const User = model('user', userSchema);

module.exports = User;
