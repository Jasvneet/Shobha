import './Loves.css'
import { NavLink, Link} from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchLoves } from '../../store/loves';
import LovesIndexItem from './LovesIndexItem';


export default function LovesIndex() {
    const loves = useSelector(state => Object.values(state.loves))
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchLoves());
    }, [dispatch])

    return (
        <>
            {loves.map(love => (
                <>
                <LovesIndexItem love={love} />
                </>
            ))}

        </>
    )

}