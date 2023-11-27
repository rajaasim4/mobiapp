import React from 'react'

const HeadingBar = (props) => {
    return (
        <div className='bg-[#f1f1f1] px-8 py-4 '>
            <h2 className='text-xl'>{props.text}</h2>
        </div>
    )
}

export default HeadingBar