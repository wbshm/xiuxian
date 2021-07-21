// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

var Skill = cc.Class({
    name: "Skill",
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
        rate: {
            get() {
                return this._rate;
            },
            set(value) {
                this._rate = value;
            },
        },
        // 伤害
        damage: {
            get() {
                return this._damage;
            },
            set(value) {
                this._damage = value;
            },
        },
        // 附加
        attach: {
            get() {
                return this._attach;
            },
            set(value) {
                this._attach = value;
            },
        },
        // 流血
        bleed: {
            get() {
                return this._bleed;
            },
            set(value) {
                this._bleed = value;
            },
        },
        // 减防
        defensive: {
            get() {
                return this._defensive;
            },
            set(value) {
                this._defensive = value;
            },
        },
        // 敌人 - 伤害、附加、流血、破甲、
    },

    // onLoad () {},

    start() {},

    // update (dt) {},
});
Skill.create = function (name, damage, rate, attach, bleed, defensive) {
    var skill = new Skill();
    if (name) {
        skill.name = name;
    } else {
        cc.error("skill name is empty");
    }
    skill.damage = damage || 0;
    skill.rate = rate || 0;
    skill.attach = attach || 0;
    skill.bleed = bleed || 0;
    skill.defensive = defensive || 0;
    return skill;
};
Skill.normal = Skill.create("平A");
Skill.skill1 = Skill.create("独孤一剑", 100, 0.1, 1, 0, 5);
Skill.skill2 = Skill.create("独孤二剑", 110, 0.1, 2, 0, 15);
Skill.skill3 = Skill.create("独孤三剑", 120, 0.1, 3, 0, 25);
Skill.skill4 = Skill.create("独孤四剑", 130, 0.1, 4, 0, 35);
Skill.skill5 = Skill.create("独孤五剑", 140, 0.1, 5, 0, 45);
Skill.skill6 = Skill.create("独孤六剑", 150, 0.1, 6, 0, 55);
Skill.skill7 = Skill.create("独孤七剑", 160, 0.1, 7, 0, 65);
