import { Link } from "react-router-dom";

const Join = () => {
     return (
        <section className="min-w-full  flex-col min-h-screen border-2 border-blue-300 flex items-center">
            <div className="pt-10">
            <h3 className="text-6xl">Join Us Today</h3>
            
            </div>
            <div className="flex gap-4 pt-4">
                <Link className="px-16 p-4 bg-slate-200 " to={"/join/onboarding"}>
                    Influencer
                    </Link>
                    <Link className="px-16 p-4 bg-slate-200 " to={"/join/onboarding"}>
                        Business
                        </Link>
            </div>
        </section>
    )
}

export default Join;