import aboutMe from '../../assets/about_me.jpg';
import './LandingPage.css';
import '../../index.css';

export function LandingPage() {
    return (
        <>
            <header>
                <nav className="fixed top-0 left-0 right-0 z-50 h-14 flex flex-end items-center test pt-5 pr-1 pb-5 pl-1 bg-black">
                    <ul className="list-none">
                        <li className="inline-block pt-0 pr-1 pb-0 pl-1"><a className="text-decoration-none text-white" href="#">Main</a></li>
                        <li className="inline-block pt-0 pr-1 pb-0 pl-1"><a className="text-decoration-none text-white" href="#">Blog</a></li>
                    </ul>
                </nav>
            </header>
            <main>
                <div className="fixed inset-0 w-full h-screen flex items-center justify-center background ">
                    <p className="text-max">輝</p>
                </div>
                <div className="h-screen text-center flex flex-col flex-center">
                    <h1 className="">Hi, I'm Burg!</h1>
                    <p>A lonewalker.</p>
                </div>
                <div className='h-screen bg-tertiary'>
                    <div className='h-screen grid grid-cols-2'>
                        <div className='flex items-center justify-center'>
                            <img src={aboutMe} alt='My picture' className='aboutMePic' />
                        </div>
                        <div className='flex flex-col justify-center text-dark'>
                            <h1 className=''>I'm Burg!</h1>
                            <p>I'm learning to be a software developer!</p>
                        </div>
                    </div>
                </div>
            </main>
            <footer>
                <div>
                    <p>A footer.</p>
                </div>
            </footer>
        </>
    )
}