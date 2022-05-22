import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

import { Context } from '../Components/Context';
import Header from '../Components/Header';
import Sitebar from '../Components/Sitebar';

import channelBg from '../img/channel-bg.png';

const Channel = () => {
	const { fetchId, mode, channels} = React.useContext(Context);
	
	return (
		<>
			<Header />
			<section
				className='home'
				style={mode ? { backgroundColor: '#17171E' } : { backgroundColor: 'white' }}>
				<Sitebar arr={channels} />

				<div className='main'>
					<img className='channel-bg' src={channelBg} alt='channel bg' />

					<ol className='d-flex channel-hero'>
						<li className='d-flex' >
							<img src={fetchId.img} alt='channel img' />
							<p style={mode ? { color: 'white' } : { color: '#19202C' }} >{fetchId.title}</p>
						</li>

						<li className='d-flex' >
							<svg
								width='22'
								height='26'
								viewBox='0 0 22 26'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'>
								<path
									opacity='0.24'
									fillRule='evenodd'
									clipRule='evenodd'
									d='M3.66927 22.4545C1.64382 22.4545 0 20.8655 0 18.9091C0 17.6106 0.727122 16.4532 1.83849 15.835C1.83849 15.4764 1.83333 11.2256 1.83333 11.2256C1.83333 7.14185 4.66852 3.70365 8.55556 2.6765V2.36364C8.55556 1.05824 9.64997 0 11 0C12.35 0 13.4444 1.05824 13.4444 2.36364V2.6765C17.3323 3.70344 20.1667 7.14194 20.1667 11.2318V15.8454C21.2793 16.4664 22 17.619 22 18.9091C22 20.8681 20.3586 22.4545 18.3307 22.4545H14.6667C14.6646 24.413 13.0197 26 11 26C8.97496 26 7.33333 24.4143 7.33333 22.4571L3.66927 22.4545ZM9.77778 22.4545C9.77778 23.1083 10.3244 23.6364 11 23.6364C11.6709 23.6364 12.2201 23.1064 12.2222 22.4545H9.77778ZM17.7222 11.2318V16.9427C17.7222 17.2702 17.9922 17.6032 18.3181 17.6847L18.6385 17.7648C19.1733 17.8984 19.5556 18.3689 19.5556 18.9091C19.5556 19.5624 19.0088 20.0909 18.3307 20.0909H3.66927C2.99369 20.0909 2.44444 19.56 2.44444 18.9091C2.44444 18.3666 2.82517 17.8979 3.36026 17.7647L3.69151 17.6823C4.0153 17.6017 4.27778 17.2732 4.27778 16.9426V11.2256C4.27778 7.63639 7.28675 4.72727 11 4.72727C14.7148 4.72727 17.7222 7.63541 17.7222 11.2318Z'
									fill={mode ? 'white' : 'black'}
								/>
							</svg>

                            <button className='subscribe' >Subscribe 2.3m</button>
						</li>
					</ol>

                    <div className='channel-home'>
                        <ol className='channel-home-left'>
                            <div className={mode ? 'channel-nav' : 'channel-nav channel-nav-dark'}>
                            <NavLink className='channel-nav-item' to='home'>Home</NavLink>
                            <NavLink className='channel-nav-item' to='videos'>Videos</NavLink>
                            <NavLink className='channel-nav-item' to='playlists'>Playlists</NavLink>
                            <NavLink className='channel-nav-item' to='channels'>Channels</NavLink>
                            <NavLink className='channel-nav-item' to='discussion'>Discussion</NavLink>
                            <NavLink className='channel-nav-item' to='about'>About</NavLink>

                            </div>
                            <div className={mode ? 'channel-active-item' : 'channel-active-item channel-active-item-dark'}>
                                <Outlet />
                            </div>
                        </ol>
                    </div>
				</div>
			</section>
		</>
	);
};

export default Channel;
