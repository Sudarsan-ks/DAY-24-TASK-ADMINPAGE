import React from 'react'
import img1 from '../assets/frontend1.jpg'
import img2 from '../assets/frontend2.jpg'
import img3 from '../assets/frontend3.jpg'
import { useNavigate } from 'react-router-dom'

function Frontend() {

  const navigate = useNavigate();

  const frontdata = [
    {
        id:6,
        image: img1,
        name: "Html",
        about: "Absolute beginer, Intermidiate, Expert... (Extended support till your placement)",
        lan: "Tamil, English"
    },
    {
        id:7,
        image: img2,
        name: "Css",
        about: "Absolute beginer, Intermidiate, Expert... (Extended support till your placement)",
        lan: "Tamil, English"
    },
    {
        id:8,
        image: img3,
        name: "Javascript",
        about: "Absolute beginer, Intermidiate, Expert... (Extended support till your placement)",
        lan: "Tamil, English"
    }
]
  return (
    <>
      {
            frontdata.map((sud, index) => {
                return <div className="Card" key={index}>
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
                            <button onClick={()=>navigate(`/information/${sud.id}`)}>View More</button>
                        </div>
                    </div>
                </div>
            })
        }
    </>
  )
}

export default Frontend
