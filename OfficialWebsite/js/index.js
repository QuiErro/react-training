$(function(){
    // mock的数据网址
    const BASE_URL = "https://5dd6118ace4c30001440340e.mockapi.io";

    /*********************** 轮播图 ************************** */

    //设置imgList的宽度
    $("#imgList").width(1200 * $("#imgList img").length);
    //获取navDiv中所有的a标签
    let $allA = $("#navDiv a");
    //定义一个自动切换的定时器的标识
    let timer;
    
    //默认显示图片的索引
    let index = 0;
    
    //设置默认选中的效果
    $allA.eq(index).css("background", "blue");
    
    /* 点击超链接切换到指定的图片 */
    for(let i=0; i < $allA.length ; i++){
        $allA.eq(i).get(0).num = i;
        $allA.eq(i).click(function(){
            //关闭自动切换的定时器
            clearInterval(timer);
            //获取索引,将其设置为index
            index = $allA.eq(i).get(0).num;
            
            //切换图片
            //设置选中的a
            setA();
            
            //使用move函数来切换图片
            move($("#imgList").get(0), "left" , -1200*index , 30 , function(){
                //动画执行完毕，开启自动切换
                autoChange();
            });
        });
    }
    
    //开启自动切换图片
    autoChange();
    
    //设置选中的a
    function setA(){
        //判断当前索引是否是最后一张图片
        if(index >= $("#imgList img").length - 1){
            index = 0;
            $("#imgList").get(0).style.left = 0;
        }
        
        for(let i=0 ; i < $allA.length ; i++){
            $allA.eq(i).css("background", "black");
        }
        
        $allA.eq(index).css("background", "blue");
    };

    //开启自动切换图片
    function autoChange(){
        timer = setInterval(function(){
            index++;
            index %= $("#imgList img").length;
            
            //执行动画，切换图片
            move($("#imgList").get(0) , "left" , -1200*index , 30 , function(){
                //修改导航按钮
                setA();
            });
        },2000);
    }

    /****************************** 首页新闻列表 **************************** */

    // 动态生成首页新闻列表
    getHomeNewsList();

    async function getHomeNewsList() {
        try {
          const response = await axios.get(BASE_URL + '/api/news');
          if(response.status === 200){
            $(".news-content").html("");
            let newList = response.data;
            for(let i=0; i<newList.length; i++){
                createNews(newList[i]);
            }
          }
        } catch (error) {
          console.error(error);
        }
    }

    function createNews(news){
        let newsItem = $(`<div class="news-item">
                            <img src="${news.image}">
                            <div class="news-item-intro">
                                <h3>${news.title}</h3>
                                <p>${news.content}</p>
                                <span>${news.time}</span>
                            </div>
                        </div>`);
        $(".news-content").append(newsItem);
    }

    /****************************** 首页团队列表 **************************** */

    // 动态生成首页团队列表
    getHomeTeamList();

    async function getHomeTeamList() {
        try {
          const response = await axios.get(BASE_URL + '/api/team');
          if(response.status === 200){
            $(".member-content").html("");
            let teamList = response.data;
            createTeamMember(teamList);
          }
        } catch (error) {
          console.error(error);
        }
    }

    function createTeamMember(teamList){
        for(let i=0; i<teamList.length; i++){
            let memberItem;
            if(i === parseInt(teamList.length / 2)){
                memberItem = $(`<div class="member-item">
                                    <div class="member-item-intro">
                                        <h3>${teamList[i].name}</h3>
                                        <p>${teamList[i].intro}</p>
                                    </div>
                                    <div><img src="${teamList[i].image}"></div>
                                </div>`);
            }else{
                memberItem = $(`<div class="member-item">
                                    <div><img src="${teamList[i].image}"></div>
                                    <div class="member-item-intro">
                                        <h3>${teamList[i].name}</h3>
                                        <p>${teamList[i].intro}</p>
                                    </div>
                                </div>`);
            }
            $(".member-content").append(memberItem);
        }
    }
});