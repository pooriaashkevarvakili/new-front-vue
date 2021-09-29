/*=========================================================================================
  File Name: menus.js
  Description: All menu of application can be config here.

  ----------------------------------------------------------------------------------------
  Item Name: Hacoupian - Technology Dep.
  Author: Ahmadreza Azizan

==========================================================================================*/


interface Menu {
    id: String,
    path?: String,
    name: String,
    icon?: String,
    ac_id?: String,
    children?: Array<Menu>
}


export default <Array<Menu>>[
    {
        id: 'dashboard',
        name: 'menu.dashboard',
        url: '/dashboard',
        icon: 'i-dashboard',
    },
    {
        id: 'job-offer',
        name: 'menu.job-offer',
        icon: 'i-book',
        children: [
            {
                id: 'job-offer-list',
                path: '/job-offer',
                title: 'menu.job-offer-list',
            }
        ]
    },
    {
        id: 'workspace',
        name: 'menu.workspace',
        path: '/workspace',
        icon: 'i-inbox-success'
    },
    {
        id: 'applicant',
        name: 'menu.applicant',
        path: '/application',
        icon: 'i-inbox-success'
    },
    {
        id: 'resume',
        name: 'menu.resume',
        path: '/resume',
        icon: 'i-inbox-success'
    },
    {
        id: 'mailroom',
        name: 'menu.mailroom',
        path: '/mainroom',
        icon: 'i-inbox-success'
    }
]
