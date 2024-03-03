export default function Movie({srcdata})
{
    return(
        <>
                 <h2 class="text-4xl text-center my-10 text-white font-extrabold mx-auto md:text-6xl lg:text-5xl">
          Movie Details Coming Soon...
        </h2>
        
        <section class="relative h-screen flex flex-col items-center justify-center text-center text-white ">
          
          <div class="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
            
              
  
  <video className="h-full w-full rounded-lg p-10" controls autoPlay>
        <source src={srcdata} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
          </div>
  
      </section>
        </>
   
    )
}