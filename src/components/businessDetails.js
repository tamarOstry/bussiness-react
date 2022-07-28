import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';
import * as React from 'react';
import { useEffect } from 'react'
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import { getBusinessByAdminId } from "../api/getBussinessByAdminId";
import { useState } from "react";
import { useLocation } from 'react-router-dom';

export function BusinessDetails() {
  const [openService, setOpenService] = useState(true);
  const [business, setBusiness] = useState({});

  const location = useLocation();
  const form = location.state;
  useEffect(() => {
    getA()
  }, [])

  const getA = () => {
    getBusinessByAdminId(form.id).then(data => {
      if (data) {
        // setBusiness(...data);
        setBusiness(b => ({
          ...b,
          ...data
        }));
        console.log(business);
      }
      else {
        alert("admin not defined  you need to application")
      }
    })
  }


  const handleClick = () => {
    setOpenService(!openService);
  };

  return (
    <div className="div">
      <List
        sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            hello for your business details
          </ListSubheader>
        }
      >
        <ListItemButton>
          <ListItemIcon>
            <SendIcon />
          </ListItemIcon>
          {/* {business.businessDetails.businessName} */}
          <ListItemText primary='bgh' />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary="hh" />
        </ListItemButton>
        <ListItemButton onClick={handleClick}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary='services' />
          {openService ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openService} timeout="auto" unmountOnExit>
          {business.businessDetails.services.map((service) => {
            return (
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="ss" />
              </ListItemButton>
            </List>
            );
          })}
        </Collapse>

        {/* 
        <Collapse in={openService} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary="abuvim" />
            </ListItemButton>
          </List>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary="bananot" />
            </ListItemButton>
          </List>
        </Collapse> */}
      </List>
      <Fab color="secondary" aria-label="edit">
        <EditIcon />
      </Fab>
    </div>
  )
}
