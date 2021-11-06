/* sequelize基础配置文件 */
const Sequelize = require('sequelize')
const mysqlConfig = require('./mysqlBase')
// 参数依次为：要导入的数据库名，账号，密码
export const seq = new Sequelize(
  mysqlConfig.mysqlName,
  mysqlConfig.mysqlUserName,
  mysqlConfig.mysqlPassword,
  {
    host: mysqlConfig.mysqlIp,
    dialect: 'mysql',
    define: {
      timestamps: false,
    },
  }
)
