const Home = () => {
    const currentHost = `${window.location.protocol}//${window.location.hostname}`;
    return (
        <div className='flex flex-row justify-center gap-8 items-center mt-8'>
            Landing Page
            {currentHost}
        </div>
    )
}

export default Home;