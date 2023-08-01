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
    test("start learning button [not present DOM element]", () => {
        render(<Skill skills={skills} />)
        const learningButton = screen.queryByRole('button', { name: 'start learning' });
        expect(learningButton).not.toBeInTheDocument(); // need to use 'not' also
    })


    //!###### findBy() and findByAll() ####
    //! use when the element is appear or disappear after some time; this method is asynchronous method so need to use async and await;
    //?findBy() & findByAll() have default timeout as 1000 milliseconds 
    //Example- data that is fetched from a server will be rendered only after a few milliseconds
    test("start learning button [get present DOM element after some time]", async () => {
        render(<Skill skills={skills} />)
        const learningButton = await screen.findByRole('button', { name: 'start learning' }, { timeout: 2000 }); // if the element get present after 1000 milliseconds then add the timeout and increase the timeStamp
        expect(learningButton).toBeInTheDocument(); // need to use 'not' also
    })
})