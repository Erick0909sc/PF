import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getFoods } from '@/redux/actions';
import Cards from '@/components/Cards/Cards';


const Home = () => {
    const dispatch = useDispatch();
    const foods = useSelector((state) => state.foods);

    useEffect(() => {
        dispatch(getFoods());
    }, [dispatch]);

    return (
        <div style={{"marginTop": "2rem"}}>
            <h1 style={{"marginBottom": "1rem", "textAlign": "center", "fontSize": "2rem"}}>Home</h1>
            <Cards foods={foods} />
        </div>
    )
};


export default Home;