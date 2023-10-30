import React, { useEffect, useRef, useState } from 'react'
import GlobalAPI from '../Services/GlobalAPI'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';
import './Slider.css'
const IMAGE_BASE_URL="https://image.tmdb.org/t/p/original";
const screenWidth=window.innerWidth;
const Slider = () => {
    const [movieList,setMovieList] = useState([])
    const elementRef = useRef();

    useEffect(()=>{
        getTrendingMovies();
    },[])
    const getTrendingMovies=()=>{
        GlobalAPI.getTrendingVideos.then(resp=>{
            // console.log(resp.data.results);
            setMovieList(resp.data.results)
        })
    }
    const sliderRight=(element)=>{
        element.scrollLeft+=screenWidth-110
    }
    const sliderLeft=(element)=>{
        element.scrollLeft-=screenWidth-110
    }
  return (
    <div>
        <HiChevronLeft className='chevronLeft'  onClick={()=>sliderLeft(elementRef.current)}/>
        <HiChevronRight className='chevronRight' onClick={()=>sliderRight(elementRef.current)} />
    <div className='main' ref={elementRef}>
        {movieList.map((item,index)=>{
            return(
            <img src={IMAGE_BASE_URL+item.backdrop_path} className='img' alt="" />
            )
        })}
    </div>
    </div>
  )
}

export default Slider