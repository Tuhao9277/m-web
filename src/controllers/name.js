
module.exports = {
    list() {
        let array =["今天","明天","周三","周四","周五","周六","周日",]
        // const Swiper = require('../lib/swiper');
        let focusPicList = [
            {
                pic: "https://img.alicdn.com/tps/i4/TB1POBMav1H3KVjSZFBSuvSMXXa.jpg_q60.jpg"
                , schema: "https://detail.damai.cn/item.htm?pos=1&acm=2018091713-1.1003.2.5395650&id=594255972892&scm=1003.2.2018091713-1.OTHER_1559576028868_5395650"
            },
            {
                pic: "https://img.alicdn.com/tps/i4/TB1m4ynXvvi21VjSZK9SuuAEpXa.jpg_q60.jpg"
                , schema: "https://p.damai.cn/wow/act/act/drama2019?pos=2&acm=2018091713-2.1003.2.5989382&scm=1003.2.2018091713-2.OTHER_1559834683580_5989382&utm=zAcu6D"
            },
            {
                pic: "https://img.alicdn.com/tps/i4/TB1S2opXRCw3KVjSZFuSuwAOpXa.jpg"
                , schema: "https://p.damai.cn/wow/act/act/family?wh_biz=tm&pos=7&acm=2018091713-7.1003.2.5963224&scm=1003.2.2018091713-7.OTHER_1557495929570_5963224&utm=5C6pWJ"
            },
            {
                pic: "https://img.alicdn.com/tps/i4/TB1ODOtJgHqK1RjSZFkSut.WFXa.jpg"
                , schema: "https://p.damai.cn/wow/act/act/jsh?wh_biz=tm&pos=8&acm=2018091713-8.1003.2.5409018&scm=1003.2.2018091713-8.OTHER_1556283732677_5409018&utm=wyEiIp"
            }];
        for (let i = 0; i < focusPicList.length; i++) {
            let tpl = ` <div class="swiper-slide"> <img src="${focusPicList[i].pic}" alt=""></div>
`;
            $(".mswiper>.swiper-container>.swiper-wrapper").append(tpl);
        }
        // var mySwiper = new Swiper('.swiper-container', {
        //     pagination: {
        //         el: '.swiper-pagination',
        //         autoplay: true,//等同于以下设置
        //     },
        // });

        // var mySwiper = new Swiper('.swiper-artists', {
        //     slidesPerView: 3,
        //     spaceBetween: 30,
        //     pagination: {
        //         el: '.swiper-pagination',
        //         autoplay: true,//等同于以下设置

        //     },
        // });
        let navigationList = [
            {
                pic: "https://img.alicdn.com/tps/i4/TB1egGnRCzqK1RjSZFpwu1kSXXa.png",
                schema: "https://m.damai.cn/damai/category/index.html?pos=1&acm=2018091714.1003.2.4476523&scm=1003.2.2018091714.OTHER_1556501865744_4476523&categoryId=1&utm=fKRDL4",
                title: "演唱会",
                titleColor: "#000000"
            },
            {
                pic: "https://img.alicdn.com/tps/i4/TB1XNKjRrvpK1RjSZPiwu2mwXXa.png",
                schema: "https://m.damai.cn/damai/category/index.html?pos=2&acm=2018091714.1003.2.4476523&scm=1003.2.2018091714.OTHER_1557824852817_4476523&categoryId=3&utm=C1BRGr"
                , title: "话剧歌剧",
                titleColor: "#000000",
            },
            {
                pic: "https://img.alicdn.com/tps/i4/TB1LgakRxTpK1RjSZFKwu12wXXa.png",
                schema: "https://m.damai.cn/damai/category/index.html?pos=3&acm=2018091714.1003.2.4476523&scm=1003.2.2018091714.OTHER_1556511036800_4476523&categoryId=2&utm=jBPxrj"
                , title: "音乐会",
                titleColor: "#000000"
            },
            {
                pic: "https://img.alicdn.com/tps/i4/TB1iHqlRpYqK1RjSZLewu2XppXa.png",
                schema: "https://p.damai.cn/wow/act/act/dmsport?pos=4&acm=2018091714.1003.2.4476523&scm=1003.2.2018091714.OTHER_1558589350084_4476523&utm=QJd9Xw"
                , title: "体育",
                titleColor: "#000000"
            },
            {
                pic: "https://img.alicdn.com/tps/i4/TB1gzigRrPpK1RjSZFFwu15PpXa.png",
                schema: "https://m.damai.cn/damai/category/index.html?pos=5&acm=2018091714.1003.2.4476523&scm=1003.2.2018091714.OTHER_1560035193953_4476523&categoryId=5&utm=CF3HtE"
                , title: "曲苑杂坛"
                , titleColor: "#000000"
            },
            {
                pic: "https://img.alicdn.com/tps/i4/TB17wecRzDpK1RjSZFrwu178VXa.png",
                schema: "https://m.damai.cn/damai/category/index.html?pos=6&acm=2018091714.1003.2.4476523&scm=1003.2.2018091714.OTHER_1556775074059_4476523&categoryId=100&utm=mzHpIq"
                , title: "亲子",
                titleColor: "#000000"
            },
            {
                pic: "https://img.alicdn.com/tps/i4/TB1Zw8MRCzqK1RjSZPcwu2TepXa.png",
                schema: "https://m.damai.cn/damai/category/index.html?pos=7&acm=2018091714.1003.2.4476523&scm=1003.2.2018091714.OTHER_1558698723153_4476523&categoryId=7&utm=Ks19Xg"
                , title: "展览休闲"
                , titleColor: "#000000"
            }
            , {
                pic: "https://img.alicdn.com/tps/i4/TB1pLiuRwHqK1RjSZFkwu0.WFXa.png",
                schema: "https://p.damai.cn/wow/act/act/damaiglobal?sortType=3&pos=8&acm=2018091714.1003.2.4476523&scm=1003.2.2018091714.OTHER_1556457757160_4476523&utm=LAhoKS"
                , title: "境外",
                titleColor: "#000000"
            }
        ]
        for (let i = 0; i < navigationList.length; i++) {
            let tpl = `
<div  data-spm="ditem_${i}" class="home-grids__item">
<span  class="home-grids__item__icon" style="background-image: url(&quot;${navigationList[i].pic}&quot;);"></span>
<p  class="home-grids__item__name">${navigationList[i].title}</p>
</div>
`;
            $(".home-grids").append(tpl);
        }
        for (let i = 0; i < array.length; i++) {
            let tpl = `<span data-v-5b3ec946="" data-spm="dtime_item_${i}" >${array[i]}</span>`;
            $('.home-week').append(tpl);
            
        }
    }
    ,
    renderCard(){
       
        $.ajax({
            url:`https://search.damai.cn/searchajax.html?keyword=&cty=&ctl=&sctl=&tsg=${1}}&st=&et=&order=1&pageSize=30&currPage=1&tn=`,
     
            type: "get",
            dataType: 'json',
			success(data) {
                let show = data.pageData.resultData;
                for (let i = 0; i < show.length; i++) {
                    let tpl = `<li  data-spm="ditem_${i}" class="home-card-item">
                    <div   class="home-card-item-pic" lazy="loaded" style="background-image: url(&quot;${show[i].verticalPic}&quot;);">
                    </div>
                     <p data-v-5b3ec946="" class="home-card-item-title">${show[i].name}</p> 
                     <div data-v-5b3ec946="" class="home-card-item-price">
                     <span data-v-5b3ec946="">￥${show[i].price} 起</span> 
                     <!---->
                     </div>
                     </li>`;
                     $(".home-card").append(tpl);
                }
               
            }
        })
        // $(".home-card").append();
    }
}
