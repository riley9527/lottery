/**
 * 奖品设置
 * type: 唯一标识，0是默认特别奖的占位符，其它奖品不可使用
 * count: 奖品数量
 * title: 奖品描述
 * text: 奖品标题
 * img: 图片地址
 */
const prizes = [
  {
    type: 0,
    count: 0,
    title: "今日抽奖",
    text: "惊喜抽奖"
  },
  {
    type: 1,
    count: 1,
    title: "今日抽奖",
    text: "惊喜抽奖",
    img: "../img/secrit.jpg"
  }
];

/**
 * 一次抽取的奖品个数与prizes对应
 */
const EACH_COUNT = [0, 1];

/**
 * 卡片公司名称标识
 */
const COMPANY = "";

module.exports = {
  prizes,
  EACH_COUNT,
  COMPANY
};
