const { Schema, model, Types } = require('mongoose');

const dateFormat = require('../utils/dateFormat');

const ReplySchema = new Schema(
    {
      replyId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
      },
      replyBody: {
        type: String
      },
      writtenBy: {
        type: String
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: createdAtVal => dateFormat(createdAtVal)
      }
    },
    {
      toJSON: {
        getters: true
      }
    }
  );
  

const ThoughtSchema = new Schema({
    writtenBy: {
      type: String
    },
    thoughtBody: {
      type: String
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: createdVal => dateFormat(createdVal)
    },
    replies: [ReplySchema]
  },
  {
    toJSON: {
      virtuals: true,
      getters: true
    },
    id: false
  });
  
  ThoughtSchema.virtual('replyCount').get(function() {
    return this.replies.length;
  });
  
  const Thought = model('Thought', ThoughtSchema);
  
  module.exports = Thought;