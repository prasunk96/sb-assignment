import React, { useEffect, useState } from 'react';
import './style.css';
import { fetchPostedJobs } from '../../services/recruiter';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import Breadcrumb from '../../components/Breadcrumb';
import { USER_DATA } from '../../constants';
import CandidateList from '../CandidateList';

const JobsDashboard = () => {
    const dispatch = useDispatch();
    const params = useParams();
    const userData = JSON.parse(sessionStorage.getItem(USER_DATA));
    const { postedJobs } = useSelector(state => state.app);
    const [ currentPage, setCurrentPage ] = useState(1);
    const [pageData, setPageData] = useState([]);
    const [currentViewingJobId, setCurrentViewingJobId] = useState('');
    const totalPages = Math.ceil(postedJobs.length/10);

    const [isViewApplicants, setIsViewApplicants] = useState(false);
    useEffect(() => {
        fetchPostedJobs(dispatch);
    },[]);
    useEffect(() => {
        const length = postedJobs.length;
        if(length) {
            let start = (currentPage - 1) * 10 + 1;
        let end = currentPage * 10;
        let tempArr = [];
        for(let i=start-1; i<=end-1;i++) {
            if(i+1 > length) {
                break;
            } else {
                tempArr.push(postedJobs[i]);
            }
        }
        setPageData(tempArr);
    }
    },[currentPage, postedJobs])
    const range = (start, end) => new Array(end-start+1).fill().map((el, ind) => ind + start);
    const handlePrevious = () => {
        if(currentPage !== 1) {
            setCurrentPage(currentPage - 1);
        }
    }
    const handleNext = () => {
        if(currentPage !== totalPages) {
            setCurrentPage(currentPage + 1);
        }
    }
    const handleViewApplicants = (id) => {
        setCurrentViewingJobId(id);
        setIsViewApplicants(true);
    }
    return (
        <div className="pagesMainContainer JobDashboardContainer">
            <div className="JobDashboardContent">
                <Breadcrumb linkList={[{name: 'Home', link: `/${userData.name}/dashboard`}]}/>
                <h3>Jobs posted by you</h3>
                {pageData.length ? <><div className="JobsContainer">
                    {pageData.map(item => <div className="jobCard">
                        <h4>{item.title}</h4>
                        <p className="truncate-overflow">{item.description}</p>
                        <div className="jobCardFooter">
                            <div className="jobLocationContainer">{item.location}</div>
                            <div>
                                <button className="viewApplicationButton" onClick={() => handleViewApplicants(item.id)}>View Applications</button>
                            </div>
                        </div>
                    </div>)}
                </div>
                <ul className="pagination paginationul">
                    <li onClick={handlePrevious} className={`${currentPage === 1 ? 'disabled' : 'waves-effect'}`}><span><i className="material-icons">chevron_left</i></span></li>
                    {range(1, totalPages).map(item => <li id={`${item}`} key={item} className={`${currentPage === item ? 'active' : 'waves-effect'}`} onClick={() => setCurrentPage(item)}><a href="#!">{item}</a></li>)}
                    <li onClick={handleNext} className={`${currentPage === totalPages ? 'disabled' : 'waves-effect'}`}><span><i className="material-icons">chevron_right</i></span></li>
                </ul></>
                : <div className="noJobContainer">
                    <h6>Your posted jobs will show here!</h6>
                    <Link to={`/${params.username}/postjob`}><button className="postJobButton">Post a job</button></Link>
                </div>
                }
            </div>
            {isViewApplicants && <CandidateList handleClose={setIsViewApplicants} currentViewingJobId={currentViewingJobId}/>}
        </div>
    )
}

export default JobsDashboard;
