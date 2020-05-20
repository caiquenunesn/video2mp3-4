import React, {useEffect, useState} from 'react';
import api from '../../service/api';
import { useHistory } from 'react-router-dom';

import './style.css';

export default function Info(){
    const [title, setTitle] = useState('');
    const [time, setTime] = useState('');
    const [thumbnail_url, setThumbnail_url] = useState('');
    
    const history = useHistory();
    const { searchs, data } = history.location.state;
    useEffect(() => {
            setTitle(data.title)
            setTime(data.time)
            setThumbnail_url(data.thumbnail_url);
        
        
    }, [])
    
    const IDsearch = {
        search: searchs,
    }
    const handleDownloadMp3 = async () => {
        try{
        await api.get(`mp3download?search=${searchs}`).then(
            
            window.open(`http://localhost:3333/mp3download?search=${searchs}`, '_self'));
        
    }catch(err){
        console.log(err)
    }
    }

    const handleDownloadMp4 = async () => {
        try{
            await api.get(`mp4download?search=${searchs}`).then(
                window.open(`http://localhost:3333/mp4download?search=${searchs}`, '_self'));
        }catch(err){
        
        }
}
    
    function ConvertNext(){
        history.push('/');
    }
    

    return(
        <div className="box-container2">

                    
            
                    
    <div className="td">

                                    <strong>Titulo</strong>
    <p style={{padding: "7px", fontSize: "15px", lineHeight: "0px", letterSpacing: "0px" , color: "#000", marginBottom: "10px"}}>{title}</p>
    </div>
    <div className="td">
        
                                    <strong>Duração</strong>
    <p style={{marginLeft: "7px", fontSize: "15px", letterSpacing: "0px" , color: "#000", marginBottom: "10px"}}>{time}s</p>
    </div>
                        <div className="first">
                            <img src={thumbnail_url} alt="thumbnail"/>
                        </div>
                        <div className="o">
                            

                        <button onClick={handleDownloadMp4} value="search" type="submit" className="mps">MP4</button>
                        
                        <button onClick={handleDownloadMp3} value="search" type="button" className="mps">MP3</button>
                        
                        
                       </div>
<button onClick={ConvertNext} className="convert" type="button">Converter Proximo</button>
                        
                        
                    
            
        </div>
    );
}