import { Model, DataTypes } from 'sequelize';
import { sequelize } from './sequelize';

class Post extends Model{}
Post.init({
    title: DataTypes.STRING(100),
    text: DataTypes.TEXT,
}, {
    sequelize,
    modelName: 'post',
    paranoid: true,
})

export default Post;