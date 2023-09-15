import React, { useState, useRef, useEffect } from 'react';

const TeamMember3 = () => {
    // State to manage the visibility of more-info section
    const [showMoreInfo, setShowMoreInfo] = useState(false);

    // Ref to the more-info container
    const moreInfoRef = useRef(null);

    // Function to handle button click
    const handleButtonClick = () => {
        setShowMoreInfo(!showMoreInfo);
    };
    const handleCloseClick = () => {
      setShowMoreInfo(false);
  };

    // Function to handle clicks outside the more-info section
    const handleClickOutside = (event) => {
        if (moreInfoRef.current && !moreInfoRef.current.contains(event.target)) {
            setShowMoreInfo(false);
        }
    };

    // Attach click event listener to detect clicks outside the more-info section
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
            <div className="members  mt-5">
                <div className="team-three relative grid justify-start items-center sm:ml-0 ml-36   sm:flex sm:flex-col  sm:justify-center sm:items-center cursor-pointer">
                    <img src="../Images/team member.webp" alt="photo" className="rounded-full ml-10 sm:ml-0" />
                    <button onClick={handleButtonClick}>
                        <h5 className="text-semibold text-3xl font-semibold hover:drop-shadow-xl hover:scale-105 duration-1000"> CA Pawan Bhusal</h5>
                    </button>
                    <p className="text-md">Chartered Accountant,</p>
                    <p>BBS(T.U)</p>

                    {/* Use the ref to access the more-info container */}
                    <div ref={moreInfoRef} className={`more-info z-30 absolute h-60 w-96 bg-gray-200 top-0 -left-32 sm:-left-52 md:left-0  ${showMoreInfo ? '' : 'hidden'}`}>
                     <button onClick={handleCloseClick}>
                    <i class="fa-solid fa-x absolute text-xl top-1 right-2 text-red-600  hover:bg-red-100 p-2 rounded-full hover:scale-110 duration-500"></i>
                     </button>
                    <p className='text-black'>This is more Info about Pawan Bhusal</p>
                    </div>
                </div>
            </div>
        
    );
}

export default TeamMember3;