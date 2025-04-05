import React from 'react'

function Cards({userName = "pathak", post="Engineers", image="", about=""}) {
    // console.log(props);
    
  return (
        <div>
            <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
                <img className="w-30 h-30 rounded-full mx-auto" src ={image} alt="" width="384" height="512"/>
                <div className="pt-6 text-center space-y-4">
                    <blockquote>
                    <p className="text-lg font-medium">
                        {about}
                    </p>
                    </blockquote>
                    <figcaption className="font-medium">
                    <div className="text-sky-500 dark:text-sky-400">
                        {userName}
                    </div>
                    <div className="text-slate-700 dark:text-slate-500">
                        {post}
                    </div>
                    </figcaption>
                </div>
            </figure>
        </div>   
    )
}

export default Cards