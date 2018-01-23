import Vue from 'vue';
import Router from 'vue-router';
import reports_1 from '../components/reports_1';

import important_reports from '../components/important_reports';

import reports_2_1 from '../components/reports_2_1';
import reports_2_2 from '../components/reports_2_2';
import reports_2_3 from '../components/reports_2_3';
import reports_2_4 from '../components/reports_2_4';
import reports_2_5 from '../components/reports_2_5';
import reports_2_6 from '../components/reports_2_6';

import reports_3_1 from '../components/reports_3_1';
import reports_3_2 from '../components/reports_3_2';
import reports_3_3 from '../components/reports_3_3';
import reports_3_4 from '../components/reports_3_4';
import reports_3_5 from '../components/reports_3_5';
import reports_3_6 from '../components/reports_3_6';



Vue.use(Router)

export default new Router({
  routes: [

    //  首页
    {
      path: '/',
      name: '1',
      components: {
        'default': reports_1
      }
    },


    //  重点关注项
    {
      path: '/important',
      name: '2',          //  重点关注 name小于  第三层 name，因为在路由滑动效果中按大小分配
      components: {
        'default': reports_1,
        'subPage_4': important_reports
      }
    },



    {
      path: '/1',
      name: '2.1',
      components: {
        'default': reports_1,
        'subPage_2': reports_2_1
      }
    },
    {
      path: '/1/3',
      name: '3.1',
      components: {
        'subPage_2': reports_2_1,
        'subPage_3': reports_3_1,
        'subPage_4': important_reports
      }
    },



    {
      path: '/2',
      name: '2.2',
      components: {
        'default': reports_1,
        'subPage_2': reports_2_2
      }
    },
    {
      path: '/2/3',
      name: '3.2',
      components: {
        'subPage_2': reports_2_2,
        'subPage_3': reports_3_2,
        'subPage_4': important_reports
      }
    },



  	{
  	  path: '/3',
      name: '2.3',
      components: {
        'default': reports_1,
        'subPage_2': reports_2_3,
      }
  	},
    {
      path: '/3/3',
      name: '3.3',
      components: {
        'subPage_2': reports_2_3,
        'subPage_3': reports_3_3,
        'subPage_4': important_reports
      },
    },



    {
      path: '/4',
      name: '2.4',
      components: {
        'default': reports_1,
        'subPage_2': reports_2_4
      }
    },
    {
      path: '/4/3',
      name: '3.4',
      components: {
        'subPage_2': reports_2_4,
        'subPage_3': reports_3_4,
        'subPage_4': important_reports
      }
    },



    {
      path: '/5',
      name: '2.5',
      components: {
        'default': reports_1,
        'subPage_2': reports_2_5
      }
    },
    {
      path: '/5/3',
      name: '3.5',
      components: {
        'subPage_2': reports_2_5,
        'subPage_3': reports_3_5,
        'subPage_4': important_reports
      }
    },



    {
      path: '/6',
      name: '2.6',
      components: {
        'default': reports_1,
        'subPage_2': reports_2_6
      }
    },
    {
      path: '/6/3',
      name: '3.6',
      components: {
        'subPage_2': reports_2_6,
        'subPage_3': reports_3_6,
        'subPage_4': important_reports
      }
    }
  ]
})
