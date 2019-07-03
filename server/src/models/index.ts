import { sequelize } from './sequelize';
import User from './user';
import Post from './post';

User.hasMany(Post, { foreignKey: { allowNull: false }, onDelete: 'CASCADE' });
Post.belongsTo(User, { foreignKey: { allowNull: false }, onDelete: 'CASCADE' });

export default {
  sequelize,
  User,
  Post,
};
