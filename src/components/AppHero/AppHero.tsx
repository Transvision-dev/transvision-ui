import React from 'react';
import Container from '../container';



const AppHero: React.FC = () => {
    return (
        <Container className="flex flex-wrap items-center justify-center w-full flex-col space-y-12" 
            style={{
                height: "calc(100vh - 64px) ",
                minHeight: "100%", 
                background: "url(https://images.unsplash.com/photo-1606166325695-ce4d64e3195f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D) center center no-repeat", 
                backgroundSize: "cover",
                backgroundColor: "rgba(0,0,0,0.7)",
                backgroundBlendMode: "darken",
            }}
        >
            <h1 className="text-5xl text-white font-bold">Welcome to <span className="text-blue-500">TV UUI</span></h1>
            <div className="flex flex-wrap item-center justify-center">
                <a href="" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4 mr-4">Get Started</a>
                <a href="" className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-full mt-4">Learn More</a>
            </div>
        </Container>
    );
};

export default AppHero;
