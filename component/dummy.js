import React from 'react'

const Dummy = () => {
    return (
        <>
            <style jsx global >
                {`
                    .yellow{
                        color: yellow;
                        font-size: 25px;
                    }
                    .bgyellow{
                        background-color: yellow;
                        border-radius: 3px;
                        padding: 5px;
                    }
                `}
            </style>

            <div className='yellow'>I am Dummy</div>
        </>
    )
}

export default Dummy