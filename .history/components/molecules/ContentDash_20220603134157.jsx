import React from "react";
import { TimeLines } from "../atoms/TimeLines";




export const ContentDash = () => {
  return (
    <div className={styles.contentcontainer}>
			<div className={styles.contentwrapper}>
				<div className={styles.tabs}>
					<div className={styles.categories}>
						<h2>Companies</h2>
					</div>
				</div>
				<div className={styles.tabs}>
					<div className={styles.categories}>
						<h2>Customers</h2>
					</div>
				</div>
				<div className={styles.tabs}>
					<div className={styles.categories}>
						<h2>Users</h2>
					</div>
				</div>
				<div className={styles.tabs}>
					<div className={styles.categories}>
						<h2>Projects</h2>
					</div>
				</div>
			</div>
			{/* chart started  */}
			<div className={styles.charts}>
				<div className={styles.bar}>
					<h2>Users</h2>
					<Line data={data} width={400} height={400} />
				</div>
				
			</div>
		</div>
  );
};
