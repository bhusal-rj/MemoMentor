import axios from 'axios'


function postAssignment(url,data){
    const token=localStorage.getItem('token')
    axios.post(url,data,{
        headers:{
            Authorization:`Bearer ${token}`
        }
    })
}

function postRevision(url,data){
    const token=localStorage.getItem('token')
    axios.post(url,data,{
        headers:{
            Authorization:`Bearer ${token}`
        }
    })
}

function patchData(url,id){
    const token=localStorage.getItem('token')
    const uri=url+'/'+id
    console.log(uri)
    axios.patch(uri,{},{
        headers:{
            Authorization:`Bearer ${token}`
        }
    })
}

function patchRevision(id){
    
    const token=localStorage.getItem('token');
    let url=`http://192.168.112.146:5000/api/v1/revisions/update/${id}`
    const {data}=axios.patch(url,{},{
        headers:{
            Authorization:`Bearer ${token}`
        }
    })
    console.log(data)

}

export {postAssignment,postRevision,patchData,patchRevision};