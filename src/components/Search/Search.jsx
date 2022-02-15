import React from 'react'

function Search(props) {
    return (
        <button
          className={`${props.className}`}
          onClick={props.open}
          aria-label='Open browser'
          tabIndex='2'>
            <svg
                width='18'
                height='18'
                viewBox='0 0 18 18'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
            >
                <path
                    d='M7 13.9922C8.70542 13.9922 10.2558 13.3875 11.4651 12.3643L16.8915 17.7906C17.0155 17.9147 17.1705 17.9767 17.3411 17.9767C17.5116 17.9767 17.6667 17.9147 17.7907 17.7906C18.0388 17.5426 18.0388 17.1395 17.7907 16.8914L12.3643 11.4651C13.3721 10.2558 13.9922 8.68986 13.9922 6.99994C13.9922 3.13947 10.8605 0.00769043 7 0.00769043C3.15504 0.00769043 0.00775146 3.15498 0.00775146 6.99994C0.00775146 10.8604 3.15504 13.9922 7 13.9922ZM7 1.27901C10.1628 1.27901 12.7209 3.85265 12.7209 6.99994C12.7209 10.1627 10.1628 12.7209 7 12.7209C3.83721 12.7209 1.27907 10.1472 1.27907 6.99994C1.27907 3.85265 3.85271 1.27901 7 1.27901Z'
                    fill='white'
                />
            </svg>

        </button>
    )
}

export default Search