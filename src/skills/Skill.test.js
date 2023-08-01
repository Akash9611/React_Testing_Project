import { render, screen } from "@testing-library/react"
import Skill  from "./Skill"

describe("Skill Component", () => {
    const skills = ["Html", "Css", "Express", "NodeJs"];

    test("testing with getBy...()", () => {
        render(<Skill skills={skills} />)
        const listElement = screen.getByRole("list");
        expect(listElement).toBeInTheDocument();
    })

    //!##### GetByAll() ####
    test("testing with getByAll...()", () => {
        render(<Skill skills={skills} />)
        const listItemElements = screen.getAllByRole("listitem");
        expect(listItemElements).toHaveLength(skills.length);
    })
    })