// const mongoose = require('mongoose');
// const { Schema } = mongoose;

const librarySchema = Schema({
  _id: Schema.Types.ObjectId,
  name: String,
  books: [{ type: Schema.Types.ObjectId, ref: 'Book' }]
});

// const storySchema = Schema({
//   author: { type: Schema.Types.ObjectId, ref: 'Person' },
//   title: String,
//   fans: [{ type: Schema.Types.ObjectId, ref: 'Person' }]
// });

// const Story = mongoose.model('Story', storySchema);
// const Person = mongoose.model('Person', personSchema);


Library.findOne({ _id: req.params.userId })
.select('-__v')
.populate('book')
.then((bookData) => {
  if (!dbUserData) {
    return res.status(404).json({ message: 'No user with this id!' });
  }
  res.json(dbUserData);
})
.catch((err) => {
  console.log(err);
  res.status(500).json(err);
});
},