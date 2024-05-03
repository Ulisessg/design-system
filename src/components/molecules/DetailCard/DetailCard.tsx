import React, { FC } from "react";
import styled, { keyframes } from "styled-components";
import theme from "../../theme";
import Link from "../../atoms/Link/Link";

const DetailCard: FC<DetailCardProps> = ({ title, description }) => {
	return (
		<Container>
			<Title>{title}</Title>
			{description && <Description>{description}</Description>}
			<LinkStyles href={"#"} text="Detalles →" />
		</Container>
	);
};

const Container = styled.div`
	display: grid;
	width: ${theme.spacing * 30}px;
	height: ${theme.spacing * 50}px;
	border-radius: ${theme.spacing * 3}px;
	justify-content: stretch;
	background: linear-gradient(${theme.colors.dark1}, ${theme.colors.dark4});
	padding: ${theme.spacing * 5}px;
	box-shadow: 8px 8px 16px 5px rgba(0, 0, 0, 0.2);
`;

const Title = styled.p`
	font-size: ${theme.spacing * 4}px;
	height: fit-content;
	padding-bottom: ${theme.spacing * 3}px;
	width: 100%;
	text-align: center;
	color: white;
`;

const Description = styled.p`
	text-align: left;
	color: ${theme.colors.light1};
	font-size: ${theme.spacing * 2.5}px;
	overflow: scroll;
	margin-bottom: ${theme.spacing}px;
`;

const animateText = keyframes`
  0% {
    color: ${theme.colors.light1};
  }
  100% {
    color: ${theme.colors.light3};
  }
`;

const LinkStyles = styled(Link)`
	align-self: end;
	justify-self: right;
	color: ${theme.colors.light1};
	&:hover,
	&:focus {
		animation: ${animateText} 0.4s linear;
		animation-fill-mode: forwards;
	}
`;

export interface DetailCardProps {
	title: string;
	description?: string;
}

export default DetailCard;
