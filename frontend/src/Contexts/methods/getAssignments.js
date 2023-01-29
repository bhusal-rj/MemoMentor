import axios from 'axios'
import uris from './uris'

const token=localStorage.getItem('token')
async function getAssignments(){
    const token=localStorage.getItem('token')
    try{
        
        const {data}=await axios.get(uris.assignments,
            {headers:{
                Authorization:`Bearer ${token}`
            }})
        return(data.assignments)
    }catch(err){

    }
}

async function getCompletedAssignment(){
    
    try{
        const token=localStorage.getItem('token')
        const {data}=await axios.get(uris.completedAssignment,
            {headers:{
                Authorization:`Bearer ${token}`
            }})
            
        return(data.completedAssignments)
    }catch(err){

    }
}

async function getCompletedRevison(){
    try{
        const token=localStorage.getItem('token')
        const {data}=await axios.get(uris.completedRevisions,
            {headers:{
                Authorization:`Bearer ${token}`
            }})
            console.log("Rev data",data)
        return(data.completedRevisions)
    }catch(err){

    }
}

async function getPendingAssignment(){
    try{
        const token=localStorage.getItem('token')
        const {data}=await axios.get(uris.pendingAssignment,
            {headers:{
                Authorization:`Bearer ${token}`
            }})
            
        return(data.pendingAssignments)
    }catch(err){

    }
}

async function getTodayRevision(){
    try{
        const token=localStorage.getItem('token')
        
        const {data}=await axios.get(uris.todayRevison,
            {headers:{
                Authorization:`Bearer ${token}`
            }})
           
        return(data.todayRevisions)
    }catch(err){

    }
}

async function getUpcomingRevison(){
    try{
        const token=localStorage.getItem('token')
        
        const {data}=await axios.get(uris.upcomingRevision,
            {headers:{
                Authorization:`Bearer ${token}`
            }})
            
        return(data.upcomingRevisions)
    }catch(err){

    }
}

async function getMissedAssignment(){
    try{
        const token=localStorage.getItem('token')
        
        const {data}=await axios.get(uris.missedAssignment,
            {headers:{
                Authorization:`Bearer ${token}`
            }})
        return(data.missedAssinment)
    }catch(err){

    }
}

export {getAssignments,getCompletedAssignment,getCompletedRevison,getPendingAssignment,getMissedAssignment,getUpcomingRevison,getTodayRevision};