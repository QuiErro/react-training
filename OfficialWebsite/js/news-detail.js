$(function(){
    // mock的数据网址
    const FM_BASE_URL = "https://www.fastmock.site/mock/0724dc50d9ffe2c2659122a2fcd60977/ow";

    let params = window.location.search.split('?')[1];
    let id = 1;
    if(params.indexOf("id=") === 0){
        id = params.split("=")[1] || 1;
    }

    getNewsDetail();
    
    async function getNewsDetail(){
        let res = await axios.get(FM_BASE_URL + '/api/news_detail/' + id);
        if(res.status === 200){
            if(res.data.newsDetail){
                $("#newsContent").html("");
                createNewsDetail(res.data.newsDetail);
            }else{
                window.history.go(-1);
                alert("您访问的页面不存在");
            }
        }
    }

    function createNewsDetail(newsDetail){
        let newsTop = $(`<div class="title-top">
                            <span></span>
                            <h3>${newsDetail.title}</h3>
                        </div>
                        <div class="title-bottom">${newsDetail.time}</div>`);
        $("#secTitle").append(newsTop);

        let newsContent = $(`<div><img src="${newsDetail.image}"></div>
                             <p>${newsDetail.content}</p>`);
        $("#newsContent").append(newsContent);
    }
});