import axios from 'axios'
import uris from './uris'
async function getAssignments(){
    try{
        
        const {data}=await axios.get(uris.assignments,
            {headers:{
                Authorization:`Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2M2Q1NWNhNzFjMTlkZDExYzMzYWJjNTYiLCJuYW1lIjoiUmFqZXNoIiwiaWF0IjoxNjc0OTI3MjcxLCJleHAiOjE2Nzc1MTkyNzF9.4V3Q9kG0N_OgDedSo2SIs4VZpoUKDSiem3q4ABaWvVM`
            }})
        return(data.assignments)
    }catch(err){

    }
}

async function getCompletedAssignment(){
    try{
        const {data}=await axios.get(uris.completedAssignment,
            {headers:{
                Authorization:`Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2M2Q1NWNhNzFjMTlkZDExYzMzYWJjNTYiLCJuYW1lIjoiUmFqZXNoIiwiaWF0IjoxNjc0OTI3MjcxLCJleHAiOjE2Nzc1MTkyNzF9.4V3Q9kG0N_OgDedSo2SIs4VZpoUKDSiem3q4ABaWvVM`
            }})
        return(data.assignments)
    }catch(err){

    }
}

async function getCompletedRevison(){
    try{
        const {data}=await axios.get(uris.completedRevisions,
            {headers:{
                Authorization:`Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2M2Q1NWNhNzFjMTlkZDExYzMzYWJjNTYiLCJuYW1lIjoiUmFqZXNoIiwiaWF0IjoxNjc0OTI3MjcxLCJleHAiOjE2Nzc1MTkyNzF9.4V3Q9kG0N_OgDedSo2SIs4VZpoUKDSiem3q4ABaWvVM`
            }})
        return(data.completedRevisions)
    }catch(err){

    }
}

async function getPendingAssignment(){
    try{
        const {data}=await axios.get(uris.pendingAssignment,
            {headers:{
                Authorization:`Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2M2Q1NWNhNzFjMTlkZDExYzMzYWJjNTYiLCJuYW1lIjoiUmFqZXNoIiwiaWF0IjoxNjc0OTI3MjcxLCJleHAiOjE2Nzc1MTkyNzF9.4V3Q9kG0N_OgDedSo2SIs4VZpoUKDSiem3q4ABaWvVM`
            }})
            
        return(data.pendingAssignments)
    }catch(err){

    }
}

async function getTodayRevision(){
    try{
        
        const {data}=await axios.get(uris.todayRevison,
            {headers:{
                Authorization:`Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2M2Q1NWNhNzFjMTlkZDExYzMzYWJjNTYiLCJuYW1lIjoiUmFqZXNoIiwiaWF0IjoxNjc0OTI3MjcxLCJleHAiOjE2Nzc1MTkyNzF9.4V3Q9kG0N_OgDedSo2SIs4VZpoUKDSiem3q4ABaWvVM`
            }})
            
        return(data.todayRevisions)
    }catch(err){

    }
}

async function getUpcomingRevison(){
    try{
        
        const {data}=await axios.get(uris.upcomingRevision,
            {headers:{
                Authorization:`Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2M2Q1NWNhNzFjMTlkZDExYzMzYWJjNTYiLCJuYW1lIjoiUmFqZXNoIiwiaWF0IjoxNjc0OTI3MjcxLCJleHAiOjE2Nzc1MTkyNzF9.4V3Q9kG0N_OgDedSo2SIs4VZpoUKDSiem3q4ABaWvVM`
            }})
            
        return(data.upcomingRevisions)
    }catch(err){

    }
}

async function getMissedAssignment(){
    try{
        
        const {data}=await axios.get(uris.missedAssignment,
            {headers:{
                Authorization:`Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2M2Q1NWNhNzFjMTlkZDExYzMzYWJjNTYiLCJuYW1lIjoiUmFqZXNoIiwiaWF0IjoxNjc0OTI3MjcxLCJleHAiOjE2Nzc1MTkyNzF9.4V3Q9kG0N_OgDedSo2SIs4VZpoUKDSiem3q4ABaWvVM`
            }})
        return(data.missedAssinment)
    }catch(err){

    }
}

export {getAssignments,getCompletedAssignment,getCompletedRevison,getPendingAssignment,getMissedAssignment,getUpcomingRevison,getTodayRevision};