<template>
  <div class="mainbox">
      <div class="left">
          <div class="Lbg">
          </div>
          <div class="Ltop">
              <book></book>
          </div>
          <div class="Lcent">
              <impression></impression>
          </div>
          <div class="Lbot">
              <room></room>
          </div>
      </div>
      <div class="mid">
          <div class="Mtit">Hilton 酒店大屏</div>
          <div class="Mchart">
              <store></store>
          </div>
          <div class="Mtoday">
              <div class="room">
                  <p>今日房间</p>
                  <div class="todayRoom">
                      <div class="col">
                          <div>门店总房间数</div>
                          <div class="fc">370</div>
                          <div>间</div>
                      </div>
                      <div class="col">
                          <div>剩余房间数</div>
                          <div class="fc">60</div>
                          <div>间</div>
                      </div>
                      <div class="col">
                          <div>入住客户数</div>
                          <div class="fc">360</div>
                          <div>人次</div>
                      </div>
                  </div>
              </div>
              <div class="invide"></div>
              <div class="income">
                  <p class="incometit">今日营收</p>
                  <div class="todayIncome">
                      <div class="col">
                          <div>总营收数</div>
                          <div class="fc">10000</div>
                          <div>元</div>
                      </div>
                      <div class="col">
                          <div>客房营收</div>
                          <div class="fc">80000</div>
                          <div>元</div>
                      </div>
                      <div class="col">
                          <div>RevPAR</div>
                          <div class="fc">220</div>
                          <div>元</div>
                      </div>
                  </div>
              </div>
          </div>
          <div class="nationNum">
                <div class="storeNum">全国门店数<span>12,345</span>家</div>
                <div class="VIPNum">全国会员数<span>123,456</span>人</div>
            </div>
      </div>
      <div class="right">
          <div class="Rbg">
          </div>
          <div class="Rtop">
              <viparea></viparea>
          </div>
          <div class="Rcent">
              <rank></rank>
          </div>
          <div cass="Rbot">
              <price></price>
          </div>
      </div>
  </div>
</template>

<script>
import Book from "@/components/Book.vue";
import Impression from "@/components/Impression.vue";
import Room from "@/components/Room.vue";
import Store from "@/components/Store.vue";
import Area from "@/components/Area.vue";
import Rank from "@/components/Rank.vue";
import Price from "@/components/Price.vue";

export default {
  data() {
    return {};
  },
  methods: {},
  components: {
    book: Book,
    impression: Impression,
    room: Room,
    store: Store,
    viparea: Area,
    rank: Rank,
    price: Price,
  },
};
</script>

<style lang="less" scoped>
.mainbox {
    display: flex;
    width: 100%;
    height: 100%;
    min-width: 1024px;
    max-width: 1920px;
    overflow: hidden;
    background: url('../../public/static/img/bg.jpg') no-repeat top center;
    background-size: 100% 100%;
}
.Lbg,.Rbg{
    height: 40px;
    background: url('../../public/static/img/hborder.png') no-repeat top;
    background-size: 100% 100%;
}
/* 左边 */
.left,.right {
    flex: 3;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /* background-color: pink; */
}
/* 中间 */
.mid {
    flex: 5;
    /* height: 100%; */
    .Mtit {
        font-size: 30px;
        font-family: sans-serif;
        color: #c19d6d;
        background: url('../../public/static/img/hborder.png') no-repeat top;
        background-size: 100% 70%;
        text-align: center;
        line-height: 140px;
        height: 80px;
    }
    .Mtoday {
        color: #fff;
        display: flex;
        justify-content: space-around;
        width: 100%;
        .invide {
            margin-left: 20px;
            padding-top: 10px;
            border-right: 1px dashed #d8aa61;
            width: 3px;
            height: 100px;
        }
        .room {
            .col {
                display: flex;
                flex-direction: column;
                align-items: center;
                .fc {
                    color:#d8aa61;
                    font-weight: 600;
                }
            }
            margin-right: 4px;
        }
        .income {
            margin-left: 30px;
        }
    }
}
.income p:nth-of-type(1){
    display: flex;
    justify-content: flex-end;
}
.room, .income {
    width: 100%;
}
.todayRoom, .todayIncome {
    display: flex;
    font-size: 14px;
    width: 100%;  /* 没有设置宽度则justify-content: space-around; 无效 */
    justify-content: space-between; 
    align-items: center;
}


.nationNum {
    display: flex;
    justify-content: space-between;
    margin: 50px 0;
    line-height: 40px;
    border: 1px dashed #f3d46eea;
    
    .storeNum, .VIPNum{
        span {
            color:#ffef95;
        }
        color: #fff;
        display: flex;
        letter-spacing: 0.3em;
        flex: 6;
        justify-content: center;
    }
}
</style>