import {
	IoPeople,
	IoLayers,
	IoTelescope,
	IoSpeedometer,
} from "react-icons/io5";

const AboutData = [
	{
		id: 1,
		head: "About Us",
		para_1: (
			<>
				<span>Space and Aeronautics Activity Center (SAAC)</span>  is a
				pioneering initiative of some enthusiastic students from Jalpaiguri
				Government Engineering College who dream of reaching space someday!
				We're an active community of students associated with exploring,
				learning and executing the fundamentals of space science and aerospace
				technology. Here we are providing a open platform for space pioneers to
				explore beyond the sky as well as providing opportunity to young
				innovators for implementing aerospace technology. On the other hand, we
				are successfully raising public awareness about Space science and it’s
				applications.
			</>
		),
		para_2: (
			<>
				We idealise the great personalities like{" "}
				<span>
					APJ Abdul Kalam, Nambi Narayanan, Vikram Sarabhai, Wernher Von Braun,
					Elon Musk
				</span>{" "}
				and others. We always welcome collaborators, mentors, and students from
				across the nation to join us in turning innovative ideas into impactful
				realities. Our community grows through a variety of activities,
				including project collaborations, seminars, workshops, and both online
				and in-person learning opportunities. This efforts drive us to push the
				boundaries of aerospace exploration and innovation.
			</>
		),
		imgsrc: "./img/about/about.png",
		imgalt: "About Us",
		classes: "about container row flex-row",
	},
	{
		id: 2,
		head: "Our Vision",
		para_1: (
			<>
				<span>
					To become the largest space community in the nation, driving
					innovation and advancement in space technology.
				</span>
			</>
		),
		para_2: (
			<>
				We dream about growing to a team as strong as 
				<span>NASA, ISRO or Space-X</span> in future and bring significant help
				to the challenges of space. Also we want to make it as the first stop
				for beginners of space science and technology exploration.{" "}
				<span>
					Our pathway is based on 3E concept: Explore, Engage and Execute.
				</span>{" "}
				We are dedicated to empower community members with a strong foundation
				in both the theory and and hands-on experience in space science and
				aerospace technology. Stay with us—together, we’ll reach new frontiers!
			</>
		),
		imgsrc: "./img/about/vision.png",
		imgalt: "Our Vision",
		classes: "about container row flex-row-reverse",
	},
	{
		id: 3,
		head: "History of S.A.A.C.",
		para_1: (
			<>
				The journey to success is not a path laid down with silk and roses, but
				one full of hurdles and unexpected setbacks. Every failure is a stepping
				stone towards success and the story of SAAC itself is a tale best
				fitting for a retelling.
			</>
		),
		para_2: (
			<div className="flex flex-col">
				<div>
					<span>Foundation Day :</span> : 27th February, 2020.
				</div>
				<div className="mt-4">
					<span>Founder :</span> Dipanjan Roy ( JGEC, Mechanical Engineering
					2016-2020 Batch ) Co-founder: Satyam Kumar ( JGEC, Mechanical
					Engineering 2016-2020 Batch ) Other Founding Members: Akash Bala (ME
					2022), Rajdeep Nath (ME 2023), Pranit Bhujel (IT 2020), Nigam Sarkar
					(EE 2020), Ankita Das (CSE 2020), Arnab Barman (ECE 2020)
				</div>
                <div className="mt-4">
					<span>The Journey of Foundation :</span>The idea of establishing a Student Space Club at JGEC was first proposed in 2017, in collaboration with Team Indus. Unfortunately, our proposal was not accepted. However, undeterred by this early setback, we remained resolute in our mission. In 2018, a request to <span>the Centre for Innovation (CFI)</span> helped in forming a section dedicated to Space technology, this was our first successful step towards our main goal. 
                    From 2019 onwards, our plans of forming an independent Space Activity Centre began taking momentum and we started making a dedicated team of students having an unified vision. Our earnest efforts of 3 years was ultimately acknowledged in 2020, when we officially established <span>the Space and Aeronautics Activity Centre (SAAC)</span>, the first-of-its-kind in entire North Bengal. Adding Aeronautics to the domain of Space helped us in broadening our areas of work, thus acquiring necessary support from major organisations of the same kind.
				</div>
			</div>
		),
		imgsrc: "./img/about/collaboration.png",
		imgalt: "Collaboration",
		classes: "about container row flex-row",
	},
];

const DivisionData = [
	{
		id: 1,
		icon: <IoPeople />,
		head: "Administrative Team",
		para: (
			<>
				The <span>Administrative Team</span> takes all the important decisions
				for the
				<span>welfare of SAAC</span>. The team comprises of very sharp and
				creative minds, who are ready to propel SAAC to any level possible.
			</>
		),
	},
	{
		id: 2,
		icon: <IoLayers />,
		head: "Technical Team",
		para: (
			<>
				The <span>Technical Team</span> is at the core of the SAAC, turining the
				ideas into reality. The team is also active in solving problems from{" "}
				<span>Automated Flight System</span> to <span>Remote Guidance</span> and{" "}
				<span>Flight Monitoring</span>.
			</>
		),
	},
	{
		id: 3,
		icon: <IoTelescope />,
		head: "Research Team",
		para: (
			<>
				The <span>Research Team</span> is where new ideas are generated, some
				old ideas are refined and <span>innovations are born</span>. The team
				comprises of folks who can devote their part of everyday for the greater
				benefit.
			</>
		),
	},
	{
		id: 4,
		icon: <IoSpeedometer />,
		head: "Marketing Team",
		para: (
			<>
				The <span>Marketing Team</span> is responsible for the far reach of
				SAAC. The team creates some of the awesome content which our audience
				cannot resist viewing. The team makes the SAAC feel alive and forever
				fresh.
			</>
		),
	},
];

export { AboutData, DivisionData };
