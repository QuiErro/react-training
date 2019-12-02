import React, { Component } from 'react';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import styles from './Popular.less';

import Header from '@/components/Header';
import Content from './children/Content';

class Popular extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentLab: 0,
      labCategory: ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'],
      labContent: {},
      currentContent: [],
      isHasMore: true,
      pageSize: 30,
      pageNums: [1, 1, 1, 1, 1, 1],
    };
  }

  componentDidMount() {
    this.getHotLabs();
  }

  componentWillUnmount() {
    // 卸载异步操作设置状态
    this.setState = () => {

    };
  }

  // 选择版块
  selectLabCategory = (language) => {
    let index = this.state.labCategory.indexOf(language);
    index = index !== -1 ? index : 0;
    const tempContent = this.state.labContent[this.state.labCategory[index]];

    if (tempContent && tempContent.length) {
      // 若已获取，直接从this.state拿
      this.setState({
        currentLab: index,
        currentContent: tempContent,
      });
    } else {
      // 若没获取，则发请求
      this.setState({
        currentLab: index,
        currentContent: [],
      }, () => {
        const reqLanguage = this.state.labCategory[this.state.currentLab];
        this.getHotLabs(reqLanguage);
      });
    }
  }

  // 请求 获取热门项目
  getHotLabs = async (language) => {
    const tempLanguage = language || 'All';
    const index = this.state.labCategory.indexOf(tempLanguage);
    const reqPageNum = this.state.pageNums[index];
    const apiUrl = `https://api.github.com/search/repositories?page=${reqPageNum}&per_page=${this.state.pageSize}&q=stars:%3E1${language ? `+language:${language.toLowerCase()}` : ''}&sort=stars&order=desc&type=Repositories`;
    const res = await axios.get(apiUrl);
    try {
      if (res.status === 200) {
        if (res.data.items.length) {
          let newContent = this.state.labContent[tempLanguage] || [];
          newContent = [...newContent, ...res.data.items];
          const newPage = [...this.state.pageNums];
          newPage[index] = reqPageNum + 1;
          this.setState((state) => ({
            labContent: { ...state.labContent, [tempLanguage]: newContent },
            currentContent: newContent,
            pageNums: newPage,
          }));
        } else {
          this.setState({
            isHasMore: false,
          });
        }
      } else {
        this.setState({
          isHasMore: false,
        });
      }
    } catch (e) {
      console.log(e);
      this.setState({
        isHasMore: false,
      });
    }
  }

  // 获取更多
  getNext = () => {
    const language = this.state.labCategory[this.state.currentLab];
    this.getHotLabs(language);
  }

  render() {
    const { bgStyle } = this.props;
    const {
      currentContent, labCategory, currentLab, isHasMore,
    } = this.state;

    return (
      <div id={styles.popular}>
        <Header
          bgStyle={bgStyle}
          currentLab={currentLab}
          labCategory={labCategory}
          selectLabCategory={this.selectLabCategory}
        />
        <InfiniteScroll
          dataLength={currentContent.length}
          next={this.getNext}
          hasMore={isHasMore}
          loader={(
            <img
              style={{
                display: 'block', margin: '0 auto', width: '300px', height: '300px',
              }}
              src="https://img.zcool.cn/community/01136858d4d266a801219c7766cc7f.gif"
              alt=""
            />
)}
          endMessage={(
            <p style={{ textAlign: 'center' }}>
              <b>Yay! You have seen it all</b>
            </p>
                      )}
        >
          <Content bgStyle={bgStyle} currentContent={currentContent} />
        </InfiniteScroll>
      </div>
    );
  }
}

export default Popular;
