import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { getUsers } from '../../features/usersSlice';
import { useParams } from 'react-router-dom';

const UserSingle = () => {
    const dispatch = useAppDispatch();
    const users = useAppSelector((state) => state.users.data)
    const { userId } = useParams()

    useEffect(() => {
        if (users.length === 0) dispatch(getUsers());

    }, [dispatch, users])


    // 1. we should return a table of the users album data here
    // Remember that the user table has 3 fields of data : id, title, and userId.
    //we are only intrested in the id and title of each album
    return (
        <div>
            <table>
                <tr>
                    <td>Id</td>
                    <td>title</td>
                    <td>userId</td>
                </tr>
            </table>

        </div>
    );
};

export default UserSingle;