export default [
  {
    url: '/api/home/banner',
    method: 'get',
    response: () => {
      return {
        code: 200,
        message: 'success',
        data: [
          {
            id: 1,
            title: '十点课堂',
            description: '让学习成为一种习惯',
            imageUrl: 'https://via.placeholder.com/1200x400/4CAF50/FFFFFF?text=Banner+1',
            link: '/course/1'
          },
          {
            id: 2,
            title: '精选课程',
            description: '发现更多优质内容',
            imageUrl: 'https://via.placeholder.com/1200x400/2196F3/FFFFFF?text=Banner+2',
            link: '/course/2'
          },
          {
            id: 3,
            title: '限时优惠',
            description: '特价课程等你来',
            imageUrl: 'https://via.placeholder.com/1200x400/FF9800/FFFFFF?text=Banner+3',
            link: '/course/3'
          }
        ]
      }
    }
  },
  {
    url: '/api/home/courseList',
    method: 'get',
    response: () => {
      return {
        code: 200,
        message: 'success',
        data: {
          list: [
            {
              id: 1,
              title: 'Vue3从入门到精通',
              teacher: '张老师',
              price: 199.00,
              originalPrice: 299.00,
              cover: 'https://via.placeholder.com/300x200/4CAF50/FFFFFF?text=Vue3',
              studentCount: 1234,
              collect: 4.8+'w',
              tags: ['热门', '前端']
            },
            {
              id: 2,
              title: 'React实战项目开发',
              teacher: '李老师',
              price: 249.00,
              originalPrice: 399.00,
              cover: 'https://via.placeholder.com/300x200/2196F3/FFFFFF?text=React',
              studentCount: 987,
              collect: 4.7+'w',
              tags: ['实战', '前端']
            },
            {
              id: 3,
              title: 'Node.js后端开发',
              teacher: '王老师',
              price: 179.00,
              originalPrice: 279.00,
              cover: 'https://via.placeholder.com/300x200/FF9800/FFFFFF?text=Node.js',
              studentCount: 756,
              collect: 4.6+'w',
              tags: ['后端', '全栈']
            },
            {
              id: 4,
              title: 'TypeScript进阶指南',
              teacher: '赵老师',
              price: 159.00,
              originalPrice: 259.00,
              cover: 'https://via.placeholder.com/300x200/9C27B0/FFFFFF?text=TypeScript',
              studentCount: 654,
              collect: 4.9+'w',
              tags: ['进阶', '前端']
            }
          ],
          total: 4,
          page: 1,
          pageSize: 10
        }
      }
    }
  },
  {
    url: '/api/home/category',
    method: 'get',
    response: () => {
      return {
        code: 200,
        message: 'success',
        data: [
          {
            id: 'recommend',
            name: '人气推荐',
            count: 156
          },
          {
            id: 'career',
            name: '职场晋升',
            count: 89
          },
          {
            id: 'women',
            name: '女性成长',
            count: 123
          },
          {
            id: 'humanities',
            name: '人文见识',
            count: 76
          },
          {
            id: 'education',
            name: '教育亲子',
            count: 98
          }
        ]
      }
    }
  },
  {
    url: '/api/home/career',
    method: 'get',
    response: () => {
      return {
        code: 200,
        message: 'success',
        data: {
          list: [
            {
              id: 1,
              title: '职场沟通技巧提升',
              teacher: '张老师',
              price: 99.00,
              originalPrice: 199.00,
              cover: 'https://via.placeholder.com/300x200/4CAF50/FFFFFF?text=Career+1',
              studentCount: 29700,
              collect: 4.8+'w'
            },
            {
              id: 2,
              title: '领导力开发与团队管理',
              teacher: '李老师',
              price: 129.00,
              originalPrice: 249.00,
              cover: 'https://via.placeholder.com/300x200/2196F3/FFFFFF?text=Career+2',
              studentCount: 18500,
              collect: 4.7+'w'
            }
          ],
          total: 2,
          page: 1,
          pageSize: 10
        }
      }
    }
  },
  {
    url: '/api/home/women',
    method: 'get',
    response: () => {
      return {
        code: 200,
        message: 'success',
        data: {
          list: [
            {
              id: 3,
              title: '女性自我认知与成长',
              teacher: '王老师',
              price: 89.00,
              originalPrice: 169.00,
              cover: 'https://via.placeholder.com/300x200/FF9800/FFFFFF?text=Women+1',
              studentCount: 32400,
              collect: 4.9+'w'
            },
            {
              id: 4,
              title: '职场女性平衡术',
              teacher: '刘老师',
              price: 109.00,
              originalPrice: 199.00,
              cover: 'https://via.placeholder.com/300x200/E91E63/FFFFFF?text=Women+2',
              studentCount: 25600,
              collect: 4.8+'w'
            }
          ],
          total: 2,
          page: 1,
          pageSize: 10
        }
      }
    }
  },
  {
    url: '/api/home/humanities',
    method: 'get',
    response: () => {
      return {
        code: 200,
        message: 'success',
        data: {
          list: [
            {
              id: 5,
              title: '中国传统文化精髓',
              teacher: '陈老师',
              price: 119.00,
              originalPrice: 219.00,
              cover: 'https://via.placeholder.com/300x200/9C27B0/FFFFFF?text=Humanities+1',
              studentCount: 19800,
              collect: 4.9+'w'
            },
            {
              id: 6,
              title: '西方哲学思想启蒙',
              teacher: '赵老师',
              price: 139.00,
              originalPrice: 259.00,
              cover: 'https://via.placeholder.com/300x200/00BCD4/FFFFFF?text=Humanities+2',
              studentCount: 15600,
              collect: 4.7+'w'
            }
          ],
          total: 2,
          page: 1,
          pageSize: 10
        }
      }
    }
  },
  {
    url: '/api/home/education',
    method: 'get',
    response: () => {
      return {
        code: 200,
        message: 'success',
        data: {
          list: [
            {
              id: 7,
              title: '亲子沟通技巧',
              teacher: '孙老师',
              price: 89.00,
              originalPrice: 169.00,
              cover: 'https://via.placeholder.com/300x200/795548/FFFFFF?text=Education+1',
              studentCount: 28900,
              collect: 4.8+'w'
            },
            {
              id: 8,
              title: '儿童心理发展与教育',
              teacher: '周老师',
              price: 109.00,
              originalPrice: 199.00,
              cover: 'https://via.placeholder.com/300x200/607D8B/FFFFFF?text=Education+2',
              studentCount: 23400,
              collect: 4.9+'w'
            }
          ],
          total: 2,
          page: 1,
          pageSize: 10
        }
      }
    }
  },
  {
    url: '/api/home/recommend',
    method: 'get',
    response: () => {
      return {
        code: 200,
        message: 'success',
        data: {
          list: [
            {
              id: 1,
              title: 'Python数据分析实战',
              teacher: '刘老师',
              price: 299.00,
              originalPrice: 399.00,
              cover: 'https://via.placeholder.com/300x200/E91E63/FFFFFF?text=Python',
              studentCount: 2341,
              collect: '2.3w'
            },
            {
              id: 2,
              title: '机器学习入门',
              teacher: '陈老师',
              price: 399.00,
              originalPrice: 499.00,
              cover: 'https://via.placeholder.com/300x200/00BCD4/FFFFFF?text=ML',
              studentCount: 1876,
              collect: '1.9w'
            },
            {
              id: 3,
              title: 'UI/UX设计基础',
              teacher: '周老师',
              price: 199.00,
              originalPrice: 299.00,
              cover: 'https://via.placeholder.com/300x200/FFC107/FFFFFF?text=UI/UX',
              studentCount: 1543,
              collect: '1.5w'
            }
          ],
          total: 3,
          page: 1,
          pageSize: 10
        }
      }
    }
  }
]
