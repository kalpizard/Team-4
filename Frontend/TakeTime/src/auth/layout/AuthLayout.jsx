
export const AuthLayout = ({ children, title = '' }) => {
    return (

        <>
            <div className="font-[sans-serif]">
                <div className="grid lg:grid-cols-2 gap-4 max-lg:gap-12 bg-gradient-to-r bg-sky-200 sm:px-8 px-4 py-12 h-[320px]">
                    <div>
                       
                        <div className="max-w-lg mt-16 max-lg:hidden">
                            
                            <h3 className="text-3xl font-bo font'black ">Empecemos a construir juntos</h3>
                            <p className="text-sm mt-4 ">Aqui compartimos habilidades, apoyamos a otros y creamos comunidad</p>
                        </div>
                    </div>

                    <div className="bg-sky-50 rounded-xl sm:px-6 px-4 py-8 max-w-md w-full h-max shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] max-lg:mx-auto">

                        {children}


                    </div>
                </div>
            </div>

        </>






    )
}
