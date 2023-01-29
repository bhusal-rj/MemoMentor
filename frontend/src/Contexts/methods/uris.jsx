const host_url="http://192.168.112.146:5000"
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
    patchRevisions:`${host_url}/api/v1/revisions/update/`,
    patchAssinments:`${host_url}/api/v1/assignments/update`
}
export default urls