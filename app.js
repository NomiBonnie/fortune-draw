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
            { text: '完全随机', value: 'random_schedule' },
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
            { text: '有对象', value: 'taken' },
            { text: '单身', value: 'single' },
            { text: '有点暧昧', value: 'dating' },
            { text: '不想说', value: 'secret' }
        ]
    },
    {
        id: 'food',
        text: '过年最期待吃',
        options: [
            { text: '年夜饭', value: 'reunion' },
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

// ===== 丰富的签文库 =====

// 签名（20个，根据用户选择匹配）
const signNamePool = {
    wealth: ['金马腾飞', '马上有钱', '财源广进', '金玉满堂', '马踏金山'],
    love: ['马上有喜', '情定今朝', '心有所属', '鸾凤和鸣', '比翼双飞'],
    career: ['一马当先', '马到成功', '步步高升', '前程似锦', '青云直上'],
    health: ['龙马精神', '神采奕奕', '福寿康宁', '身心自在', '元气满满'],
    general: ['马踏春风', '万事如意', '吉祥如意', '紫气东来', '好运连连', '时来运转', '否极泰来', '柳暗花明']
};

// 祝福语模板（根据多个答案组合生成）
const blessingTemplates = {
    // 地点 × 愿望 组合
    'hometown_wealth': '回到熟悉的地方<br>财运却有意想不到的惊喜<br>老家的某个人会带来商机',
    'hometown_love': '故乡的月光下<br>旧人或新缘都在等你<br>这个春节 心会被温暖',
    'hometown_career': '离家越近 心越定<br>想清楚的事情回去就能做<br>家人的支持是你的底气',
    'hometown_health': '家的味道是最好的良药<br>今年的你需要慢下来<br>在熟悉的地方找回自己',
    'city_wealth': '城市的机会永远不缺<br>但今年你会抓住对的那一个<br>三月有好消息',
    'city_love': '大城市的孤独里<br>藏着一个懂你的人<br>保持出门 缘分在路上',
    'city_career': '留在城市是对的选择<br>今年你会被看见<br>准备好迎接新的邀请',
    'city_health': '城市节奏快 但你会找到平衡<br>今年试试一个人散步<br>答案在安静中出现',
    'traveling_wealth': '在路上的人运气不会差<br>旅途中会遇到贵人<br>意外的收获在等你',
    'traveling_love': '最美的相遇在路上<br>这个春节 打开心<br>缘分可能来自陌生城市',
    'traveling_career': '走出去看看<br>灵感会在旅途中降临<br>今年你需要打破常规',
    'traveling_health': '在路上的时候<br>身心都会被治愈<br>今年多走走 对你最好',
    'vacation_wealth': '换个环境 财运跟着换<br>今年适合尝试新领域<br>不熟悉的地方藏着金矿',
    'vacation_love': '换个地方过年<br>也许会遇到命中注定的人<br>保持微笑 好运自来',
    'vacation_career': '新环境带来新视角<br>今年你需要跳出舒适区<br>机会在意想不到的地方',
    'vacation_health': '换个地方 换个心情<br>今年你需要给自己放个假<br>休息好了才能走更远',

    // 状态 × 愿望 组合
    'resting_wealth': '养精蓄锐的人<br>财运会在准备好时到来<br>不急 好事在后头',
    'resting_love': '休息的时候最容易心动<br>今年的缘分来得轻松<br>不用刻意 自然最好',
    'resting_career': '今年先充电<br>下半年会有大动作<br>现在的休息是为了更好的出发',
    'resting_health': '懂得休息的人最聪明<br>今年你的身体会给你惊喜<br>慢下来 是对的',
    'socializing_wealth': '饭局里藏着财富密码<br>多听少说<br>有人会主动找你合作',
    'socializing_love': '热闹的人不会孤单太久<br>朋友会帮你牵线<br>聚会上留意一下',
    'socializing_career': '人脉就是资源<br>今年多和不同领域的人聊聊<br>贵人就在其中',
    'socializing_health': '热闹是热闹<br>但记得给自己留白<br>适度社交 身心都好',
    'family_wealth': '家人围绕的地方<br>财运也会围绕<br>长辈的一句话可能改变你',
    'family_love': '亲戚虽然烦<br>但红娘可能就藏在里面<br>今年听听长辈的话',
    'family_career': '家人的支持是你的后盾<br>今年大胆去做想做的事<br>他们会理解的',
    'family_health': '被亲戚包围也是一种幸福<br>今年学会在热闹中找到自己的节奏',
    'working_wealth': '还在工作的人<br>努力会被看见<br>年后有一笔意外收入',
    'working_love': '工作中可能遇到对的人<br>或者 先爱自己<br>今年感情顺其自然',
    'working_career': '春节还在工作<br>说明你是认真的<br>今年的坚持会有回报',
    'working_health': '辛苦了<br>但记得照顾好自己<br>身体是本钱 别透支',

    // 关键词相关
    'money_wealth': '搞钱的心老天都知道<br>今年财门大开<br>三月和八月留意机会',
    'growth_career': '想成长的人<br>宇宙会安排老师<br>今年你会遇到指路人',
    'explore_random': '尝试新东西的人<br>运气不会差<br>今年大胆一点',
    'chill_health': '躺平不是罪<br>今年适合养精蓄锐<br>内耗会减少 好事会发生',

    // 感情状态相关
    'taken_love': '有对象的今年更甜<br>小惊喜会不断出现<br>主动一点 会更好',
    'single_love': '单身不代表没有桃花<br>今年有人会闯入你的世界<br>准备好了吗',
    'dating_love': '暧昧的人今年会明朗<br>主动一步<br>或者等对方表白',
    'secret_love': '不想说就不说<br>但心里的人<br>今年会有结果',

    // 红包相关
    'receive_wealth': '今年红包收到手软<br>手气王非你莫属<br>别忘了感谢',
    'give_wealth': '发红包的人不会亏<br>给出去的会翻倍回来<br>这是规律',
    'both_wealth': '左手收右手发<br>财运流通中<br>今年钱会越用越多',

    // 小朋友相关
    'has_kids_random': '被小朋友包围是一种福气<br>他们会给你带来好运<br>认真听他们说的话',
    'expecting_love': '可能会有小朋友的今年<br>惊喜在路上<br>准备好迎接新生命的喜悦',

    // 作息相关
    'early_health': '早睡早起的人<br>今年精气神会特别好<br>好运从好习惯开始',
    'late_random': '晚睡晚起也有晚睡的好运<br>深夜的灵感不要忽略<br>今年的好事可能发生在夜里',
    'chaos_random': '作息混乱说明你在认真生活<br>今年会找到自己的节奏<br>不用强求 顺其自然'
};

// 默认祝福语（当没有匹配组合时使用）
const defaultBlessings = [
    '马年开门红<br>好事一件接一件<br>你值得所有的好运',
    '今年的你会闪闪发光<br>所有的努力都会被看见',
    '春风得意马蹄疾<br>今年的路会走得又稳又顺',
    '马年的你<br>心想事成不是梦<br>大胆许愿吧',
    '所有的等待都有意义<br>今年你会明白',
    '好运气藏在日常里<br>保持微笑<br>惊喜会自己找上门',
    '马年是你的年<br>放手去做想做的事<br>宇宙会帮你',
    '今年少一些内耗<br>多一些行动<br>结果会超出预期'
];

// 关键词池（更丰富）
const keywordPool = {
    wealth: ['财源广进', '意外进账', '投资有方', '贵人送财', '红包手气王', '正财旺盛', '偏财运佳'],
    love: ['桃花朵朵', '心有所属', '真心被珍惜', '浪漫来袭', '甜蜜升级', '良缘天成', '两情相悦'],
    career: ['步步高升', '贵人相助', '能力认可', '升职加薪', '机会主动来', '伯乐出现', '事业腾飞'],
    health: ['龙马精神', '身心平衡', '精力充沛', '元气满满', '内心平静', '睡眠改善', '活力四射'],
    random: ['惊喜连连', '好运不断', '心想事成', '万事顺遂', '时来运转', '柳暗花明', '否极泰来'],
    location: ['故土生金', '异乡贵人', '旅途惊喜', '环境助运'],
    status: ['人脉通达', '休养生息', '厚积薄发', '默默耕耘'],
    kids: ['童趣带福', '新生希望', '纯真之喜'],
    hongbao: ['红包连连', '财来财往', '财运亨通']
};

// ===== 提示语池（100+条）=====

// 幸运数字
const luckyNumbers = [
    '今年的幸运数字是 3',
    '今年的幸运数字是 6',
    '今年的幸运数字是 8',
    '今年的幸运数字是 9',
    '今年的幸运数字是 2 和 7',
    '今年的幸运数字是 3 和 8',
    '今年的幸运数字是 1 和 6',
    '今年的幸运数字是 5 和 9',
    '看到数字 168 要留意',
    '看到数字 888 是好兆头',
    '手机尾号带 6 的人是贵人',
    '楼层带 3 的地方有好运'
];

// 幸运颜色
const luckyColors = [
    '今年的幸运色是金色',
    '今年的幸运色是红色',
    '今年的幸运色是绿色',
    '今年的幸运色是蓝色',
    '今年的幸运色是白色',
    '今年的幸运色是橙色',
    '今年穿黄色会带来好运',
    '今年多用米白色的东西',
    '紫色今年对你特别好',
    '今年的财运藏在金色里',
    '今年的桃花藏在粉色里',
    '今年穿大地色系会有安全感',
    '亮色系会给你带来惊喜'
];

// 跟人相关（属相）
const zodiacTips = [
    '遇到属马的人要多留意',
    '属龙的人今年是你的贵人',
    '属兔的人会给你带来好消息',
    '属蛇的朋友今年会帮到你',
    '跟属狗的人合作会顺利',
    '属猴的人今年跟你特别投缘',
    '属牛的人可能会带来机会',
    '今年跟属羊的人多聊聊',
    '属虎的人今年会理解你',
    '属猪的朋友值得信任',
    '属鼠的人有意想不到的资源',
    '属鸡的人今年跟你有缘'
];

// 跟人相关（年龄/关系）
const peopleTips = [
    '今年的贵人可能比你年轻',
    '年长的朋友会给你好建议',
    '同龄人里有你的知己',
    '陌生人的话今年要多听听',
    '老朋友会带来惊喜',
    '新认识的人可能改变你的人生',
    '今年多跟小朋友相处',
    '长辈的一句话藏着密码',
    '多跟异性朋友交流会有收获',
    '同性朋友今年是你的后盾',
    '远方的朋友会带来消息',
    '邻居可能帮到你',
    '同事里有人在默默支持你'
];

// 时间相关
const timeTips = [
    '三月适合启动新计划',
    '四月是转运的月份',
    '五月会有心动的瞬间',
    '六月适合做重要决定',
    '七月是收获的开始',
    '八月是财运高峰',
    '九月适合出门旅行',
    '十月会有意外之喜',
    '周三适合谈重要的事',
    '周五的直觉特别准',
    '周末做的决定更靠谱',
    '每月初一许愿最灵',
    '每月十五适合反思',
    '早上做的决定比晚上好'
];

// 行为/习惯相关
const actionTips = [
    '今年少说多做',
    '主动一点会有惊喜',
    '深呼吸三次好运就来',
    '不顺的时候喝杯热水',
    '早起十分钟会有惊喜',
    '睡前想三件好事',
    '每天对镜子笑一笑',
    '把想法写下来会更清晰',
    '今年试试以前没做过的事',
    '出门前整理一下会转运',
    '给自己做顿好吃的会转运',
    '换个发型会带来好运',
    '收拾房间能赶走霉运',
    '今年的朋友圈可以多发',
    '偶尔断网一天会有惊喜'
];

// 物品相关
const objectTips = [
    '穿金色的东西会带来好运',
    '今年随身带点红色的小物件',
    '玉石类的配饰对你好',
    '今年可以换个新钱包',
    '旧照片里藏着今年的答案',
    '书架上的书今年要翻一翻',
    '绿植会给你带来好运气',
    '今年适合换个新头像',
    '手表今年会给你带来好运',
    '把不用的东西清理掉会转运'
];

// 食物相关
const foodTips = [
    '今年多吃点甜的会开心',
    '红色的水果对你好',
    '今年试试以前没吃过的菜',
    '和朋友吃饭比一个人吃运气好',
    '早餐好好吃会一整天顺利',
    '今年的好运藏在汤里',
    '吃火锅的时候适合聊正事'
];

// 地点相关
const placeTips = [
    '今年会在意想不到的地方遇到惊喜',
    '咖啡店是你的幸运地点',
    '有水的地方对你好',
    '高处能让你想得更清楚',
    '图书馆或书店有好运气',
    '今年多去公园走走',
    '老地方可能有新机会'
];

// 社交媒体/现代相关
const modernTips = [
    '朋友圈第一个点赞的人是贵人',
    '今年的机会可能来自私信',
    '有人突然找你聊天要重视',
    '被推荐的内容今年要多看看',
    '旧照片发出来会有好事',
    '今年的表情包要用开心的',
    '点赞过的人今年会帮到你'
];

// 心态相关
const mindsetTips = [
    '有人夸你时要相信是真的',
    '今年的直觉特别准',
    '别想太多 做了再说',
    '焦虑的时候出去走走',
    '今年少内耗 多行动',
    '相信自己 你比想象中厉害',
    '今年适合说「好」',
    '拒绝不喜欢的事会带来好运',
    '顺其自然反而更好',
    '今年放过自己 会更轻松'
];

// 整合所有 tips
const tipsPool = {
    numbers: luckyNumbers,
    colors: luckyColors,
    zodiac: zodiacTips,
    people: peopleTips,
    time: timeTips,
    action: actionTips,
    object: objectTips,
    food: foodTips,
    place: placeTips,
    modern: modernTips,
    mindset: mindsetTips,
    // 按类型分类
    wealth: [
        '三月有一笔意外进账',
        '周三适合谈钱的事',
        '投资前先睡一觉再决定',
        '朋友介绍的机会要认真考虑',
        '八月是财运高峰',
        '别轻易借钱出去',
        '今年的财运藏在人脉里',
        '存钱比花钱运气好',
        '二手的东西今年能卖好价'
    ],
    love: [
        '二月别删任何聊天记录',
        '主动一点会有惊喜',
        '今年的桃花藏在朋友介绍里',
        '前任如果找你 不要回',
        '五月会有心动的瞬间',
        '穿粉色会增加魅力',
        '异地恋今年会有结果',
        '暧昧的关系今年会明朗',
        '今年适合表白'
    ],
    career: [
        '周一汇报工作运气最好',
        '今年的贵人可能比你年轻',
        '六月适合跳槽或谈加薪',
        '主动争取会得到意外支持',
        '同事的建议要认真听',
        '今年适合学新技能',
        '简历可以更新一下了',
        '今年的机会藏在细节里'
    ],
    health: [
        '早起十分钟会有惊喜',
        '今年试试以前没做过的运动',
        '四月开始调整作息',
        '少看手机眼睛会感谢你',
        '今年适合学冥想或瑜伽',
        '走路比跑步更适合你今年',
        '今年要多喝水',
        '睡眠是今年最重要的事'
    ],
    location: {
        hometown: [
            '饭桌上的某句话藏着今年的密码',
            '有人给你夹菜时要说谢谢',
            '跟家人聊聊以前的事',
            '老家的人今年会帮到你',
            '回去一趟会想通很多事'
        ],
        city: [
            '一个人的时候灵感最多',
            '给自己做顿好吃的会转运',
            '今年会在意想不到的地方遇到惊喜',
            '城市里的陌生人可能是贵人',
            '换个常去的咖啡店会有新发现'
        ],
        traveling: [
            '旅途中遇到的人可能改变你的人生',
            '别赶时间 慢慢走',
            '拍照要发出来 会有好事',
            '迷路的时候最容易遇到惊喜',
            '跟当地人聊天会有收获'
        ],
        vacation: [
            '换个地方会换个运气',
            '度假时的想法很重要 记下来',
            '遇到当地人要礼貌',
            '旅行中买的东西会带来好运',
            '换个环境能想通一些事'
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
    const sticks = document.getElementById('qianSticks');
    if (sticks.classList.contains('shaking')) return;
    
    sticks.classList.add('shaking');
    
    setTimeout(() => {
        sticks.classList.remove('shaking');
        generateResult();
        showPage('result');
    }, 2000);
}

// 从数组随机选一个
function pickRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

// 生成签文（核心逻辑 - 根据答案组合生成）
function generateResult() {
    const answerKeys = Object.keys(answers);
    const answerValues = Object.values(answers);
    
    // ===== 1. 签名（根据愿望类型选择）=====
    let signNameList = [...signNamePool.general];
    
    // 根据愿望添加专属签名
    if (answers.wish && signNamePool[answers.wish]) {
        signNameList = signNameList.concat(signNamePool[answers.wish]);
    }
    // 感情状态也影响签名
    if (answers.relationship === 'single' || answers.relationship === 'dating') {
        signNameList = signNameList.concat(signNamePool.love);
    }
    // 关键词影响
    if (answers.keyword === 'money') {
        signNameList = signNameList.concat(signNamePool.wealth);
    }
    
    const signName = pickRandom(signNameList);
    document.getElementById('signName').textContent = signName;
    
    // ===== 2. 祝福语（根据答案组合匹配）=====
    let blessing = null;
    
    // 尝试各种组合匹配
    const location = answers.location;
    const status = answers.status;
    const wish = answers.wish || 'random';
    const relationship = answers.relationship;
    const keyword = answers.keyword;
    const kids = answers.kids;
    const schedule = answers.schedule;
    const hongbao = answers.hongbao;
    
    // 优先级：地点+愿望 > 状态+愿望 > 感情 > 红包 > 关键词 > 默认
    const combos = [
        `${location}_${wish}`,
        `${status}_${wish}`,
        `${relationship}_love`,
        `${hongbao}_wealth`,
        `${keyword}_${wish === 'random' ? 'random' : wish}`,
        `${kids}_random`,
        `${schedule}_${wish === 'health' ? 'health' : 'random'}`
    ];
    
    for (const combo of combos) {
        if (blessingTemplates[combo]) {
            blessing = blessingTemplates[combo];
            break;
        }
    }
    
    // 没有匹配就用默认
    if (!blessing) {
        blessing = pickRandom(defaultBlessings);
    }
    
    document.getElementById('blessingText').innerHTML = blessing;
    
    // ===== 3. 关键词（根据答案组合，确保不重复）=====
    const keywordsContainer = document.getElementById('keywords');
    keywordsContainer.innerHTML = '';
    
    let selectedKeywords = new Set();
    
    // 根据各种答案收集关键词
    if (wish && keywordPool[wish]) {
        selectedKeywords.add(pickRandom(keywordPool[wish]));
    }
    if (keyword === 'money') {
        selectedKeywords.add(pickRandom(keywordPool.wealth));
    }
    if (relationship && (relationship === 'single' || relationship === 'dating')) {
        selectedKeywords.add(pickRandom(keywordPool.love));
    }
    if (hongbao && (hongbao === 'receive' || hongbao === 'both')) {
        selectedKeywords.add(pickRandom(keywordPool.hongbao || keywordPool.wealth));
    }
    
    // 补足到3个
    const allPools = ['random', 'career', 'health', 'location', 'status'];
    while (selectedKeywords.size < 3) {
        const pool = keywordPool[pickRandom(allPools)];
        if (pool) {
            const kw = pickRandom(pool);
            selectedKeywords.add(kw);
        }
    }
    
    // 转为数组并取前3个
    Array.from(selectedKeywords).slice(0, 3).forEach(kw => {
        const span = document.createElement('span');
        span.className = 'keyword';
        span.textContent = kw;
        keywordsContainer.appendChild(span);
    });
    
    // ===== 4. 提示语（从100+条里选，确保多样性）=====
    const tipsList = document.getElementById('tipsList');
    tipsList.innerHTML = '';
    
    let selectedTips = new Set();
    
    // 1. 必选一条幸运数字或颜色
    if (Math.random() > 0.5) {
        selectedTips.add(pickRandom(tipsPool.numbers));
    } else {
        selectedTips.add(pickRandom(tipsPool.colors));
    }
    
    // 2. 必选一条跟人相关的（属相或人脉）
    if (Math.random() > 0.5) {
        selectedTips.add(pickRandom(tipsPool.zodiac));
    } else {
        selectedTips.add(pickRandom(tipsPool.people));
    }
    
    // 3. 根据愿望添加相关提示
    if (wish && tipsPool[wish]) {
        selectedTips.add(pickRandom(tipsPool[wish]));
    }
    
    // 4. 根据地点添加
    if (location && tipsPool.location && tipsPool.location[location]) {
        selectedTips.add(pickRandom(tipsPool.location[location]));
    }
    
    // 5. 随机补足（从时间、行为、物品、食物、地点、现代、心态里选）
    const randomPools = ['time', 'action', 'object', 'food', 'place', 'modern', 'mindset'];
    while (selectedTips.size < 3) {
        const poolKey = pickRandom(randomPools);
        if (tipsPool[poolKey] && tipsPool[poolKey].length > 0) {
            selectedTips.add(pickRandom(tipsPool[poolKey]));
        }
    }
    
    // 转为数组，打乱，取前3条
    const finalTips = Array.from(selectedTips).sort(() => Math.random() - 0.5).slice(0, 3);
    
    finalTips.forEach(tip => {
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
