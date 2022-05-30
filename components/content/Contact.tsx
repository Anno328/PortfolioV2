import Snackbar from '@mui/material/Snackbar';
import SnackbarContent from '@mui/material/SnackbarContent';
import Image from 'next/image';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { createTheme,ThemeProvider } from '@mui/material/styles';
import React, { useState } from "react"
import emailjs, { init } from 'emailjs-com';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const theme = createTheme({
  palette: {
    primary: {
      main: 'rgba(75, 85, 99, var(--tw-text-opacity))',
    },
  },
});

function Contact(){
  
  const [open, setOpen] = useState(false);
  const [openVallidationError, setOpenVallidationError] = useState(false);
  const [openProgress, setOpenProgress] = useState(false);

  const [emailSubject, setEmailSubject] = useState('');
  const [emailMail, setEmailMail] = useState('');
  const [emailName, setEmailName] = useState('');
  const [emailMessage, setEmailMessage] = useState('');

  function onChangeEmailSubject(event: any){
    setEmailSubject(event.target.value);
  }

  function onChangeEmailMail(event: any){
    setEmailMail(event.target.value);
  }

  function onChangeEmailName(event: any){
    setEmailName(event.target.value);
  }

  function onChangeEmailText(event: any){
    setEmailMessage(event.target.value);
  }

  const sendButtonClick = () => {
    setOpenProgress(true);
    if(emailSubject == '' || emailMail == '' || emailName == '' || emailMessage == ''|| !emailMail.match(/.+@.+\..+/)){
      setOpenVallidationError(true);
      setOpenProgress(false);
    }else{
      init(emailjsUserID);
      const emailjsUserID = process.env.NEXT_PUBLIC_USER_ID;
      const emailjsServiceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const emailjsTemplateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  
      const templateParams = {
          subject: emailSubject,
          from_mail: emailMail,
          from_name: emailName,
          message: emailMessage
      };
  
  
      emailjs.send(emailjsServiceId, emailjsTemplateId, templateParams, emailjsUserID).
      then(()=>{
        setOpen(true);
        setOpenProgress(false);
      });
    }
  };

  const handleClose = () => {
    setOpen(false);
    setOpenVallidationError(false);
  };

    return (
      <div>
        <Image 
          src='/y0689.png'
          alt='logo'       
          width={250}
          height={250}/>
        <p className='text-xl animate-bounce'>Interested? Contact Me!</p><br />
        <form action="">
          <TextField required fullWidth margin="dense" id="yourName" label="Your Name" variant="outlined" onChange={() => {onChangeEmailName(event)}} /><br />
          <TextField required fullWidth margin="dense" id="yourEmail" label="Your Email" variant="outlined" onChange={() => {onChangeEmailMail(event)}} /><br />
          <TextField required fullWidth margin="dense" id="subject" label="Subject" variant="outlined" onChange={() => {onChangeEmailSubject(event)}} /><br />
          <TextField required fullWidth margin="dense" id="yourMessage" label="Your Message" variant="outlined" onChange={() => {onChangeEmailText(event)}} multiline rows={4}/><br />
          {openProgress ?
          <Box>
            <CircularProgress />
          </Box>:<></>
          }
          <ThemeProvider theme={theme}>
            <Button color="primary" variant="outlined" onClick={() => {sendButtonClick()}} endIcon={<SendIcon />}>Send</Button>
          </ThemeProvider>
        </form>
        
          {/* mail sent dialog */}
          <Snackbar
            open={open}
            onClose={handleClose}
            anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}
            autoHideDuration={3000}
          >
            <SnackbarContent style={{
                backgroundColor:'rgba(110, 231, 183, var(--tw-bg-opacity)',
                color: 'rgba(55, 65, 81, var(--tw-text-opacity))',
                fontWeight: '700',
                margin: 'auto',
                display: 'block'
              }}
              message={<span>Sent an e-mail!</span>}
            />
          </Snackbar>

          {/* validation dialog */}
          <Snackbar
            open={openVallidationError}
            onClose={handleClose}
            anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}
            autoHideDuration={3000}
          >
            <SnackbarContent style={{
                backgroundColor:'rgba(239, 68, 68, var(--tw-bg-opacity))',
                color: 'rgba(255, 255, 255, var(--tw-bg-opacity))',
                fontWeight: '700',
                margin: 'auto',
                display: 'block'
              }}
              message={<span>Please enter the correct value...</span>}
            />
          </Snackbar>
      </div>
    )
  }
  
  export default Contact 