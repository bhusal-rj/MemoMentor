import axios from 'axios'

function postAssignment(url,data){
    axios.post(url,data,{
        headers:{
            Authorization:`Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2M2Q1NWNhNzFjMTlkZDExYzMzYWJjNTYiLCJuYW1lIjoiUmFqZXNoIiwiaWF0IjoxNjc0OTI3MjcxLCJleHAiOjE2Nzc1MTkyNzF9.4V3Q9kG0N_OgDedSo2SIs4VZpoUKDSiem3q4ABaWvVM`
        }
    })
}

function postRevision(url,data){
    axios.post(url,data,{
        headers:{
            Authorization:`Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2M2Q1NWNhNzFjMTlkZDExYzMzYWJjNTYiLCJuYW1lIjoiUmFqZXNoIiwiaWF0IjoxNjc0OTI3MjcxLCJleHAiOjE2Nzc1MTkyNzF9.4V3Q9kG0N_OgDedSo2SIs4VZpoUKDSiem3q4ABaWvVM`
        }
    })
}

export {postAssignment,postRevision};