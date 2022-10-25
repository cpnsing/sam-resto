// import React from "react";
// import styles from "./Gsap.module.css";
// import gsap from "gsap";
// import gsapTrial from "gsap-trial";

// export default function Slider() {

//     useEffect(() => {
//         const divs = document.querySelectorAll(".testimonials")
// gsap.set(divs[1],{x:100,opacity:1});
// gsapTrial.timeline({repeat:-1,defaults:{duration:3}})
// .add("one")
// .to(divs[0],{y:600,x:0,opacity:0.5},"one")
// .to(divs[1],{y:-350,x:0,opacity:0.5},"one")
// .to(divs[2],{y:-450,x:100,opacity:1},"one")

// .add("two")
// .to(divs[0],{y:300,x:100,opacity:1},"two")
// .to(divs[1],{y:300,x:0,opacity:0.05},"two")
// .to(divs[2],{y:-600,x:0,opacity:0.05},"two")
// .add("three")
// .to(divs[0],{y:0,x:0,opacity:0.05},"three")
// .to(divs[1],{y:0,x:100,opacity:1},"three")
// .to(divs[2],{y:0,x:0,opacity:0.05},"three")

//     },)

//   return (
//     <div className={styles.content}>
//       <div className="testimonials">
//         <div className={styles.container}>
//           <div>
//             <img src="images/Post1.png" alt="add.png" className={styles.img} />
//           </div>
//           <div className={styles.text}>
//             <h2>abc</h2>
//             <h3>dcdcd</h3>
//             <p>
//               Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
//               veniam consequuntur repudiandae facilis accusantium laborum odio
//               sequi expedita ipsa voluptate.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React from "react";
import styles from "./Gsap.module.css";

export default function Slider() {
  return (
    <div className="cards">
      <div className="outer">
        <div className="card" style={{ delay: "-1" }}>
          <div className="header">
            <div className="profile">
              <div className="img">
                <img
                  src="images/Post1.png"
                  alt="add.png"
                  className={styles.img}
                />
              </div>
              <div className="details">
                <h4>dfsdf</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="card" style={{ delay: "0" }}>
          <div className="header">
            <div className="profile">
              <div className="img">
                <img
                  src="images/Post1.png"
                  alt="add.png"
                  className={styles.img}
                />
              </div>
              <div className="details">
                <h4>dfsdf</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="card" style={{ delay: "1" }}>
          <div className="header">
            <div className="profile">
              <div className="img">
                <img
                  src="images/Post1.png"
                  alt="add.png"
                  className={styles.img}
                />
              </div>
              <div className="details">
                <h4>dfsdf</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="card" style={{ delay: "2" }}>
          <div className="header">
            <div className="profile">
              <div className="img">
                <img
                  src="images/Post1.png"
                  alt="add.png"
                  className={styles.img}
                />
              </div>
              <div className="details">
                <h4>dfsdf</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
