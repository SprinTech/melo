import React, { useEffect } from 'react';
import { ListGroup } from 'react-bootstrap';
import useLocalStorageState from 'use-local-storage-state';
import fetchRequest from '../utils/request';

const UserInfos = () => {
    const _me = JSON.parse(localStorage.getItem('me'))
    const [me, setMe] = useLocalStorageState('me', _me)

    const infosToDisplay = ["country", "display_name", "email"]

    const getMe = () => {
        fetchRequest('me/').then(data => setMe(data))
    }

    useEffect(() => {
        me ?? getMe()
    }, []);

    return (
        me &&
            <ListGroup variant="flush">
                {me && infosToDisplay.map(info => {
                    return (
                        <ListGroup.Item className="spotify-green" key={info}>
                            <b>{info} :</b> {me[info]}
                        </ListGroup.Item>
                    )
                })}
            </ListGroup>

    )
}
export default UserInfos;