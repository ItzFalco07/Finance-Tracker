import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const Grid = ({ id, name, amount, type }) => {
    const classType = type === 'Income' ? 'plus' : 'minus';
    // Delete expense function
    const DeleteGrid = async () => {
        try {
            await axios.post('http://localhost:5000/delete-expense', { id });
            toast.info('Expense deleted!');
        } catch (error) {
            console.error('Error while deleting expense:', error);
            toast.error('Error while deleting expense');
        }
    };

    return (
        <>
            <div id='grid' className="row mb-3 text-center">
                <div className={`col-1 themed-grid-col ${classType}`}>
                    {classType === 'plus' ? '+' : '-'}
                </div>
                <div className="col-3 themed-grid-col">{amount}</div>
                <div className="col-3 themed-grid-col idk">{name}</div>
                <div onClick={DeleteGrid} className="col-1 delete">
                    <i className="fa-solid fa-trash fa-xl"></i>
                </div>
            </div>

        </>
    );
};

export default Grid;
