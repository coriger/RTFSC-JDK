const glob = require('glob');
const path = require('path');
const fs = require('fs');

module.exports = {
    title: 'Java JDK源码笔记',
    description: 'Reading The Fucking Source Code —— JDK',
    keywords: 'RTFSC, JDK, Source Code',
    markdown: {
        // 代码显示行号
        // lineNumbers: true,
    },
    author: 'Hurley Huang',
    head: [
        ['link', { rel: 'icon', href: '/icon.png' }]
    ],
    plugins: [
        ['@vuepress/back-to-top'],
        ['vuepress-plugin-code-copy', {
            color: "#737378",
            backgroundTransition: false,
        }]
    ],
    themeConfig: {
        search: true, //搜索
        searchMaxSuggestions: 10,
        sidebarDepth: 2,
        nav: [ // 导航栏配置
            { text: '首页', link: '/' },
            { text: '源码笔记', link: '/notes/' },
            {
                text: '关于我',
                items: [
                    { text: 'Blog', link: 'https://blog.hurley.fun' },
                    { text: 'Tech Site', link: 'https://tech.hurley.fun' },
                    { text: 'Portfolio', link: 'https://hurley.fun' }
                ]
            }
        ],
        sidebar: loadSidebarContents(), // 侧边栏配置
        docsDir: 'docs',
        docsBranch: 'master',
        lastUpdated: '上次更新',
        repo: 'HurleyJames/RTFSC-JDK',
        repoLabel: 'Github',
        editLinks: true,
        editLinkText: '在Github上编辑此页'
    }
}

function loadSidebarContents() {
    const sidebarMap = {};
    const set = new Set();
    glob.sync(`docs/**`)
        .map(dir => dir.replace('docs', ''))
        .filter(dir => path.dirname(dir) !== '.')
        .forEach(dir => set.add(path.dirname(dir)));
    Array.from(set)
        .sort((a, b) => a === b ? 0 : a > b ? -1 : 1)
        .forEach(dir => {
            const filePath = path.resolve(__dirname, `../${dir}/manifest`);
            const manifest = fs.existsSync(`${filePath}.js`) ? require(filePath) : {};
            const sidebarList = loadDirContents(dir.substring(1));
            const sortFn = manifest.sort ? sidebarList.sort : el => el;
            sidebarMap[`${dir}/`] = sortWrapper(sidebarList, sortFn, manifest.sortFn);
        });
    return sidebarMap
}

function loadDirContents(dir) {
    return ['', ...glob.sync(`docs/${dir}/*.md`)
        .map(f => f.replace('docs/', '')
            .replace(dir + '/', '')
            .replace('\.md', ''))
        .filter(e => e !== 'index')
    ];
}

function sortWrapper(iterableObject, sortFn, compareFn) {
    sortFn.call(iterableObject, compareFn);
    return iterableObject;
}