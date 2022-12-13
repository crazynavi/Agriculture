import React, { useEffect, useState } from 'react'
import ReportsCard from '../ReportsCard'
import { FcLeft } from 'react-icons/fc'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import banner from '../../assets/updates-2.jpg'
import http from '../../utils/http-common'
import Timestamp from 'react-timestamp'
import base64 from 'base-64';
import utf8 from 'utf8';

const ReportsArchives = ({subdata, subID, detailstatus}) => {
    const [showSingleAcrchive, setShowSingleArchive] = useState(false);
    const [ID, setID] = useState();
    const [detaildata, setDetaildata] = useState({});
    const [title, setTitle] = useState("");
    const [subtitle, setSubtitle] = useState("");
    const [content, setContent] = useState("");

    useEffect(() => {
        if(showSingleAcrchive === true){
            http.get(`subscriptions/${subID}/read/${ID}`).then((res)=>{
                setDetaildata(res.data.data.report);
            })
        }
    }, [showSingleAcrchive]);
    useEffect(() => {
      if(detaildata.title){
      setTitle((detaildata.title).split(";")[0]);
      const subtitle1 = (detaildata.title).split(";")[1]?`${(detaildata.title).split(";")[1]};`:"";
      const subtitle2 = (detaildata.title).split(";")[2]?(detaildata.title).split(";")[2]:"";
      setSubtitle(subtitle1+subtitle2);
      }
      if(detaildata.content){
          const bytes = base64.decode(detaildata.content.replace(/\s/g, ''));
          const text = utf8.decode(bytes);
          setContent(text);
      }
    }, [detaildata]);
    useEffect(() => {
        setShowSingleArchive(false);
    }, [detailstatus]);
    return (
        <>
            {showSingleAcrchive ?

                <div className='box-container mt-4'>
                    <div className='d-flex w-100 justify-content-between align-items-center'>
                        <div className='d-flex align-items-center go-back-btn' onClick={() => setShowSingleArchive(false)}>
                            <FcLeft />
                            <h2 className='ms-2'>Archives</h2>
                        </div>
                        <div className='d-flex align-items-center'>
                            <div className='small-text d-flex align-items-center'>
                                <AiOutlineMinus />
                                <h2>A</h2>
                            </div>
                            <div className='large-text d-flex align-items-center'>
                                <AiOutlinePlus />
                                <h1>A</h1>
                            </div>
                        </div>
                    </div>
                    <div className='reports-overflow'>
                        {/* <div className='archive-date pt-4'>
                            <h2>{title} <Timestamp options={{showTime:0}} date={detaildata.published_at}/> </h2>
                        </div>
                        <div className='archive-image mt-2'>
                            <img src={banner} alt='' className='w-100' />
                        </div>
                        <div className='archive-headline mt-2'>
                            <h1>{subtitle}</h1>
                        </div> */}
                        <div className="archive-text mt-3" dangerouslySetInnerHTML={{ __html: content}} />
                    </div>
                </div>
                :
                <div className='box-container reports mt-4 pt-4'>
                    {subdata.map((data, key)=>{
                        return <ReportsCard data={data} key={key} setID={setID} setShowSingleArchive={setShowSingleArchive} />
                    })}
                </div>
            }
        </>
    )
}

export default ReportsArchives
