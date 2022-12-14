const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const UserSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            trim: true,
            required: "Username is Required",
          },
      
          email: {
            type: String,
            unique: true,
            required: "Email is Required",
            match: [/.+@.+\..+/],
          },
        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal => dateFormat(createdAtVal)
          },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought'
            }
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ]
    },
    {
      toJSON: {
        virtuals: true,
      },
      id: false,
    }
);


UserSchema.virtual("friendCount").get(function () {
    return this.friends.length;
  });

const User = model('User', UserSchema);

module.exports = User;