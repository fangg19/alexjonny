import { cls } from "../utils/utils";
import classes from "./styles/Blobs.module.scss";

const Blobs = () => {
  return (
    <div className={classes.bm_pl}>
      <div className={cls(classes.bm_pl__blob, classes.bm_pl__blob_r)}></div>
      <div className={cls(classes.bm_pl__blob, classes.bm_pl__blob_g)}></div>
      <div className={cls(classes.bm_pl__blob, classes.bm_pl__blob_b)}></div>
    </div>
  );
};

export default Blobs;
