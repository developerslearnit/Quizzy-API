const categories = [
  {
    category_id: 1,
    name: "Sports"
  },
  {
    category_id: 2,
    name: "Vehicles"
  },
  {
    category_id: 3,
    name: "Science & Nature"
  },

  {
    category_id: 4,
    name: "Books"
  },
  {
    category_id: 5,
    name: "History"
  }
];

module.exports = {
  get: function(req, res, next) {
    res.json({
      categories: categories.map(({ category_id, name }) => ({
        category_id,
        name
      }))
    });
  }
};
