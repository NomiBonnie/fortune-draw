// 题库（6道，随机抽3道）
const allQuestions = [
    {
        id: 'location',
        emoji: '🏠',
        text: '你现在在哪儿过年？',
        options: [
            { emoji: '🏠', text: '老家，熟悉的床最香', value: 'hometown' },
            { emoji: '🏙️', text: '大城市，一个人也挺好', value: 'city' },
            { emoji: '✈️', text: '在路上，还没到呢', value: 'traveling' },
            { emoji: '🌴', text: '换个地方过年', value: 'vacation' }
        ]
    },
    {
        id: 'status',
        emoji: '😊',
        text: '今年春节你的状态是？',
        options: [
            { emoji: '😴', text: '躺平充电中', value: 'resting' },
            { emoji: '🍻', text: '每天都在局', value: 'socializing' },
            { emoji: '👨‍👩‍👧', text: '被亲戚包围', value: 'family' },
            { emoji: '💻', text: '还在工作...', value: 'working' }
        ]
    },
    {
        id: 'wish',
        emoji: '✨',
        text: '新年最想要的是？',
        options: [
            { emoji: '💰', text: '暴富', value: 'wealth' },
            { emoji: '❤️', text: '感情顺利', value: 'love' },
            { emoji: '🚀', text: '事业起飞', value: 'career' },
            { emoji: '🧘', text: '身心健康', value: 'health' },
            { emoji: '🎲', text: '随缘', value: 'random' }
        ]
    },
    {
        id: 'keyword',
        emoji: '🔥',
        text: '今年你的关键词更接近？',
        options: [
            { emoji: '🔥', text: '搞钱', value: 'money' },
            { emoji: '🌱', text: '成长', value: 'growth' },
            { emoji: '🎭', text: '尝试新东西', value: 'explore' },
            { emoji: '🛋️', text: '躺平也是正义', value: 'chill' }
        ]
    },
    {
        id: 'people',
        emoji: '👨‍👩‍👧‍👦',
        text: '今年除夕你和几个人一起过？',
        options: [
            { emoji: '🙋', text: '就我自己', value: 'alone' },
            { emoji: '👫', text: '2-3人，小而美', value: 'small' },
            { emoji: '👨‍👩‍👧‍👦', text: '4-6人，刚刚好', value: 'medium' },
            { emoji: '🎊', text: '7人以上，热热闹闹', value: 'large' }
        ]
    },
    {
        id: 'schedule',
        emoji: '🌙',
        text: '你最近的作息是？',
        options: [
            { emoji: '🌅', text: '早睡早起养生派', value: 'early' },
            { emoji: '🌙', text: '晚睡晚起夜猫子', value: 'late' },
            { emoji: '🎰', text: '完全随机，看心情', value: 'random' },
            { emoji: '😵', text: '什么作息？不存在的', value: 'chaos' }
        ]
    }
];

// 签文库（马年主题）
const fortunes = {
    signNames: [
        '马到功成', '龙马精神', '一马当先', '万马奔腾', '马上有喜',
        '天马行空', '马踏春风', '千里良驹', '骏马扬蹄', '马跃新程'
    ],
    blessings: {
        wealth: [
            '"今年的你如骏马奔腾，<br>财运挡都挡不住。"',
            '"马年财门大开，<br>意想不到的进账正在路上。"',
            '"你的财运如万马奔腾，<br>势不可挡。"'
        ],
        love: [
            '"今年会有人骑着白马来找你，<br>也可能你就是那匹白马。"',
            '"桃花运如春风拂面，<br>不经意间就会心动。"',
            '"马年的缘分来得猝不及防，<br>准备好了吗？"'
        ],
        career: [
            '"今年你会一马当先，<br>甩开所有人的视野。"',
            '"事业如骏马奔腾，<br>所到之处皆是坦途。"',
            '"马年你的才华将被看见，<br>准备接受掌声吧。"'
        ],
        health: [
            '"龙马精神护佑你，<br>今年身心都会轻盈。"',
            '"马年你会找到<br>最适合自己的节奏。"',
            '"今年的你，<br>内心会比以往更平静。"'
        ],
        random: [
            '"马年的惊喜藏在日常里，<br>保持好奇心。"',
            '"顺其自然的你，<br>今年会收获意外之喜。"',
            '"不强求，反而得到更多。<br>这就是你的马年。"'
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
            '初五那天适合发一条朋友圈',
            '三月有一笔意外进账',
            '今年的财运藏在「橙色」里'
        ],
        love: [
            '二月别删任何聊天记录',
            '回复消息别总是"哈哈哈"',
            '今年的桃花藏在朋友介绍里'
        ],
        career: [
            '周三适合谈重要的事',
            '有人夸你时，要相信是真的',
            '今年的贵人可能比你年轻'
        ],
        health: [
            '早起十分钟会带来惊喜',
            '今年试试以前没做过的运动',
            '深呼吸三次，好运就来'
        ],
        hometown: [
            '亲戚问工资时笑而不答最吉利',
            '有人给你夹菜时要说谢谢',
            '饭桌上的某句话藏着今年的密码'
        ],
        city: [
            '今年会在意想不到的地方遇到惊喜',
            '一个人的时候灵感最多',
            '给自己做顿好吃的会转运'
        ],
        resting: [
            '凌晨的灵感第二天还是会觉得好',
            '睡饱了再做决定',
            '躺着也能遇到好运'
        ],
        socializing: [
            '有人敬酒时说的话要记住',
            '今年的机会藏在饭局里',
            '多听少说，收获更多'
        ]
    },
    quotes: {
        wealth: [
            '"这钱怎么来的？"',
            '"等等，这是真的吗？"',
            '"原来赚钱可以这么轻松？"'
        ],
        love: [
            '"等等，这是在撩我？"',
            '"没想到会是 TA..."',
            '"原来被喜欢是这种感觉"'
        ],
        career: [
            '"没想到真的成了！"',
            '"终于被看见了"',
            '"原来我可以的"'
        ],
        health: [
            '"最近状态真的好好"',
            '"原来放松下来这么舒服"',
            '"今年是最轻松的一年"'
        ],
        random: [
            '"这也行？"',
            '"运气也太好了吧"',
            '"完全没想到！"'
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
    document.getElementById('currentQ').textContent = index + 1;
    document.getElementById('progressFill').style.width = `${((index + 1) / 3) * 100}%`;
    document.getElementById('questionEmoji').textContent = question.emoji;
    document.getElementById('questionText').textContent = question.text;
    
    const container = document.getElementById('optionsContainer');
    container.innerHTML = '';
    
    question.options.forEach(option => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerHTML = `<span class="emoji">${option.emoji}</span><span>${option.text}</span>`;
        btn.onclick = () => selectOption(question.id, option.value);
        container.appendChild(btn);
    });
}

// 选择选项
function selectOption(questionId, value) {
    answers[questionId] = value;
    
    if (currentQuestionIndex < 2) {
        currentQuestionIndex++;
        setTimeout(() => showQuestion(currentQuestionIndex), 200);
    } else {
        showPage('shake');
        setTimeout(startShaking, 500);
    }
}

// 摇签动画
function startShaking() {
    const tube = document.getElementById('bambooTube');
    const text = document.getElementById('shakeText');
    
    tube.classList.add('shaking');
    text.textContent = '正在解签...';
    
    // 摇签音效（可选）
    // playShakeSound();
    
    setTimeout(() => {
        tube.classList.remove('shaking');
        generateResult();
        showPage('result');
    }, 2500);
}

// 点击摇签
document.addEventListener('DOMContentLoaded', () => {
    const tube = document.getElementById('bambooTube');
    if (tube) {
        tube.onclick = startShaking;
    }
    
    // 更新访客计数
    const count = Math.floor(Math.random() * 5000) + 10000;
    document.getElementById('visitorCount').textContent = count.toLocaleString();
});

// 生成签文
function generateResult() {
    // 签名
    const signName = fortunes.signNames[Math.floor(Math.random() * fortunes.signNames.length)];
    document.getElementById('signName').textContent = `【 ${signName} 】`;
    
    // 签号
    const signNum = Math.floor(Math.random() * 99) + 1;
    const numMap = ['零','壹','贰','参','肆','伍','陆','柒','捌','玖'];
    const tens = Math.floor(signNum / 10);
    const ones = signNum % 10;
    let signNumText = '第 ';
    if (tens > 0) signNumText += numMap[tens] + '拾';
    if (ones > 0) signNumText += numMap[ones];
    signNumText += ' 签';
    document.getElementById('signNumber').textContent = signNumText;
    
    // 获取主要愿望类型
    const wishType = answers.wish || 'random';
    
    // 祝福语
    const blessings = fortunes.blessings[wishType];
    const blessing = blessings[Math.floor(Math.random() * blessings.length)];
    document.getElementById('blessingText').innerHTML = blessing;
    
    // 关键词（从愿望和其他答案中各取）
    const keywordsContainer = document.getElementById('keywords');
    keywordsContainer.innerHTML = '';
    
    let selectedKeywords = [];
    
    // 从愿望类型取一个
    if (fortunes.keywords[wishType]) {
        const wishKeywords = fortunes.keywords[wishType];
        selectedKeywords.push(wishKeywords[Math.floor(Math.random() * wishKeywords.length)]);
    }
    
    // 从位置取一个
    const locationType = answers.location;
    if (locationType && fortunes.keywords[locationType]) {
        const locKeywords = fortunes.keywords[locationType];
        selectedKeywords.push(locKeywords[Math.floor(Math.random() * locKeywords.length)]);
    }
    
    // 从状态取一个
    const statusType = answers.status;
    if (statusType && fortunes.keywords[statusType]) {
        const statusKeywords = fortunes.keywords[statusType];
        selectedKeywords.push(statusKeywords[Math.floor(Math.random() * statusKeywords.length)]);
    }
    
    // 确保有3个关键词
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
    if (fortunes.tips[answers.status]) tips = tips.concat(fortunes.tips[answers.status]);
    
    // 随机选3条
    const shuffledTips = tips.sort(() => Math.random() - 0.5).slice(0, 3);
    shuffledTips.forEach(tip => {
        const li = document.createElement('li');
        li.textContent = tip;
        tipsList.appendChild(li);
    });
    
    // 金句
    const quotes = fortunes.quotes[wishType];
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById('quoteText').textContent = quote;
}

// 分享
function shareResult() {
    if (navigator.share) {
        navigator.share({
            title: '我的马年签',
            text: '我抽到了一支马年好签！来测测你的运势吧~',
            url: window.location.href
        });
    } else {
        // 降级：复制链接
        navigator.clipboard.writeText(window.location.href);
        alert('链接已复制，快去分享给朋友吧！');
    }
}

// 重新抽签
function retry() {
    showPage('landing');
}
