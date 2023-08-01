import { render, screen } from "@testing-library/react"
import Skill from "./Skill"

describe("Skill Component", () => {
    const skills = ["Html", "Css", "Express", "NodeJs"];

    test("testing with getBy...() to render and test only single l ist element", () => {
        render(<Skill skills={skills} />)
        const listElement = screen.getByRole("list");
        expect(listElement).toBeInTheDocument();
    })

    //!##### GetByAll() ####
    test("testing with getByAll...() to render and test all the list element", () => {
        render(<Skill skills={skills} />)
        const listItemElements = screen.getAllByRole("listitem");
        expect(listItemElements).toHaveLength(skills.length);
    })

    //##### Testing not present dom element with //!### queryBy() & queryByAll() #### 
    test("login button [present in DOM]", () => {
        render(<Skill skills={skills} />)
        const loginButton = screen.getByRole('button', { name: 'Login' });
        expect(loginButton).toBeInTheDocument();
    })
    //!### queryBy()
    test("start learning button [not present DOM element]",()=>{
        render(<Skill skills={skills} />)
        const learningButton = screen.queryByRole('button', { name: 'start learning' });
        expect(learningButton).not.toBeInTheDocument();
    })

})