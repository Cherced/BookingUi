import React from "react";
import { TimeLines } from "../atoms/TimeLines";




export const ContentDash = () => {
  return (
    <main className="contentcontainer">
			<div className="contentwrapper">
				<div className="tabs">
					<div className="categories">
						<h2>Users</h2>
					</div>
				</div>
				<div className="tabs">
					<div className="categories">
						<h2>Bookings</h2>
					</div>
				</div>
				<div className="tabs">
					<div className="categories">
						<h2>Earnings</h2>
					</div>
				</div>
				<div className="tabs">
					<div className="categories">
						<h2>Projects</h2>
					</div>
				</div>
			</div>
			
			<div className="charts">
				<div className="bar">
					<h2>Users</h2>
					<TimeLines />
				</div>
				
			</div>
		</main>
  );
};
