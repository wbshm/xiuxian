// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
let Hero = require("Hero");
let Enemy = require("Enemy");

cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start() {
        // 初始化参数
        const my = new Hero();
        const anemy = new Hero();

        my.hp = 100;
        my.speed = 100;
        my.power = 100;
        my.defense = 100;
        my.critDam = 100;
        my.critRate = 100;
        my.defCrit = 100;

        anemy.hp = 100;
        anemy.speed = 100;
        anemy.power = 100;
        anemy.defense = 100;
        anemy.critDam = 100;
        anemy.critRate = 100;
        anemy.defCrit = 100;

        // 绑定组件

        // 进行战斗
    },

    // update (dt) {},
});
