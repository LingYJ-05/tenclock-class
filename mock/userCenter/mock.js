// 用户中心模拟数据
const userCenterData = {
  // 个人资料
  userInfo: {
    id: 1,
    username: '张三',
    avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20avatar%20portrait%20of%20a%20Chinese%20man&image_size=square',
    phone: '138****8888',
    email: 'zhangsan@example.com',
    memberSince: '2023-01-01',
    level: 'VIP会员'
  },
  
  // 赠送记录
  giftRecords: {
    // 未赠出
    myGift: [
      {
        id: 1,
        courseName: '前端开发进阶课程',
        recipient: '李四',
        liveStatus:'直播中',
        status: 'giving',
        sendTime: '2024-11-01 10:30:23',
        expiryTime: '2024-12-01 10:30:23',
        price: 299,
        message: '亲爱的李四，这是我精心挑选的前端开发进阶课程，内容涵盖了Vue3、React、Webpack等前沿技术栈。希望你在这门课程中学到更多前端知识，掌握现代前端开发的精髓，成为优秀的前端工程师！加油！',
        avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=front%20end%20development%20course%20cover%2C%20modern%20design%2C%20professional%20looking&image_size=landscape_16_9'
      },
      {
        id: 2,
        courseName: 'JavaScript高级编程',
        recipient: '王五',
        status: 'giving',
        sendTime: '2024-10-28 15:45:12',
        expiryTime: '2024-11-28 15:45:12',
        price: 399,
        message: '王五你好，JavaScript是前端的核心，这门课程深入讲解了闭包、原型链、异步编程等高级概念。希望你能掌握这门语言的精髓，写出更优雅高效的代码，在技术道路上越走越远！',
        avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=JavaScript%20advanced%20programming%20course%20cover%2C%20code%20snippets%2C%20modern%20design&image_size=landscape_16_9'
      },
      {
        id: 3,
        courseName: '直播：Vue3实战项目开发',
        recipient: '周六',
        status: 'shared',
        sendTime: '2024-10-25 19:00:00',
        expiryTime: '2024-11-25 19:00:00',
        price: 499,
        message: '周六，Vue3是现在最流行的前端框架，这门直播课程通过实际项目带你深入理解Vue3的响应式原理、组件化开发、状态管理等核心概念。祝你学习顺利，早日成为Vue3高手！',
        avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Vue3%20practical%20project%20development%20course%20cover%2C%20live%20streaming%20indicator&image_size=landscape_16_9'
      },
      {
        id: 7,
        courseName: 'CSS3高级特效',
        recipient: '周九',
        status: 'giving',
        sendTime: '2024-10-20 14:20:30',
        expiryTime: '2024-11-20 14:20:30',
        price: 199,
        message: '周九你好，CSS3能让你的页面更加美观，这门课程详细讲解了动画、渐变、阴影等高级特效。希望你能够掌握这些技巧，创造出令人惊艳的视觉效果，让你的作品脱颖而出！加油！',
        avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=CSS3%20advanced%20effects%20course%20cover%2C%20visual%20effects%2C%20modern%20design&image_size=landscape_16_9'
      },
      {
        id: 8,
        courseName: 'Node.js后端开发',
        recipient: '吴十',
        status: 'shared',
        sendTime: '2024-10-18 09:45:15',
        expiryTime: '2024-11-18 09:45:15',
        price: 349,
        message: '吴十，全栈工程师是现在最抢手的人才，这门Node.js课程带你从零开始搭建后端服务，掌握Express框架、数据库操作、API设计等核心技能。祝你早日掌握，成为优秀的全栈工程师！',
        avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Node.js%20backend%20development%20course%20cover%2C%20server%20technology%2C%20modern%20design&image_size=landscape_16_9'
      },
      {
        id: 9,
        courseName: 'React Native跨平台开发',
        recipient: '郑一',
        status: 'giving',
        sendTime: '2024-10-15 16:30:00',
        expiryTime: '2024-11-15 16:30:00',
        price: 459,
        message: '郑一你好，跨平台开发是移动应用开发的趋势，这门React Native课程教你用一套代码同时开发iOS和Android应用。希望你能够掌握这门技术，成为移动开发领域的专家，创造出优秀的应用产品！',
        avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=React%20Native%20cross-platform%20development%20course%20cover%2C%20mobile%20app%20design&image_size=landscape_16_9'
      }
    ],
    
    // 已赠出
    myReceive: [
      {
        id: 4,
        courseName: 'Python数据分析',
        sender: '赵六',
        status: 'pending',
        sendTime: '2024-10-20 09:15:30',
        receiveTime: '2024-10-20 14:20:15',
        price: 599,
        message: '赵六你好，数据分析是未来的趋势，这门Python课程详细讲解了Pandas、NumPy、Matplotlib等核心库的使用。希望你能掌握数据清洗、分析和可视化的技能，在数据科学领域大展宏图！祝你学习愉快！',
        avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Python%20data%20analysis%20course%20cover%2C%20charts%20and%20graphs%2C%20modern%20design&image_size=landscape_16_9'
      },
      {
        id: 5,
        courseName: 'React实战教程',
        sender: '钱七',
        status: 'received',
        sendTime: '2024-10-15 16:30:45',
        receiveTime: '2024-10-15 18:15:20',
        price: 329,
        message: '钱七你好，React是前端必备技能，这门实战教程通过多个真实项目带你深入理解组件化开发、状态管理、路由配置等核心概念。希望你能学有所成，在React开发道路上越走越远！',
        avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=React%20practical%20tutorial%20course%20cover%2C%20component%20architecture%2C%20modern%20design&image_size=landscape_16_9'
      },
      {
        id: 6,
        courseName: '直播：TypeScript从入门到精通',
        sender: '孙八',
        status: 'received',
        sendTime: '2024-10-10 20:00:00',
        receiveTime: '2024-10-10 20:30:00',
        price: 449,
        message: '孙八你好，TypeScript让代码更规范，这门直播课程从基础语法到高级特性，带你全面掌握TS的强大功能。希望你能成为优秀的开发者，写出更安全、更易维护的代码！加油！',
        avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=TypeScript%20from%20beginner%20to%20master%20course%20cover%2C%20live%20streaming%2C%20modern%20design&image_size=landscape_16_9'
      }
    ]
  },
  
  // 消息
  messages: [
    {
      id: 1,
      avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20avatar%20portrait%20of%20a%20Chinese%20man&image_size=square',
      nickname: '张三',
      replyContent: '这个课程讲得非常详细，老师的讲解方式很生动，让我对前端开发有了更深入的理解，收获很多！特别是关于组件化开发的部分，非常实用。',
      myComment: '感谢您的反馈，我们会继续努力提供更好的课程内容，不断优化课程质量，希望您能在学习过程中获得更多收获，如有任何问题，随时可以向我们咨询。',
      time: '2024-11-02 10:00:00',
      type: 'reply',
      read: false
    },
    {
      id: 2,
      avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20avatar%20portrait%20of%20a%20Chinese%20woman&image_size=square',
      nickname: '李四',
      replyContent: '老师讲得非常清楚，易懂！特别是对于复杂概念的讲解，通过实际案例让我们更容易理解，课程结构也很合理，从基础到进阶，循序渐进。',
      myComment: '谢谢支持，有问题随时交流。我们会根据学员的反馈不断调整课程内容和讲解方式，确保每个学员都能跟上学习进度，获得最好的学习效果。',
      time: '2024-11-01 15:30:00',
      type: 'reply',
      read: false
    },
    {
      id: 3,
      avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20avatar%20portrait%20of%20a%20Chinese%20man&image_size=square',
      nickname: '王五',
      replyContent: '赞了你的评论',
      myComment: 'Vue3的响应式原理确实很精妙，通过Proxy实现的响应式系统比Vue2的Object.defineProperty更加灵活和强大，能够更好地处理嵌套对象和数组的变化。',
      time: '2024-10-30 09:00:00',
      type: 'like',
      read: true
    },
    {
      id: 4,
      avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20avatar%20portrait%20of%20a%20Chinese%20woman&image_size=square',
      nickname: '赵六',
      replyContent: '这个实战项目很有参考价值，学到了很多实用的开发技巧和最佳实践，特别是在项目结构组织和代码优化方面，对我实际工作帮助很大。',
      myComment: '很高兴能帮到你，继续加油！实战项目是巩固理论知识的最好方式，希望你能将学到的知识应用到实际工作中，不断提升自己的开发能力。',
      time: '2024-10-28 14:20:00',
      type: 'reply',
      read: true
    }
  ],
  
  // 通知
  notifications: [
    {
      id: 1,
      type: 'course',
      avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=course%20notification%20icon&image_size=square',
      title: '开课提醒',
      courseName: 'Vue3从入门到精通',
      teacher: '张老师',
      startTime: '2024-11-15 20:00:00',
      time: '2024-11-14 08:00:00',
      read: false
    },
    {
      id: 2,
      type: 'course',
      avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=course%20notification%20icon&image_size=square',
      title: '开课提醒',
      courseName: 'React实战项目开发',
      teacher: '李老师',
      startTime: '2024-11-16 19:30:00',
      time: '2024-11-15 09:00:00',
      read: false
    },
    {
      id: 3,
      type: 'course',
      avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=course%20notification%20icon&image_size=square',
      title: '开课提醒',
      courseName: 'JavaScript高级编程',
      teacher: '王老师',
      startTime: '2024-11-17 20:00:00',
      time: '2024-11-16 10:00:00',
      read: true
    },
    {
      id: 4,
      type: 'course',
      avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=course%20notification%20icon&image_size=square',
      title: '开课提醒',
      courseName: 'Node.js后端开发',
      teacher: '赵老师',
      startTime: '2024-11-18 19:30:00',
      time: '2024-11-17 11:00:00',
      read: true
    }
  ]
}

export default [
  {
    url: '/api/user/gift/my_receive',
    method: 'get',
    response: () => {
      return {
        code: 200,
        message: 'success',
        data: userCenterData.giftRecords.myReceive
      }
    }
  },
  {
    url: '/api/user/gift/my_sent',
    method: 'get',
    response: () => {
      return {
        code: 200,
        message: 'success',
        data: userCenterData.giftRecords.myGift
      }
    }
  },
  {
    url: '/api/user/gift/detail/:id',
    method: 'get',
    response: (req) => {
      const id = parseInt(req.url.split('/').pop())
      const allGifts = [...userCenterData.giftRecords.myGift, ...userCenterData.giftRecords.myReceive]
      const gift = allGifts.find(item => item.id === id)
      return {
        code: 200,
        message: 'success',
        data: gift ? [gift] : []
      }
    }
  },
  {
    url: '/api/user/info',
    method: 'get',
    response: () => {
      return {
        code: 200,
        message: 'success',
        data: userCenterData.userInfo
      }
    }
  },
  {
    url: '/api/user/message',
    method: 'get',
    response: () => {
      return {
        code: 200,
        message: 'success',
        data: userCenterData.messages
      }
    }
  },
  {
    url: '/api/user/notification',
    method: 'get',
    response: () => {
      return {
        code: 200,
        message: 'success',
        data: userCenterData.notifications
      }
    }
  }
]
