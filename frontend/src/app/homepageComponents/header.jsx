function Header(){
    return(
        <>
        <div className="flex flex-col-reverse md:flex-row w-full md:min-h-screen">
            <div className="w-full md:w-1/2  flex justify-center ">
            <h1  className="font-luckiest-guy text-5xl md:text-6xl lg:text-9xl md:mt-44  ml-2 custom-font font-bold text-black md:ml-16">
                Overcome from your Loneliness

            </h1>
            
            </div>
            <div className="md:w-[904px] w-full flex">
                <img src="/header-girl-1.png" className="w-full h-full md:h-[90%] mt-10 max-w-[600px] md:max-w-[904px]"></img>
            </div>
        </div>
        
        </>
    )
}
export default Header;