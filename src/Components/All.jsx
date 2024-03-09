import React from 'react'
import imgfull from '../assets/fullstack.jpg'
import imgfront from '../assets/frontend.jpg'
import imgback from '../assets/backend.jpg'
import { useNavigate } from 'react-router-dom'

function All() {

    const navigate = useNavigate();


    const alldata = [
        {
            id: 1,
            image: imgfull,
            name: "Full Stack Development",
            about: "Absolute beginer, Intermidiate, Expert... (Extended support till your placement)",
            lan: "Tamil, English"
        },
        {
            id: 2,
            image: imgfront,
            name: "Frontend (HTML, CSS, JAVASCRIPT)",
            about: "Absolute beginer, Intermidiate, Expert... (Extended support till your placement)",
            lan: "Tamil, English"
        },
        {
            id: 3,
            image: imgback,
            name: "Backend (Nodejs, Python, Java)",
            about: "Absolute beginer, Intermidiate, Expert... (Extended support till your placement)",
            lan: "Tamil, English"
        }
    ]
    return (<>
        {
            alldata.map((sud, index) => {
                return <div className="Card" key={index} >
                    <div className="image">
                        <img src={sud.image} alt="" />
                    </div>
                    <div className="content">
                        <div className="coursename">
                            <h5>{sud.name}</h5>
                        </div>
                        <div className="para">
                            <p>{sud.about}</p>
                        </div>
                        <div className="languages">Languages:
                            <p className='lan'>{sud.lan}</p>
                        </div>
                        <div className="viewbtn">
                            <button onClick={() => navigate(`/information/${sud.id}`)}>View More</button>
                        </div>
                    </div>
                </div>
            })
        }

    </>)
}

export default All
