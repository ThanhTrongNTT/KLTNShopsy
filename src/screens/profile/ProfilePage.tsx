import React from "react";

const ProfilePage = () => {
    const userName = window.location.pathname.split("/")[2];
    return (
        <div className="flex justify-center p-6 m-6">
            <div className="flex flex-col w-1/2 px-5 py-3 bg-white rounded-lg shadow-2xl border-gray-700">
                <h2 className="text-xl font-bold">PROFILE</h2>
                <h1>Username: {userName}</h1>
                <div className="mt-4">
                    <p className="font-bold">EMAIL ADDRESS</p>
                    <p>tronglagi111222@gmail.com</p>
                </div>
                <div className="mt-4">
                    <p className="font-bold">GENDER</p>
                    <p>Nam</p>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
