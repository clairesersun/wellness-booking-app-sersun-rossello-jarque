const { Schema, model, models } = require('mongoose');

const ClassInfoSchema = new Schema({
    // Create a classes property with type String and make it required
    name: {
        type: String,
        required: true
    },
    when: {
        type: Date,
        default: Date.now()
    }, 
    date: {
        type: Date,
        default: Date.now()
    }, 
    time: {
        type: Date,
        default: Date.now()
    }, 
    description: {
        type: String,
        required: true
    },
    img: {
      type: String,
      required: true
    },
    location: {/* This is where the api comes in */
        type: String,
        required: true
    },
    booked: {
        type: Boolean,
        default: false
    },
    tags: [{
        type: SchemaTypes.ObjectId,
        ref: `Tag`
      }],
    // Create a "slug" property with type String
      slug: {
        type: String
      }
    })
    
// Turns the first five words of the title and lowercases them
// and joins them on hypens.
// Ex: The Trouble With JavaScript => the-trouble-with-javascript
ClassInfoSchema.pre('save', async function(next) {
  this.slug = this.ObjectId
    .split(' ')
    .slice(0, 5)
    .join('-')
    .toLowerCase()
    .replace(/[',.*\?\!\\\$@;:"]/, "")
  next()
})

module.exports = models.ClassInfo || model('ClassInfo', ClassInfoSchema)
