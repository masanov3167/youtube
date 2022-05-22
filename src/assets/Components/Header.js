import React from 'react';
import { Context } from './Context';
const Header = () => {
	const { token, mode } = React.useContext(Context);
	return (
		<>
			<header
				className='header d-flex'
				style={
					mode ? { backgroundColor: '#17171E' } : { backgroundColor: 'white' }
				}>
				<div className='logo-wrapper d-flex'>
					<span className={mode ? 'nav-menu-dark' : 'nav-menu'}></span>
					<span className={mode ? 'logo-dark' : 'logo'}></span>
				</div>

				<div className='header-hero d-flex'>
					<input
						className='search'
						style={mode? { backgroundColor: '#2e2e35' }: { backgroundColor: '#f2f2f2' }}
						type='text'
						placeholder='Search'
					/>
					<svg
                        className={mode ? 'search-icon' : 'search-icon-dark'}
						width='19'
						height='19'
						viewBox='0 0 19 19'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'>
						<path
							fillRule='evenodd'
							clipRule='evenodd'
							d='M17.9005 16.4865L14.3205 12.9065L14.3195 12.9055C16.9095 9.569 16.4594 4.79387 13.2916 2.00007C10.1238 -0.793727 5.32983 -0.643497 2.34317 2.34317C-0.643497 5.32983 -0.793727 10.1238 2.00007 13.2916C4.79387 16.4594 9.569 16.9095 12.9055 14.3195L16.4855 17.8995C16.7364 18.1596 17.1081 18.2642 17.4578 18.1729C17.8075 18.0816 18.0808 17.8088 18.1725 17.4592C18.2643 17.1097 18.1603 16.7378 17.9005 16.4865ZM13.1967 11.0005C12.1249 12.8569 10.1441 14.0005 8.00052 14.0005C4.68681 14.0005 2.00052 11.3142 2.00052 8.00052C2.00052 4.68681 4.68681 2.00052 8.00052 2.00052C10.1441 2.00052 12.1249 3.14411 13.1967 5.00052C14.2685 6.85693 14.2685 9.14411 13.1967 11.0005Z'
							fill='currentColor'
						/>
					</svg>

					<div className='header-profil d-flex'>
						<span className={mode ? 'profil-item-dark' : 'profil-item'}></span>
						<img className='user-img' src={token.pic} alt='user img' />
					</div>
				</div>
			</header>
		</>
	);
};

export default Header;
