import React from "react";
import styles from "./about.module.scss";
import PathTrace from "../../SharedComponents/PathTrace/PathTrace";
import abotimg from "../../assets/About/Image.png";
import { count } from "../../Services/Date/About/counter";
import { text } from "../../Services/Date/About/text";
import iconimg from "../../assets/About/Container.png";
import firsimg from "../../assets/About/Tooltip.png";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { choose } from "../../Services/Date/About/choose";
import nextimg from '../../assets/About/Switch.png'

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const getCountUpProps = (numStr) => {
    if (numStr.includes("%")) {
      return {
        end: parseFloat(numStr),
        suffix: "%",
        decimals: numStr.includes(".") ? 1 : 0,
      };
    }
    if (numStr.includes("M")) {
      return {
        end: parseFloat(numStr),
        suffix: " M",
        decimals: numStr.includes(".") ? 1 : 0,
      };
    }
    if (numStr.includes("+")) {
      return {
        end: parseFloat(numStr),
        suffix: "+",
        decimals: 0,
      };
    }
    return {
      end: parseFloat(numStr),
      decimals: 0,
    };
  };

  return (
    <div className={styles.AboutComponent}>
      <PathTrace
        title={"About us"}
        nextitle={"AwesomeBeauty salon"}
        oldPage={"Home"}
        currentPage={"About"}
      />
      <div className={styles.aboutContent}>
        <div className={styles.aboutText}>
          <div>
            <h1>BEAUTY SALON ELUX OFFERS A RANGE OF SERVICES</h1>
            {text.map((elem) => (
              <div key={elem.id} className={styles.content}>
                <div className={styles.iconimg}>
                  <img src={iconimg} alt="icon" />
                </div>
                <div className={styles.textItem}>
                  <h2>{elem.title}</h2>
                  <p>{elem.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.imgConteiner}>
            <img src={firsimg} alt="Beauty salon" />
          </div>
        </div>
        <div className={styles.aboutWrapper}>
          <div className={styles.img}>
            <img src={abotimg} alt="About ELUX" />
          </div>
          <div className={styles.text}>
            <h1>FULL RANGE OF SERVICES FROM ELUX</h1>
            <p>
              EluX Beauty Salon is a premier beauty destination founded on the
              principles of luxury, innovation, and personalized care. Our team
              of experienced professionals is passionate about helping you look
              and feel your best.
            </p>
            <p>
              At EluX Beauty Salon, our mission is to deliver a premium beauty
              experience that combines high-quality products, exceptional
              service, and a serene atmosphere. We are committed to creating a
              space where you can relax, rejuvenate, and transform your look.
            </p>
            <p>
              EluX Beauty Salon is a premier beauty destination founded on the
              principles of luxury, innovation, and personalized care. Our team
              of experienced professionals is passionate about helping you look
              and feel your best.
            </p>
          </div>
        </div>
        <div ref={ref} className={styles.counterWrapper}>
          {count.map((item) => {
            const countUpProps = getCountUpProps(item.number);
            return (
              <div key={item.id} className={styles.counter}>
                <h1>{item.title}</h1>
                <div className={styles.counterText}>
                  <h2>
                    {inView ? (
                      <CountUp
                        end={countUpProps.end}
                        suffix={countUpProps.suffix || ""}
                        duration={2}
                        decimals={countUpProps.decimals}
                      />
                    ) : (
                      `0${countUpProps.suffix || ""}`
                    )}
                  </h2>
                  <p>{item.text}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className={styles.Choose}>
          <div className={styles.Choosewrapper}>
           
            <div className={styles.title}>
              <h1>Why Choose EluX Beauty Salon?</h1>
              <h1> Beauty</h1>
            </div>
             {choose.map((elem) => (
              <div key={elem.id} className={styles.contentconteiner}>
                <div className={styles.iconimges}>
                  <img src={iconimg} alt="icon" />
                </div>
                <div className={styles.Choosetext}>
                  <h2>{elem.title}</h2>
                  <p>{elem.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.img}>
            <img src={nextimg}/>
</div>
        </div>
      </div>
    </div>
  );
}
