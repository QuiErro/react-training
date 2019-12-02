import React, { Component } from 'react'

export default class Header extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const {currentLab, labCategory, selectLabCategory, bgStyle} = this.props;
        let commonStyle = {margin: '0 10px', color: bgStyle === 'light' ? '#000' : '#fff', fontSize: '20px', fontWeight: 'bold', cursor: 'pointer'};
        let activeStyle = {...commonStyle, color: 'rgb(187, 46, 31)'};

        return (
            <div style={{width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                {
                    labCategory.map((item, key)=>{
                        return (
                            <div 
                              key={key} 
                              style={key === currentLab ? activeStyle : commonStyle}
                              onClick={()=>selectLabCategory(item)}
                            >
                                {item}
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}