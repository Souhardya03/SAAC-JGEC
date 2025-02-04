import React, { useEffect } from "react";
import {
	IoRocketOutline,
	// IoEye, IoClose
} from "react-icons/io5";
import SingleMember from "./SingleMember";
import { styled } from "styled-components";
function TeamLayout(props) {
	return (
		<>
			<div className="event_header">
				<Head>Team Members</Head>
				<span className="content_divider">
					<hr />
					<IoRocketOutline />
					<hr />
				</span>
			</div>

			<div
				style={{
					display: "flex",
					flexWrap: "wrap",
					justifyContent: "center",
					alignItems: "center",
				}}>
				{props.data.map((team, index) => {
					return (
						<>
							<SingleMember
								designation={team.designation}
								name={team.name}
								department={team.department}
								image={team.image}
								index={index}
							/>
						</>
					);
				})}
			</div>
		</>
	);
}

export default TeamLayout;

const Head = styled.h2`
	margin: 1rem auto;
	font-size: 3.5rem;
	font-weight: 700;
	font-family: "Aquire", "Poppins", sans-serif;
	color: var(--darkblack);
	text-align: center;
	letter-spacing: 1px;
`;
