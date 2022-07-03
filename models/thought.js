const { Schema, Types, model } = require('mongoose');

const thoughtSchema = new Schema(
  {
    reactions: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    thoughtText: {
      type: String,
      required: true,
      maxlength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
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
  
// Initialize our User model
const Thought = model('thought', thoughtSchema);

module.exports = Thought;

