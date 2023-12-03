export default function NavBar() {
  return (
    <>
    <div className='navBarContainer flex justify-between border items-center'>
        <div className='leftNavBar'>
            <img src="https://assets-global.website-files.com/5d3aa39f8474c472841a7dfc/647f58e339fa552032d729f6_Logo.png" alt="brandLogo" style={{height:"45px"}} />
        </div>
        <div className='rightNavBar flex p-1'>
            
            <div className='calendarLink'>
                <button className='calendarButton border-0 rounded p-1 px-2 text-slate-900 font-poppins'>Home</button>
            </div>
        </div>
    </div>
    </>
  )
}
