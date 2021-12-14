import React from 'react';
import Nav from '../CommonComp/Nav/Nav';
import Footer from '../CommonComp/Footer/Footer';
import ScrollTop from '../CommonComp/ScrollTop/ScrollTop'
import Profile from './Profile/Profile';
import styles from "./Team.module.scss";
import img_dev from './Images/CP_Dev.svg'
import img_cherry from "./Images/CoCp_Cherry.svg"
import img_ambar from "./sample.png"
import img_naman from './Images/Sec_Naman.svg'
import img_keta from './Images/Fin_Keta.svg'
import img_smeet from './Images/Creatives_Smeet.svg'
import img_parth from './Images/Soc_Parth.svg'
import img_krish from './Images/Mark_Krish.svg'
import img_vatsal from './Images/Mark_Vatsal.svg'
import img_russel from './Images/Edi_Russel.svg'
import img_arjav from './Images/Tech_Arjav.svg'
import img_manan from './Images/Tech_Manan.svg'
import img_muskan from './Images/Pubs_Muskaan.svg'
import img_dhairya from './Images/Events_Dhairya.svg'

function Team() {

  const people = [
    [img_dev, 'Dev Manek', 'Chairperson', [], img_cherry, 'Cherry Bhatt', 'Vice-Chairperson', [], "#f5b700", "#de0152"],
    [img_ambar, 'Ambar Mehta', 'Secretary', [], img_naman, 'Naman Sanghavi', 'Secretary', [], "#0000ff", "#ff8629"],
    [img_keta, 'Keta Suthar', 'Treasurer', [], "#bee1e6"],
    [img_smeet, 'Smeet Veera', 'Creatives Head', ["Khushi Sanghvi", "Vrisha Shah", "Hitakshi Shirude"], img_parth, 'Parth Shah', 'Media Head', ["Krish Panchal", "Nandini Shetty"], "#deff0a", "#0aefff"],
    [img_krish, 'Krish Shah', 'Marketing Head', ["Divya Suresh", "Deep Dholakia"], img_vatsal, 'Vatsal Tolia', 'Marketing Head', ["Divya Suresh", "Deep Dholakia"], "#ec0868", "#fcd5ce"],
    [img_russel, 'Russel Lobo', 'Editorial Head', ["Yash Brahmabhatt", "Krisha Lakhani", "Sanika Ardekar"], "#00c1ff"],
    [img_arjav, 'Arjav Parekh', 'Technical Head', ["Devesh Agarwal", "Shubh Shah", "Prachet Shah", "Glen Dhingra"], img_manan, 'Manan Doshi', 'Technical Head', ["Devesh Agarwal", "Shubh Shah", "Prachet Shah", "Glen Dhingra"], "#ffb4a2", "#faedcd"],
    [img_muskan, 'Muskan Jain', 'Publicity Head', ["Nupur Parmar", "Gautam Malpani"], img_dhairya, 'Dhairya Parikh', 'Events Head', ["Dev Mehta", "Krushang", "Ishan Shah"], "#bee1e6", "#dee2e6"],
  ]

  const TeamTileComp = () => {
    const comp = (
      people.map((people, index) => {
        if ((index + 1) % 3 === 0) {        
          return (
            <div className={styles.teams__profile}>
              <Profile img={people[0]} name={people[1]} title={people[2]} jrs={people[3]} backColor={people[4]} />
            </div>
          )
        }
        else {
          return (
            <div className={styles.teams__profile}>
              <Profile img={people[0]} name={people[1]} title={people[2]} jrs={people[3]} backColor={people[8]} />
              <Profile img={people[4]} name={people[5]} title={people[6]} jrs={people[7]} backColor={people[9]}/>
            </div>
          )       
        }
      }))

    return comp;
  }



  return (
    <div className={styles.teams}>
      <Nav />
      <div className={styles.teams__body}>
        <h1 className={styles.teams__title}>
          Our Team
        </h1>
        <div className={styles.teams_tiles}>
          <TeamTileComp />
        </div>
      </div>
      <ScrollTop />
      <Footer />
    </div>
  )
}

export default Team
