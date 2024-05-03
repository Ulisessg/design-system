import GlobalStyles from "../../pages/GlobalStyles";
import DetailCard from "./DetailCard";

describe("Detail Card - Atoms", () => {
	it("Should render properly", () => {
		const description =
			"A very important description, its so important than i dedicated time in thinking what to write in this important description. Wow is so important.";
		cy.viewport("samsung-s10");
		cy.mount(
			<GlobalStyles footer={false}>
				<DetailCard title="Project: Test" description={description} />
			</GlobalStyles>
		);
		cy.get("p").contains("Project: Test");
		cy.get("p").contains(description);
	});
});
