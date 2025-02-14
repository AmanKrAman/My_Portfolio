import React from 'react'
import './MyWork.css'
import theme_pattern from "../../assets/theme_pattern.svg";
import arrow_icon from "../../assets/arrow.svg";
import mywork_data from '../../assets/mywork_data.js';

const MyWork = () => {
  return (
    <div className='mywork'>
        <div className="mywork-title">
            <h1>My latest work</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="mywork-container">
            {/* {mywork_data.map((work , index) => {
                return <img key={index} src ={work.w_img} alt='' />
            })} */}
            {mywork_data.map((work, index) => (
                <a key={index} href={work.w_link} target="_blank" rel="noopener noreferrer" className="work-item-link">
                    <div className="work-item">
                        <img src={work.w_img} alt={work.w_name} />
                        <div className="hover-text">{work.w_name}</div>
                    </div>
                </a>
            ))}
        </div>
        <a href="https://github.com/AmanKrAman" target="_blank" rel="noopener noreferrer" className="myword-showmore-link">
            <div className="myword-showmore">
                <p>Show More</p>
                <img src={arrow_icon} alt="" />
            </div>
        </a>
    </div>
  )
}

export default MyWork