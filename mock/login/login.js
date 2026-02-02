export default [
  {
    url: '/api/login',
    method: 'post',
    response: (req) => {
      const { username, password } = req.body
      
      if (username === 'admin' && password === '123456') {
        return {
          code: 200,
          message: '登录成功',
          data: {
            token: 'mock-token-' + Date.now(),
            user: {
              id: 1,
              username: 'admin',
              nickname: '管理员',
              avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=user%20avatar%20professional%20admin&image_size=square',
              role: 'admin'
            }
          }
        }
      } else {
        return {
          code: 401,
          message: '用户名或密码错误',
          data: null
        }
      }
    }
  },
  {
    url: '/api/register',
    method: 'post',
    response: (req) => {
      const { username, password, nickname } = req.body
      
      if (!username || !password) {
        return {
          code: 400,
          message: '用户名和密码不能为空',
          data: null
        }
      }
      
      return {
        code: 200,
        message: '注册成功',
        data: {
          id: Date.now(),
          username,
          nickname: nickname || username,
          avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=user%20avatar%20new%20user&image_size=square'
        }
      }
    }
  },
  {
    url: '/api/logout',
    method: 'post',
    response: () => {
      return {
        code: 200,
        message: '登出成功',
        data: null
      }
    }
  },
  {
    url: '/api/user/info',
    method: 'get',
    response: () => {
      return {
        code: 200,
        message: '获取成功',
        data: {
          id: 1,
          username: 'admin',
          nickname: '管理员',
          avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=user%20avatar%20professional%20admin&image_size=square',
          role: 'admin',
          email: 'admin@example.com',
          phone: '13800138000',
          createdAt: '2024-01-01 00:00:00'
        }
      }
    }
  },
  {
    url: '/api/refresh-token',
    method: 'post',
    response: () => {
      return {
        code: 200,
        message: '刷新成功',
        data: {
          token: 'mock-token-' + Date.now()
        }
      }
    }
  }
]
