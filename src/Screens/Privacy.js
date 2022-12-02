import React, { useState, useEffect } from 'react'
import LoadingSpinner from '../Components/LoadingSpinner';
import http from '../utils/http-common';


function Privacy() {
  const [loading, setLoading] = useState(true);
  const [privacyData, setPrivacyData] = useState([]);

const fetchPrivacy = async() => {
    setLoading(true);
    try{
        await http.get(`privacy-policy`).then(res => {                                
            setPrivacyData(res.data);
        })
        
    }catch(error){
        console.log(error.message);
    }        
    setLoading(false);
}

    useEffect(() => {         
        fetchPrivacy();    
    }, []);
    
    
    return (
        <div>
            {loading && <LoadingSpinner />}
            {!loading && (
                <div className='privacy_policy'>        
                    <div dangerouslySetInnerHTML={{ __html: privacyData.data.privacy_terms }} />
                </div>
            )}
        </div>   
    )
}

export default Privacy