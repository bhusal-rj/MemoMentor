import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Selection, Inject, Edit, Toolbar, Sort, Filter } from '@syncfusion/ej2-react-grids';
import uris from '../Contexts/methods/uris'
import {customersData, customersGrid} from '../Data/dummy';
import {Header} from '../Components';
import { useStateContext } from '../Contexts/ContextProvider';
const PendingRevision = () => {
  const {assignMentTitle,endingRevision,patchData,revisionTitle,pendingRevision,setCompletedRevisions,completedRevisions}=useStateContext()
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Pending Revisions" />
      <GridComponent
        dataSource={pendingRevision}
        allowPaging
        allowSorting
        
        editSettings={{allowDeleting: true, allowEditing: true}}
        width= 'auto'
        actionBegin={(e)=>{
            if(e.requestType==="delete"){
              if(!completedRevisions){
                setCompletedRevisions(e.data[0])
              }else{
                setCompletedRevisions.push(e.data[0])
                setCompletedRevisions(completedRevisions)
                patchData(uris.patchRevisions,e.data[0]._id)
              }
              
            }
          }}
      >
        {console.log(pendingRevision)}
        <ColumnsDirective>
          {revisionTitle.map((item, index) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
        <Inject services={[Page,Toolbar, Selection, Edit, Sort, Filter]} />
      </GridComponent>
    </div>
  )
}

export default PendingRevision