import React from "react"
import { NavLink } from "react-router-dom"
import CardTop from "../Components/CardTop"
import { Context } from "../Components/Context"

import Header from "../Components/Header"
import Sitebar from "../Components/Sitebar"



const Home = () =>{
    const {channels,GussieImg,Food,mode, getId} = React.useContext(Context);
    const [value , setValue] = React.useState({
        dollie:false,
        dolliedata:{},
      });

      const [values , setValues] = React.useState({
        food: false,
        fooddata:{},
      });

      const [rec , setRec] = React.useState({
        isFetched: false,
        data:{},
      });
      
      React.useEffect(() =>{
        fetch(`https://jsonplaceholder.typicode.com/photos?albumId=1`)
          .then((res) => res.json())
          .then((data) =>
            setValue({
              dollie:true,
              dolliedata: data,
            }),
          );

        fetch(`https://jsonplaceholder.typicode.com/photos?albumId=5`)
        .then((res) => res.json())
        .then((data) =>
          setRec({
            isFetched:true,
            data: data
          }),
        );

        fetch(`https://jsonplaceholder.typicode.com/photos?albumId=9`)
        .then((res) => res.json())
        .then((data) =>
          setValues({
            food:true,
            fooddata: data
          }),
        );
      },[])


    return(
        <>
        <Header />
        <section className="home" style={mode ? {backgroundColor:'#17171E'} : {backgroundColor:'white'}}>
            <Sitebar arr={channels} />

            <div className="dollie">
                <NavLink className='channel' onClick={getId}  to='/channel' data-channel-id='0'>
                <img data-channel-id='0' src={GussieImg} alt="channel img"/>
                    <p style={mode? { color: 'white'} : { color: '#19202c' }} data-channel-id='0'>Gussie Singleton</p>
				</NavLink>

               <div className="dollie-carousel">
                {value.dollie ? (
                    value.dolliedata.map((e) => (
                            <NavLink key={e.id} to={`/video/${e.id}`} id={e.id}>
                                <img src={e.url} alt='chanel img' />
                                <p className="card-link-title" style={mode? { color: 'white'} : { color: '#19202c' }} >{e.title}</p>
                            </NavLink>
                    ))
                ) : (
                    <></>
                )}
               </div>
               <CardTop text='Recommended' mode={mode} />
               <div className="recommended-carousel">
                {rec.isFetched ? (
                    rec.data.map((e) => (
                            <NavLink key={e.id} to={`/video/${e.id}`} id={e.id}>
                                <img src={e.url} alt='chanel img' />
                                <p className="card-link-title" style={mode? { color: 'white'} : { color: '#19202c' }}>{e.title}</p>
                            </NavLink>
                    ))
                ) : (
                    <></>
                )}
               </div>

               <ol className="channel-top d-flex">
                   <li className="d-flex channel-top-item">
                        <NavLink className='d-flex' onClick={getId}  to='/channel' data-channel-id='8'>
                            <img src={channels[8].img} alt='chanel img' data-channel-id='8' />
                            <p className="card-link-title" style={mode? { color: 'white'} : { color: '#19202c' }} data-channel-id='8'>{channels[8].title}</p>
                        </NavLink>
                        <p>Recommended channel for you</p>
                   </li>

                    <li className="d-flex">
                        <button className="subscribe">Subscribe 2.3m</button>

                        <svg
                            className="left"
                            width='28'
                            height='28'
                            viewBox='0 0 28 28'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'>
                            <path
                                opacity='0.24'
                                d='M14 28C21.732 28 28 21.732 28 14C28 6.26801 21.732 0 14 0C6.26801 0 0 6.26801 0 14C0 21.732 6.26801 28 14 28Z'
                                fill={mode ? 'white' : 'black'}
                            />
                            <path
                                fillRule='evenodd'
                                clipRule='evenodd'
                                d='M16.0017 8.66611L16.5363 9.20513C16.7121 9.39201 16.8 9.61012 16.8 9.8592C16.8 10.1133 16.7121 10.329 16.5363 10.5063L13.0719 14L16.5363 17.4937C16.712 17.671 16.8 17.8867 16.8 18.1407C16.8 18.3899 16.712 18.608 16.5363 18.7949L16.0016 19.3268C15.8211 19.5089 15.6048 19.6 15.3529 19.6C15.0963 19.6 14.8825 19.5089 14.7114 19.3268L10.0709 14.647C9.89034 14.4744 9.80005 14.2589 9.80005 14C9.80005 13.746 9.89034 13.5279 10.0709 13.3459L14.7114 8.66611C14.8873 8.48876 15.1011 8.4 15.3529 8.4C15.6001 8.4 15.8163 8.48876 16.0017 8.66611Z'
                                fill='white'
                            />
                        </svg>

                        <svg
                            className="right"
                            width='28'
                            height='28'
                            viewBox='0 0 28 28'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'>
                            <path
                                opacity='0.24'
                                d='M14 28C21.732 28 28 21.732 28 14C28 6.26801 21.732 0 14 0C6.26801 0 0 6.26801 0 14C0 21.732 6.26801 28 14 28Z'
                                fill={mode ? 'white' : 'black'}
                            />
                            <path
                                fillRule='evenodd'
                                clipRule='evenodd'
                                d='M11.9983 8.66611L11.4637 9.20513C11.2879 9.39201 11.2 9.61012 11.2 9.8592C11.2 10.1133 11.2879 10.329 11.4637 10.5063L14.9281 14L11.4637 17.4937C11.288 17.671 11.2 17.8867 11.2 18.1407C11.2 18.3899 11.288 18.608 11.4637 18.7949L11.9984 19.3268C12.1789 19.5089 12.3952 19.6 12.6471 19.6C12.9037 19.6 13.1175 19.5089 13.2886 19.3268L17.9291 14.647C18.1097 14.4744 18.2 14.2589 18.2 14C18.2 13.746 18.1097 13.5279 17.9291 13.3459L13.2886 8.66611C13.1127 8.48876 12.8989 8.4 12.6471 8.4C12.3999 8.4 12.1837 8.48876 11.9983 8.66611Z'
                                fill='white'
                            />
                        </svg>
                    </li>
               </ol>

               <div className="dollie-carousel">
               {values.food ? (
                    values.fooddata.map((e) => (

                            <NavLink key={e.id} to={`/video/${e.id}`} id={e.id}>
                                <img src={e.url} alt='chanel img' />
                                <p className="card-link-title" style={mode? { color: 'white'} : { color: '#19202c' }}>{e.title}</p>
                            </NavLink>
                    ))
                ) : (
                    <></>
                )}
               </div>
            </div>
        </section>
        </>
    )
}

export default Home;