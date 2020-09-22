import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";

const Thanks = () => {
	const history = useHistory();
	const { name } = useParams();

	console.log(history);

	return (
		<React.Fragment>
			<div className="thanks">
				<p>
					Thanks <strong>{name}!</strong>
				</p>
				<p>
					You joined <strong>{history.location.state}</strong>
				</p>

				<hr />
				<p>
					<strong>Disclaimer : </strong>Lorem ipsum dolor sit amet, consectetur
					adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
					magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
					ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
					irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
					fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
					sunt in culpa qui officia deserunt mollit anim id est laborum.
				</p>
			</div>
		</React.Fragment>
	);
};

export default Thanks;
