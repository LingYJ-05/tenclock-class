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
              tags: ['热门', '前端'],
              video: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Vue%203%20course%20video%20thumbnail%20modern%20web%20development&image_size=landscape_16_9'
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
              tags: ['实战', '前端'],
              video: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=React%20course%20video%20thumbnail%20modern%20web%20development&image_size=landscape_16_9'
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
              tags: ['后端', '全栈'],
              video: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Node.js%20course%20video%20thumbnail%20backend%20development&image_size=landscape_16_9'
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
              tags: ['进阶', '前端'],
              video: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=TypeScript%20course%20video%20thumbnail%20advanced%20programming&image_size=landscape_16_9'
            },
            {
              id: 5,
              title: 'Python数据分析实战',
              teacher: '刘老师',
              price: 299.00,
              originalPrice: 399.00,
              cover: 'https://via.placeholder.com/300x200/E91E63/FFFFFF?text=Python',
              studentCount: 2341,
              collect: '2.3w',
              tags: ['数据分析', 'Python'],
              video: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Python%20data%20analysis%20course%20video%20thumbnail&image_size=landscape_16_9'
            },
            {
              id: 6,
              title: '机器学习入门',
              teacher: '陈老师',
              price: 399.00,
              originalPrice: 499.00,
              cover: 'https://via.placeholder.com/300x200/00BCD4/FFFFFF?text=ML',
              studentCount: 1876,
              collect: '1.9w',
              tags: ['人工智能', '机器学习'],
              video: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Machine%20Learning%20course%20video%20thumbnail%20AI%20technology&image_size=landscape_16_9'
            },
            {
              id: 7,
              title: 'UI/UX设计基础',
              teacher: '周老师',
              price: 199.00,
              originalPrice: 299.00,
              cover: 'https://via.placeholder.com/300x200/FFC107/FFFFFF?text=UI/UX',
              studentCount: 1543,
              collect: '1.5w',
              tags: ['设计', 'UI/UX'],
              video: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=UI%20UX%20design%20course%20video%20thumbnail%20professional%20design&image_size=landscape_16_9'
            },
            {
              id: 8,
              title: 'Java企业级开发',
              teacher: '吴老师',
              price: 299.00,
              originalPrice: 399.00,
              cover: 'https://via.placeholder.com/300x200/795548/FFFFFF?text=Java',
              studentCount: 1342,
              collect: '1.3w',
              tags: ['后端', 'Java'],
              video: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Java%20enterprise%20development%20course%20video%20thumbnail&image_size=landscape_16_9'
            },
            {
              id: 9,
              title: 'Flutter跨平台开发',
              teacher: '郑老师',
              price: 249.00,
              originalPrice: 349.00,
              cover: 'https://via.placeholder.com/300x200/607D8B/FFFFFF?text=Flutter',
              studentCount: 1123,
              collect: '1.1w',
              tags: ['移动开发', '跨平台'],
              video: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Flutter%20cross-platform%20development%20course%20video%20thumbnail&image_size=landscape_16_9'
            },
            {
              id: 10,
              title: 'Go语言实战',
              teacher: '钱老师',
              price: 279.00,
              originalPrice: 379.00,
              cover: 'https://via.placeholder.com/300x200/4CAF50/FFFFFF?text=Go',
              studentCount: 987,
              collect: '0.9w',
              tags: ['后端', 'Go'],
              video: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Go%20language%20course%20video%20thumbnail%20backend%20development&image_size=landscape_16_9'
            }
          ],
          total: 10,
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
            },
            {
              id: 3,
              title: '时间管理与效率提升',
              teacher: '王老师',
              price: 89.00,
              originalPrice: 169.00,
              cover: 'https://via.placeholder.com/300x200/FF9800/FFFFFF?text=Career+3',
              studentCount: 25600,
              collect: 4.6+'w'
            },
            {
              id: 4,
              title: '职场人际关系处理',
              teacher: '刘老师',
              price: 109.00,
              originalPrice: 199.00,
              cover: 'https://via.placeholder.com/300x200/E91E63/FFFFFF?text=Career+4',
              studentCount: 22300,
              collect: 4.5+'w'
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
            },
            {
              id: 5,
              title: '女性健康与美丽管理',
              teacher: '陈老师',
              price: 99.00,
              originalPrice: 179.00,
              cover: 'https://via.placeholder.com/300x200/9C27B0/FFFFFF?text=Women+3',
              studentCount: 28900,
              collect: 4.7+'w'
            },
            {
              id: 6,
              title: '女性财务独立指南',
              teacher: '赵老师',
              price: 119.00,
              originalPrice: 219.00,
              cover: 'https://via.placeholder.com/300x200/00BCD4/FFFFFF?text=Women+4',
              studentCount: 24500,
              collect: 4.6+'w'
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
            },
            {
              id: 7,
              title: '世界历史文化名城',
              teacher: '孙老师',
              price: 129.00,
              originalPrice: 239.00,
              cover: 'https://via.placeholder.com/300x200/795548/FFFFFF?text=Humanities+3',
              studentCount: 18700,
              collect: 4.8+'w'
            },
            {
              id: 8,
              title: '艺术鉴赏与审美提升',
              teacher: '周老师',
              price: 109.00,
              originalPrice: 199.00,
              cover: 'https://via.placeholder.com/300x200/607D8B/FFFFFF?text=Humanities+4',
              studentCount: 16500,
              collect: 4.6+'w'
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
            },
            {
              id: 9,
              title: '青少年学习方法指导',
              teacher: '吴老师',
              price: 99.00,
              originalPrice: 179.00,
              cover: 'https://via.placeholder.com/300x200/4CAF50/FFFFFF?text=Education+3',
              studentCount: 26700,
              collect: 4.7+'w'
            },
            {
              id: 10,
              title: '家庭亲子阅读指导',
              teacher: '郑老师',
              price: 79.00,
              originalPrice: 149.00,
              cover: 'https://via.placeholder.com/300x200/2196F3/FFFFFF?text=Education+4',
              studentCount: 24500,
              collect: 4.6+'w'
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
            },
            {
              id: 4,
              title: 'Vue3从入门到精通',
              teacher: '张老师',
              price: 199.00,
              originalPrice: 299.00,
              cover: 'https://via.placeholder.com/300x200/4CAF50/FFFFFF?text=Vue3',
              studentCount: 1234,
              collect: '4.8w'
            },
            {
              id: 5,
              title: 'React实战项目开发',
              teacher: '李老师',
              price: 249.00,
              originalPrice: 399.00,
              cover: 'https://via.placeholder.com/300x200/2196F3/FFFFFF?text=React',
              studentCount: 987,
              collect: '4.7w'
            }
          ],
          total: 5,
          page: 1,
          pageSize: 10
        }
      }
    }
  },
  {
    url: '/api/home/course',
    method: 'get',
    response: (req) => {
      const id = req.query.id || 1
      return {
        code: 200,
        message: 'success',
        data: {
          id: parseInt(id),
          title: 'Vue3从入门到精通',
          description: '本课程从Vue3基础语法讲起，逐步深入到组件开发、状态管理、路由配置等核心内容，帮助你全面掌握Vue3开发技能。',
          teacher: '张老师',
          price: 199,
          originalPrice: 299,
          cover: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Vue%203%20course%20cover%2C%20modern%20web%20development%2C%20professional%20design%2C%20blue%20and%20purple%20gradient&image_size=landscape_16_9',
          studentCount: 1234,
          viewCount: 5678,
          publishDate: '2024-01-15',
          episodes: 12,
          episodeList: [
            { title: 'Vue3简介与环境搭建', views: 100000, likes: 152, date: '11-03' },
            { title: 'Vue3基础语法', views: 95000, likes: 145, date: '11-05' },
            { title: '组件化开发', views: 90000, likes: 138, date: '11-08' },
            { title: '响应式原理', views: 85000, likes: 130, date: '11-10' }
          ],
          comments: [
            {
              id: 1,
              author: '学员A',
              avatar: 'https://via.placeholder.com/40x40/4CAF50/FFFFFF?text=A',
              content: '课程内容非常详细，老师讲解清晰易懂，收获很大！',
              date: '2024-01-20'
            },
            {
              id: 2,
              author: '学员B',
              avatar: 'https://via.placeholder.com/40x40/2196F3/FFFFFF?text=B',
              content: '实战项目很有帮助，学完后能独立开发项目了。',
              date: '2024-01-18'
            }
          ]
        }
      }
    }
  }
]
