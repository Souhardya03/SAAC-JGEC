import React from "react";
import { styled } from "styled-components";
import {
	// IoRocketOutline,
	IoLogoLinkedin,
	IoLogoFacebook,
	IoLogoInstagram,
} from "react-icons/io5";
export default function SingleMember(props) {
	return (
		<Member
			data-aos="fade-in"
			data-aos-delay={200 + props.index * 100}>
			<Card>
				<HeroImage className=" ">
					<Image
						src={props.image}
						alt=""
					/>
				</HeroImage>
				<div className="">
					<H>{props.name}</H>
					<D>{props.department}</D>
				</div>

				<BT
					type="button"
					class="btn btn-primary"
					data-toggle="modal"
					data-target="#teamModal"
					onClick={props.setTeamViewer}>
					{props.designation}
				</BT>
			</Card>
			<Social>
				
				<IoLogoLinkedin />
				
			</Social>
		</Member>
	);
}

const Social = styled.div`
	width: 0;
	transition: 0.5s;
	border-radius: 0px 10px 10px 0px;
	background-color: #123456;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-evenly;
	svg {
		color: #fdfdfd;
		height: 25px;
		width: 25px;
	}
`;
const Card = styled.div`
	width: 220px;
	height: 250px;
	position: relative;
	padding: 16px;
	border-radius: 10px 0px 0px 10px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: between;
`;
const Member = styled.div`
	height: 250px;
	width: 220px;
	margin: 20px;
	display: flex;
	overflow: hidden;
	box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
	border-radius: 10px;
	&:hover {
		${Card} {
			width: 170px;
			transition: 0.5s;
		}
		${Social} {
			width: 50px;
			height: 100%;
			background-color: #123456;
			svg {
				color: #fdfdfd;
			}
		}
	}
`;
const HeroImage = styled.div`
	width: 105px;
	height: 105px;
	background-color: #123456;
	border-radius: 50%;
	background-size: cover;
`;
const H = styled.h1`
	font-size: 1.5rem;
	font-weight: 600;
	text-align: center;
	margin-top: 24px;
	color: #123456;
`;
const D = styled.p`
	font-size: 1.2rem;
	font-weight: 300;
	margin-top: 1px;
	color: #456789;
	text-align: center;
`;
const Image = styled.img`
	width: 100%;
	height: 100%;

	border-radius: 50%;
	object-fit: cover;
	overflow: hidden;
`;
const BT = styled.button`
	width: 115px;
	height: 32px;
	position: absolute;
	bottom: 15px;
	border-radius: 5px;
	border: none;
	background-color: #123456;
	color: #fdfdfd;
	font-size: 1.2rem;
	font-weight: 500;
	margin-top: 10px;
	cursor: pointer;

	transition: all 0.3s ease-in-out;
	&:hover {
		background-color: #123456;
		color: #fdfdfd;
		transform: scale(1.1);
	}
`;
