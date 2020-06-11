module.exports = (factory, Models) => {
  factory.define('Author', Models.Author, {
    name: 'Barfoo',
    createdAt: new Date(),
    updatedAt: new Date(),
  })
}