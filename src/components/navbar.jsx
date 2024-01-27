import { navbarlo, navbarlo1, navbarlo2 } from '../assets'
import { navigationLink } from './constanta'
import { styles } from './style'

const Navbar = () => {
  return (
    <>
      <div className={`${styles.paddingX} ${styles.flexCenter}`} >
        <div className={`${styles.container} `}>
          <div className={`${styles.flexBetween} py-6 w-full float-right`}>
            <img src={navbarlo} alt="s" />

            <ul>{navigationLink.map((nav, idx) => (
              <li>{nav.title}</li>
            ))}
            </ul>
            <img src={navbarlo1} alt="navbarlo1" />
            <img src={navbarlo2} alt="navbarlo1" />
          </div>
        </div>
      </div>

    </>
  )
}

export default Navbar