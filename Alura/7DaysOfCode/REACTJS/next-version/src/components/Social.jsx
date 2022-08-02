import { GithubLogo, LinkedinLogo, TwitterLogo } from "phosphor-react"

function Social() {

    return (
      <div style={{ display:'flex', color:'#222' }}>
        <div 
          style={{  transition: '0.5s',borderRadius:'50%' ,width:'50px', height:'50px', display:'flex', textAlign:'center', justifyContent:'center', alignItems:'center'}}
        >
          <a href="https://www.linkedin.com/in/lucianoneo" target='_blank' rel="noreferrer"><LinkedinLogo size={32} /></a>
        </div>
        <div 
          style={{ transition: '0.5s' ,borderRadius:'50%',width:'50px', height:'50px', display:'flex', textAlign:'center', justifyContent:'center', alignItems:'center'}}
        >
          <a href="https://github.com/lucianoneo" target='_blank' rel="noreferrer"><GithubLogo size={32} /></a>
        </div >
        <div 
          style={{ transition: '0.5s' ,borderRadius:'50%',width:'50px', height:'50px', display:'flex', textAlign:'center', justifyContent:'center', alignItems:'center'}}
        >
          <a href="https://twitter.com/lucianoneo" target='_blank' rel="noreferrer"><TwitterLogo size={32} /></a>
        </div>
      </div>
    )
  }
  
  export default Social