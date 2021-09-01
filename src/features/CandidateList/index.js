import React, { useEffect } from 'react';
import './style.css';
import { fetchCandidates } from '../../services/recruiter';
import { useDispatch, useSelector } from 'react-redux';
import Avatar from '../../components/Avatar';
import { setCandidatesList } from '../../app/actions';

const CandidateList = ({ handleClose, currentViewingJobId }) => {
    const dispatch = useDispatch();
    const { candidateList } = useSelector(state => state.app);
    useEffect(() => {
        fetchCandidates(currentViewingJobId, dispatch);
    },[currentViewingJobId]);

    const handleCloseModal = () => {
        handleClose(false);
        dispatch(setCandidatesList([]));
    }
    return (
        <div className="candidateListModal">
            <div className="candidateListContainer">
                <div className="candidateListContainerHeader">
                    <h3>Applicants for this job</h3>
                    <div onClick={handleCloseModal}><i className="material-icons">close</i></div>
                </div>
                <div className="candidateListBodyContainer">
                    <h6>Total applications</h6>
                    <div className="candidateList">
                        {candidateList && candidateList.map(item => <div className="candidateCard">
                            <div className="candidateDetials">
                                <Avatar name={item.name} />
                                <div className="candidateName">
                                    <h3>{item.name}</h3>
                                    <h6>{item.email}</h6>
                                </div>
                            </div>
                            <div className="skillsContainer">
                                <h6>Skills</h6>
                                <p>{item.skills}</p>
                            </div>
                        </div>)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CandidateList;