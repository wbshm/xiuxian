// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
let Hero = require("Hero");
let Enmey = require("Enemy");

cc.Class({
    extends: cc.Component,

    properties: {
        heroArea: cc.Node,
        enemyArea: cc.Node,
        logArea: cc.Node,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function () {
        this.hero = new Hero();
        this.hero.name = "路飞";
        this.hero.hp = 1000;
        this.hero.speed = 100;
        this.hero.power = 100;
        this.hero.defense = 100;
        this.hero.critDam = 100;
        this.hero.critRate = 100;
        this.hero.defCrit = 100;

        this.enemy = new Enmey();
        this.enemy.name = "凯多";
        this.enemy.hp = 1000;
        this.enemy.speed = 50;
        this.enemy.power = 100;
        this.enemy.defense = 100;
        this.enemy.critDam = 100;
        this.enemy.critRate = 100;
        this.enemy.defCrit = 100;
        console.log(this.hero.maxHp);

        this.updateNode();
        this.maxSpeed = Math.max(this.hero.speed, this.enemy.speed) * 2;
    },

    updateNode() {
        // 初始化
        var name = this.heroArea.getChildByName("name").getComponent(cc.Label);
        this.heroHp = this.heroArea.getChildByName("hpBar").getComponent(cc.ProgressBar);
        this.heroSp = this.heroArea.getChildByName("spBar").getComponent(cc.ProgressBar);
        this.heroHp.progress = 1;
        this.heroSp.progress = 0;
        name.string = this.hero.name;
        // 初始化
        name = this.enemyArea.getChildByName("name").getComponent(cc.Label);
        this.enemyHp = this.enemyArea.getChildByName("hpBar").getComponent(cc.ProgressBar);
        this.enemySp = this.enemyArea.getChildByName("spBar").getComponent(cc.ProgressBar);
        this.enemyHp.progress = 1;
        this.enemySp.progress = 0;
        name.string = this.enemy.name;
        // 初始化
        this.logTable = this.logArea.getComponent(cc.RichText);
        this.logTable.string = '恭喜<color=#00ff00> 王尼玛 </c>获取<color=#0fffff> 1 </color>万金币\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n恭喜<color=#00ff00> 王尼玛 </c>获取<color=#0fffff> 1 </color>万金币';
        console.log(this.logTable);
        console.log(this.logArea);
    },

    start() {},

    speedLoop(progressBar) {
        // 初始化
        progressBar.progress = 0;
        // 冲到1
    },

    update(dt) {
        this.heroSp.progress = Math.min((dt * this.hero.speed) / this.maxSpeed + this.heroSp.progress, 1);
        this.enemySp.progress = Math.min((dt * this.enemy.speed) / this.maxSpeed + this.enemySp.progress, 1);
        if (this.heroSp.progress >= 1) {
            // 攻击
            var s = this.hero.attack();
            // 造成的伤害
            let info = this.hurt(s, this.hero, this.enemy);
            // 死亡判断
            this.updateHp();
            cc.log(info);
            this.heroSp.progress = 0;
        }
        if (this.enemySp.progress >= 1) {
            this.enemySp.progress = 0;
        }
    },

    updateHp() {
        this.enemyHp.progress = this.enemy.hp / this.enemy.maxHp;
        this.heroHp.progress = this.hero.hp / this.hero.maxHp;
    },

    // 伤害
    hurt(skill, attacker, victim) {
        let baseDamage = attacker.power + skill.damage;
        let crit = "";
        if (Math.random() <= attacker.critRate) {
            baseDamage += baseDamage * attacker.critDam;
        }
        let damage = baseDamage - victim.defense;
        victim.hp -= damage;
        return `<color=green>${attacker.name}</color>对<color=green>${victim.name}</color>使用了${skill.name}照成了${damage}点${crit}伤害`;
    },
});
