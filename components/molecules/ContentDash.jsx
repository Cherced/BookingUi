import React from "react";
import { TimeLines } from "../atoms/TimeLines";

export const ContentDash = () => {
	const [toggleClass, setToggleClass] = React.useState(false);

  return (
    <main className="contentcontainer">
			<div className="contentwrapper">
				<button onClick={() => setToggleClass(!toggleClass)} className="tabs">
					<div className="categories">
						<h2>Users</h2>
					</div>
				</button>
				<button className={toggleClass ? ("tabs") : ("tabs opaccity")}>
					<div className="categories">
						<h2>Bookings</h2>
					</div>
				</button>
				<button className={toggleClass ? ("tabs") : ("tabs opaccity")}>
					<div className="categories">
						<h2>Earnings</h2>
					</div>
				</button>
			</div>
			<div className={ toggleClass ? ("charts") : ("charts show")}>
				<div className="bar">
					<h2>Users</h2>
					<TimeLines />
				</div>
				
			</div>
		</main>
  );
};
