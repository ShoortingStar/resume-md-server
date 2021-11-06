type NodeEnv = {
  /**
   *数据库名
   * @type {string}
   */
  mysqlName: string
  /**
   *数据库用户名
   * @type {string}
   */
  mysqlUserName: string
  /**
   *数据库用户密码
   * @type {string}
   */
  mysqlPassword: string
  /**
   *mysql部署的机器IP
   * @type {string}
   */
  mysqlIp?: string
  /**
   *mysql连接池
   * @type {object}
   */
  mysqlPool?: object
}

const development: NodeEnv = {
  mysqlName: 'resume_md_dev',
  mysqlUserName: 'root',
  mysqlPassword: 'resume_md',
  mysqlIp: '127.0.0.1',
}

const production: NodeEnv = {
  mysqlName: 'resume_md_prod',
  mysqlUserName: 'root',
  mysqlPassword: 'resume_md',
  mysqlIp: '127.0.0.1',
  // 连接池
  mysqlPool: {
    max: 5, // 连接池中最大的连接数量
    min: 0,
    idle: 10000, // 10s 内没有被使用，则释放
  },
}

module.exports = {
  development: development,
  production: production,
}[process.env.NODE_ENV || 'development']
