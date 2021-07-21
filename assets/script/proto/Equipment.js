// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

var Equipment = cc.Class({
    extends: cc.Component,

    properties: {
        name: {
            get() {
                return this._name;
            },
            set(value) {
                this._name = value;
            }
        },
        // 品级
        level: {
            get() {
                return this._level;
            },
            set(value) {
                this._level = value;
            }
        },
        // 境界
        realm: {
            get() {
                return this._realm;
            },
            set(value) {
                this._realm = value;
            }
        },
        // 血量
        hp: {
            get() {
                return this._hp;
            },
            set(value) {
                this._hp = value;
            }
        },

        // 速度
        speed: {
            get() {
                return this._speed;
            },
            set(value) {
                this._speed = value;
            }
        },
        // 攻击
        power: {
            get() {
                return this._power;
            },
            set(value) {
                this._power = value;
            }
        },
        // 防御
        defense: {
            get() {
                return this._defense;
            },
            set(value) {
                this._defense = value;
            }
        },
        // 爆伤
        critDam: {
            get() {
                return this._critDam;
            },
            set(value) {
                this._critDam = value;
            }
        },
        // 暴击率
        critRate: {
            get() {
                return this._critRate;
            },
            set(value) {
                this._critRate = value;
            }
        },
        // 抗暴
        defCrit: {
            get() {
                return this._defCrit;
            },
            set(value) {
                this._defCrit = value;
            }
        },
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    ctor: function (name, level, realm, hp, speed, power, defense, critDam, critRate, defCrit) {
        if (name) {
            this.name = name;
        } else {
            cc.error("skill name is empty");
        }
        this.level = level || 1;
        this.realm = realm || "炼气";
        this.hp = hp || 0;
        this.speed = speed || 0;
        this.power = power || 0;
        this.defense = defense || 0;
        this.critDam = critDam || 0;
        this.critRate = critRate || 0;
        this.defCrit = defCrit || 0;
    },

    // update (dt) {},
});
