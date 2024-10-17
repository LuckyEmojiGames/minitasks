import styles from './StubScreenUI/StubScreenUI.module.scss'

export const Box = (): JSX.Element => {
    return (
        <div className="box">
            <img className={styles.rectangle} alt="Rectangle" src="rectangle-6.png"/>
        </div>
    );
};