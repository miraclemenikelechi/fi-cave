import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./files.module.scss";
import files from "../../assets/data/files";
import File from "./component/File";

const Files = () => {
    return (
        <section className={style.files}>
            <div className={style.nav}>
                <h4>all records</h4>
                <button>
                    <FontAwesomeIcon icon={faAdd} />
                    add new
                </button>
            </div>
            <div className={style.filesContainer}>
                <File files={files} />
            </div>
        </section>
    );
};

export default Files;