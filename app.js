// 题库（10道，随机抽3道）
const allQuestions = [
    {
        id: 'location',
        text: '今年在哪过年',
        options: [
            { text: '老家', value: 'hometown' },
            { text: '大城市', value: 'city' },
            { text: '在路上', value: 'traveling' },
            { text: '换个地方', value: 'vacation' }
        ]
    },
    {
        id: 'status',
        text: '春节的状态',
        options: [
            { text: '躺平充电', value: 'resting' },
            { text: '每天有局', value: 'socializing' },
            { text: '亲戚包围', value: 'family' },
            { text: '还在工作', value: 'working' }
        ]
    },
    {
        id: 'wish',
        text: '新年最想要',
        options: [
            { text: '暴富', value: 'wealth' },
            { text: '感情顺利', value: 'love' },
            { text: '事业起飞', value: 'career' },
            { text: '身心健康', value: 'health' },
            { text: '随缘', value: 'random' }
        ]
    },
    {
        id: 'keyword',
        text: '今年的关键词',
        options: [
            { text: '搞钱', value: 'money' },
            { text: '成长', value: 'growth' },
            { text: '尝试新东西', value: 'explore' },
            { text: '躺平', value: 'chill' }
        ]
    },
    {
        id: 'people',
        text: '除夕和几人一起',
        options: [
            { text: '就我自己', value: 'alone' },
            { text: '两三人', value: 'small' },
            { text: '四到六人', value: 'medium' },
            { text: '七人以上', value: 'large' }
        ]
    },
    {
        id: 'schedule',
        text: '最近的作息',
        options: [
            { text: '早睡早起', value: 'early' },
            { text: '晚睡晚起', value: 'late' },
            { text: '完全随机', value: 'random' },
            { text: '什么作息', value: 'chaos' }
        ]
    },
    {
        id: 'kids',
        text: '过年有小朋友吗',
        options: [
            { text: '有 被包围', value: 'has_kids' },
            { text: '要发很多红包', value: 'give_hongbao' },
            { text: '没有 清净', value: 'no_kids' },
            { text: '今年可能会有', value: 'expecting' }
        ]
    },
    {
        id: 'relationship',
        text: '今年的感情状态',
        options: [
            { text: '有对象', value: 'married' },
            { text: '单身', value: 'single' },
            { text: '有点暧昧', value: 'dating' },
            { text: '不想说', value: 'secret' }
        ]
    },
    {
        id: 'food',
        text: '过年最期待吃',
        options: [
            { text: '年夜饭', value: 'dumplings' },
            { text: '各种肉', value: 'meat' },
            { text: '零食甜点', value: 'snacks' },
            { text: '什么都行', value: 'anything' }
        ]
    },
    {
        id: 'hongbao',
        text: '今年红包你是',
        options: [
            { text: '收的', value: 'receive' },
            { text: '发的', value: 'give' },
            { text: '左手收右手发', value: 'both' },
            { text: '跟红包无关', value: 'none' }
        ]
    }
];

// 签文库
const fortunes = {
    signNames: [
        '马到功成', '龙马精神', '一马当先', '万马奔腾', '马上有喜',
        '天马行空', '马踏春风', '千里良驹', '骏马扬蹄', '马跃新程'
    ],
    blessings: {
        wealth: [
            '今年的你如骏马奔腾<br>财运挡都挡不住',
            '马年财门大开<br>意想不到的进账正在路上',
            '你的财运如万马奔腾<br>势不可挡'
        ],
        love: [
            '今年会有人骑着白马来找你<br>也可能你就是那匹白马',
            '桃花运如春风拂面<br>不经意间就会心动',
            '马年的缘分来得猝不及防<br>准备好了吗'
        ],
        career: [
            '今年你会一马当先<br>甩开所有人的视野',
            '事业如骏马奔腾<br>所到之处皆是坦途',
            '马年你的才华将被看见<br>准备接受掌声吧'
        ],
        health: [
            '龙马精神护佑你<br>今年身心都会轻盈',
            '马年你会找到<br>最适合自己的节奏',
            '今年的你<br>内心会比以往更平静'
        ],
        random: [
            '马年的惊喜藏在日常里<br>保持好奇心',
            '顺其自然的你<br>今年会收获意外之喜',
            '不强求 反而得到更多<br>这就是你的马年'
        ]
    },
    keywords: {
        wealth: ['财源滚滚', '意外进账', '红包手气王', '投资眼光准'],
        love: ['怦然心动', '桃花朵朵', '真心被珍惜', '甜蜜加倍'],
        career: ['一马当先', '升职加薪', '贵人相助', '能力被认可'],
        health: ['龙马精神', '元气满满', '内心平静', '身轻如燕'],
        random: ['惊喜连连', '好运不断', '随遇而安', '万事顺心'],
        hometown: ['归乡得福', '家人围绕', '温暖满满'],
        city: ['独立精彩', '自在生活', '城市机遇'],
        resting: ['充电成功', '能量满格', '满血复活'],
        socializing: ['人脉拓展', '饭局贵人', '朋友给力'],
        alone: ['独处智慧', '自我成长', '内心丰盛'],
        large: ['热闹有福', '人气爆棚', '众人喜爱']
    },
    tips: {
        general: [
            '遇到属马的人要多留意',
            '今年的幸运数字是 3 和 8',
            '穿金色的东西会带来好运'
        ],
        wealth: [
            '三月有一笔意外进账',
            '今年的财运藏在橙色里',
            '周三适合谈钱的事'
        ],
        love: [
            '二月别删任何聊天记录',
            '今年的桃花藏在朋友介绍里',
            '主动一点会有惊喜'
        ],
        career: [
            '周三适合谈重要的事',
            '有人夸你时 要相信是真的',
            '今年的贵人可能比你年轻'
        ],
        health: [
            '早起十分钟会带来惊喜',
            '今年试试以前没做过的运动',
            '深呼吸三次 好运就来'
        ],
        hometown: [
            '饭桌上的某句话藏着今年的密码',
            '有人给你夹菜时要说谢谢',
            '跟家人聊聊以前的事'
        ],
        city: [
            '一个人的时候灵感最多',
            '给自己做顿好吃的会转运',
            '今年会在意想不到的地方遇到惊喜'
        ]
    }
};

// 状态管理
let selectedQuestions = [];
let currentQuestionIndex = 0;
let answers = {};

// 随机选择3道题
function selectRandomQuestions() {
    const shuffled = [...allQuestions].sort(() => Math.random() - 0.5);
    selectedQuestions = shuffled.slice(0, 3);
}

// 切换页面
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById(pageId).classList.add('active');
}

// 更新进度
function updateProgressDots(index) {
    for (let i = 1; i <= 3; i++) {
        const node = document.getElementById(`node${i}`);
        node.classList.remove('active', 'completed');
        if (i < index + 1) {
            node.classList.add('completed');
        } else if (i === index + 1) {
            node.classList.add('active');
        }
    }
    // 更新连接线
    for (let i = 1; i <= 2; i++) {
        const seg = document.getElementById(`seg${i}`);
        seg.classList.remove('active', 'completed');
        if (i <= index) {
            seg.classList.add('completed');
        }
    }
}

// 开始答题
function startQuestions() {
    selectRandomQuestions();
    currentQuestionIndex = 0;
    answers = {};
    showQuestion(0);
    showPage('question');
}

// 显示问题
function showQuestion(index) {
    const question = selectedQuestions[index];
    updateProgressDots(index);
    document.getElementById('questionText').textContent = question.text;
    
    const container = document.getElementById('optionsContainer');
    container.innerHTML = '';
    
    question.options.forEach(option => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = option.text;
        btn.onclick = () => selectOption(question.id, option.value);
        container.appendChild(btn);
    });
}

// 选择选项
function selectOption(questionId, value) {
    answers[questionId] = value;
    
    if (currentQuestionIndex < 2) {
        currentQuestionIndex++;
        setTimeout(() => showQuestion(currentQuestionIndex), 150);
    } else {
        showPage('shake');
    }
}

// 摇签动画
function startShaking() {
    const char = document.getElementById('shakeChar');
    if (char.classList.contains('shaking')) return;
    
    char.classList.add('shaking');
    
    setTimeout(() => {
        char.classList.remove('shaking');
        generateResult();
        showPage('result');
    }, 2000);
}

// 生成签文
function generateResult() {
    // 签名
    const signName = fortunes.signNames[Math.floor(Math.random() * fortunes.signNames.length)];
    document.getElementById('signName').textContent = signName;
    
    // 获取主要愿望类型
    const wishType = answers.wish || 'random';
    
    // 祝福语
    const blessings = fortunes.blessings[wishType];
    const blessing = blessings[Math.floor(Math.random() * blessings.length)];
    document.getElementById('blessingText').innerHTML = blessing;
    
    // 关键词
    const keywordsContainer = document.getElementById('keywords');
    keywordsContainer.innerHTML = '';
    
    let selectedKeywords = [];
    
    if (fortunes.keywords[wishType]) {
        const wishKeywords = fortunes.keywords[wishType];
        selectedKeywords.push(wishKeywords[Math.floor(Math.random() * wishKeywords.length)]);
    }
    
    const locationType = answers.location;
    if (locationType && fortunes.keywords[locationType]) {
        const locKeywords = fortunes.keywords[locationType];
        selectedKeywords.push(locKeywords[Math.floor(Math.random() * locKeywords.length)]);
    }
    
    const statusType = answers.status;
    if (statusType && fortunes.keywords[statusType]) {
        const statusKeywords = fortunes.keywords[statusType];
        selectedKeywords.push(statusKeywords[Math.floor(Math.random() * statusKeywords.length)]);
    }
    
    while (selectedKeywords.length < 3) {
        const randomType = Object.keys(fortunes.keywords)[Math.floor(Math.random() * Object.keys(fortunes.keywords).length)];
        const randomKeywords = fortunes.keywords[randomType];
        const kw = randomKeywords[Math.floor(Math.random() * randomKeywords.length)];
        if (!selectedKeywords.includes(kw)) {
            selectedKeywords.push(kw);
        }
    }
    
    selectedKeywords.slice(0, 3).forEach(kw => {
        const span = document.createElement('span');
        span.className = 'keyword';
        span.textContent = kw;
        keywordsContainer.appendChild(span);
    });
    
    // 提醒
    const tipsList = document.getElementById('tipsList');
    tipsList.innerHTML = '';
    
    let tips = [...fortunes.tips.general];
    if (fortunes.tips[wishType]) tips = tips.concat(fortunes.tips[wishType]);
    if (fortunes.tips[answers.location]) tips = tips.concat(fortunes.tips[answers.location]);
    
    const shuffledTips = tips.sort(() => Math.random() - 0.5).slice(0, 3);
    shuffledTips.forEach(tip => {
        const li = document.createElement('li');
        li.textContent = tip;
        tipsList.appendChild(li);
    });
}

// 分享
function shareResult() {
    if (navigator.share) {
        navigator.share({
            title: '我的马年签',
            text: '我抽到了一支马年好签',
            url: window.location.href
        });
    } else {
        navigator.clipboard.writeText(window.location.href);
        alert('链接已复制');
    }
}

// 再抽一签
function retry() {
    startQuestions();
}

// 重新开始
function restart() {
    showPage('landing');
}
