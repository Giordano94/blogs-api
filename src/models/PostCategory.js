const PostCategory = (sequelize, _DataTypes) => {
  const PostCategory = sequelize.define(
    'PostCategory',
    {},
    {
      timestamps: false,
      underscored: true,
      tableName: 'blog_posts',
    }
  );

  PostCategory.associate = (models) => {
    models.BlogPosts.belongsToMany(models.Category, {
      as: 'categories',
      through: PostCategory,
      foreignKey: 'postId', 
      otherKey: 'categoryId', 
    });
    models.Category.belongsToMany(models.BlogPosts, {
      as: 'blogPosts',
      through: PostCategory,
      foreignKey: 'categoryId', 
      otherKey: 'postId',
    });
  };

  return PostCategory;
};


module.exports = PostCategory;