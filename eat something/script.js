// 6种外卖平台最常见食物，与1-6数字对应
const foodOptions = [
    "麻辣烫",      // 1
    "黄焖鸡米饭",  // 2
    "汉堡",        // 3
    "烤肉饭",      // 4
    "炸鸡",        // 5
    "盖浇饭"       // 6
];

const dice = document.getElementById('dice');
const rollBtn = document.getElementById('roll-btn');
const result = document.getElementById('result');
const rollSound = document.getElementById('roll-sound');

// 生成随机的旋转角度
function getRandomRotation() {
    const min = 2;
    const max = 4;
    return {
        x: Math.floor(Math.random() * (max - min + 1)) + min,
        y: Math.floor(Math.random() * (max - min + 1)) + min,
        z: Math.floor(Math.random() * (max - min + 1)) + min
    };
}

// 滚动骰子动画
function rollDice() {
    rollBtn.disabled = true;
    result.textContent = '';
    
    // 播放骰子投掷音效
    rollSound.currentTime = 0; // 重置音效
    rollSound.play();
    
    // 生成1-6之间的随机数
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    
    // 生成随机的旋转角度，确保翻滚动画自然
    const rotations = getRandomRotation();
    
    // 根据随机数字计算最终旋转角度，确保骰子显示正确的数字
    let finalRotationX = rotations.x * 360;
    let finalRotationY = rotations.y * 360;
    
    // 根据随机数字设置对应的旋转角度
    switch(randomNumber) {
        case 1:
            // 正面
            finalRotationX += 0;
            finalRotationY += 0;
            break;
        case 2:
            // 背面
            finalRotationX += 0;
            finalRotationY += 180;
            break;
        case 3:
            // 右面
            finalRotationX += 0;
            finalRotationY += 90;
            break;
        case 4:
            // 左面
            finalRotationX += 0;
            finalRotationY += 270;
            break;
        case 5:
            // 上面
            finalRotationX += 270;
            finalRotationY += 0;
            break;
        case 6:
            // 下面
            finalRotationX += 90;
            finalRotationY += 0;
            break;
    }
    
    // 应用旋转动画，使用更平滑的缓动函数
    dice.style.transition = 'transform 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    dice.style.transform = `rotateX(${finalRotationX}deg) rotateY(${finalRotationY}deg)`;
    
    // 动画结束后显示结果
    setTimeout(() => {
        // 直接显示结果，不添加额外的动画
        const selectedFood = foodOptions[randomNumber - 1];
        result.innerHTML = `【${selectedFood}】`;
        rollBtn.disabled = false;
    }, 1500);
}

// 初始化骰子
function initDice() {
    // 为了视觉效果，初始时给骰子一个随机角度
    const initialRotationX = Math.floor(Math.random() * 360);
    const initialRotationY = Math.floor(Math.random() * 360);
    dice.style.transform = `rotateX(${initialRotationX}deg) rotateY(${initialRotationY}deg)`;
}

// 绑定按钮点击事件
rollBtn.addEventListener('click', rollDice);

// 初始化
initDice();