//:TODO  Resume 
import Image from 'next/image';
import Button from '@mui/material/Button';
import ContactsIcon from '@mui/icons-material/Contacts';
import { createTheme,ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: 'rgba(75, 85, 99, var(--tw-text-opacity))',
    },
  },
});

function AboutMe(){
    return (
      <div>
          <Image 
            src='/y0679.png'
            alt='logo'       
            width={250}
            height={250}/>
            <div className='text-center mb-8'>
              <ThemeProvider theme={theme}>
                <a  target="_blank" href="https://github.com/Anno328/Resume/blob/master/Resume.md">
                  <Button color="primary" variant="outlined" endIcon={<ContactsIcon />}>resume</Button>
                </a>
              </ThemeProvider>
            </div>
          <div className='text-left'>
            <span className='text-xl md:text-base'>Name:</span><span className='text-xl md:text-base' >AnnoRyoya</span><br />
            <span className='text-xl md:text-base'>Age :</span><span className='text-xl md:text-base' >24</span><br /><br />
            <span className='text-xl md:text-base'>Profile:</span><br />
            <span className='text-base md:text-xs'>Webアプリケーションエンジニアを3年経験し、複数のBtoB,BtoCのWebアプリを構築した。その中で、フロントエンド（React）～バックエンド（Express）の設計・開発、クラウド(Azure)の構築ノウハウを身に着けた。また、CICD(AzureDevOps Pipeline)の整備を通して、資産品質の担保や開発プロセスの効率化に貢献した。</span><br /><br />
            {/* <Image 
            src='/myphoto.jpeg'
            alt='logo'       
            width={300}
            height={500}/> */}
          </div>
        <div className='text-left text-base md:text-xs'>
          <p className='text-xl mt-10 md:text-sm'>Vison:</p>
          <p className=''>I want to be Full Stack Engineer!!</p>
          <p className=''>I would like to offer a personalized website!!</p>
        </div>

        <div className='text-left text-base md:text-xs'>
          <p className='text-xl mt-10 md:text-sm'>Offline:</p>
          <p className=''>I drink cofee a lot.</p>
          <p className=''>I like to wear old clothes.</p>
          <p className=''>I like to watch movies.</p>
          <p className=''>I like to read SF books.</p>
          <p className=''>I love cat.</p>
          <p className=''>I like basketball.</p>
          <p className=''>I like to taking photos.</p><br />
          <p className=''>You can see my offline from my Instagram!!</p><br />
        </div>
      </div>
    )
  }
  
  export default AboutMe
  