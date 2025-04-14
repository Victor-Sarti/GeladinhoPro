import React from "react";

const Title = ({ title, desc}) =>{
    return(
        <div className='flex flex-col justify-center items-center gap-6 w-full md:w-2/3'>
                <h1 className='font-semibold text-3xl'>{title}</h1>
                    <p className='text-stone-600'>
                            {desc}
                    </p>

        </div>
    )
}

export default Title;