let Mock = require('mockjs')
var Random = Mock.Random

Random.date('yyyy-MM-dd')
Random.cname()
Random.province()
Random.city()
Random.county()
Random.zip()
Random.cword(4)
Random.ctitle()

Mock.mock('http://mc.data/api-dev/banner', {
  code: 200,
  msg: 'success',
  data: {
    ImgItem: [
      {
        title: 'banner1',
        src: '/static/images/OA_banner1.jpg',
        desc: '极光'
      },
      {
        title: 'banner2',
        src: '/static/images/OA_banner2.jpg',
        desc: '猫'
      },
      {
        title: 'banner3',
        src: '/static/images/OA_banner3.jpg',
        desc: '星空'
      },
      {
        title: 'banner4',
        src: '/static/images/OA_banner4.jpg',
        desc: '深色调'
      },
      {
        title: 'banner5',
        src: '/static/images/OA_banner5.jpg',
        desc: '湖泊'
      }
    ]
  }
})

Mock.mock('http://mc.data/api-dev/table', {
  code: 200,
  msg: 'success',
  data: {
    tableData: [
      {
        date: '@date',
        name: '@cname',
        province: '@province',
        city: '@city',
        address: '@province@city@county',
        zip: '@zip',
        tag: '@cword'
      }, {
        date: '@date',
        name: '@cname',
        province: '@province',
        city: '@city',
        address: '@province@city@county',
        zip: '@zip',
        tag: '@cword'
      }, {
        date: '@date',
        name: '@cname',
        province: '@province',
        city: '@city',
        address: '@province@city@county',
        zip: '@zip',
        tag: '@cword'
      }, {
        date: '@date',
        name: '@cname',
        province: '@province',
        city: '@city',
        address: '@province@city@county',
        zip: '@zip',
        tag: '@cword'
      }, {
        date: '@date',
        name: '@cname',
        province: '@province',
        city: '@city',
        address: '@province@city@county',
        zip: '@zip',
        tag: '@cword'
      }, {
        date: '@date',
        name: '@cname',
        province: '@province',
        city: '@city',
        address: '@province@city@county',
        zip: '@zip',
        tag: '@cword'
      }, {
        date: '@date',
        name: '@cname',
        province: '@province',
        city: '@city',
        address: '@province@city@county',
        zip: '@zip',
        tag: '@cword'
      }
    ]
  }
})

Mock.mock('http://mc.data/api-dev/chars', {
  code: 200,
  msg: 'success',
  data: {
    chartData: {
      columns: ['日期', '成本', '利润', '占比', '其他'],
      rows: [
        { '日期': '1月1日', '成本|1000-10000': 2000, '利润|1000-10000': 3000, '占比|0.1-0.99': 0.3, '其他|100-1000': 200 },
        { '日期': '1月2日', '成本|1000-10000': 2000, '利润|1000-10000': 3000, '占比|0.1-0.99': 0.4, '其他|100-1000': 200 },
        { '日期': '1月3日', '成本|1000-10000': 2000, '利润|1000-10000': 3000, '占比|0.1-0.99': 0.5, '其他|100-1000': 300 },
        { '日期': '1月4日', '成本|1000-10000': 2000, '利润|1000-10000': 3000, '占比|0.1-0.99': 0.4, '其他|100-1000': 400 }
      ]
    }
  }
})

Mock.mock('http://mc.data/api-dev/login', {
  code: 200,
  msg: 'success',
  data: {}
})

Mock.mock('http://mc.data/api-dev/waterfall', {
  code: 200,
  msg: 'success',
  data: {
    waterData: [
      {
        src: '/static/images/OA_person1.jpg',
        name: '@cname',
        title: '@ctitle'
      },
      {
        src: '/static/images/OA_person2.png',
        name: '@cname',
        title: '@ctitle'
      },
      {
        src: '/static/images/OA_person3.jpg',
        name: '@cname',
        title: '@ctitle'
      },
      {
        src: '/static/images/OA_person4.jpg',
        name: '@cname',
        title: '@ctitle'
      },
      {
        src: '/static/images/OA_person5.png',
        name: '@cname',
        title: '@ctitle'
      },
      {
        src: '/static/images/OA_person6.jpeg',
        name: '@cname',
        title: '@ctitle'
      },
      {
        src: '/static/images/OA_person7.png',
        name: '@cname',
        title: '@ctitle'
      },
      {
        src: '/static/images/OA_person8.jpg',
        name: '@cname',
        title: '@ctitle'
      },
      {
        src: '/static/images/OA_person9.jpg',
        name: '@cname',
        title: '@ctitle'
      },
      {
        src: '/static/images/OA_person10.jpeg',
        name: '@cname',
        title: '@ctitle'
      },
      {
        src: '/static/images/OA_person11.jpeg',
        name: '@cname',
        title: '@ctitle'
      },
      {
        src: '/static/images/OA_person12.jpg',
        name: '@cname',
        title: '@ctitle'
      }
    ]
  }
})
