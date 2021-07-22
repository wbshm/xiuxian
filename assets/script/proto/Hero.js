// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
let Skill = require("Skill");

var Hero = cc.Class({
    name: "Hero",
    extends: cc.Component,

    properties: {
        alive: true,
        realm: {
            get() {
                return this._realm;
            },
            set(value) {
                this._realm = value;
            },
        },
        name: {
            get() {
                return this._name;
            },
            set(value) {
                this._name = value;
            },
        },
        maxHp: {
            get() {
                return this._maxHp;
            },
            set(value) {
                this._maxHp = value;
            },
        },
        // 血量
        hp: {
            get() {
                return this._hp;
            },
            set(value) {
                if (!this.maxHp) {
                    this.maxHp = value;
                }
                this._hp = value;
            },
        },

        // 速度
        speed: {
            get() {
                return this._speed;
            },
            set(value) {
                this._speed = value;
            },
        },
        // 攻击
        power: {
            get() {
                return this._power;
            },
            set(value) {
                this._power = value;
            },
        },
        // 防御
        defense: {
            get() {
                return this._defense;
            },
            set(value) {
                this._defense = value;
            },
        },
        // 爆伤
        critDam: {
            get() {
                return this._critDam;
            },
            set(value) {
                this._critDam = value;
            },
        },
        // 暴击率
        critRate: {
            get() {
                return this._critRate;
            },
            set(value) {
                this._critRate = value;
            },
        },
        // 抗暴
        defCrit: {
            get() {
                return this._defCrit;
            },
            set(value) {
                this._defCrit = value;
            },
        },
        skillList: [],
    },

    // LIFE-CYCLE CALLBACKS:

    ctor: function () {
        this.skillList = [Skill.skill1, Skill.skill2];
    },

    start() {},

    // 以柔克刚
    skill() {
        var rand = Math.random();
        var loop = 0;
        cc.log(this.skillList);
        for (var i in this.skillList) {
            loop += this.skillList[i].rate;
            if (loop >= rand) {
                return this.skillList[i];
            }
        }
        return null;
    },

    attack() {
        var s = this.skill();
        return s || Skill.normal;
    },
});
