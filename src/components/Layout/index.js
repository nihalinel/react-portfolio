import './index.scss';
import Sidebar from '../Sidebar/'
import { Outlet } from 'react-router-dom';

const Layout = () => { //arrow function
    return (
        <div className="App"> {/*will be the main wrapper of our application */}
            <Sidebar />
            {/* inside of this element, we will set an outlet where we will render all the pages in our application*/}
            {/* will be like a placeholder */}
            <div className='page' >
                <span className='tags top-tags'>&lt;body&gt;</span> {/* inserting top tags with body tag */}
                <Outlet/>
                <span className='tags bottom-tags' >
                    &lt;/body&gt; {/* add the break line and add the html tag as well*/}
                    <br />
                    {/* add a class name of bottom text html so that we can move it slightly and make a difference of the body tags */}
                    <span className='bottom-tag-html'>&lt;/html&gt;</span>
                </span>
            </div>
        </div>
    )
}

export default Layout