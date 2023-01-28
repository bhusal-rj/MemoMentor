import { textAlign } from '@mui/system';
import React, { createContext, useContext, useEffect, useState } from 'react';
import * as getAll from './methods/getAssignments'
import {postAssignment,postRevision} from './methods/postRoutes';

const StateContext = createContext();

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

const revisionTitle=[
  {
    type:'checkbox', width:'50'
  },
  {
    field:'subject',
    headerText:'Subject',
    width:'100',
    textAlign:'Center'
  },
  {
    field:'revisionTitle',
    headerText:"Title",
    width:'100',
    textAlign:'Center'
  },
  {
    field:'nextRevision',
    headerText:'Next Revision(Days)',
    width:'100',
  }
]

const assignMentTitle = [
  {type: 'checkbox', width: '50' },
  {
    
    field: 'subject',
    headerText: 'Subject',
    width: '100',
    textAlign: 'Center'
  },

  {
    field: 'assignmentTitle',
    headerText: 'Title',
    width: '150',
    textAlign: 'Center',
  },
  {
    field: 'assignmentURL',
    headerText: 'URL',
    width: '200',
    textAlign: 'Center',
  },

  {
    field: 'submissionDate',
    headerText: 'Submission Date',
    width: '135',
    format: 'yMd',
    textAlign: 'Center'
  },

  {
    field: 'completedStatus',
    headerText: 'Completed Status',
    width: '120',
    textAlign: 'Center'
  },

];

export const ContextProvider = ({ children }) => {
  const [screenSize, setScreenSize] = useState(undefined);
  const [currentColor, setCurrentColor] = useState('#03C9D7');
  const [currentMode, setCurrentMode] = useState('Light');
  const [themeSettings, setThemeSettings] = useState(false);
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);
  const [showAddMenu, setShowAddMenu] = useState(false);
  const [assignments, setAssignments] = useState([]);
  const [pendingAssignments,setPendingAssignments]=useState([])
  const [pendingRevision,setPendingRevision]=useState([])
  const [todayRevision,setTodayRevision]=useState([])
  const [missedAssignment,setMissedAssignment]=useState([])
  const [completedRevisions,setCompletedRevisions]=useState([])


  const setMode = (e) => {
    setCurrentMode(e.target.value);
    localStorage.setItem('themeMode', e.target.value);
  };

  const setColor = (color) => {
    setCurrentColor(color);
    localStorage.setItem('colorMode', color);
  };

  const handleClick = (clicked) => setIsClicked({ ...initialState, [clicked]: true });

  useEffect(() => {
    const getData = async () => {

      const assignment = await getAll.getAssignments()
      setAssignments(assignment)
      let pendingAssignment=await getAll.getPendingAssignment()
      setPendingAssignments(pendingAssignment);

      let revisionToday=await getAll.getTodayRevision()
      setTodayRevision(revisionToday);
      console.log("Today",revisionToday)
      let upcomingRevisions=await getAll.getUpcomingRevison();
      
      setPendingRevision(upcomingRevisions)

     
      setCompletedRevisions(await getAll.getCompletedRevison());
      setMissedAssignment(await getAll.getMissedAssignment());
      
    }
    getData()
  }, [])

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <StateContext.Provider value={{ currentColor, currentMode, activeMenu, screenSize, setScreenSize, handleClick, isClicked, initialState, setIsClicked, setActiveMenu, setCurrentColor, setCurrentMode, setMode, setColor, themeSettings, setThemeSettings, showAddMenu, setShowAddMenu, assignments, postAssignment,postRevision, assignMentTitle, setAssignments,pendingAssignments,todayRevision,pendingRevision,revisionTitle }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);