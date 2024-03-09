import React from 'react'
import img1 from '../assets/fullstack1.jpg'
import img2 from '../assets/fullstack2.jpg'
import img3 from '../assets/fullstack3.jpg'
import { useNavigate} from 'react-router-dom'

function Fullstack() {

  const navigate = useNavigate();

  const fulldata = [
    {
        id:10,
        image: img1,
        name: "Node js",
        about: "Absolute beginer, Intermidiate, Expert... (Extended support till your placement)",
        lan: "Tamil, English"
    },
    {
        id:9,
        image: img2,
        name: "React js",
        about: "Absolute beginer, Intermidiate, Expert... (Extended support till your placement)",
        lan: "Tamil, English"
    },
    {
        id:11,
        image: img3,
        name: "Dom",
        about: "Absolute beginer, Intermidiate, Expert... (Extended support till your placement)",
        lan: "Tamil, English"
    }
]
  return (
    <>
        {
            fulldata.map((sud, index) => {
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

export default Fullstack
