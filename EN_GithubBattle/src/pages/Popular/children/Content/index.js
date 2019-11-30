import React, { Component } from 'react'
import Card from '@/components/Card'
import styles from './Content.less'

class Content extends Component {

    render() {
      const { currentContent, bgStyle } = this.props;

      return (
        <div id={styles.content}>
          {
                    currentContent.length ? (
                      currentContent.map((item, key) => (
                        <Card item={item} key={key} index={key} bgStyle={bgStyle} />
                      ))
                    ) : (
                      <div />
                    )
                }
        </div>
      );
    }
}

export default Content;
