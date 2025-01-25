
export const AuthLayout = ({ children, title = '' }) => {
    return (

        <>
            <div className="font-[sans-serif]">
                <div className="grid lg:grid-cols-2 gap-4 max-lg:gap-12 bg-gradient-to-r bg-primary sm:px-8 px-4 py-12 h-[320px]">
                    <div>
                        <a href="#" onClick={(e) => e.preventDefault()}>
                            {/* <img
                                src="https://readymadeui.com/readymadeui-white.svg"
                                alt="logo"
                                className="w-40"
                            /> */}
                        </a>
                        <div className="max-w-lg mt-16 max-lg:hidden">




                            <p class="max-w-lg text-3xl font-semibold leading-normal text-gray-900 ">¡Empecemos a construir juntos!</p>


                        </div>
                    </div>

                    <div className="bg-white rounded-xl sm:px-6 px-4 py-8 max-w-md w-full h-max shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] max-lg:mx-auto">

                        {children}


                    </div>
                </div>
            </div>

        </>






    )
}
