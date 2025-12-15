// Lecture 35 Style with CSS Modules
// making UserProfile  and styling it wiht css module
import styles from './Lec35.module.css';  // import css module
function Lec35() {

    return (

        <div>
            <div >
                <h1 className={styles.heading}>User Profile</h1>
                <div>
                    <img
                    className={styles.imgStyle}
                        src={`https://picsum.photos/seed/${Math.floor(Math.random() * 10000)}/800/500`}
                        alt="Random"
                    />

                    <div>
                        <h4>ABy</h4>
                        <p>Software developer</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

            export default Lec35;