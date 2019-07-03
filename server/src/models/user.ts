import { DataTypes, Model } from "sequelize";

import { sequelize } from './sequelize';

class User extends Model {}
User.init({
  email: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: {
      name: 'duplicated user.email',
      msg: '기존에 가입한 계정입니다',
    },
  },
  nick: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  provider: {
    type: DataTypes.STRING(10),
    allowNull: false,
    defaultValue: 'local',
  }
}, {
  sequelize,
  modelName: 'user',
  timestamps: true,
});

export default User