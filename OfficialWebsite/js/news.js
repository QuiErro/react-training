$(function(){
    // mock的数据网址
    const BASE_URL = "https://5dd6118ace4c30001440340e.mockapi.io";
    const FM_BASE_URL = "https://www.fastmock.site/mock/0724dc50d9ffe2c2659122a2fcd60977/ow";

    // 新闻列表总数
    let newsCount;
    let newsList = [];
    const pageSize = 10;
    let page = 1;

    /**************** 获取新闻列表总数 ******************* */
    getNewsListCount();

    async function getNewsListCount(){
        try {
            const response = await axios.get(BASE_URL + '/api/news_list_count');
            // console.log(response);
            if(response.status === 200){
                newsCount = response.data.count;
                createPagination(newsCount);
            }
        } catch (error) {
            console.error(error);
        }
    }

    /***************** 动态生成分页器 ****************** */
    function createPagination(newsCount){
        let itemCount = Math.ceil(newsCount / pageSize);
        for(let i=0; i<itemCount; i++){
            let paginationItem;
            if(i === 0){
                paginationItem = $(`<li><a class="pag_a pag_active">${i+1}</a></li>`);
            }else{
                paginationItem = $(`<li><a class="pag_a">${i+1}</a></li>`);
            }
            paginationItem.click(function(){
                if(page !== (i+1)){
                    page = i+1;
                    getNewsList();
                    $(".news-pagination ul li a").removeClass("pag_active").eq(i).addClass("pag_active");
                }
            });

            $(".news-pagination>ul").append(paginationItem);
        }
    }

    /************ 动态生成新闻列表 ************ */
    getNewsList();

    async function getNewsList() {
        try {
          $(".news-content").html("");
          const response = await axios.get(FM_BASE_URL + '/api/news_list?page=' + page + '&pageSize=' + pageSize);
          if(response.status === 200){
            $(".news-content").html("");
            newsList = response.data.newsList;
            for(let i=0; i<newsList.length; i++){
                createNews(newsList[i]);
            }
          }
        } catch (error) {
          console.error(error);
        }
    }

    function createNews(news){
        let newsItem = $(`<div class="news-content-item">
                            <img src="${news.image}">
                            <div class="news-content-item-intro">
                                <h3>${news.title}</h3>
                                <p>${news.content}</p>
                                <span>${news.time}</span>
                            </div>
                        </div>`);
        newsItem.get(0).id = news.id;
        $(".news-content").append(newsItem);

        for(let i=0; i<newsList.length; i++){
            $(".news-content-item").eq(i).click(function(){
                window.location.href = "./news-detail.html?id=" + $(".news-content-item").eq(i).get(0).id;
            });
        }
    }
});