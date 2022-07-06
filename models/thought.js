const { Schema, model } = require('mongoose');
const Reaction = require('./Reaction');

const thoughtSchema = new Schema(
  {
    
    thoughtText: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },

    reactions: [Reaction],
    
  },
  {
    toJSON: {
        virtuals: true,
        getters: true,
    },
    id: false,
  }
);

 thoughtSchema
    .virtual('reactionCount')
   // Getter   
   .get(function () {
    return this.reactions.length;
   })
  
// Initialize the thought model
const Thought = model('thought', thoughtSchema);

module.exports = Thought;

