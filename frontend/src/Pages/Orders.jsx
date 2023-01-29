import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Selection, Inject, Edit, Toolbar, Sort, Filter } from '@syncfusion/ej2-react-grids';
import uris from '../Contexts/methods/uris'
import {customersData, customersGrid} from '../Data/dummy';
import {Header} from '../Components';
import { useStateContext } from '../Contexts/ContextProvider';
const Customers = () => {
  const {assignMentTitle,pendingAssignments,patchData,setCompletedAssignments,completedAssignment,setCompletedAssignment}=useStateContext()
  
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Pending Assignment" />
      <GridComponent
        dataSource={pendingAssignments}
        allowPaging
        allowSorting
        toolbar={['Delete','Search']}
        editSettings={{allowDeleting: true, allowEditing: true}}
        width= 'auto'
        actionBegin={(e)=>{
          if(e.requestType==="delete"){
            if(!completedAssignment){
              setCompletedAssignment(e.data[0])
            }else{
              completedAssignment.push(e.data[0])
              setCompletedAssignment(completedAssignment)
              patchData(uris.patchAssinments,e.data[0]._id)
            }
            
          }
        }}
      >
       {console.log()}
        <ColumnsDirective >
          {assignMentTitle.map((item, index) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
        <Inject services={[Page,Toolbar, Selection, Edit, Sort, Filter]} />
      </GridComponent>
    </div>
  )
}

export default Customers