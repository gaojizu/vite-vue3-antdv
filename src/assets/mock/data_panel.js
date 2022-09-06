/*
 * @use: 
 * @description: 数据看板mock数据
 * @SpecialInstructions: 无
 * @Author: clearlove
 * @Date: 2022-09-02 14:39:29
 * @LastEditTime: 2022-09-02 15:21:20
 * @FilePath: /vite-vue3-antdv/src/assets/mock/data_panel.js
 */
const dataLists = {
    projectsList: [
        {
            name: '项目1',
            desc: '项目1描述'
        },
        {
            name: '项目2',
            desc: '项目2描述'
        }, {
            name: '项目3',
            desc: '项目3描述'
        }
    ],
    onLineLists: [
        {
            name: 'JERY',
            phone: '188****0000'
        }, {
            name: 'JIM',
            phone: '188****0000'
        }, {
            name: 'MARY',
            phone: '188****0000'
        }
    ],
    focusLists: [
        {
            name: '小明',
            focusTime: new Date()
        }, {
            name: '小红',
            focusTime: new Date()
        }
    ],
    finishLists: [
        {
            name: 'name1',
            finishDate: new Date()
        },
        {
            name: 'name2',
            finishDate: new Date()
        },
    ]
}

export {
    dataLists
}