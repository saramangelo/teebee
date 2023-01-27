const User = require('./User');
const Blog = require('./Blog');
const Comments = require('./Comments');
const UserBlog = require('./UserBlog');

User.belongsToMany(Blog, {
  through: {
    model: UserBlog,
    unique: false,
  }
});

User.hasMany(Comments, {
  foreignKey: 'user_id',
});

Blog.hasMany(Comments,{
  foreignKey: 'comments_id',

});

Blog.belongsTo(User, {
  foreignKey: 'user_id'
});

Comments.belongsTo(User, {
  foreignKey: 'user_id' 
});

Comments.belongsTo(Blog, {
  foreignKey: 'blog_id',
});

module.exports = { User, Blog, Comments, UserBlog };
