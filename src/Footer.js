import React from 'react';
import "./Footer.css";
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import LoopIcon from '@mui/icons-material/Loop';
import { Grid } from '@mui/material';
import { Slider } from '@mui/material';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';

function Footer() {
  return (
    <div className='Footer'>
        <div className="footer__left">
          <img className='footer__albumLogo' src='https://i.ytimg.com/vi/sElE_BfQ67s/maxresdefault.jpg' alt='' />
         <div className='footer__songInfo'>
          <h4>Yeah!</h4>
          <p>Usher</p>
         </div>
        </div>

        <div className='footer__center'>
        <ShuffleIcon className="footer__green"/>
        <SkipPreviousIcon className='footer__icon'/>
        <PlayCircleIcon fontSize='large' className='footer__icon'/>
        <SkipNextIcon className='footer__icon'/>
        <LoopIcon className='footer__green'/>
        </div>

        <div className='footer__right'>
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon/>
          </Grid>
          <Grid item>
            <VolumeDownIcon/>
          </Grid>
             <Grid item xs>
            <Slider/>
          </Grid>   
         </Grid>  
        </div>
    </div>
  );
}

export default Footer

