import React, { useEffect, useState } from 'react';
import './style.css';
import { fetchPostedJobs } from '../../services/recruiter';
import { useDispatch, useSelector } from 'react-redux';

const JobsDashboard = () => {
    const dispatch = useDispatch();
    const { postedJobs } = useSelector(state => state.app);
    const [ currentPage, setCurrentPage ] = useState(1);
    const [pageData, setPageData] = useState([]);
    const totalPages = Math.ceil(postedJobs.length/10);
    useEffect(() => {
        fetchPostedJobs(dispatch);
    },[]);
    useEffect(() => {
        if(postedJobs.length) {let start = (currentPage - 1) * 10 + 1;
        let end = currentPage * 10;
        let tempArr = [];
        for(let i=start-1; i<=end-1;i++) {
            tempArr.push(postedJobs[i]);
        }
        setPageData(tempArr);}
    },[currentPage, postedJobs])
    const range = (start, end) => new Array(end-start+1).fill().map((el, ind) => ind + start);
    const handlePrevious = () => {
        if(currentPage !== 0) {
            setCurrentPage(currentPage - 1);
        }
    }
    const handleNext = () => {
        if(currentPage !== totalPages) {
            setCurrentPage(currentPage + 1);
        }
    }
    return (
        <div className="JobDashboardContainer">
            <div className="JobDashboardContent">
                <h6>Home</h6>
                <h3>Jobs posted by you</h3>
                <div className="JobsContainer">
                    {pageData.length && pageData.map(item => <div className="jobCard">
                        <h4>{item.title}</h4>
                        <p className="truncate-overflow">{item.description}</p>
                        <div className="jobCardFooter">
                            <div className="jobLocationContainer">{item.location}</div>
                            <div>
                                <button className="viewApplicationButton">View Applications</button>
                            </div>
                        </div>
                    </div>)}
                </div>
                <ul className="pagination paginationul">
                    <li onClick={handlePrevious} className={`${currentPage === 1 ? 'disabled' : 'waves-effect'}`}><a href="#!"><i className="material-icons">chevron_left</i></a></li>
                    {range(1, totalPages).map(item => <li id={`${item}`} key={item} className={`${currentPage === item ? 'active' : 'waves-effect'}`} onClick={() => setCurrentPage(item)}><a href="#!">{item}</a></li>)}
                    <li onClick={handleNext} className={`${currentPage === totalPages ? 'disabled' : 'waves-effect'}`}><a href="#!"><i className="material-icons">chevron_right</i></a></li>
                </ul>
            </div>
        </div>
    )
}

export default JobsDashboard;
