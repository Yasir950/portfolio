import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import Card from "../common/card";
import "./styles/works.css";
import Logo1 from "../../assets/work.png";
import Logo2 from "../../assets/logo.svg";
const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src={Logo2}
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">Infini8ai</div>
							<div className="work-subtitle">
								Software Engineer
							</div>
							<div className="work-duration">2022 - Present</div>
						</div>

						<div className="work">
							<img
								src={Logo1}
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">W4work</div>
							<div className="work-subtitle">
								Software Engineer
							</div>
							<div className="work-duration">2021 - 2022</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
