import { render, screen } from "@testing-library/react"
import { rest } from "msw";
import { server } from "../../mocks/sever";
import Users from "./Users"

describe('Users Component', () => {
    test('rendering users heading', () => {
        render(<Users />);
        const textElement = screen.getByText('Users');
        expect(textElement).toBeInTheDocument()
    })

    test('render a list of users', async () => {
        render(<Users />);
        const user = await screen.findAllByRole('listitem');
        expect(user).toHaveLength(3)
    })

    test('render Error msg', async () => {
        server.use(
            rest.get("https://jsonplaceholder.typicode.com/users", (req, res, ctx) => {
                return res(ctx.status(500))
            })
        );

        render(<Users />);
        const error = await screen.findByText("Error fetching users");
        expect(error).toBeInTheDocument();

    })
})