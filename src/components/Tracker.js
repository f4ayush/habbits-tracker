import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';

import { useSelector, useDispatch } from 'react-redux'
import { updateHabit } from '../actions/habits';

const getRecentDates = () => {
    const dates = [];
    for (let i = 6; i >= 0; i--) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      dates.push(date.toLocaleDateString());
    }
    return dates;
  };


export default function Tracker() {
    const habits = useSelector((state) => state.habits);
    const dispatch = useDispatch();
    
    
    const toggleStatus = (habit, date, status) => {
        let updatedHabit = {...habit}
        updatedHabit.history[date] = status;
        dispatch(updateHabit(habits));
    };
    const dates = getRecentDates();
    return (

    <TableContainer component={Paper}>
        {/* 7 days */}
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
            <TableRow>
            <TableCell>Habits</TableCell>
                {dates.map((date,i)=>(
                    <TableCell key={i} align="right">{date}</TableCell>
                ))}
            </TableRow>
            </TableHead>

            <TableBody>
            {habits.map((habit) => (
                <TableRow
                key={habit.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                <TableCell component="th" scope="row">
                    {habit.name}
                </TableCell>
                {
                        dates.map((date,i)=>(

                            <TableCell key={i} align="right">
                                <Box sx={{ minWidth: "calc(100vw/12)" }}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Status</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={habit.history[date] || ''}
                                        label="status"
                                        onChange={(e) => toggleStatus(habit, date, e.target.value)}
                                    >
                                        <MenuItem value="">None</MenuItem>
                                        <MenuItem value="done">Done</MenuItem>
                                        <MenuItem value="notDone">Not Done</MenuItem>
                                    </Select>
                                </FormControl>
                                </Box>
                            </TableCell>

                        ))
                    }
                
                </TableRow>
            ))}
            </TableBody>
        </Table>
    </TableContainer>
    )
}
