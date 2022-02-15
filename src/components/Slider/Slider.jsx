import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Parallax, Navigation, Pagination } from 'swiper';
import Button from '../Button/Button'
import movies from '../../assets/data/movies.json' 

SwiperCore.use([Parallax, Navigation, Pagination]);

function Slider() {
  return (
      <Swiper
        speed={600}
        parallax={true}
        pagination={{
          clickable: true
        }}
      navigation={false}
      className='slider'
      >
        {movies.slice(0, 3).map((movie) => (
            <SwiperSlide key={movie.id} className='swiper__slide'>
            <div className='container'>
                <div className='content'>
                    <h1 className='content__title'>{movie.title}</h1>

                    <div className='row'>
                        <div className='row__rating'>
                        <svg 
                      className="row__rating-star" 
                      width='17'
                      height='16'
                      viewBox='0 0 16 15'
                      xmlns="http://www.w3.org/2000/svg">
                          <path
                            d='M7.99998 0L10.4718 4.93769L16 5.72945L12 9.57289L12.944 15L7.99998 12.4377L3.05569 15L4.00001 9.57289L0 5.72945L5.52783 4.93769L7.99998 0Z'
                            fill='#FAC917'
                          />
                      </svg>
                      <p className='row__rating-number fs-small'>
                          {movie.vote_average}
                      </p>
                        </div>
                        <div className='row__categories'>
                            <p className='row__categorie fs-small'>
                                {movie.release_date}
                            </p>
                        </div>
                    </div>

                    <p className='content__overview'>{movie.overview}</p>
                    
                    <div className='content__buttons'>
                      <Button
                       className={'button--red'}
                       ariaLabel={'Watch Now'}
                       content={'Watch Now'}
                       tabIndex={'4'} />
                      
                      <Button
                       className={'button--black'}
                       ariaLabel={'Add list'}
                       content={'Add list'}
                       tabIndex={'5'} />
                  </div>
                </div>

                <img
                  className='container__image'
                  src={'https://image.tmdb.org/t/p/w300' + movie.poster_path}
                  alt='movie poster' />
            </div>
        </SwiperSlide>

        ))}  
      </Swiper>
  );
}

export default Slider;
