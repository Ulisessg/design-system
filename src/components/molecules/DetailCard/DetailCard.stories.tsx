import { Meta, StoryObj } from "@storybook/react";
import DetailCard from "./DetailCard";

const meta: Meta<typeof DetailCard> = {
	component: DetailCard,

	argTypes: {
		title: {
			type: "string",
		},
		description: {
			type: "string",
		},
		link: {
			type: "string",
		},
	},
};

export default meta;

export const Primary: StoryObj = {
	args: {
		/**
		 * Fuck generative IAs stealing people work without permission or giving credit, but thank you for give me dummy examples for testing or show cases. Damn contradictions.
		 */
		title: "Investigating the Effects of Different Soil Types on Plant Growth",
		description:
			"Explore how varying soil types influence the growth and development of plants. Understanding how different soils affect plant growth can provide valuable insights for agricultural practices and ecosystem management.",
		link: "#",
	},
};
