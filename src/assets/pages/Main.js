import { Route, Routes } from "react-router-dom";
import ChannelHome from "../Components/ChannelHome";
import ChannelVideos from "../Components/ChannelVideos";
import ChannelPlaylists from '../Components/ChannelPlaylists'
import ChannelChannels from '../Components/ChannelChannels'
import ChannelDiscussion from '../Components/ChannelDiscussion'
import ChannelAbout from '../Components/ChannelAbout'
import Channel from "./Channel";
import Home from "./Home";
import Video from "./Video";



const Main = ()=>{
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="channel" element={<Channel />}>
                <Route path="home" element={<ChannelHome />} />
                <Route path="videos" element={<ChannelVideos />} />
                <Route path="playlists" element={<ChannelPlaylists />} />
                <Route path="channels" element={<ChannelChannels />} />
                <Route path="discussion" element={<ChannelDiscussion />} />
                <Route path="about" element={<ChannelAbout />} />
            </Route>
            <Route path="/video/:id" element={<Video />} />
            <Route path="*" element={<Home />} />
        </Routes>
    )
}

export default Main;