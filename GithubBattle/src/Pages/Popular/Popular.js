import React, {Component} from 'react'
import axios from 'axios'
import InfiniteScroll from 'react-infinite-scroll-component'

import Header from '../../Components/Header'
import Content from './children/Content'

export default class Popular extends Component {
    constructor(props){
        super(props);

        this.state = {
            currentLab: 0,
            labCategory: ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'],
            labContent: {},
            currentContent: [],
            isHasMore: true,
            pageSize: 30,
            pageNums: [1, 1, 1, 1, 1, 1]
        };
    }

    render(){
        const {bgStyle} = this.props;
        const {currentContent, labCategory, currentLab, isHasMore} = this.state;

        return (
            <div style={{margin: '50px auto', width: '1200px'}}>
                <Header bgStyle={bgStyle} currentLab={currentLab} labCategory={labCategory} selectLabCategory={this.selectLabCategory}/>
                <InfiniteScroll
                    dataLength={currentContent.length}
                    next={this.getNext}
                    hasMore={isHasMore}
                    loader={<img style={{display: 'block', margin: '0 auto', width: '300px', height: '300px'}} src="https://img.zcool.cn/community/01136858d4d266a801219c7766cc7f.gif" />}
                    endMessage={
                        <p style={{textAlign: 'center'}}>
                          <b>Yay! You have seen it all</b>
                        </p>
                    }
                >
                    <Content bgStyle={bgStyle} currentContent={currentContent}/>
                </InfiniteScroll>
            </div>
        );
    }

    componentDidMount(){
        this.getHotLabs();
    }

    componentWillUnmount(){
        // 卸载异步操作设置状态
        this.setState = (state, callback) => {
            return;
        }
    }

    // 选择版块
    selectLabCategory = (language) => {
        let index = this.state.labCategory.indexOf(language);
        index = index !== -1 ? index : 0;

        if(this.state.labContent[this.state.labCategory[index]] && this.state.labContent[this.state.labCategory[index]].length){
            // 若已获取，直接从this.state拿
            this.setState({
                currentLab: index,
                currentContent: this.state.labContent[this.state.labCategory[index]]
            });
        }else{
            // 若没获取，则发请求
            this.setState({
                currentLab: index,
                currentContent: []
            }, ()=>{
                let language = this.state.labCategory[this.state.currentLab];
                this.getHotLabs(language);
            });
        }
    }

    // 请求 获取热门项目
    getHotLabs = async (language) => {
        let tempLanguage = language || 'All';
        let index = this.state.labCategory.indexOf(tempLanguage);
        let reqPageNum = this.state.pageNums[index];
        let apiUrl = `https://api.github.com/search/repositories?page=${reqPageNum}&per_page=${this.state.pageSize}&q=stars:%3E1${language ? '+language:' + language.toLowerCase() : ''}&sort=stars&order=desc&type=Repositories`;
        const res = await axios.get(apiUrl);
        try{
            if(res.status === 200){
                if(res.data.items.length){
                    let newContent = this.state.labContent[tempLanguage] || [];
                    newContent = [...newContent, ...res.data.items];
                    let newPage = [...this.state.pageNums];
                    newPage[index] = reqPageNum + 1;
                    this.setState((state) => ({
                        labContent: {...state.labContent, [tempLanguage]: newContent},
                        currentContent: newContent,
                        pageNums: newPage
                    }));
                }else{
                    this.setState({
                        isHasMore: false
                    })
                }
            }else{
                this.setState({
                    isHasMore: false
                })
            }
        }catch(e){
            console.log(e)
            this.setState({
                isHasMore: false
            })
        }
    }

    // 获取更多
    getNext = () => {
        let language = this.state.labCategory[this.state.currentLab];
        this.getHotLabs(language);
    }
}