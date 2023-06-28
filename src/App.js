// import logo from './logo.svg';
import './App.css';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Legend,
  ResponsiveContainer,
} from "recharts"

const data = [
  {
    group_name: "Group A",
    boys: 200,
    girls: 400,
  },
  {
    group_name: "Group B",
    boys: 3000,
    girls: 500,
  },
  {
    group_name: "Group C",
    boys: 1000,
    girls: 1500,
  },
  {
    group_name: "Group D",
    boys: 700,
    girls: 1200,
  },
]



const App=()=>{

  const DataFormatter = (number) => {
    if (number > 1000) {
      return `${(number / 1000).toString()}k`
    }
    return number.toString()
  }
  return (
    <div className="bg-container">
    <div className="card-container">

        <div className="left-side-card">
          <div className="plus-container">
            <div className="plus">
                <span className="material-icons-outlined">
                  add</span>
               </div>


           
            <div className="temp-toggle">
                     <span className="temp-c"><sup>o</sup>C</span>
                     <span className="material-icons-outlined toggle element-toggle">toggle_off</span>
                   <span className="temp-f"><sup>o</sup>F</span>
                 </div>
                 </div>
                


                 <div className="city">
                        <p class="city-name">
                            <span class="material-icons-outlined near-me">near_me</span>New York, USA
                        </p>
                        <p class="city-time">
                            <span class="material-icons-outlined">light_mode</span>
                            <span className="time-name">07:19</span>
                        </p>
                    </div>
                    <div class="today">
                        <p class="today-date">Today 28 Sept</p>
                        <p class="today-time">
                            <span class="material-icons-outlined">light_mode</span>
                            <span>19:32</span>
                        </p>
                    </div>
                    <div class="temp-value">
                        <span class="material-icons-outlined arrow">chevron_left</span>
                        <h1><span>27</span><sup>o</sup></h1>
                        <span class="material-icons-outlined arrow">chevron_right</span>
                    </div>

                    <div>
                      <img src="https://res.cloudinary.com/dgcprz6er/image/upload/v1687951664/NewYour_icon_a6ik40.png" alt="NewYork"/>
                    </div>
                    </div>


          <div className="right-card">
            <div className="right-card-header-container">
                  <div className="header-container">
              <h1 className="heading-right-card">Welcome back Isabella!</h1>
              <p className="paragraph-right-card">Check out today's weather information</p>
                  </div> 
              <div className="profile-container">
                <p className="dots-profile">...</p>
                <img src="https://res.cloudinary.com/dgcprz6er/image/upload/v1687003861/smiley-businesswoman-posing-outdoors-with-arms-crossed-copy-space_23-2148767055_omtynk.webp" alt="profile" className="image-profile"/>
              </div>
            </div>
            <div>
            <ResponsiveContainer width="80%" height={300}>
          <BarChart
            data={data}
            margin={{
              top: 5,
            }}
          >
            <XAxis
              dataKey="group_name"
              tick={{
                stroke: "gray",
                strokeWidth: 1,
              }}
            />
            <YAxis
              tickFormatter={DataFormatter}
              tick={{
                stroke: "gray",
                strokeWidth: 0,
              }}
            />
            <Legend
              wrapperStyle={{
                padding: 30,
              }}
            />
            <Bar dataKey="boys" name="Boys" fill="#1f77b4" barSize="10%" />
            <Bar dataKey="girls" name="Girls" fill="#fd7f0e" barSize="10%" />
          </BarChart>
        </ResponsiveContainer>
        </div>

{/* 
  <div className="second-container"> 
        <h1 className="more-detils">More detils of today's weather</h1>
                <div class="detils">
                            <span class="head">Humidity</span>
                            <div className="water-container">
                            <span class="material-icons-outlined icon icon-water">water_drop</span>
                            </div>
                        <h1>82% <sub>bad</sub></h1>
                        <div class="bars humidity">
                            <div>
                                <span>good</span>
                                <span class="blue"></span>
                            </div>
                            <div>
                                <span>normal</span>
                                <span class="blue"></span>
                            </div>
                            <div>
                                <span>bad</span>
                            </div>
                        </div>
                    </div> */}


{/*                     
                    <div>
                        <div class="title">
                            <span class="head">Wind</span>
                            <span class="material-icons-outlined icon">air</span>
                        </div>
                        <h2>8 km/h</h2>
                        <div class="bars wind">
                            <div>
                                <span>0</span>
                                <span class="complete"></span>
                            </div>
                            <div>
                                <span>5</span>
                                <span class="complete"></span>
                            </div>
                            <div>
                                <span>10</span>
                                <span class="incomplete"></span>
                            </div>
                            <div>
                                <span>20</span>
                                <span class="incomplete"></span>
                            </div>
                            <div>
                                <span>30</span>
                                <span class="incomplete"></span>
                            </div>
                            <div>
                                <span>40</span>
                                <span class="incomplete"></span>
                            </div>
                        </div>
                    </div>



                    <div>
                        <div class="title">
                            <span class="head">Precipitation</span>
                            <span class="material-icons-outlined icon">thunderstorm</span>
                        </div>
                        <h2>1.4 cm</h2>
                        <div class="bars precipitation">
                            <div>
                                <span>0</span>
                                <span class="complete"></span>
                            </div>
                            <div>
                                <span>10</span>
                                <span class="complete"></span>
                            </div>
                            <div>
                                <span>20</span>
                                <span class="incomplete"></span>
                            </div>
                            <div>
                                <span>30</span>
                                <span class="incomplete"></span>
                            </div>
                            <div>
                                <span>40</span>
                                <span class="incomplete"></span>
                            </div>
                            <div>
                                <span>50</span>
                                <span class="incomplete"></span>
                            </div>
                            <div>
                                <span>60</span>
                                <span class="incomplete"></span>
                            </div>
                            <div>
                                <span>70</span>
                                <span class="incomplete"></span>
                            </div>
                            <div>
                                <span>80</span>
                                <span class="incomplete"></span>
                            </div>
                            <div>
                                <span>90</span>
                                <span class="incomplete"></span>
                            </div>
                        </div>
                    </div>




                    <div>
                        <div class="title">
                            <span class="head">UV index</span>
                            <span class="material-icons-outlined icon">light_mode</span>
                        </div>
                        <h2>4 <span>medium</span></h2>
                        <div class="bars UV-index">
                            <div>
                                <span>0-2</span>
                                <span class="complete"></span>
                            </div>
                            <div>
                                <span>3-5</span>
                                <span class="complete"></span>
                            </div>
                            <div>
                                <span>6-7</span>
                                <span class="incomplete"></span>
                            </div>
                            <div>
                                <span>8-18</span>
                                <span class="incomplete"></span>
                            </div>
                            <div>
                                <span>11+</span>
                                <span class="incomplete"></span>
                            </div>
                        </div>
                    </div>



                    <div >
                        <div class="title">
                            <span class="head">Feels like</span>
                            <span class="material-icons-outlined icon">thermostat</span>
                        </div>
                        <h2>30<sup>o</sup></h2>
                        <div class="Feel">
                            <div class="bars">
                                <span>0<sup>O</sup></span>
                                <span>25<sup>O</sup></span>
                                <span>50<sup>O</sup></span>
                            </div>
                            <span class="long-width d-block"></span>
                        </div>
                    </div>


                    <div>
                        <div class="title">
                            <span class="head">Chance of rain</span>
                            <span class="material-icons-outlined icon">umbrella</span>
                        </div>
                        <h2>42%</h2>
                        <div class="chance">
                            <div class="bars">
                                <span>0%</span>
                                <span>25%</span>
                                <span>50%</span>
                                <span>75%</span>
                                <span>100%</span>
                            </div>
                            <span class="long-width d-block"></span>
                        </div>
                    </div>


                </div>
                
                </div> */}
                
                
                
                
                
                
                
                
  {/* Content */}
       






          {/* </div> */}



        </div>
       </div>
      </div>
  )
}



export default App;
