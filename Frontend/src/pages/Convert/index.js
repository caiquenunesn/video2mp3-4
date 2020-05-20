import React, { useState } from 'react';
import { useHistory} from 'react-router-dom';
import { DisappearedLoading } from 'react-loadingg';
import api from '../../service/api';
import './style.css';

export default function Convert(){
    const history= useHistory();
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(true);
    
    
    async function handleSearch(e){
        e.preventDefault();
        try{
            const data = {
                search: search,
            }
            const res = await api.get(`info?search=${search}`)
            const { title , time ,thumbnail_url} = res.data

            history.push({pathname: '/info', state: { data: {title, time, thumbnail_url}, searchs: search}});
            
            
            
        }catch(err){
            console.log({err: 'Não encontrado'})
        }
    }

    function load(){
        setTimeout(() => {
            setLoading(true)
        }, 7000);
        setLoading(false)

        return loading;
    }

    

    return(
        <div className="box-container">
                    <h1>Converter Video Online</h1>
            
                    
            
                    <form onSubmit={handleSearch}>

                    <input 
                    name="search" 
                    type="text" 
                    placeholder="Ex : https://www.youtube.com/watch?v=ID"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    />
                    <button onClick={load} type="submit" className="converter">Converter</button>
                    </form>
                    
            
            
            
                    {loading ? load : <DisappearedLoading color="#585898"/>}
        </div>
    );
}