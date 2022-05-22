import React,{useContext} from "react";
import { NavLink } from "react-router-dom";
import CardTop from "./CardTop";
import { Context } from "./Context";

const ChannelHome = () =>{
    const {fetchId,mode} = useContext(Context);

    const [videos , setVideos] = React.useState({
        isFetched: false,
        data:{},
      });
      
      React.useEffect(() =>{
        fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${fetchId.id}`)
          .then((res) => res.json())
          .then((data) =>
            setVideos({
              isFetched:true,
              data: data,
            }),
          );
      },[])
    return(
        <>

                {videos.isFetched ? (
                    <NavLink to={`/video/${videos.data[0].id}`} className="selected-post">
                        <img src={videos.data[0].url} alt="posts" />
                        <div >
                            <h3 style={mode ? {color: 'white'} : {color:'#19202C'}}>{videos.data[0].title}</h3>
                            <p style={mode ? {color: 'white', opacity:'0.6' } : {color:'#000000', opacity:'0.6'}}>Your cheap internet-based banner advertising will become one of the sought for ads there are. Today, the world of Internet advertising is rapidly evolving beyond banner ads and intrusive pop-ups. Bayles A common medium for advertising on the Internet is the use of banner ads. </p>

                            <time style={mode ? {color: 'white', opacity:'0.4' } : {color:'#C2C2C2'}}>11k views  ·  6 months ago</time>
                        </div>
                    </NavLink>
                ) : (
                    <></>
                )}

            <CardTop text={`${fetchId.title}'s videos`} mode={mode} />
            <div className="channel-all-posts">
                {videos.isFetched ? (
                        videos.data.map((e) => (
                                <NavLink className='channel-post-item' key={e.id} to={`/video/${e.id}`} id={e.id}>
                                    <img src={e.url} alt='chanel img' />
                                    <p  style={mode? { color: 'white'} : { color: '#19202c' }} >{e.title}</p>
                                </NavLink>
                        ))
                    ) : (
                        <></>
                    )}
            </div>
        </>
    )
}

export default ChannelHome;