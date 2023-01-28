const host_url="http://10.100.56.89:5000"
const urls={
    assignments:`${host_url}/api/v1/assignments`,
    postAssignment:`${host_url}/api/v1/assignments`,
    revisions:`${host_url}/api/v1/revisions`,
    upcomingRevision:`${host_url}/api/v1/revisions/upcoming`,
    todayRevison:`${host_url}/api/v1/revisions/today`,
    missedAssignment:`${host_url}/api/v1/assignments/missed`,
    pendingAssignment:`${host_url}/api/v1/assignments/pending`,
    completedAssignment:`${host_url}/api/v1/assignments/completed`,
    completedRevisions:`${host_url}/api/v1/revisions/completed`,
    
}
export default urls