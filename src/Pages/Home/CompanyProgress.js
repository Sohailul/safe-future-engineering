import React from 'react';
import { IoIosPeople } from 'react-icons/io';
import { FaFlag } from 'react-icons/fa';
import { FiShoppingBag } from 'react-icons/fi';
import { BiBuildingHouse } from 'react-icons/bi';

const CompanyProgress = () => {
    return (
        <div>
            <div className='mt-28'>
                <div className="stats shadow grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
                    <div className="stat w-25 text-center">
                        <div className="text-6xl m-auto text-primary">
                            <IoIosPeople />
                        </div>
                        <div className="stat-value text-primary">500+</div>
                        <div className="stat-title text-2xl">Happy Clients</div>
                    </div>

                    <div className="stat w-25 text-center">
                        <div className="text-6xl m-auto text-secondary">
                            <FiShoppingBag />
                        </div>
                        <div className="stat-value text-secondary mt-3 mb-3">300+</div>
                        <div className="stat-title text-2xl">Products</div>
                    </div>
                    <div className="stat w-25 text-center">
                        <div className="text-6xl m-auto text-primary">
                            <BiBuildingHouse />
                        </div>
                        <div className="stat-value text-primary mt-3 mb-3">600+</div>
                        <div className="stat-title text-2xl">Constructed</div>
                    </div>

                    <div className="stat w-25 text-center">
                        <div className="text-6xl m-auto text-secondary">
                            <FaFlag />
                        </div>
                        <div className="stat-value text-secondary mt-3 mb-3">50+</div>
                        <div className="stat-title text-2xl">Members</div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CompanyProgress;